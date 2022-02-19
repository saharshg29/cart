import React from "react";
let Data = require("../Store");
let Card = Data.Data;
export default function Cards() {
  return (
    <>
      {Card.map((item) => {
        return (
          <>
            <div className="col">
              <div className="card" style={{width: "18rem"}}>
                <img src={item.thumbnailUrl} className="card-img-top" alt="something" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    {}
                  </p>
                  <a href="some" className="btn btn-primary">
                    Go somewhere
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
