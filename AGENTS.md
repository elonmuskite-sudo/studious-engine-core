<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Nexus Chat source lives in `src/nexus/` (ported JSX); its react-router calls go through `src/nexus/router-shim.jsx`, which maps them onto TanStack Router — keeps the original code mostly untouched.
- Nexus routes set `ssr: false` because the ported code reads browser-only APIs (localStorage, notifications) during render.
