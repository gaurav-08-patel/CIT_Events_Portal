# CIT Events Portal Design Guide

This file defines the default visual system for new pages and components in the frontend.

## Theme

Use the CIT portal look consistently:

- Background: `var(--cit-bg)` = `#f0f2f5`
- Surfaces: `var(--cit-surface)` = `#ffffff`
- Subtle surfaces: `var(--cit-surface-subtle)` = `#f7f8fa`
- Border: `var(--cit-border)` = `#dadde1`
- Primary blue: `var(--cit-primary)` = `#1877f2`
- Primary hover: `var(--cit-primary-hover)` = `#166fe5`
- Primary soft: `var(--cit-primary-soft)` = `#e7f3ff`
- Text: `var(--cit-text)` = `#1c1e21`
- Muted text: `var(--cit-text-muted)` = `#65676b`
- Success: `var(--cit-success)` = `#42b72a`
- Warning: `var(--cit-warning)` = `#f7b928`
- Danger: `var(--cit-danger)` = `#fa3e3e`

## Radius

Use the shared radius tokens instead of inventing new values:

- Small chips and tags: `var(--cit-radius-sm)` = `8px`
- Buttons and standard cards: `var(--cit-radius-md)` = `12px`
- Main cards and panels: `var(--cit-radius-lg)` = `16px`
- Large hero surfaces: `var(--cit-radius-xl)` = `20px`

## Shadows

Use subtle elevation:

- Small cards / controls: `var(--cit-shadow-sm)`
- Hover elevation: `var(--cit-shadow-md)` or `var(--cit-shadow-lg)`

Avoid heavy shadows or dark app-wide blur effects.

## Typography

- Use `Inter` through the app.
- Headings should be bold and slightly tight in spacing.
- Body text should stay readable and muted when secondary.
- Prefer weights 500, 600, 700, and 800.

## Tailwind Usage

Prefer Tailwind for new UI.

Use the shared CSS variables through Tailwind v4 syntax:

- `bg-(--cit-bg)`
- `bg-(--cit-surface)`
- `text-(--cit-text)`
- `text-(--cit-text-muted)`
- `border-(--cit-border)`
- `rounded-(--cit-radius-sm)`
- `rounded-(--cit-radius-md)`
- `rounded-(--cit-radius-lg)`
- `shadow-(--cit-shadow-sm)`
- `shadow-(--cit-shadow-md)`

## Layout Patterns

- Use a soft gray page background with white content surfaces.
- Keep sections spacious and aligned to a centered max-width container.
- Use blue gradients for hero/header areas when a stronger visual anchor is needed.
- Keep cards clean, rounded, and lightly bordered.

## Component Rules

When building new pages or components:

- Match the existing CIT theme exactly.
- Use Tailwind classes first.
- If a border radius or background color needs to be reused globally, add it to `frontend/src/index.css` as a shared variable.
- Reuse the existing theme tokens before adding new colors or shadows.
- Keep hover states subtle and fast.

## Do

- Use the shared blue/white/gray palette.
- Keep buttons and tags compact and rounded.
- Use soft borders instead of harsh outlines.
- Use a card-first layout for content-heavy pages.

## Do Not

- Do not introduce a new color palette without a reason.
- Do not use random radius values when a shared token fits.
- Do not use strong drop shadows or heavy glass effects.
- Do not mix in a second design system.
