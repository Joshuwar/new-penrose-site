Penrose website
===============

Install dependencies
---------------------
```
npm install
```

Usage
-----

This project allows for the development of a HTML/CSS stylebook, with website pages assembled from snippets of the stylebook.

* Develop in the `src` directory.
* The `src/partials` folder contains snippets of reusable HTML that can be used in website pages
* the `src/templates` folder container Handlerbars templates that will be turned into website pages

Run gulp watch` to build and launch the server. Visit `http://localhost:8000` to see the stylebook. The website pages are placed at `http://localhost:8000/pages/` with their `.hbs` file extension converted to `.html` e.g. `src/templates/news.hbs` -> `http://localhost:8000/pages/news.html`
