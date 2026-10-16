# Contributing to Casefolio

Thanks for considering a contribution! This guide covers the development setup,
repository structure, conventions, and how to run checks before opening a pull
request.

## Development setup

Requirements:

- **Hugo ≥ 0.128.0** (tested on 0.168.0). The standard edition is enough; no
  Node.js is required.

Clone and run the example site:

```sh
git clone https://github.com/caspertrack69/hugo-casefolio.git
cd hugo-casefolio/exampleSite
hugo server
```

The example site uses `theme = "../.."`, so it loads the theme from the
repository root. Edit theme files in `assets/`, `layouts/`, `archetypes/`,
`i18n/`, or `data/`, and Hugo's live reload will pick up changes.

## Repository layout

The repository root **is** the theme. `exampleSite/` is a self-contained demo
site (config + content + images) used for development and deployment.

Key areas:

- `assets/css/` - `tokens.css` (the single source of visual truth), `base.css`,
  `components.css`, `layout.css`, `pages.css`.
- `layouts/` - templates and partials. Section-specific templates live under
  `layouts/projects/` and `layouts/posts/`; shared pieces under
  `layouts/partials/`.
- `archetypes/` - content scaffolds for `projects`, `posts`, and the default.
- `i18n/en.toml` - UI strings. Use `i18n "key"` in templates rather than
  hard-coding labels.

## Visual conventions (design system)

- The theme follows a dark editorial minimalism style. **`assets/css/tokens.css`
  is the source of truth** for color, type, spacing, radius, and motion.
- Do **not** hard-code visual values in components or templates - reference the
  tokens.
- No drop shadows, no gradients on UI chrome, no font weight above 500 (except
  the tiny `NEW` badge), no all-caps headings.
- Use 1px borders to separate regions; keep media dark inside rounded frames.
- Respect `prefers-reduced-motion` and keep a visible focus indicator.

## Adding a component or page

1. Add the markup in a partial or section template under `layouts/`.
2. Add styles to the appropriate CSS file (`components.css` for reusable pieces,
   `pages.css` for page-specific styles). Reference tokens only.
3. Add any user-facing strings to `i18n/en.toml` and use `i18n` in the template.
4. If the feature needs demo content, add it under `exampleSite/content/` using
   neutral, clearly-fictitious data. Never invent clients, testimonials, or
   metrics.

## Commit style

Use **atomic commits** - one logical change per commit, with a concise summary
line and a short body explaining why. Keep commits focused so history is easy to
review and revert.

Do not commit build output (`exampleSite/public/` is gitignored) or local
spec/scratch files.

## Running checks before a PR

```sh
cd exampleSite
hugo --gc --minify
```

Confirm:

- The build finishes with no `WARN` or `ERROR` lines.
- `public/index.html`, `public/sitemap.xml`, and `public/index.xml` exist.
- New content renders; optional empty fields stay hidden; drafts stay excluded.
- No broken internal links or missing images in the example site.

CI (`.github/workflows/hugo.yml`) runs the same build on every push and pull
request and requires no secrets.

## Reporting bugs

Open a GitHub issue with:

- Hugo version (`hugo version`).
- Steps to reproduce (ideally against the example site).
- Expected vs. actual behavior.
- Any relevant front matter or config.

## License

By contributing, you agree that your contributions are licensed under the
[MIT License](LICENSE).
