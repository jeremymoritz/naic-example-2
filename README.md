# NAIC template for creating Angular 2 apps

## How to use this:

1. Open a cmd terminal and navigate to the root directory
2. `npm install` - installs required node packages
3. `npm start` - does several things:
	1. Builds and compiles the `src` files into a `dist` directory
	2. Watches for changes for `src` changes and updates the `dist` directory on each one
	3. Starts a lite server to serve content from the `dist` directory
	4. Opens a browser tab to the app
	5. Watches the `dist` directory and refreshes the browser upon changes

## Workflow:

1. TEMPLATES (HTML)
	1. There are no .html files in `src` directory.
	2. Instead, make changes to Pug files (.pug) which are converted immediately to .html files in the `dist` directory
	3. Pug (formerly known as JADE) is easy to read and understand and is a more terse way to write HTML.
	4. Further questions about Pug can be answered online.
2. SCRIPTING (JavaScript)
	1. There are no .js files in `src` directory.
	2. Instead, make changes TypeScript files (.ts) which are converted immediately to .js files in the `dist` directory
	3. TypeScript is a strict superset of JavaScript.  This means all JavaScript is valid TypeScript already (i.e. any JavaScript file you already have can be safely renamed to have a .ts extension).
	4. TypeScript allows for strict typing and JavaScript classes and is the preferred standard for any code written in Angular 2 (i.e. nearly all supporting example code for Angular 2 is written in TypeScript, so it's easier to learn it than to fight it).
	5. Further questions about TypeScript can be answered online.
3. STYLING (CSS)
	1. There are no .css files in `src` directory.
	2. Instead, make changes Sass files (.scss) which are converted immediately to .css files in the `dist` directory
	3. Sass is a strict superset of CSS.  This means all CSS is valid Sass already (i.e. any CSS file you already have can be safely renamed to have a .scss extension).
	4. Further questions about Sass can be answered online.

## License
Not licensed for reuse except by NAIC employees and contractors.

<style>ol ol { list-style-type: lower-alpha; } and ol ol ol { list-style-type: lower-roman; }</style>
