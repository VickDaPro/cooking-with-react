import React from "react";

export default function Recipe() {
  return (
    <div>
      <div>
        <h3>Plain Dosa</h3>
        <div>
          <button>Edit</button>
          <button>Delete</button>
        </div>
        <div>
          <span>Cook time</span>
          <span>15</span>
        </div>
        <div>
          <span>Servings</span>
          <span>3</span>
        </div>
        <div>
          <span>Ingredients</span>
          <div>1. Make the dosa batter. 2. Cook the dosa. 3. Eat the dosa.</div>
        </div>
      </div>
    </div>
  );
}
