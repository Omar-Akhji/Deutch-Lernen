# The Complete HTML Cheat Sheet — 2026 Edition

> **What is Semantic HTML?**
> Semantic HTML uses markup to reinforce the _meaning_ of content, not just its appearance.
> Example: `<article>` defines self-contained content. `<div>` has no meaning — it's a layout tool.
> Semantic HTML improves SEO, accessibility, and code maintainability.

> **What is Baseline?**
> "Baseline" (by web.dev / Google) means a feature is supported across Chrome, Edge, Firefox, and Safari.
> Tags marked 🆕 **Baseline 2025** are safe to use in modern projects as of April 2026.
> Tags marked ⚗️ **Experimental** are in active development — not yet production-safe.

---

## Table of Contents

1. [Document Structure & Boilerplate](#1-document-structure--boilerplate)
2. [Document Information — Head Tags](#2-document-information--head-tags)
3. [Meta Tags, SEO & Social Sharing](#3-meta-tags-seo--social-sharing)
4. [Page Structure Tags](#4-page-structure-tags)
5. [Text Formatting](#5-text-formatting)
6. [Links](#6-links)
7. [Images & Responsive Media](#7-images--responsive-media)
8. [Lists](#8-lists)
9. [Forms & Inputs](#9-forms--inputs)
10. [Tables](#10-tables)
11. [Multimedia & Embeds](#11-multimedia--embeds)
12. [HTML5 Semantic & Structural Tags](#12-html5-semantic--structural-tags)
13. [Global Attributes](#13-global-attributes)
14. [ARIA Accessibility Attributes](#14-aria-accessibility-attributes)
15. [Event Attributes — Inline Reference](#15-event-attributes--inline-reference)
16. [Character Entities](#16-character-entities)
17. [Deprecated & Removed Tags](#17-deprecated--removed-tags)

---

## 1. Document Structure & Boilerplate

| Tag                          | Description                                                                                                       |
| :--------------------------- | :---------------------------------------------------------------------------------------------------------------- |
| `<!DOCTYPE html>`            | Declares the document type as HTML5. Must be the very first line — no exceptions.                                 |
| `<html lang="en"> … </html>` | Root element wrapping the entire document. The `lang` attribute is **required** for accessibility and SEO.        |
| `<head> … </head>`           | Container for metadata — never rendered visually on the page.                                                     |
| `<body> … </body>`           | Container for all visible page content.                                                                           |
| `<title> … </title>`         | **Mandatory.** Sets the tab name, browser history label, and search engine headline. Keep it under 60 characters. |

> **Minimal HTML5 Boilerplate (2026)**
>
> ```html
> <!DOCTYPE html>
> <html lang="en">
>   <head>
>     <meta charset="UTF-8" />
>     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
>     <meta name="description" content="A clear, concise page description." />
>     <title>Page Title — Site Name</title>
>     <link rel="stylesheet" href="styles.css" />
>   </head>
>   <body>
>     <header>…</header>
>     <main>…</main>
>     <footer>…</footer>
>     <script src="app.js" defer></script>
>   </body>
> </html>
> ```
>
> **Key choices explained:**
>
> - `charset` and `viewport` go first — always
> - `<script defer>` at end of `<body>` is the modern standard
> - `<header>`, `<main>`, `<footer>` provide semantic page landmarks out of the box

---

## 2. Document Information — Head Tags

| Tag                        | Description                                                                                       |
| :------------------------- | :------------------------------------------------------------------------------------------------ |
| `<meta>`                   | Provides page metadata: charset, viewport, description, author, robots, and more.                 |
| `<link>`                   | Links external resources — stylesheets, favicons, preloads, canonical URLs.                       |
| `<style> … </style>`       | Embeds internal CSS. Use sparingly; prefer external stylesheets for maintainability.              |
| `<script> … </script>`     | Embeds or references JavaScript. Use `defer` or `async` to avoid blocking HTML parsing.           |
| `<noscript> … </noscript>` | Fallback content shown when JavaScript is disabled or not supported. Important for accessibility. |
| `<base href="url">`        | Sets the base URL for all relative URLs on the page. Only one `<base>` allowed per document.      |
| `<template> … </template>` | Inert HTML fragment not rendered until cloned by JavaScript. Used in Web Components.              |

### `<script>` Key Attributes

| Attribute                                  | Description                                                                                                                       |
| :----------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------- |
| `src="url"`                                | Path to an external JS file.                                                                                                      |
| `defer`                                    | Downloads in parallel; executes **after** HTML is fully parsed. **Preferred for most scripts.** Preserves execution order.        |
| `async`                                    | Downloads in parallel; executes **immediately** when ready. Order is not guaranteed. Best for independent analytics-type scripts. |
| `type="module"`                            | Treats the script as an ES module. Automatically deferred. Enables `import`/`export` syntax.                                      |
| `crossorigin="anonymous\|use-credentials"` | Enables CORS requests for scripts from a different origin (required for `integrity` checking).                                    |
| `integrity="sha384-…"`                     | Subresource Integrity (SRI) hash. Browser refuses to execute the script if the hash doesn't match.                                |
| `fetchpriority="high\|low\|auto"`          | Hints the browser to prioritize or deprioritize fetching this script. **Baseline 2024.**                                          |
| `blocking="render"`                        | Blocks rendering until the script executes. Use only for critical render-blocking scripts.                                        |
| `nomodule`                                 | Script is only loaded by browsers that do **not** support ES modules. Used for legacy fallbacks.                                  |

### `<link>` Key Attributes & `rel` Values

| `rel` Value        | Description                                                                                                                      |
| :----------------- | :------------------------------------------------------------------------------------------------------------------------------- |
| `stylesheet`       | Links an external CSS file. Most common use.                                                                                     |
| `preload`          | Tells the browser to fetch a resource early (fonts, hero images, critical scripts). Pair with `as="font\|image\|script\|style"`. |
| `prefetch`         | Fetches a resource that will likely be needed soon (next page navigation). Low priority.                                         |
| `preconnect`       | Establishes a TCP/TLS connection to a third-party origin early.                                                                  |
| `dns-prefetch`     | Resolves DNS for a third-party domain early. Lighter than `preconnect`. **Baseline 2025.**                                       |
| `icon`             | Specifies the page favicon.                                                                                                      |
| `apple-touch-icon` | Specifies the icon used when the page is saved to an iOS home screen.                                                            |
| `manifest`         | Links a Web App Manifest (PWA support).                                                                                          |
| `canonical`        | Tells search engines which URL is the preferred version of a page. Critical for SEO.                                             |
| `alternate`        | Specifies alternate versions: RSS feeds, translated pages (`hreflang`).                                                          |
| `modulepreload`    | Preloads an ES module and its dependencies.                                                                                      |

| Other `<link>` Attributes            | Description                                                                               |
| :----------------------------------- | :---------------------------------------------------------------------------------------- |
| `href="url"`                         | **Required.** The URL of the linked resource.                                             |
| `as="font\|image\|script\|style\|…"` | Specifies the resource type for `rel="preload"` hints.                                    |
| `media=""`                           | Applies the link only for matching media queries (e.g., `print`, `(min-width: 600px)`).   |
| `fetchpriority="high\|low\|auto"`    | Priority hint for the fetch. Useful on `rel="preload"` for LCP images. **Baseline 2024.** |
| `crossorigin`                        | Enables CORS for fonts and other cross-origin resources.                                  |

---

## 3. Meta Tags, SEO & Social Sharing

### Core Meta Tags

| Tag                                                                      | Description                                                                                              |
| :----------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------- |
| `<meta charset="UTF-8">`                                                 | **Required.** Sets character encoding. UTF-8 supports all languages and emoji. Used by ~99% of websites. |
| `<meta name="viewport" content="width=device-width, initial-scale=1.0">` | **Required for responsive design.** Controls scaling on mobile browsers.                                 |
| `<meta name="description" content="…">`                                  | Page summary shown in search results. Keep 150–160 characters for best display.                          |
| `<meta name="author" content="…">`                                       | Specifies the page's author.                                                                             |
| `<meta name="robots" content="…">`                                       | Controls crawling/indexing. Values: `index`, `noindex`, `follow`, `nofollow`, `noarchive`, `nosnippet`.  |
| `<meta name="theme-color" content="#hex">`                               | Sets the browser UI / toolbar color on mobile (Chrome, Edge, Safari).                                    |
| `<meta name="keywords" content="…">`                                     | Comma-separated keywords. Largely ignored by modern search engines.                                      |
| `<meta http-equiv="refresh" content="30">`                               | Auto-refreshes the page after N seconds. Use sparingly — bad for accessibility.                          |
| `<meta name="color-scheme" content="light dark">`                        | Declares which color schemes the page supports. Allows browsers to render default UI appropriately.      |

### Open Graph (Social Sharing)

Used by Facebook, LinkedIn, Slack, and most social platforms to generate link previews.

```html
<meta property="og:title" content="Page Title" />
<meta property="og:description" content="A short, engaging description." />
<meta property="og:image" content="https://example.com/og-image.jpg" />
<meta property="og:url" content="https://example.com/page" />
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Your Site Name" />
<meta property="og:locale" content="en_US" />
```

### Twitter / X Card Meta Tags

```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Page Title" />
<meta name="twitter:description" content="Description." />
<meta name="twitter:image" content="https://example.com/twitter-card.jpg" />
<meta name="twitter:site" content="@YourHandle" />
<meta name="twitter:creator" content="@AuthorHandle" />
```

> **Image sizing guide:** OG image: 1200×630px minimum. Twitter large card: 1200×628px. Keep file size under 1MB.

---

## 4. Page Structure Tags

| Tag                                       | Description                                                                                                      |
| :---------------------------------------- | :--------------------------------------------------------------------------------------------------------------- |
| `<h1> … </h1>` to `<h6> … </h6>`          | Headings. `<h1>` is the page's main title — **use only one per page** for SEO. Never skip heading levels.        |
| `<p> … </p>`                              | A paragraph of text.                                                                                             |
| `<br>`                                    | Line break. Void element — no closing tag. Use sparingly; prefer CSS `margin` for spacing.                       |
| `<hr>`                                    | Thematic break rendered as a horizontal line. Semantic — it means a topic shift.                                 |
| `<div> … </div>`                          | Generic block-level container with no semantic meaning. Use when no semantic element applies.                    |
| `<span> … </span>`                        | Generic inline container with no semantic meaning. Useful for targeting text fragments with CSS/JS.              |
| `<pre> … </pre>`                          | Preformatted text block. Preserves all whitespace and line breaks. Uses monospace font. Ideal for code examples. |
| `<blockquote cite="url"> … </blockquote>` | Block-level quotation. `cite` points to the source URL.                                                          |
| `<q cite="url"> … </q>`                   | Inline short quotation. Browsers automatically add quotation marks.                                              |

---

## 5. Text Formatting

| Tag                                      | Description                                                                                        |
| :--------------------------------------- | :------------------------------------------------------------------------------------------------- |
| `<strong> … </strong>`                   | **Bold** text with strong semantic importance (screen readers may stress it).                      |
| `<em> … </em>`                           | _Italic_ text with stressed emphasis (changes meaning of a sentence).                              |
| `<b> … </b>`                             | Bold text without semantic weight (e.g., keywords, product names).                                 |
| `<i> … </i>`                             | Italic text without emphasis (e.g., foreign words, technical terms, ship names).                   |
| `<u> … </u>`                             | Underline for unarticulated annotation (e.g., misspelling, proper noun in Chinese). Not for links. |
| `<s> … </s>`                             | Strikethrough — content no longer accurate or relevant (price change, outdated info).              |
| `<del datetime=""> … </del>`             | Text deleted from the document. Semantic — screen readers announce it.                             |
| `<ins datetime=""> … </ins>`             | Text inserted into the document. Use `datetime` for when the change occurred.                      |
| `<mark> … </mark>`                       | Highlighted text for reference (e.g., search result matches, key terms).                           |
| `<small> … </small>`                     | Fine print, legal text, copyright notices, or secondary information.                               |
| `<sub> … </sub>`                         | Subscript text (e.g., H₂O, log₁₀).                                                                 |
| `<sup> … </sup>`                         | Superscript text (e.g., E=mc², footnote markers²).                                                 |
| `<abbr title="full text"> … </abbr>`     | Abbreviation or acronym. The `title` shows the full form on hover.                                 |
| `<cite> … </cite>`                       | The **title** of a creative work (book, film, article, painting). Not for author names.            |
| `<dfn> … </dfn>`                         | Marks the defining instance of a term in text.                                                     |
| `<address> … </address>`                 | Contact information for the nearest `<article>` or the page itself (email, postal address).        |
| `<code> … </code>`                       | Inline code in monospace font. For code blocks use `<pre><code>…</code></pre>`.                    |
| `<kbd> … </kbd>`                         | Represents user keyboard input — e.g., `Ctrl+S`, `Enter`.                                          |
| `<samp> … </samp>`                       | Sample output from a computer program.                                                             |
| `<var> … </var>`                         | A variable in a mathematical expression or programming context.                                    |
| `<time datetime="2026-04-22"> … </time>` | A date/time value. `datetime` provides a machine-readable ISO 8601 format.                         |
| `<data value="…"> … </data>`             | Binds a human-readable value to a machine-readable equivalent.                                     |
| `<wbr>`                                  | A word-break opportunity. Hints where a long word or URL may be broken across lines.               |
| `<bdi> … </bdi>`                         | Bi-directional isolation. Isolates text whose direction is unknown (e.g., user-generated content). |
| `<bdo dir="ltr\|rtl"> … </bdo>`          | Bi-directional override. Forces text direction regardless of the document's default.               |
| `<ruby>`, `<rt>`, `<rp>`                 | East Asian typography annotations. `<rt>` = annotation text. `<rp>` = fallback parentheses.        |

---

## 6. Links

| Tag / Attribute                     | Description                                                                                                         |
| :---------------------------------- | :------------------------------------------------------------------------------------------------------------------ |
| `<a href="url"> … </a>`             | Anchor — creates a hyperlink. The `href` can be a URL, `#id`, `mailto:`, `tel:`, or a relative path.                |
| `href="#element-id"`                | Navigates to an element with that `id` on the same page (in-page anchor link).                                      |
| `href="mailto:email@example.com"`   | Opens the user's mail client with a new message addressed to the given email.                                       |
| `href="tel:+212600000000"`          | Creates a clickable phone number. Essential for mobile users.                                                       |
| `href="sms:+212600000000"`          | Opens the SMS app on mobile devices.                                                                                |
| `target="_blank"`                   | Opens link in a **new tab**. Always combine with `rel="noopener noreferrer"`.                                       |
| `target="_self"`                    | Opens in the same tab (default).                                                                                    |
| `target="_parent"`                  | Opens in the parent browsing context (iframes).                                                                     |
| `target="_top"`                     | Opens in the full body of the window, breaking out of all iframes.                                                  |
| `rel="noopener noreferrer"`         | **Security requirement** for `target="_blank"`. Prevents the opened page from accessing `window.opener`.            |
| `rel="nofollow"`                    | Tells search engines not to pass SEO authority ("link juice") to the target.                                        |
| `rel="sponsored"`                   | Marks a paid or advertising link (Google guideline).                                                                |
| `rel="ugc"`                         | Marks user-generated content links (comments, forums).                                                              |
| `download` or `download="filename"` | Prompts browser to download the target resource rather than navigate to it.                                         |
| `hreflang="lang-code"`              | Indicates the language of the linked document (e.g., `fr`, `ar`, `zh-Hans`).                                        |
| `referrerpolicy=""`                 | Controls how much referrer information is sent. Values: `no-referrer`, `origin`, `strict-origin-when-cross-origin`. |
| `ping="url"`                        | Space-separated list of URLs notified (via POST) when the link is followed. Used for analytics.                     |

> **Modern security pattern for external links:**
>
> ```html
> <a href="https://external.com" target="_blank" rel="noopener noreferrer"
>   >External Link</a
> >
> ```

---

## 7. Images & Responsive Media

### `<img>` Attributes

| Attribute                                         | Description                                                                                                       |
| :------------------------------------------------ | :---------------------------------------------------------------------------------------------------------------- |
| `src="url"`                                       | **Required.** Path or URL of the image.                                                                           |
| `alt="description"`                               | **Required.** Alternative text for screen readers and failed loads. Use `alt=""` for decorative images.           |
| `width=""` / `height=""`                          | Always specify both — prevents Cumulative Layout Shift (CLS).                                                     |
| `loading="lazy"`                                  | Defers loading until the image enters the viewport. **Use on all below-the-fold images.**                         |
| `loading="eager"`                                 | Forces immediate load. Default behavior. Use on above-the-fold images.                                            |
| `decoding="async"`                                | Tells the browser to decode the image off the main thread. Reduces jank.                                          |
| `fetchpriority="high"`                            | Boosts fetch priority. **Use on your LCP (hero) image.** Do not combine with `loading="lazy"`. **Baseline 2024.** |
| `fetchpriority="low"`                             | Deprioritizes fetch. Useful for images low in the page.                                                           |
| `srcset="img-800.webp 800w, img-1600.webp 1600w"` | Provides multiple image candidates based on display width. Browser picks the best one.                            |
| `sizes="(max-width: 600px) 100vw, 50vw"`          | Tells the browser how wide the image will be at different breakpoints. Works with `srcset`.                       |
| `crossorigin="anonymous\|use-credentials"`        | Required to use the image in a `<canvas>` or when using SRI preloads.                                             |
| `referrerpolicy=""`                               | Controls the `Referer` header sent when fetching the image.                                                       |
| `ismap`                                           | Marks the image as a server-side image map.                                                                       |
| `usemap="#mapname"`                               | Associates the image with a client-side image map.                                                                |
| `elementtiming="label"`                           | Registers the image for the Element Timing API (performance observability).                                       |

### Responsive Images with `<picture>`

```html
<!-- Modern responsive image pattern -->
<picture>
  <!-- WebP for modern browsers, different sizes for different screens -->
  <source
    type="image/webp"
    srcset="hero-480.webp 480w, hero-960.webp 960w, hero-1920.webp 1920w"
    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 80vw, 1200px" />
  <!-- JPEG fallback -->
  <source
    type="image/jpeg"
    srcset="hero-480.jpg 480w, hero-960.jpg 960w, hero-1920.jpg 1920w"
    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 80vw, 1200px" />
  <!-- Final fallback img — always required -->
  <img
    src="hero-960.jpg"
    alt="Descriptive alt text here"
    width="1920"
    height="1080"
    loading="eager"
    decoding="async"
    fetchpriority="high" />
</picture>
```

> **Performance rule of thumb:**
>
> - Above the fold (hero image): `loading="eager"` + `fetchpriority="high"` + `decoding="async"`
> - Below the fold: `loading="lazy"` + `decoding="async"` (no `fetchpriority`)

### Image Maps

| Tag / Attribute                       | Description                                                                                     |
| :------------------------------------ | :---------------------------------------------------------------------------------------------- |
| `<map name="mapname"> … </map>`       | Defines a client-side image map referenced by an `<img usemap="#mapname">`.                     |
| `<area>`                              | Defines a clickable region inside the map.                                                      |
| `shape="rect\|circle\|poly\|default"` | Shape of the clickable area.                                                                    |
| `coords=""`                           | Coordinates defining the shape (rect: `x1,y1,x2,y2`; circle: `cx,cy,r`; poly: `x1,y1,x2,y2,…`). |
| `href=""`                             | Link destination for the area.                                                                  |
| `alt=""`                              | **Required** alternative text for the area.                                                     |
| `target=""`                           | Where to open the linked URL.                                                                   |

---

## 8. Lists

| Tag            | Description                                                                                      |
| :------------- | :----------------------------------------------------------------------------------------------- |
| `<ul> … </ul>` | Unordered (bulleted) list.                                                                       |
| `<ol> … </ol>` | Ordered (numbered) list. Supports `type="1\|A\|a\|I\|i"`, `start="N"`, and `reversed` attribute. |
| `<li> … </li>` | An individual list item. Used inside both `<ul>` and `<ol>`.                                     |
| `<dl> … </dl>` | Description list — semantically pairs terms with their definitions.                              |
| `<dt> … </dt>` | A term in a `<dl>`.                                                                              |
| `<dd> … </dd>` | The description/definition for the preceding `<dt>`.                                             |

> **Accessibility note:** Browsers sometimes strip list semantics from `<ul>` and `<ol>` when `list-style: none` is applied via CSS. Add `role="list"` to preserve the semantic meaning if you remove default list styles.

---

## 9. Forms & Inputs

### The `<form>` Element

| Attribute                | Description                                                                                                                           |
| :----------------------- | :------------------------------------------------------------------------------------------------------------------------------------ |
| `action="url"`           | URL where form data is sent on submission. Omit for same-page handling via JS.                                                        |
| `method="GET\|POST"`     | HTTP method. Use `POST` for sensitive data or large payloads. `GET` appends data to the URL.                                          |
| `enctype=""`             | Encoding type. **Must be `multipart/form-data`** when the form includes file uploads. `application/x-www-form-urlencoded` is default. |
| `target=""`              | Where the response renders: `_self` (default), `_blank`, `_parent`, `_top`.                                                           |
| `autocomplete="on\|off"` | Enables or disables browser autocomplete for the entire form.                                                                         |
| `novalidate`             | Disables the browser's built-in HTML5 constraint validation. Useful when using custom JS validation.                                  |

### The `<input>` Element

| Attribute                                                          | Description                                                                                               |
| :----------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------- |
| `type=""`                                                          | **Required.** Declares input type (see full list below). Defaults to `text` if omitted.                   |
| `name=""`                                                          | Key name sent with form data. Required for the field to be included in submission.                        |
| `id=""`                                                            | Unique identifier. Must match the `for` attribute on the associated `<label>`.                            |
| `value=""`                                                         | Current/default value.                                                                                    |
| `placeholder=""`                                                   | Hint text shown in empty fields. Not a substitute for `<label>`.                                          |
| `required`                                                         | Field must be filled before form submission.                                                              |
| `disabled`                                                         | Disables the field. Not submitted with the form.                                                          |
| `readonly`                                                         | Field is visible but not editable. Value **is** submitted.                                                |
| `autofocus`                                                        | Auto-focuses this field on page load. Use on at most one element per page.                                |
| `autocomplete="on\|off\|email\|new-password\|current-password\|…"` | Controls browser autocomplete behavior for this field. `new-password` prevents managers from autofilling. |
| `maxlength=""` / `minlength=""`                                    | Maximum / minimum number of characters allowed.                                                           |
| `min=""` / `max=""` / `step=""`                                    | Range constraints and increment steps for numeric, range, and date inputs.                                |
| `pattern=""`                                                       | A regular expression the value must match (e.g., `pattern="[A-Za-z]{3,10}"`).                             |
| `multiple`                                                         | Allows multiple values. Used on `email` (comma-separated) and `file` inputs.                              |
| `accept=""`                                                        | Restricts file types for `type="file"` (e.g., `accept="image/*,.pdf"`).                                   |
| `capture="user\|environment"`                                      | On mobile, opens the front (`user`) or rear (`environment`) camera for `type="file"`.                     |
| `list="datalist-id"`                                               | Links input to a `<datalist>` element to show autocomplete suggestions.                                   |
| `inputmode=""`                                                     | Hints the virtual keyboard layout: `numeric`, `decimal`, `email`, `tel`, `url`, `search`, `none`.         |
| `enterkeyhint=""`                                                  | Customizes the Enter key label on virtual keyboards: `done`, `go`, `next`, `previous`, `search`, `send`.  |
| `spellcheck="true\|false"`                                         | Controls spell-checking on text inputs.                                                                   |
| `form="form-id"`                                                   | Associates the input with a `<form>` by ID. Allows inputs outside the form element.                       |

### Input Types — Complete List

| `type`              | Description                                                                                                               |
| :------------------ | :------------------------------------------------------------------------------------------------------------------------ |
| `text`              | Single-line text (default).                                                                                               |
| `password`          | Masked text entry.                                                                                                        |
| `email`             | Email with format validation. Triggers email keyboard on mobile.                                                          |
| `number`            | Numeric input. Supports `min`, `max`, `step`.                                                                             |
| `tel`               | Phone number. No format validation — triggers phone keyboard.                                                             |
| `url`               | URL with format validation.                                                                                               |
| `search`            | Search field. May show a clear (×) button.                                                                                |
| `date`              | Date picker (value: `YYYY-MM-DD`).                                                                                        |
| `time`              | Time picker (value: `HH:MM`).                                                                                             |
| `datetime-local`    | Combined date and time picker — no timezone.                                                                              |
| `month`             | Month and year picker.                                                                                                    |
| `week`              | Week and year picker.                                                                                                     |
| `color`             | Browser color picker. Value is a hex string (`#rrggbb`).                                                                  |
| `range`             | Slider for a numeric range. Use `min`, `max`, `step`.                                                                     |
| `checkbox`          | Toggleable checkbox. Use `checked` attribute for default state.                                                           |
| `radio`             | One-of-many selection. Group by sharing the same `name`.                                                                  |
| `file`              | File upload control. Add `multiple` for multiple files; `accept` to filter types.                                         |
| `hidden`            | Not displayed. Value is submitted silently (e.g., CSRF tokens, user IDs).                                                 |
| `submit`            | Submits the form. Displays button with `value` as label.                                                                  |
| `reset`             | Resets all form fields to defaults. Use rarely — frustrating for users.                                                   |
| `button`            | Generic button with no default behavior.                                                                                  |
| `image`             | A graphical submit button using a `src` image.                                                                            |
| `checkbox` (switch) | ⚗️ **Experimental.** `<input type="checkbox" switch>` renders a native toggle/switch UI in Safari. Not yet cross-browser. |

### Other Form Elements

| Tag                                                                   | Description                                                                                                                                |
| :-------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------- |
| `<label for="id"> … </label>`                                         | Labels a form control. `for` must match the control's `id`. Clicking the label focuses the control.                                        |
| `<textarea rows="" cols=""> … </textarea>`                            | Multi-line text input. Control resizing with CSS `resize: vertical\|none`.                                                                 |
| `<select name="" id=""> … </select>`                                  | Dropdown menu. Add `multiple` for multi-select; `size=""` to show N visible options.                                                       |
| `<option value=""> … </option>`                                       | An item inside `<select>` or `<datalist>`. Add `selected` for default.                                                                     |
| `<optgroup label=""> … </optgroup>`                                   | Groups related `<option>` elements under a non-selectable group label.                                                                     |
| `<datalist id=""> … </datalist>`                                      | Provides a list of predefined autocomplete suggestions for a linked `<input list="…">`.                                                    |
| `<selectedcontent> … </selectedcontent>`                              | ⚗️ **Experimental.** Mirrors the HTML of the selected `<option>` into the select button for customizable `<select>` elements. Chrome 135+. |
| `<fieldset> … </fieldset>`                                            | Groups related form controls. Renders with a visible border by default.                                                                    |
| `<legend> … </legend>`                                                | Heading/caption for a `<fieldset>`.                                                                                                        |
| `<button type="submit\|reset\|button"> … </button>`                   | A clickable button that can contain HTML. `type="button"` prevents accidental form submission.                                             |
| `<output for="…" name=""> … </output>`                                | Displays the result of a calculation or user action.                                                                                       |
| `<meter min="" max="" low="" high="" optimum="" value=""> … </meter>` | A scalar measurement within a known range (e.g., disk usage, battery level).                                                               |
| `<progress max="" value=""> … </progress>`                            | Progress of a task. Omit `value` for an indeterminate (animated) progress bar.                                                             |

> **Accessibility checklist for forms:**
>
> - Every `<input>` must have an associated `<label>`
> - Use `fieldset` + `legend` for groups of related controls (radio buttons, checkboxes)
> - Use `autocomplete` attributes to help users and password managers
> - Never rely solely on `placeholder` text as a label

---

## 10. Tables

Tables are for **tabular data only** — not for page layout.

| Tag                                                 | Description                                                                                           |
| :-------------------------------------------------- | :---------------------------------------------------------------------------------------------------- |
| `<table> … </table>`                                | Defines a data table.                                                                                 |
| `<caption> … </caption>`                            | Provides a title/description for the table. Placed immediately after `<table>`. Helps screen readers. |
| `<thead> … </thead>`                                | Groups header rows.                                                                                   |
| `<tbody> … </tbody>`                                | Groups the main body rows. Multiple `<tbody>` elements allowed.                                       |
| `<tfoot> … </tfoot>`                                | Groups footer rows (totals, summaries).                                                               |
| `<tr> … </tr>`                                      | A table row.                                                                                          |
| `<th scope="col\|row\|colgroup\|rowgroup"> … </th>` | A header cell. `scope` is critical for screen reader accessibility.                                   |
| `<td> … </td>`                                      | A standard data cell.                                                                                 |
| `colspan="N"`                                       | Makes the cell span N columns horizontally.                                                           |
| `rowspan="N"`                                       | Makes the cell span N rows vertically.                                                                |
| `<colgroup> … </colgroup>`                          | Groups columns for collective styling. Place after `<caption>` and before `<thead>`.                  |
| `<col span="N">`                                    | Represents one or more columns inside `<colgroup>`. Void element.                                     |

> **Accessibility requirements for tables:**
>
> - Always include `<caption>`
> - Use `<th scope="col">` for column headers and `<th scope="row">` for row headers
> - For complex tables, use `id`/`headers` attribute pairing

---

## 11. Multimedia & Embeds

### Video

| Attribute                        | Description                                                                         |
| :------------------------------- | :---------------------------------------------------------------------------------- |
| `src="url"`                      | Path to the video file. Alternatively use `<source>` children for multiple formats. |
| `controls`                       | Shows native browser playback controls (play, pause, volume, fullscreen).           |
| `autoplay`                       | Starts playing immediately. **Requires `muted`** to work in most browsers.          |
| `muted`                          | Mutes audio by default. Required for `autoplay` in Chrome, Firefox, Safari.         |
| `loop`                           | Loops the video indefinitely.                                                       |
| `poster="url"`                   | An image shown before playback starts (thumbnail).                                  |
| `preload="auto\|metadata\|none"` | Hints how much to preload. `metadata` loads just duration/dimensions.               |
| `playsinline`                    | Plays inline on iOS instead of entering fullscreen. Essential for mobile video.     |
| `width=""` / `height=""`         | Dimensions in pixels. Specify to prevent layout shift.                              |
| `crossorigin`                    | Enables CORS for the video. Required for use in `<canvas>`.                         |

### Audio

Shares most attributes with `<video>` but without `poster`, `playsinline`, and `width`/`height`.

### `<source>` Element

```html
<video controls poster="thumbnail.jpg" width="1280" height="720">
  <source src="video.webm" type="video/webm" />
  <source src="video.mp4" type="video/mp4" />
  <p>
    Your browser doesn't support HTML video.
    <a href="video.mp4">Download it</a>.
  </p>
</video>
```

### `<track>` Element

| Attribute                                                      | Description                                                                          |
| :------------------------------------------------------------- | :----------------------------------------------------------------------------------- |
| `kind="subtitles\|captions\|descriptions\|chapters\|metadata"` | Type of text track. `captions` includes sound effects; `subtitles` is dialogue only. |
| `src="file.vtt"`                                               | Path to a WebVTT (.vtt) file.                                                        |
| `srclang="en"`                                                 | Language of the track. Required when `kind="subtitles"`.                             |
| `label="English"`                                              | User-visible label in the browser's caption menu.                                    |
| `default`                                                      | Enables this track by default if no user preference is set.                          |

### Embedding

| Tag                                        | Description                                                                                           |
| :----------------------------------------- | :---------------------------------------------------------------------------------------------------- |
| `<iframe src="url"> … </iframe>`           | Embeds another HTML document. Used for YouTube, Google Maps, Figma embeds, etc.                       |
| `sandbox="allow-scripts allow-forms …"`    | Applies security restrictions to the iframe. Use the minimum permissions needed.                      |
| `loading="lazy"`                           | Defers iframe loading until near-viewport. Works on all major browsers.                               |
| `allow="camera; microphone; fullscreen"`   | Feature Policy — grants permissions to embedded content.                                              |
| `referrerpolicy=""`                        | Controls how much referrer info is passed to the embedded document.                                   |
| `title="description"`                      | **Required for accessibility.** Describes the iframe content for screen readers.                      |
| `<embed src="url" type="…">`               | Embeds external plugin content. Largely obsolete — prefer `<video>`, `<audio>`, or `<iframe>`.        |
| `<object data="url" type="…"> … </object>` | Embeds external resources (PDFs, SVGs). Fallback content inside is shown if the object fails to load. |

### Graphics

| Tag                                             | Description                                                                                                               |
| :---------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------ |
| `<canvas id="" width="" height=""> … </canvas>` | A drawing surface for 2D/3D graphics via JavaScript (Canvas 2D API, WebGL, WebGPU).                                       |
| `<svg> … </svg>`                                | Inline SVG vector graphics. Resolution-independent, styleable with CSS, and animatable. Best for icons and illustrations. |

---

## 12. HTML5 Semantic & Structural Tags

> **Why use semantic tags?** Browsers, search engines, and assistive technologies all understand the page structure without extra ARIA annotations when you use the right semantic element.

| Tag                                               | Description                                                                                                                              |
| :------------------------------------------------ | :--------------------------------------------------------------------------------------------------------------------------------------- |
| `<header> … </header>`                            | Introductory content for a page or section (logo, site name, main nav, hero). ≠ `<head>`.                                                |
| `<footer> … </footer>`                            | Footer of the page or a section (copyright, secondary nav, contact info).                                                                |
| `<main> … </main>`                                | The dominant, unique content of the `<body>`. **Use only one `<main>` per page.** Landmark for screen readers.                           |
| `<nav> … </nav>`                                  | A section with navigation links. A page can have multiple `<nav>` elements (primary, breadcrumb, footer nav).                            |
| `<section> … </section>`                          | A standalone thematic section. Should include a heading (`<h2>`–`<h6>`).                                                                 |
| `<article> … </article>`                          | Self-contained, independently distributable content (blog post, comment, product card, news item).                                       |
| `<aside> … </aside>`                              | Content tangentially related to the surrounding content — sidebar, pull quote, related links, ad.                                        |
| `<figure> … </figure>`                            | Self-contained content referenced from the main flow (image, chart, diagram, code block).                                                |
| `<figcaption> … </figcaption>`                    | Caption or description for the parent `<figure>`.                                                                                        |
| `<search> … </search>`                            | 🆕 **Baseline 2024.** A search landmark wrapping a search form. Replace generic `<div class="search">` with this.                        |
| `<details> … </details>`                          | Disclosure widget — content is hidden by default; toggles open on click. No JavaScript required.                                         |
| `<summary> … </summary>`                          | The visible clickable heading for a `<details>` element. Clicking it toggles the rest of `<details>`.                                    |
| `<dialog> … </dialog>`                            | A native dialog or modal. Open with `.show()` (non-modal) or `.showModal()` (modal with backdrop). Supports `::backdrop` pseudo-element. |
| `<menu> … </menu>`                                | An unordered list of interactive items (toolbar, context menu).                                                                          |
| `<mark> … </mark>`                                | Highlighted text — used for search result highlights, relevant passages.                                                                 |
| `<time datetime="2026-04-22T14:00"> … </time>`    | Human-readable date/time. `datetime` provides ISO 8601 machine-readable value.                                                           |
| `<address> … </address>`                          | Contact information for the author/owner of the nearest `<article>` or the document body.                                                |
| `<progress max="100" value="70"> … </progress>`   | Completion progress bar. Omit `value` for indeterminate (loading animation).                                                             |
| `<meter min="0" max="100" value="70"> … </meter>` | Scalar gauge within a known range. Not for progress — use for storage, ratings, scores.                                                  |
| `<template> … </template>`                        | Inert HTML not rendered until cloned with JavaScript (`content.cloneNode(true)`). Core to Web Components.                                |
| `<slot name="…"> … </slot>`                       | Placeholder in a Web Component shadow DOM. Lets users inject their own markup at that position.                                          |

### Newly Available (2025–2026)

| Feature                               | Tag / Attribute                                                                                   | Description                                                                                                                                                       |
| :------------------------------------ | :------------------------------------------------------------------------------------------------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 🆕 Invoker Commands                   | `commandfor="id"` on `<button>`                                                                   | Turns the button into a declarative invoker that controls another element. **Baseline Dec 2025.**                                                                 |
| 🆕 Invoker Commands                   | `command="show-modal\|close\|toggle-popover\|show-popover\|hide-popover\|--custom"` on `<button>` | Declares the action to perform on the target element — **no JavaScript needed** for built-in commands.                                                            |
| 🆕 Popover API                        | `popover="auto\|manual\|hint"`                                                                    | Marks an element as a popover. `auto` supports light-dismiss; `hint` (Chrome 133+) is for hover tooltips; `manual` requires explicit JS. **Baseline April 2024.** |
| 🆕 Dialog `requestClose()`            | JS: `dialog.requestClose()`                                                                       | Requests closure of a modal dialog — triggers the `cancel` event, allowing the closure to be prevented. **Baseline May 2025.**                                    |
| 🆕 `contenteditable="plaintext-only"` | `contenteditable="plaintext-only"`                                                                | Makes the element editable but strips all HTML formatting on paste. Cleaner than `"true"`. **Baseline 2025.**                                                     |
| ⚗️ `<selectedcontent>`                | `<selectedcontent>`                                                                               | Mirrors the HTML content of the selected `<option>` inside a customizable `<select>` button. Chrome 135+.                                                         |

#### Invoker Commands — Quick Reference

```html
<!-- Open a modal dialog — no JavaScript needed -->
<button type="button" commandfor="my-dialog" command="show-modal">
  Open Dialog
</button>
<dialog id="my-dialog">
  <p>Dialog content here.</p>
  <button type="button" commandfor="my-dialog" command="close">Close</button>
</dialog>

<!-- Toggle a popover — no JavaScript needed -->
<button type="button" commandfor="my-popover" command="toggle-popover">
  Toggle Popover
</button>
<div id="my-popover" popover>
  <p>Popover content.</p>
  <button type="button" commandfor="my-popover" command="hide-popover">
    Close
  </button>
</div>

<!-- Custom command — JavaScript needed for the behavior -->
<button type="button" commandfor="my-img" command="--rotate-right">
  Rotate
</button>
<img id="my-img" src="photo.jpg" alt="Photo" />
<script>
  document.getElementById("my-img").addEventListener("command", (e) => {
    if (e.command === "--rotate-right") e.target.style.rotate = "90deg";
  });
</script>
```

> **Migration note:** `commandfor`/`command` supersede `popovertarget`/`popovertargetaction` and also work for `<dialog>`. When both are present, `commandfor` takes precedence. The older `popovertarget` still works and won't be removed.

---

## 13. Global Attributes

Global attributes can be applied to **any** HTML element.

| Attribute                                                           | Description                                                                                                                                                                                    |
| :------------------------------------------------------------------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id="unique-name"`                                                  | Unique identifier. Used for CSS targeting, JS queries (`#id`), and in-page anchor links. Must be unique per page.                                                                              |
| `class="name1 name2"`                                               | One or more space-separated class names. The primary hook for CSS and JS targeting.                                                                                                            |
| `style="property: value"`                                           | Inline CSS. Use sparingly — prefer classes and external stylesheets.                                                                                                                           |
| `title="text"`                                                      | Advisory tooltip text shown on hover. Not a substitute for `aria-label`.                                                                                                                       |
| `lang="en"`                                                         | Language of the element's content. Overrides `<html lang="">` for that subtree.                                                                                                                |
| `dir="ltr\|rtl\|auto"`                                              | Text direction. `auto` detects from content — useful for user-submitted multilingual text.                                                                                                     |
| `tabindex="0\|-1\|N"`                                               | Controls keyboard focus order. `0` = natural order; `-1` = JS-focusable only; positive integers set explicit order (avoid).                                                                    |
| `hidden`                                                            | Hides the element from all output modes — visual, screen reader, and search. Stronger than CSS `display: none` semantically.                                                                   |
| `inert`                                                             | 🆕 **Baseline 2023.** Makes the element and **all descendants** non-interactive, non-focusable, and invisible to the accessibility tree. Ideal for inactive modal layers and multi-step flows. |
| `data-*="value"`                                                    | Custom data attributes. Access via `element.dataset.*` in JavaScript. Name: `data-` + lowercase letters, no uppercase.                                                                         |
| `contenteditable="true\|false\|plaintext-only"`                     | Makes the element editable. `plaintext-only` strips formatting on paste. 🆕 **`plaintext-only` is Baseline 2025.**                                                                             |
| `draggable="true\|false"`                                           | Makes the element draggable via the HTML Drag and Drop API.                                                                                                                                    |
| `spellcheck="true\|false"`                                          | Enables/disables spell checking on editable content.                                                                                                                                           |
| `translate="yes\|no"`                                               | Hints whether the text should be translated by browser translation tools.                                                                                                                      |
| `accesskey="char"`                                                  | A keyboard shortcut to focus/activate the element. Browser-dependent — use cautiously.                                                                                                         |
| `autocapitalize="off\|sentences\|words\|characters"`                | Controls text capitalization on virtual keyboards (touch devices).                                                                                                                             |
| `enterkeyhint="done\|go\|next\|previous\|search\|send"`             | Customizes the Enter key label on virtual keyboards.                                                                                                                                           |
| `inputmode="text\|numeric\|decimal\|email\|tel\|url\|search\|none"` | Hints which virtual keyboard to display. Works on any focusable element, not just `<input>`.                                                                                                   |
| `is="custom-element-name"`                                          | Extends a native HTML element with a registered custom element.                                                                                                                                |
| `nonce="…"`                                                         | A cryptographic nonce for Content Security Policy (CSP).                                                                                                                                       |
| `popover="auto\|manual\|hint"`                                      | 🆕 **Baseline 2024.** Designates the element as a popover.                                                                                                                                     |
| `popovertarget="id"`                                                | 🆕 On `<button>`: points to a popover element to control. Superseded by `commandfor` but still valid.                                                                                          |
| `popovertargetaction="toggle\|show\|hide"`                          | 🆕 Action for `popovertarget`. Superseded by `command`.                                                                                                                                        |
| `commandfor="id"`                                                   | 🆕 **Baseline Dec 2025.** On `<button>`: the ID of the element to control. More powerful than `popovertarget`.                                                                                 |
| `command="…"`                                                       | 🆕 **Baseline Dec 2025.** On `<button>`: the action to invoke on the `commandfor` target.                                                                                                      |
| `exportparts="…"`                                                   | Exposes shadow DOM parts for styling from outside the Web Component.                                                                                                                           |
| `part="name"`                                                       | Marks the element as a stylable part of a Web Component (targetable with `::part(name)`).                                                                                                      |
| `slot="name"`                                                       | Assigns the element to a named slot inside a Web Component.                                                                                                                                    |

---

## 14. ARIA Accessibility Attributes

ARIA (Accessible Rich Internet Applications) fills gaps where native HTML semantics are insufficient — primarily for custom widgets and live regions. **Always prefer native HTML elements over ARIA equivalents.**

> **The first rule of ARIA:** Don't use ARIA if native HTML can do the job.
> `<button>` is always better than `<div role="button">`.

### Landmark Roles

| `role` Value    | Description                                    | Native equivalent                     |
| :-------------- | :--------------------------------------------- | :------------------------------------ |
| `banner`        | Site header.                                   | `<header>` (direct child of `<body>`) |
| `navigation`    | Navigation region.                             | `<nav>`                               |
| `main`          | Main content.                                  | `<main>`                              |
| `complementary` | Supporting content.                            | `<aside>`                             |
| `contentinfo`   | Page footer.                                   | `<footer>` (direct child of `<body>`) |
| `search`        | Search region.                                 | `<search>`                            |
| `form`          | A form region.                                 | `<form>` with `aria-label`            |
| `region`        | Generic landmark — use with `aria-labelledby`. | `<section>` with a heading            |

### Widget Roles (when building custom interactive elements)

`button`, `checkbox`, `combobox`, `dialog`, `grid`, `link`, `listbox`, `menu`, `menuitem`, `option`, `progressbar`, `radio`, `radiogroup`, `scrollbar`, `searchbox`, `slider`, `spinbutton`, `switch`, `tab`, `tablist`, `tabpanel`, `textbox`, `tooltip`, `tree`, `treeitem`

### Common ARIA State & Property Attributes

| Attribute                                                    | Description                                                                                               |
| :----------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------- |
| `aria-label="text"`                                          | Provides an accessible name where there is no visible text label (icon buttons, landmarks).               |
| `aria-labelledby="id"`                                       | References another visible element's text as the accessible name.                                         |
| `aria-describedby="id"`                                      | References an element providing additional descriptive context.                                           |
| `aria-hidden="true"`                                         | Hides element from accessibility tree. Use on decorative icons and duplicated content.                    |
| `aria-expanded="true\|false"`                                | State of a collapsible: accordion, menu, disclosure.                                                      |
| `aria-selected="true\|false"`                                | Selected state of tabs, options in a listbox.                                                             |
| `aria-checked="true\|false\|mixed"`                          | State of checkboxes and switches. `mixed` for indeterminate state.                                        |
| `aria-pressed="true\|false\|mixed"`                          | Toggle button state (e.g., bold button in a text editor).                                                 |
| `aria-disabled="true\|false"`                                | Marks as disabled without removing it from the accessibility tree.                                        |
| `aria-live="polite\|assertive\|off"`                         | Announces dynamic content changes. `polite` waits for user to finish; `assertive` interrupts immediately. |
| `aria-atomic="true\|false"`                                  | When `true`, the entire live region is announced, not just the changed portion.                           |
| `aria-required="true"`                                       | Marks a form field as required. Supplement native `required` for custom controls.                         |
| `aria-invalid="true\|false\|grammar\|spelling"`              | Indicates the current value is invalid.                                                                   |
| `aria-current="page\|step\|location\|date\|time\|true"`      | Marks the current item in a set (current page in nav, current step in a wizard).                          |
| `aria-controls="id"`                                         | Identifies the element(s) controlled by the current element.                                              |
| `aria-haspopup="menu\|listbox\|tree\|grid\|dialog\|true"`    | Indicates the element triggers a popup.                                                                   |
| `aria-busy="true\|false"`                                    | Marks an area being updated (loading state).                                                              |
| `aria-valuemin=""` / `aria-valuemax=""` / `aria-valuenow=""` | Current and boundary values for sliders and progress indicators.                                          |
| `aria-valuetext=""`                                          | Human-readable text alternative to `aria-valuenow` (e.g., "25% complete").                                |
| `aria-modal="true"`                                          | Tells assistive technologies that the element is a modal — restricts focus to inside it.                  |
| `aria-readonly="true"`                                       | Marks an element as read-only to assistive technologies.                                                  |
| `aria-multiselectable="true"`                                | Indicates multiple items can be selected (listbox, grid).                                                 |
| `aria-orientation="horizontal\|vertical"`                    | Indicates the orientation of a widget (tabs, sliders, toolbars).                                          |
| `aria-placeholder="text"`                                    | Placeholder hint for custom input widgets.                                                                |
| `aria-autocomplete="none\|inline\|list\|both"`               | Describes autocomplete behavior of comboboxes.                                                            |
| `aria-setsize=""` / `aria-posinset=""`                       | Total items in a set / position of this item. Used in virtual-scroll lists.                               |
| `aria-rowcount=""` / `aria-colcount=""`                      | Total rows/columns in a grid when not all are rendered.                                                   |

---

## 15. Event Attributes — Inline Reference

> **Best practice:** Use `addEventListener()` in JavaScript. Inline event attributes (`onclick="…"`) are valid but harder to maintain, cannot be removed with `removeEventListener`, and violate Content Security Policy (CSP) in many setups.

| Attribute                                               | Fires When                                                                                                |
| :------------------------------------------------------ | :-------------------------------------------------------------------------------------------------------- |
| `onclick`                                               | Element is clicked (left mouse button).                                                                   |
| `ondblclick`                                            | Element is double-clicked.                                                                                |
| `oncontextmenu`                                         | Right-click context menu is triggered.                                                                    |
| `onmousedown` / `onmouseup`                             | Mouse button is pressed / released.                                                                       |
| `onmouseover` / `onmouseout`                            | Pointer moves over / exits element (bubbles).                                                             |
| `onmouseenter` / `onmouseleave`                         | Pointer enters / exits element (does not bubble).                                                         |
| `onmousemove`                                           | Pointer moves within the element.                                                                         |
| `onkeydown` / `onkeyup`                                 | Key is pressed / released.                                                                                |
| `onkeypress`                                            | Key is pressed (deprecated — use `onkeydown`).                                                            |
| `onfocus` / `onblur`                                    | Element gains / loses focus (does not bubble).                                                            |
| `onfocusin` / `onfocusout`                              | Focus gained / lost (bubbles — useful for event delegation).                                              |
| `oninput`                                               | Value changes in real-time (`<input>`, `<textarea>`, `contenteditable`).                                  |
| `onchange`                                              | Value is committed (fires on blur for text; fires immediately for checkboxes/selects).                    |
| `onsubmit`                                              | Form is submitted.                                                                                        |
| `onreset`                                               | Form is reset.                                                                                            |
| `onselect`                                              | Text is selected inside `<input>` or `<textarea>`.                                                        |
| `onload`                                                | Resource (page, `<img>`, `<iframe>`, `<script>`) finishes loading.                                        |
| `onunload`                                              | Page is unloaded.                                                                                         |
| `onbeforeunload`                                        | Page is about to unload (can prompt user to confirm).                                                     |
| `onresize`                                              | Browser window is resized (`window` only).                                                                |
| `onscroll`                                              | Element or page is scrolled.                                                                              |
| `onscrollend`                                           | 🆕 **Baseline 2025.** Scroll has come to rest. Preferred over throttled `onscroll` for post-scroll logic. |
| `onerror`                                               | A resource fails to load or a script error occurs.                                                        |
| `onabort`                                               | A resource load is aborted.                                                                               |
| `onplay` / `onpause` / `onended`                        | Media starts / pauses / reaches the end.                                                                  |
| `onvolumechange`                                        | Volume or mute state changes on `<audio>` / `<video>`.                                                    |
| `ontimeupdate`                                          | Playback position changes (`<audio>`, `<video>`).                                                         |
| `oncanplay` / `oncanplaythrough`                        | Media is ready to play / can play to end without buffering.                                               |
| `ondragstart` / `ondrag` / `ondragend`                  | Drag starts / is in progress / ends on the dragged element.                                               |
| `ondragenter` / `ondragover` / `ondragleave` / `ondrop` | Drag-and-drop target events. `ondragover` must call `preventDefault()` to allow drops.                    |
| `ontoggle`                                              | `<details>` element is opened or closed.                                                                  |
| `onbeforetoggle`                                        | 🆕 `<details>` or popover is about to open or close. Fires before visual change.                          |

---

## 16. Character Entities

Use named entities for readability, numeric entities when no named form exists.

| Character               | Symbol | Named Entity | Numeric Entity |
| :---------------------- | :----: | :----------- | :------------- |
| Ampersand               |   &    | `&amp;`      | `&#38;`        |
| Less-than sign          |   <    | `&lt;`       | `&#60;`        |
| Greater-than sign       |   >    | `&gt;`       | `&#62;`        |
| Quotation mark          |   "    | `&quot;`     | `&#34;`        |
| Apostrophe              |   '    | `&apos;`     | `&#39;`        |
| Non-breaking space      |        | `&nbsp;`     | `&#160;`       |
| Thin non-breaking space |        | `&nnbsp;`    | `&#8239;`      |
| Copyright               |   ©    | `&copy;`     | `&#169;`       |
| Registered trademark    |   ®    | `&reg;`      | `&#174;`       |
| Trademark               |   ™    | `&trade;`    | `&#8482;`      |
| Em dash                 |   —    | `&mdash;`    | `&#8212;`      |
| En dash                 |   –    | `&ndash;`    | `&#8211;`      |
| Horizontal ellipsis     |   …    | `&hellip;`   | `&#8230;`      |
| Bullet                  |   •    | `&bull;`     | `&#8226;`      |
| Middle dot / interpunct |   ·    | `&middot;`   | `&#183;`       |
| Section sign            |   §    | `&sect;`     | `&#167;`       |
| Degree symbol           |   °    | `&deg;`      | `&#176;`       |
| Multiplication sign     |   ×    | `&times;`    | `&#215;`       |
| Division sign           |   ÷    | `&divide;`   | `&#247;`       |
| Plus-minus              |   ±    | `&plusmn;`   | `&#177;`       |
| Left angle guillemet    |   «    | `&laquo;`    | `&#171;`       |
| Right angle guillemet   |   »    | `&raquo;`    | `&#187;`       |
| Left single quote       |   '    | `&lsquo;`    | `&#8216;`      |
| Right single quote      |   '    | `&rsquo;`    | `&#8217;`      |
| Left double quote       |   "    | `&ldquo;`    | `&#8220;`      |
| Right double quote      |   "    | `&rdquo;`    | `&#8221;`      |
| Euro                    |   €    | `&euro;`     | `&#8364;`      |
| Pound sterling          |   £    | `&pound;`    | `&#163;`       |
| Yen / yuan              |   ¥    | `&yen;`      | `&#165;`       |
| Cent                    |   ¢    | `&cent;`     | `&#162;`       |
| At sign                 |   @    | —            | `&#64;`        |
| Infinity                |   ∞    | `&infin;`    | `&#8734;`      |
| Check mark              |   ✓    | —            | `&#10003;`     |
| Heavy check mark        |   ✔    | —            | `&#10004;`     |
| Ballot X                |   ✗    | —            | `&#10007;`     |

---

## 17. Deprecated & Removed Tags

These tags were deprecated in HTML5 or removed entirely. **Do not use them in new code.** Modern CSS handles everything they once did.

| Deprecated Tag                                   | Why Removed                                | Modern Replacement                              |
| :----------------------------------------------- | :----------------------------------------- | :---------------------------------------------- |
| `<center>`                                       | Presentational                             | `text-align: center` or `margin: 0 auto` in CSS |
| `<font face="" size="" color="">`                | Presentational                             | CSS `font-family`, `font-size`, `color`         |
| `<big>`                                          | Presentational                             | CSS `font-size`                                 |
| `<tt>`                                           | Presentational                             | `<code>`, `<kbd>`, or `<samp>` semantically     |
| `<strike>`                                       | Replaced                                   | `<s>` (relevance) or `<del>` (deletion)         |
| `<acronym>`                                      | Redundant                                  | `<abbr>`                                        |
| `<dir>`                                          | Redundant                                  | `<ul>`                                          |
| `<marquee>`                                      | Presentational / accessibility             | CSS `animation` or `@keyframes`                 |
| `<blink>`                                        | Presentational / accessibility             | CSS `animation`                                 |
| `<frame>`, `<frameset>`, `<noframes>`            | Architectural                              | `<iframe>` or modern SPA routing                |
| `<applet>`                                       | Plugin-dependent                           | `<object>` or modern Web APIs                   |
| `<basefont>`                                     | Presentational                             | CSS on `body` or `:root`                        |
| `<isindex>`                                      | Replaced                                   | `<input type="search">`                         |
| `border=""` on `<img>`                           | Presentational                             | CSS `border`                                    |
| `align=""` on block elements                     | Presentational                             | CSS `text-align`, Flexbox, Grid                 |
| `bgcolor=""`                                     | Presentational                             | CSS `background-color`                          |
| `cellpadding=""` / `cellspacing=""` on `<table>` | Presentational                             | CSS `padding` and `border-spacing`              |
| `width=""` / `height=""` on most elements        | Presentational (except `<img>`, `<video>`) | CSS `width`, `height`                           |
| `hspace=""` / `vspace=""` on `<img>`             | Presentational                             | CSS `margin`                                    |
| `<rb>`                                           | Removed from spec                          | Use `<ruby>` + `<rt>` directly                  |
| `<keygen>`                                       | Removed                                    | Web Crypto API                                  |
| `<menuitem>`                                     | Removed                                    | No standard replacement                         |

---

## Quick Reference — New in This Edition vs 2025

| Feature                                        | Status               | Where     |
| :--------------------------------------------- | :------------------- | :-------- |
| Invoker Commands API (`commandfor`, `command`) | 🆕 Baseline Dec 2025 | §12 + §13 |
| `dialog.requestClose()`                        | 🆕 Baseline May 2025 | §12       |
| `contenteditable="plaintext-only"`             | 🆕 Baseline 2025     | §13       |
| `popover="hint"` (hover tooltips)              | 🆕 Chrome 133+       | §13       |
| `<selectedcontent>` element                    | ⚗️ Experimental      | §9        |
| `scrollend` event                              | 🆕 Baseline 2025     | §15       |
| `onbeforetoggle` event                         | 🆕 Baseline 2025     | §15       |
| `<link rel="dns-prefetch">`                    | 🆕 Baseline 2025     | §2        |
| `blocking="render"` on `<script>`              | Added                | §2        |
| `capture="user\|environment"` on `<input>`     | Added                | §9        |
| Expanded ARIA reference (30+ attributes)       | Expanded             | §14       |
| Landmark roles table                           | New                  | §14       |
| `elementtiming` on `<img>`                     | Added                | §7        |

---

_Last updated: April 22, 2026_
_Sources: HTML Living Standard (WHATWG), MDN Web Docs, web.dev Baseline 2025, Chrome Dev, InfoQ_
