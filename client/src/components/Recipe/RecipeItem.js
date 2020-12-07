import React from "react";

const RecipeItem = ({ _iid, name, category }) => {
  return (
    <div>
      <li>
        <h4>{name}</h4>
        <p>
          <strong>{category}</strong>
        </p>
      </li>
    </div>
  );
};

export default RecipeItem;
