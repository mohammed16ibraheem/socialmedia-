# Attach Social – Complete Project Documentation

Attach Social is a modern, Instagram-inspired social media platform built with Next.js 16, featuring a glassmorphism design system, dynamic content from Pexels API, and a fully responsive UI optimized for web, iPhone, and Android viewports.

---

## 📱 Pages Overview

### 1. **Login/Authentication Page** (`src/app/page.tsx`)

**UI Elements:**
- Animated hero card carousel with 3 interactive cards (Story, Live Video, Create)
- Authentication panel with toggle between Login and Sign-up modes
- Social login buttons: Gmail, Web3 Wallet, Facebook
- App Store and Play Store download buttons
- Footer with navigation links

**Design Features:**
- **Background**: Radial gradient `bg-[radial-gradient(circle_at_top,#f6f8ff,60%,#eef0ff)]`
- **Card Style**: Frosted glass effect with `bg-white/90`, `backdrop-blur`, and shadow `shadow-[0_25px_60px_rgba(102,91,255,0.12)]`
- **Primary Colors**: 
  - Purple gradient: `#6f5cff` to `#8d77ff`
  - Text: `#20115b` (dark purple), `#5f648c` (medium gray)
- **Animations**: Framer Motion for card scaling, opacity transitions, and interactive states
- **Icons**: React Icons (FcGoogle, FaApple, SiGoogleplay, RiWallet3Line, FaFacebook)

**Components Used:**
- `Card`, `CardHeader`, `CardContent`, `CardFooter` from shadcn/ui
- `Button` with custom variants
- `Input` and `Label` for form fields
- Password visibility toggle with eye icons

---

### 2. **Home Feed Page** (`src/app/home/page.tsx`)

**UI Elements:**
- Stories section with circular avatars (horizontal scroll)
- Feed posts with user avatars, media, captions, and engagement metrics
- Action buttons: Like, Dislike, Comment, Share
- "View all comments" button

**Design Features:**
- **Background**: Radial gradient `bg-[radial-gradient(circle_at_top,#f6f7ff,60%,#ecefff)]`
- **Post Cards**: White cards with `bg-white/90`, rounded corners `rounded-[28px]`, shadow effects
- **Story Avatars**: 
  - Size: `size-20` (80px)
  - Border: `border-2` with gradient on hover
  - Live indicator: Red border `border-[#f55989]` with shadow
- **Action Pills**: 
  - Background: `bg-[#eef0ff]`
  - Text: `text-[#443b7e]`
  - Icons: `text-[#6756ff]`
  - Hover: `hover:bg-[#e0e4ff]`
- **Colors**:
  - Primary text: `#20115b`
  - Secondary text: `#5f648c`, `#7d82a8`
  - Like icon: `#f55989` (pink)
  - Action icons: `#6756ff` (purple)

**Icons Used:**
- `FiHeart` (likes), `FiThumbsDown` (dislikes), `FiMessageCircle` (comments), `FiShare2` (shares)
- `FiMoreHorizontal` (post options)

**Components:**
- `Card`, `CardContent` from shadcn/ui
- `Image` from Next.js with lazy loading
- Custom action pill buttons

---

### 3. **Profile Page** (`src/app/profile/page.tsx`)

**UI Elements:**
- Glassmorphism header card (no banner image)
- Floating profile picture with glow effects
- Stats display: Followers, Following, Posts
- Bio section with name and description
- Action buttons: Follow, Message
- Filter tabs: All, Photos, Videos
- Masonry gallery with Pinterest-style layout
- Social interaction pills on each gallery item
- Comment sections with user avatars

**Design Features:**
- **Glassmorphism Design**:
  - Header card: `bg-white/40`, `backdrop-blur-2xl`, `border-white/30`
  - Gradient overlay: `bg-gradient-to-br from-white/60 via-white/40 to-transparent`
  - Shadow: `shadow-[0_8px_32px_0_rgba(102,91,255,0.15)]`
- **Profile Picture**:
  - Size: `h-32 w-32` (mobile), `h-40 w-40` (tablet), `h-44 w-44` (desktop)
  - Border: `border-4 border-white/80`
  - Glow effect: `bg-gradient-to-br from-[#6756ff]/30 to-[#8c76ff]/20 blur-2xl`
  - Shadow: `shadow-[0_20px_60px_-15px_rgba(102,91,255,0.3)]`
- **Background**: 
  - Gradient: `bg-gradient-to-br from-[#f6f7ff] via-[#ecefff] to-[#e8ebff]`
  - Animated gradient orbs with blur effects
- **Gallery Cards**:
  - Background: `bg-white/50`, `backdrop-blur-xl`
  - Border: `border-white/30`
  - Hover: Scale `hover:scale-[1.02]`, translate `hover:-translate-y-2`
- **Colors**:
  - Primary: `#20115b` (dark purple)
  - Secondary: `#5f648c`, `#6a6f97`, `#7d82a8`
  - Accent: `#6756ff`, `#8c76ff` (purple gradients)
  - Background tints: `#eef0ff`, `#f1f3ff`, `#e0e4ff`

**Layout:**
- Asymmetric design: Profile picture on left, info on right (desktop)
- Centered layout on mobile
- Responsive breakpoints: `sm:`, `lg:`

**Animations:**
- Framer Motion for page entrance (`opacity`, `y`, `scale`)
- Staggered animations for stats
- Hover effects on buttons and cards

**Components:**
- `MasonryGallery` with 3-column layout (responsive)
- `ActionPill` for social interactions
- `TruncatedComment` with expand/collapse functionality

---

### 4. **Explore Page** (`src/app/explore/page.tsx`)

**UI Elements:**
- Search bar with rounded input field
- Infinite scroll masonry grid (2-4 columns responsive)
- Mix of photos and videos from Pexels API
- Loading skeletons
- Error states

**Design Features:**
- **Search Bar**:
  - Background: `bg-white/80`, `backdrop-blur`
  - Border: `border-[#dfe4ff]`
  - Shadow: `shadow-[0_15px_40px_rgba(116,107,255,0.15)]`
  - Height: `h-14`
- **Grid Layout**:
  - Columns: `columns-2` (mobile), `sm:columns-3`, `lg:columns-4`
  - Gap: `gap-4` to `gap-6`
- **Media Cards**:
  - Border: `border-[#e4e8ff]`
  - Background: `bg-white/80`
  - Shadow: `shadow-[0_12px_40px_rgba(104,94,255,0.12)]`
  - Hover: `hover:-translate-y-1`, enhanced shadow
  - Rounded: `rounded-[28px]`
- **Video Elements**:
  - Autoplay, loop, muted
  - Poster images for loading states
  - Play icon indicator on hover
- **Colors**:
  - Background: `bg-[radial-gradient(circle_at_top,#f6f7ff,60%,#ecefff)]`
  - Text: `#4b4f7a`, `#9aa0c6` (placeholder)
  - Accent: `#6756ff` (search icon)

**API Integration:**
- Pexels API for photos and videos
- Search functionality with query parameter
- Infinite scroll with Intersection Observer
- Request cancellation and deduplication
- Optimized image sizes (medium quality)
- SD video quality for faster loading

**Performance Optimizations:**
- Lazy loading images
- Reduced initial load (12 photos + 4 videos)
- Cache headers: `s-maxage=60, stale-while-revalidate=120`
- AbortController for request management

---

### 5. **Messages Page** (`src/app/messages/page.tsx`)

**UI Elements:**
- Placeholder page with icon and message
- "Messages coming soon" text

**Design Features:**
- Centered layout
- Icon: `FiMail` with `text-5xl text-[#6756ff]`
- Background: Same radial gradient as other pages
- Typography: `text-2xl font-semibold text-[#20115b]`

---

### 6. **Upload Page** (`src/app/upload/page.tsx`)

**UI Elements:**
- Placeholder page with upload icon
- "Creator uploads coming soon" text

**Design Features:**
- Centered layout
- Icon: `FiUpload` with `text-5xl text-[#6756ff]`
- Same design system as Messages page

---

### 7. **Notifications Page** (`src/app/notifications/page.tsx`)

**Status**: Disabled in navigation (coming soon)

---

## 🎨 Design System

### Color Palette

**Primary Colors:**
- `#20115b` - Dark purple (headings, primary text)
- `#6756ff` - Purple (accent, active states, icons)
- `#8c76ff` - Light purple (gradients, hover states)
- `#6f5cff` - Medium purple (buttons, gradients)

**Secondary Colors:**
- `#5f648c` - Medium gray (secondary text)
- `#6a6f97` - Light gray (tertiary text)
- `#7d82a8` - Muted gray (inactive states)
- `#9aa0c6` - Very light gray (placeholders)

**Background Colors:**
- `#f6f7ff` - Light purple tint (main background)
- `#ecefff` - Very light purple (gradient end)
- `#eef0ff` - Light purple tint (pills, cards)
- `#f1f3ff` - Very light purple (comment sections)
- `#e0e4ff` - Light purple (hover states)

**Accent Colors:**
- `#f55989` - Pink (like icon, live indicators)
- `#443b7e` - Dark purple-gray (button text)

**Glassmorphism:**
- `bg-white/40` - Semi-transparent white
- `bg-white/50` - Medium transparency
- `bg-white/60` - Higher opacity
- `bg-white/80` - High opacity
- `backdrop-blur-xl` / `backdrop-blur-2xl` - Blur effects

### Typography

**Font Sizes:**
- Headings: `text-2xl` to `text-4xl` (24px - 36px)
- Body: `text-base` to `text-lg` (16px - 18px)
- Small: `text-sm` (14px)
- Extra small: `text-xs` (12px)

**Font Weights:**
- Bold: `font-bold` (700)
- Semibold: `font-semibold` (600)
- Medium: `font-medium` (500)

**Font Families:**
- Geist Sans (primary)
- Geist Mono (code)

### Spacing & Layout

**Padding:**
- Cards: `p-6` to `p-10` (24px - 40px)
- Sections: `px-6`, `py-4` to `py-10`
- Buttons: `px-8`, `py-2` to `py-3`

**Gaps:**
- Between elements: `gap-4` to `gap-12`
- Grid gaps: `gap-4` to `gap-6`

**Border Radius:**
- Small: `rounded-full` (pills, buttons)
- Medium: `rounded-[24px]` to `rounded-[28px]` (cards)
- Large: `rounded-[32px]` to `rounded-[48px]` (containers)

**Shadows:**
- Light: `shadow-sm`
- Medium: `shadow-[0_8px_24px_rgba(...)]`
- Large: `shadow-[0_25px_70px_rgba(...)]`
- Colored: Purple-tinted shadows with opacity

### Components

**Buttons:**
- Primary: Gradient `from-[#6f5cff] to-[#8d77ff]`, white text
- Secondary: White/transparent with border
- Pills: `bg-[#eef0ff]` with rounded-full
- Hover effects: Scale, shadow enhancement

**Cards:**
- Glassmorphism: `bg-white/40` to `bg-white/90`
- Backdrop blur: `backdrop-blur-xl` to `backdrop-blur-2xl`
- Borders: `border-white/30` to `border-[#dfe4ff]`
- Shadows: Layered purple-tinted shadows

**Inputs:**
- Rounded: `rounded-full`
- Background: `bg-transparent` or `bg-white/80`
- Border: `border-[#dfe4ff]` or `border-[#e4e8ff]`
- Focus: Outline with purple accent

---

## 📦 Packages & Dependencies

### Core Framework
- **Next.js 16.0.1** - React framework with App Router
- **React 19.2.0** - UI library
- **TypeScript 5** - Type safety

### Styling
- **Tailwind CSS v4** - Utility-first CSS framework
- **@tailwindcss/postcss** - PostCSS integration
- **tailwind-merge** - Merge Tailwind classes
- **class-variance-authority** - Component variants

### UI Components
- **shadcn/ui** - Component library
  - `@radix-ui/react-label` - Label component
  - `@radix-ui/react-slot` - Slot component
- **lucide-react** - Icon library (alternative)

### Icons
- **react-icons** - Icon library
  - `react-icons/fi` - Feather icons (FiHeart, FiMessageCircle, FiShare2, etc.)
  - `react-icons/fc` - Google icon (FcGoogle)
  - `react-icons/fa` - Font Awesome (FaApple, FaFacebook)
  - `react-icons/si` - Simple Icons (SiGoogleplay)
  - `react-icons/ri` - Remix Icons (RiWallet3Line)
  - `react-icons/hi` - Heroicons (HiOutlineEye, HiOutlineEyeOff)

### Animations
- **framer-motion 12.23.24** - Animation library
  - Page transitions
  - Card animations
  - Icon rotations
  - Staggered animations

### Utilities
- **clsx** - Conditional class names
- **tw-animate-css** - Tailwind animations

### Development
- **ESLint** - Code linting
- **eslint-config-next** - Next.js ESLint config
- **babel-plugin-react-compiler** - React compiler

---

## 🏗️ Architecture & File Structure

```
src/
├── app/
│   ├── api/
│   │   └── pexels/
│   │       └── route.ts          # Pexels API proxy with caching
│   ├── explore/
│   │   └── page.tsx              # Explore page with search & infinite scroll
│   ├── home/
│   │   └── page.tsx              # Home feed with stories & posts
│   ├── messages/
│   │   └── page.tsx              # Messages placeholder
│   ├── profile/
│   │   └── page.tsx              # Profile page with glassmorphism design
│   ├── upload/
│   │   └── page.tsx              # Upload placeholder
│   ├── layout.tsx                # Root layout with fonts & metadata
│   ├── page.tsx                  # Login/authentication page
│   └── globals.css               # Global styles & Tailwind imports
├── components/
│   ├── navigation/
│   │   └── main-nav.tsx          # Bottom navigation bar
│   └── ui/                       # shadcn/ui components
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       └── label.tsx
└── lib/
    └── utils.ts                  # Utility functions (cn, etc.)

public/
├── images/
│   └── 3.png                     # Profile header image (optional)
└── ... (other assets)

android/                           # Future React Native project
```

---

## 🚀 Key Features

### 1. **Glassmorphism Design System**
- Semi-transparent backgrounds with backdrop blur
- Layered shadows with purple tints
- Floating card effects
- Gradient overlays

### 2. **Responsive Design**
- Mobile-first approach
- Breakpoints: `sm:` (640px), `lg:` (1024px)
- Adaptive layouts for iPhone, Android, and desktop
- Touch-friendly interactions

### 3. **Performance Optimizations**
- Image lazy loading
- Optimized image sizes (medium quality)
- SD video quality for faster loading
- API response caching (60s)
- Request deduplication
- AbortController for request cancellation

### 4. **Dynamic Content**
- Pexels API integration for photos and videos
- Search functionality
- Infinite scroll with Intersection Observer
- Random content shuffling

### 5. **Navigation**
- Fixed bottom navigation bar
- Active state indicators
- Animated globe icon (rotating)
- Profile avatar in nav

### 6. **Social Interactions**
- Like, Dislike, Comment, Share buttons
- Comment sections with avatars
- Truncated comments with expand/collapse
- Engagement metrics display

---

## 🔧 Development

### Setup
```bash
npm install
npm run dev
```

### Build
```bash
npm run build
npm start
```

### Environment Variables
Create `.env.local`:
```
PEXELS_API_KEY=your_pexels_api_key_here
```

### Vercel Deployment
1. Connect GitHub repository
2. Add `PEXELS_API_KEY` in Vercel environment variables
3. Deploy automatically on push

---

## 📱 Future: React Native (Android)

The `android/` folder is prepared for React Native development. The web UI design system documented here will be replicated in React Native with:

- Same color palette
- Similar component structure
- Equivalent animations (using React Native Reanimated)
- Consistent navigation patterns
- Matching glassmorphism effects (using blur views)

---

## 🎯 Design Principles

1. **Consistency**: Unified color palette and spacing across all pages
2. **Performance**: Optimized images, lazy loading, efficient API calls
3. **Accessibility**: Semantic HTML, proper ARIA labels, keyboard navigation
4. **Responsiveness**: Mobile-first, adaptive layouts
5. **Modern Aesthetics**: Glassmorphism, smooth animations, clean typography

---

## 📝 Notes

- All pages use the same background gradient for consistency
- Navigation bar is fixed at bottom with glassmorphism effect
- Profile page uses advanced glassmorphism with floating elements
- Explore page integrates with Pexels API for dynamic content
- Home page mimics Instagram-style feed with stories
- All icons are from react-icons library (Feather icons primary)
- Animations use Framer Motion for smooth transitions

---

This documentation provides a complete reference for understanding the Attach Social web application's design, structure, and implementation details.

---

## 🛠️ Troubleshooting: Explore page shows only skeletons, flickers, or repeated canceled requests

If Explore does not render media or you see many `(canceled)` requests in the Network tab, follow these steps.

1) Verify the API returns items
- Local:
  - Windows (cmd):  
    ```bash
    curl "http://localhost:3000/api/pexels?page=1&photos=6&videos=2"
    ```
  - Ensure the JSON contains an `items` array with objects and `hasMore: true/false`.
- Production:
  ```bash
  curl "https://<your-vercel-domain>/api/pexels?page=1&photos=6&videos=2"
  ```

2) Environment variable present
- Local: set `PEXELS_API_KEY` in `.env.local`, then restart dev:
  ```bash
  PEXELS_API_KEY=your_key_here
  npm run dev
  ```
- Vercel: add `PEXELS_API_KEY` to the Production environment (not just Preview) and Redeploy.

3) “signal is aborted without reason” is expected
- The Explore page cancels in‑flight requests to avoid race conditions when the user scrolls or the query changes. Aborted fetch entries in DevTools are normal. The UI should still render media.

4) If you modified Explore and see flicker or infinite cancels
- Ensure these invariants in `src/app/explore/page.tsx`:
  - Use an “in‑progress” guard to block concurrent loads.
  - Do not return early on `AbortError`. Let the `finally` run to reset `loading` and flags.
  - Keep the loader function stable (use refs like `activeQueryRef`) and initialize `IntersectionObserver` once.
  - Avoid immediate double-prefetch after the first page; only fetch when the sentinel enters view.

5) Hard refresh and restart
- Hard refresh the browser (Ctrl+Shift+R) to clear transient UI state.
- If still stuck, stop and restart the dev server to clear module hot-reload edge cases.

6) Images and videos allowed
- Remote images are configured in `next.config.ts` for:
  - `images.unsplash.com`
  - `images.pexels.com`
  - `randomuser.me`
  - Videos are direct `<video>` elements (no Next/Image config needed).

7) Quick checklist
- API returns `items` locally and in Production.
- `PEXELS_API_KEY` exists for the environment you’re testing.
- No permanent errors in Console besides aborts.
- Scrolling triggers one fetch per page (not many in parallel).
