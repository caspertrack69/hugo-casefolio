# Casefolio

> A developer-first Hugo theme for project case studies and technical writing.

Casefolio is a reusable Hugo theme for developers, freelancers, studios, and
technical writers who want to publish **project case studies** and a
**technical blog** from a single static site - no backend, no framework, no
runtime dependencies.

The visual language is **dark editorial minimalism**: a pure-black canvas,
near-zero color, hairline borders instead of shadows, tight medium-weight type,
and rounded containers. Every visual decision is driven by a single token
layer (`assets/css/tokens.css`) so the theme stays consistent without a CSS
framework.

---

## Features

- **Case-study-aware projects** with rich front matter (client, role, services,
  stack, duration, live/source links, gallery, outcome) - empty optional fields
  are hidden automatically.
- **Technical blog** with table of contents, reading time, tags/categories,
  related posts, and prev/next navigation.
- **Configurable homepage** with toggleable sections: hero, featured projects,
  about, expertise, latest posts, contact CTA.
- **Taxonomy** pages for tags and categories, with consistent links from cards,
  articles, and detail pages.
- **Design-system-driven styling** via CSS custom properties; no hard-coded
  colors, type, spacing, or radius in components.
- **SEO**: per-page title/description, canonical, Open Graph and Twitter cards,
  sitemap, RSS, and a `robots.txt` template.
- **Accessibility**: semantic landmarks, skip link, visible focus, keyboard
  navigation, reduced-motion support, WCAG-conscious contrast.
- **Privacy**: all third-party integrations (analytics, embeds) disabled by
  default.
- **No Node required** - plain CSS and a tiny vanilla-JS nav toggle, piped
  through Hugo's native asset pipeline (minify + fingerprint).

---

## Requirements

- **Hugo ≥ 0.128.0** (developed and tested on **0.168.0**).
- The standard Hugo edition is sufficient. The theme uses only native Hugo
  features (templates, taxonomies, RSS, sitemap, image processing,
  `resources.Concat`/`minify`/`fingerprint`). No Node.js, no PostCSS, no Dart
  Sass.

> Hugo's image processing (`.Resize`) works in all editions since 0.153. If you
> stay on an older release and use Hugo Extended, everything still works.

---

## Quick start with the example site

The repository root **is** the theme; `exampleSite/` is a runnable demo that
references it.

```sh
git clone https://github.com/caspertrack69/hugo-casefolio.git
cd hugo-casefolio/exampleSite
hugo server
```

Open <http://localhost:1313/>.

The example site uses `theme = "../.."` in `hugo.toml`, which resolves the theme
at the repository root **regardless of the checkout folder name** - so the same
command works locally, in CI, and on hosting providers.

---

## Installation into your own site

Add the theme as a Git submodule (recommended, so it stays updatable):

```sh
git submodule add https://github.com/caspertrack69/hugo-casefolio.git themes/hugo-casefolio
```

Then enable it in your site's `hugo.toml`:

```toml
theme = "hugo-casefolio"
```

Copy the configuration blocks you need from
[`exampleSite/hugo.toml`](exampleSite/hugo.toml) into your own `hugo.toml`, and
create content under `content/projects/` and `content/posts/`.

---

## Configuration

All identity, navigation, sections, and footer are configuration-driven. The
key options (see [`exampleSite/hugo.toml`](exampleSite/hugo.toml) for a full,
commented reference):

```toml
baseURL = "https://yoursite.example/"
title = "Your Name"
theme = "hugo-casefolio"
enableRobotsTXT = true

[taxonomies]
tag = "tags"
category = "categories"

[outputs]
home = ["html", "rss"]
section = ["html", "rss"]

[pagination]
pagerSize = 9

[markup.highlight]
style = "github-dark"
codeFences = true

[markup.goldmark.renderer]
unsafe = true   # required for raw HTML / some shortcodes
```

### Brand, navigation, and hero

```toml
[params]
brand = "Your Name"
description = "One-line site description."
favicon = "/images/favicon.svg"
defaultOGImage = "/images/og-default.svg"
colorScheme = "dark"

[params.nav]
secondaryLabel = "Source"
secondaryURL = "https://github.com/you/repo"
primaryLabel = "Get started"
primaryURL = "/projects/"

[params.hero]
eyebrow = "Available for projects"
headline = "Your headline."
intro = "Your intro paragraph."
primaryLabel = "Browse projects"
primaryURL = "/projects/"
secondaryLabel = "Read the blog"
secondaryURL = "/posts/"
```

### Homepage sections (toggle each on/off)

```toml
[params.home]
hero = true
featuredProjects = true
about = true
expertise = true
latestPosts = true
contactCTA = true

[params.featuredProjects]
limit = 4

[params.latestPosts]
limit = 4

[params.about]
heading = "About"
body = "Short bio. Markdown is supported."

[[params.expertise.items]]
title = "Web performance"
summary = "What you do."

[params.contactCTA]
headline = "Have a project in mind?"
intro = "How to reach you."
primaryLabel = "Browse projects"
primaryURL = "/projects/"
```

### Display options

```toml
[params.display]
showAuthor = true
showDate = true
showReadingTime = true
showTags = true
showTOC = true
showRelated = true
showBreadcrumbs = true
```

### Footer and social

```toml
[params.footer]
copyright = "Your Name"
credit = true        # shows "Built with Hugo & Casefolio"
since = 2024

[[params.footer.columns]]
title = "Projects"
[[params.footer.columns.links]]
label = "All projects"
url = "/projects/"

[params.social]
github = "https://github.com/you"
x = "https://x.com/you"
linkedin = "https://www.linkedin.com/in/you"
```

### Menus

```toml
[[menus.main]]
name = "Projects"
url = "/projects/"
weight = 1
```

---

## Content model

### Project / case study

Create a page bundle so cover and gallery images live next to the content:

```sh
hugo new projects/my-project/index.md
```

Front matter (only `title`, `date`, and `summary` are expected; everything else
is optional and hidden when empty):

```yaml
---
title: "My project"
date: 2026-04-01
summary: "One-line summary for cards and metadata."
draft: false
featured: true          # surfaces on the homepage
weight: 1               # manual ordering hint
cover: cover.svg        # page-bundle image (or /static path)
coverAlt: "Describe the image."
client: "Acme"          # omit if not applicable
role: ["Frontend", "Design"]
services: ["Audit", "Build"]
technologies: ["Hugo", "CSS"]
projectType: "Website"
year: "2026"
duration: "2 weeks"
liveURL: "https://example.com"
sourceURL: "https://github.com/you/repo"
gallery:
  - src: gallery-1.svg
    alt: "First gallery image."
  - src: gallery-2.svg
    alt: "Second gallery image."
tags: ["performance", "css"]
categories: ["Frontend"]
external: false         # link the card straight to liveURL instead of a detail page
---
```

Write the case study as Markdown. Suggested sections (only render the ones you
fill in): Overview, Context, Challenge, Approach, Solution, Technology,
Outcome. The theme never renders empty sections or empty metadata labels.

### Blog post

```sh
hugo new posts/my-post/index.md
```

```yaml
---
title: "My post"
date: 2026-04-01
summary: "Short summary."
author: "Your Name"
cover: cover.svg
coverAlt: "Cover image."
tags: ["hugo"]
categories: ["Engineering"]
toc: true               # show a table of contents (override per post)
series: "Hugo essentials"
---
```

### Shortcodes

- `{{</* figure src="image.svg" alt="Alt text" caption="A caption." */>}}` - a
  bordered media frame with an optional caption.
- `{{</* gallery */>}}...images...{{</* /gallery */>}}` - a responsive gallery
  grid wrapping figures.
- `{{</* callout */>}}A note.{{</* /callout */>}}` - a highlighted aside.

---

## Building and inspecting

```sh
cd exampleSite
hugo --gc --minify          # output -> exampleSite/public/
```

Sanity checks after a build:

- `public/index.html`, `public/sitemap.xml`, and `public/index.xml` exist.
- Project and post pages render; taxonomy term pages list their entries.
- Drafts do not appear in the output.
- No `WARN`/`ERROR` lines from Hugo.

---

## Deployment

The example site deploys to any static host. For **Vercel**:

| Setting | Value |
|---|---|
| Root Directory | `exampleSite` |
| Build Command | `hugo --gc --minify` |
| Output Directory | `public` |
| Environment | `HUGO_VERSION` = `0.168.0` |

Because the example site resolves the theme via `theme = "../.."`, the build
works regardless of the checkout folder name.

For **Netlify**, **Cloudflare Pages**, or **GitHub Pages**: build
`hugo --gc --minify` from `exampleSite` and publish the `public/` directory.

> The deploy target is for the demo only. The theme itself has no runtime
> dependency on any host.

---

## Repository structure

```
hugo-casefolio/
├── archetypes/          # default, posts, projects scaffolds
├── assets/
│   ├── css/             # tokens, base, components, layout, pages
│   └── js/              # mobile nav toggle (vanilla)
├── layouts/
│   ├── _default/        # baseof, single, list, taxonomy, robots.txt
│   ├── partials/        # head, seo, header, footer, cards, image, ...
│   ├── posts/           # list, single
│   ├── projects/        # list, single
│   ├── shortcodes/      # figure, gallery, callout
│   ├── 404.html
│   └── index.html
├── exampleSite/         # runnable demo (config + content + images)
├── i18n/                # UI strings
├── theme.toml
└── .github/workflows/   # CI build check
```

---

## Accessibility and performance

- Semantic landmarks (`header`, `nav`, `main`, `article`, `footer`), a skip
  link, and a visible 2px focus ring on black.
- Keyboard-operable mobile navigation with correct `aria-expanded` state.
- `prefers-reduced-motion` disables transitions.
- CSS and JS are concatenated, minified, and fingerprinted; images carry
  `width`/`height` to prevent layout shift; below-the-fold images are
  lazy-loaded.
- No analytics, ads, or remote fonts are loaded by default. All third-party
  privacy integrations are disabled in `exampleSite/hugo.toml`.

> Note: the design system uses `#666666` on black (~3.7:1) only for 12px
> non-essential metadata. Where legibility matters, the theme uses a lifted
> `--text-meta-strong` token.

---

## Screenshots

Screenshots and a catalog thumbnail will be added once the visual pass is final,
per the project roadmap. The demo site is the live reference in the meantime.

---

## License

[MIT](LICENSE).

---

## Contributing

Contributions are welcome. See [CONTRIBUTING.md](CONTRIBUTING.md) for the
development setup, structure, commit style, and how to report bugs.
