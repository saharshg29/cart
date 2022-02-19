import React from "react";
let Data = require("../Store");

let Card = Data.Data;
let column2 = [];

for (let i = 1; i < Card.length; i += 3) {
  column2.push(Card[i]);
}

export default function Col2() {
  return (
    <>
      {column2.map((item) => {
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
                    Click Me{" "}
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
