import React from "react";
import { connect } from "react-redux";
import Search from "../components/Search";
import List from "../components/List";
import { searchAuthorBooks } from "../store/reducers";

function App({ bookTitles, numFound, isLoading, onSearchBooks }) {
  const handleSearchAuthor = (search) => {
    onSearchBooks(search);
  };

  return (
    <div style={{ margin: 30 }}>
      <Search onSearch={handleSearchAuthor} isLoading={isLoading} />
      <List titles={bookTitles} numFound={numFound} />
    </div>
  );
}

const mapStateToProps = (state) => {
  const { apiStatus, bookTitles, numFound } = state;

  return {
    isLoading: apiStatus === "pending",
    bookTitles,
    numFound,
  };
};

export default connect(mapStateToProps, { onSearchBooks: searchAuthorBooks })(
  App
);
