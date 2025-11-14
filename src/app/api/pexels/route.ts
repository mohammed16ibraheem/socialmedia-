import { NextResponse } from "next/server";

type PexelsPhoto = {
  id: number;
  alt?: string;
  photographer: string;
  photographer_url: string;
  width?: number;
  height?: number;
  src: {
    original: string;
    large2x?: string;
    large?: string;
    medium?: string;
    small?: string;
    portrait?: string;
    landscape?: string;
    tiny?: string;
  };
  url: string;
};

type PexelsVideo = {
  id: number;
  image: string;
  url: string;
  width?: number;
  height?: number;
  user?: {
    name?: string;
  };
  video_files?: Array<{
    id: number;
    quality: string;
    link: string;
    width: number;
    height: number;
  }>;
  video_pictures?: Array<{
    id: number;
    picture: string;
  }>;
};

const SEARCH_TOPICS = [
  "nature",
  "city",
  "portrait",
  "technology",
  "travel",
  "abstract",
  "wildlife",
  "sports",
  "fashion",
  "food",
];

export async function GET(request: Request) {
  const apiKey = process.env.PEXELS_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      {
        error:
          "PEXELS_API_KEY is not configured. Add it to your environment variables to enable the explore feed.",
      },
      { status: 500 }
    );
  }

  const { searchParams } = new URL(request.url);
  const page = Number.parseInt(searchParams.get("page") ?? "1", 10);
  const photosPerPage = Number.parseInt(
    searchParams.get("photos") ?? "12",
    10
  );
  const videosPerPage = Number.parseInt(
    searchParams.get("videos") ?? "6",
    10
  );
  
  // Get the search query from params, or use a random topic if no query provided
  const userQuery = searchParams.get("query")?.trim();
  const searchQuery = userQuery || (() => {
    const topicIndex = Math.floor(Math.random() * SEARCH_TOPICS.length);
    return SEARCH_TOPICS[topicIndex];
  })();

  try {
    // Use search endpoint when query is provided, otherwise use curated/popular
    const photoUrl = new URL(
      userQuery 
        ? "https://api.pexels.com/v1/search" 
        : "https://api.pexels.com/v1/curated"
    );
    photoUrl.searchParams.set("per_page", photosPerPage.toString());
    photoUrl.searchParams.set("page", page.toString());
    if (userQuery) {
      photoUrl.searchParams.set("query", searchQuery);
    }

    const videoUrl = new URL(
      userQuery
        ? "https://api.pexels.com/videos/search"
        : "https://api.pexels.com/videos/popular"
    );
    videoUrl.searchParams.set("per_page", videosPerPage.toString());
    videoUrl.searchParams.set("page", page.toString());
    if (userQuery) {
      videoUrl.searchParams.set("query", searchQuery);
    }

    const headers = {
      Authorization: apiKey,
    };

    const [photoResponse, videoResponse] = await Promise.all([
      fetch(photoUrl, { headers, next: { revalidate: 0 } }),
      fetch(videoUrl, { headers, next: { revalidate: 0 } }),
    ]);

    if (!photoResponse.ok || !videoResponse.ok) {
      const message = `Pexels API returned ${photoResponse.status}/${videoResponse.status}.`;
      return NextResponse.json({ error: message }, { status: 502 });
    }

    const photoData = (await photoResponse.json()) as {
      photos?: PexelsPhoto[];
    };
    const videoData = (await videoResponse.json()) as {
      videos?: PexelsVideo[];
    };

    const photosRaw = photoData.photos ?? [];
    const videosRaw = videoData.videos ?? [];

    const combined: Array<
      ReturnType<typeof mapPhoto> | ReturnType<typeof mapVideo>
    > = [];

    const buildAspectRatio = (width?: number, height?: number) => {
      if (!width || !height) {
        return undefined;
      }
      return `${width}/${height}`;
    };

    function mapPhoto(photo: PexelsPhoto) {
      const source =
        photo.src.large2x ??
        photo.src.large ??
        photo.src.medium ??
        photo.src.original;

      return {
        id: `photo-${photo.id}`,
        type: "photo" as const,
        src: source,
        alt: photo.alt || `Photo by ${photo.photographer}`,
        creator: photo.photographer,
        link: photo.url || photo.photographer_url,
        videoUrl: undefined,
        aspectRatio: buildAspectRatio(photo.width, photo.height),
      };
    }

    function mapVideo(video: PexelsVideo) {
      const preview =
        video.video_pictures?.[0]?.picture ??
        video.image ??
        "";

      const preferredFile =
        video.video_files?.find((file) => file.quality === "hd") ??
        video.video_files?.find((file) => file.quality === "sd") ??
        video.video_files?.[0];

      return {
        id: `video-${video.id}`,
        type: "video" as const,
        src: preview,
        videoUrl: preferredFile?.link ?? video.url,
        alt: `Video by ${video.user?.name ?? "creator"}`,
        creator: video.user?.name ?? "Creator",
        link: video.url,
        aspectRatio: buildAspectRatio(video.width, video.height),
      };
    }

    const maxLength = Math.max(photosRaw.length, videosRaw.length);
    for (let index = 0; index < maxLength; index += 1) {
      if (photosRaw[index]) {
        combined.push(mapPhoto(photosRaw[index] as PexelsPhoto));
      }
      if (videosRaw[index]) {
        combined.push(mapVideo(videosRaw[index] as PexelsVideo));
      }
    }

    const items = combined
      .filter((item) =>
        item.type === "photo"
          ? Boolean(item.src)
          : Boolean(item.src && item.videoUrl)
      )
      .sort(() => Math.random() - 0.5);

    return NextResponse.json({
      items,
      hasMore: items.length > 0,
    });
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Unexpected error contacting the Pexels API.",
      },
      { status: 500 }
    );
  }
}

