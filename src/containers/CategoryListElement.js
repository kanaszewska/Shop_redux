import React from "react";

import "../styles/CategoryListElement.css";

const CategoryListElement = ({ handleSearch, element }) => {
  const { id } = element;

  return (
    <div className="list-element">
      <li className="elements" key={id} onClick={() => handleSearch(element)}>
        {element}
      </li>
    </div>
  );
};

export default CategoryListElement;
