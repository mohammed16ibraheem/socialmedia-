# Mobile Profile View Notes

This folder is reserved for assets and documentation that help the profile page render perfectly inside in-app browsers on iPhone and Android.

- The profile page is fully responsive and adapts down to 360 px wide viewports.
- If the app shell needs device-specific overrides (fonts, spacing, safe areas), place CSS or JSON files here and load them conditionally from the host app.
- Example usage:
  - `/profile.iphone.android/viewport.json` – custom viewport hints for a native webview.
  - `/profile.iphone.android/mobile.css` – extra styles injected only for in-app browsers.

Keeping everything in this directory makes it easy to bundle mobile-specific tweaks without touching the main desktop assets.

