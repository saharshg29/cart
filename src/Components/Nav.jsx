import React from "react";

export default function Nav() {
  return (
    <>
      <nav className="nav mt-3">
        <span className="nav-link active">Active</span>
        <span className="nav-link">Link</span>
        <span className="nav-link">Link</span>
        <span className="nav-link disabled">Disabled</span>
        <button type="button" className="btn btn-primary position-relative d-flex">
          Inbox
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
           
            <span className="visually-hidden">unread messages</span>
          </span>
        </button>
      </nav>
    </>
  );
}
