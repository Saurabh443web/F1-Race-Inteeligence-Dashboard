# Formula 1 Race Intelligence Dashboard (2010-2026)

A black-and-red F1 analytics website built with plain HTML, CSS and JavaScript. No framework, no build step, no dependencies.

## Structure

```
f1-race-intelligence/
  index.html        page markup
  css/styles.css    all styling (black and red theme)
  js/data.js        drivers, teams, countries, circuits data
  js/main.js        charts, Top N slider, circuit search, story tabs
  assets/           put images such as the F1 logo here
```

## Run locally

Open `index.html` in a browser. For a local server, run one of:

```
python3 -m http.server 8000
```

then visit http://localhost:8000. In VS Code, the Live Server extension also works.

Fonts (Orbitron, Inter) load from Google Fonts, so an internet connection is needed to see them. Without it, fallback fonts are used.

## Update the data

Edit the arrays at the top of `js/data.js`. Driver points and country counts were read from the published Tableau dashboard, and team bars show relative order only.

## Publish on GitHub Pages

1. Create a repository and upload the contents of this folder.
2. Open Settings, then Pages.
3. Set the source to the main branch, root folder, and save.
