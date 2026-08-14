import { Link } from "react-router-dom";

function Categories() {
  return (
    <div>
      <h2>Browse Job Categories</h2>

      <p>
        Select a category to explore available opportunities.
      </p>

      <div className="category-list">
        <Link to="/jobs/categories/frontend">
          Frontend Development
        </Link>

        <Link to="/jobs/categories/backend">
          Backend Development
        </Link>

        <Link to="/jobs/categories/devops">
          DevOps & Cloud
        </Link>
      </div>
    </div>
  );
}

export default Categories;