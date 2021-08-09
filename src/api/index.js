const BASE_URL =
  "https://openlibrary.org/search.json?author=:AUTHOR_SEARCH&limit=10&fields=title";

const booksApi = {
  searchBooks: (author) => {
    const url = BASE_URL.replace(/:AUTHOR_SEARCH/, author);
    return fetch(url)
      .then((response) => {
        if (response.ok) return response.json();

        throw new Error("Unable to get books");
      })
      .then((data) => {
        console.log("data:", data);
        return data;
      });
  },
};

export default booksApi;
