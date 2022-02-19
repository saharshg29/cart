import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Nav() {
  const navigate = useNavigate();
  const selected = useSelector((store) => store.todo.selected);
  console.log(selected);
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <span onClick={() => navigate("/")} className="navbar-brand">
            Home
          </span>

          <button
            type="button"
            onClick={() => navigate("/cart")}
            className="btn btn-primary position-relative right-20 "
          >
            Cart
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {selected.length}
              <span className="visually-hidden">unread messages</span>
            </span>
          </button>
        </div>
      </nav>
    </>
  );
}
