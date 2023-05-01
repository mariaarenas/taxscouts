# taxscouts

- [General info](#general-info)
- [Technologies](#technologies)
- [Setup](#setup)
- [Features](#features)

## General info

This project is one-page application with a search engine to find items (books) by title.

## Technologies

Project is created with:

- React.js
- Redux (toolkit)/RTK
- Material UI
- Styled-components
- Testing libraries (Cypress)
- i18n

## Setup

To run this project:

- to run the client:

```
$ clone repo
$ cd taxscouts
$ cd client
$ npm install
$ npm start
```

- To run the client tests:
  with the client running, open a new console and

```
$ cd taxscouts
$ cd client
$ npx cypress open
```

Once the window test is open choose E2E Testing tab. Then choose a browser and click "start e2e testing" button. Look for the sample.cy.js file (usually at the bottom) and click on it. The test will start running.

## Features

- Translate icon with internationalisation implemented (English-Spanish)
- Search box to be able to filter by book title (with a customise limit of 10, sorted by editions and filter by language)
- Each item contains links to amazon when available
- E2E testing with cypress.
- Manage of state with Redux-toolkit to update search value and items displayed
- Use of Redux RTK query to manage cache to not duplicate requests when necessary
- Fully responsive
- Use of Styled components (based on figma wareframe) and MUI integration (with theme)
