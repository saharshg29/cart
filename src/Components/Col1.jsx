import React from "react";

import { initialState } from "../constants";
let Card = initialState.Data;
let column1 = [];

for (let i = 0; i < Card.length; i += 3) {
  column1.push(Card[i]);
}

export default function Col1() {
  return (
    <>
      {column1.map((item) => {
        return (
          <>
            <div className="col">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src={item.thumbnailUrl}
                  className="card-img-top"
                  alt="something"
                />
                <div className="card-body">
                  <h5 className="card-title">{item.id}</h5>
                  <p className="card-text">{item.title}</p>
                  <a href="some" className="btn btn-primary">
                    Click Me
                  </a>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}
