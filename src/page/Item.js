import React from "react";
import img from "../assets/Tiger.jpeg";
import { useSelector } from "react-redux";

const Item = () => {
  const { itemReducer } = useSelector((state) => ({ ...state }));

  return (
    <>
      <h1>Card</h1>
      {itemReducer &&
        itemReducer.map((x) => {
          return (
            <div className="row">
              <div className="col-md-4">
                <div className="card">
                  <img src={img} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <p>
                      <b>Product Name:</b>
                      {x.pname}
                    </p>
                    <p>
                      <b>Product Price:</b>
                      {x.pprice}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};
export default Item;
