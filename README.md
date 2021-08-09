# Conpago Coding Task - Front End

## Overview

Here is a demo of what the single page app should do once the this task is completed: https://vimeo.com/584754584

Create a single page app with React and Redux (for state management) that will query the openlibrary.org API to search books for a specified author. The app should list the number of results returned by the API, as well as list the top 10 book titles (the API endpoint will limit the results to 10).

Note: No styling is required, as we are only looking at how you implement the solution and not at the UI.

## Requirements

1. Create a new single page app with React (create-react-app) and setup Redux to handle the state of the app
2. Have a text box for the user to type in the author name
3. Have a search button for the user to submit to start the search
4. Show a "loading" text when the api is being queried
5. After a user types in an author name and presses the search button, do a GET request to the API to get the total number of results, as well as any book titles for the specified author (see API Details below).
6. Show the total number of results, as well as the book titles retrieved from the API on the page.

Note: Feel free to use any http client you’re comfortable with, e.g. axios, fetch etc.

## API Details

### Endpoint

The API endpoint is as follows:

```
https://openlibrary.org/search.json?limit=10&fields=title&author=AUTHOR_NAME_HERE
```

You will need to substitute in "AUTHOR_NAME_HERE" for the name of the author that the user is searching for. E.g. if the user is searching for the author name "tolkien", then the API endpoint becomes: https://openlibrary.org/search.json?limit=10&fields=title&author=tolkien.

You will need to do a GET request using the constructed endpoint to retrieve the search results.

### Response body

An example of the response body will look like the below. You will need the numFound and docs fields to complete this task.

```
{
    "numFound": 296,
    "start": 0,
    "numFoundExact": true,
    "docs": [
        { "title": "The Hobbit" },
        { "title": "The Fellowship of the Ring" },
        { "title": "The Two Towers" },
        { "title": "The Return of the King" },
        { "title": "The Lord of the Rings" },
        { "title": "The Silmarillion" },
        { "title": "Farmer Giles of Ham" },
        { "title": "The Book of Lost Tales, Part One" },
        { "title": "Unfinished tales of Numenor and Middle-earth" },
        { "title": "Narn i ch\u00een H\u00farin" }
    ],
    "num_found": 296,
    "q": "",
    "offset": null
}
```
