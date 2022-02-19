import React from "react";
let Data = require("../Store");

let Card = Data.Data;
let column3 = [];

for (let i = 0; i < Card.length; i += 3) {
  column3.push(Card[i]);
}

export default function Col3() {
  return (
    <>
      {column3.map((item) => {
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
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">{}</p>
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
