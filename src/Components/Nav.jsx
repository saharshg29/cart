import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


export default function Nav() {
  const navigate = useNavigate();
  const selected = useSelector(store => store.todo.selected)
  console.log(selected)
  return (
    <>
      <nav className="nav mt-3">
        <span className="nav-link active">Active</span>
        <span className="nav-link">Link</span>
        <span className="nav-link">Link</span>
        <span className="nav-link disabled">Disabled</span>
        <button
          type="button"
          onClick={() => navigate("/cart")}
          className="btn btn-primary position-relative d-flex"
        >
          Cart
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {selected.length}
            <span className="visually-hidden">unread messages</span>
          </span>
        </button>
      </nav>
    </>
  );
}
