import React from "react";

function List({ titles, numFound }) {
  if (titles.length === 0) return null;

  return (
    <div>
      <p>Number of results: {numFound}</p>
      <p>Top {titles.length} titles:</p>
      <ul>
        {titles.map((title) => (
          <li key={title}>{title}</li>
        ))}
      </ul>
    </div>
  );
}

List.defaultProps = {
  titles: [],
  numFound: 0,
};

export default List;
