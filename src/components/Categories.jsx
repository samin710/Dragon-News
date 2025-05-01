import React, { use } from "react";
import { NavLink } from "react-router";

const categoryPromise = fetch("/categories.json").then((res) => res.json());
const Categories = () => {
  const categories = use(categoryPromise);
  // console.log(categories);
  return (
    <div>
      <h1 className="font-bold">All Categories</h1>
      <div className="grid grid-cols-1 gap-2 mt-5">
        {" "}
        {categories.map((category) => (
          <NavLink
            to={`/category/${category.id}`}
            className={({ isActive }) =>
              isActive
                ? "btn bg-base-300 "
                : "btn hover:bg-base-300 bg-white border-0 text-accent"
            }
            key={category.id}
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
