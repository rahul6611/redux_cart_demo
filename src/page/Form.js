import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const Form = () => {
  const [pprice, setPprice] = useState("");
  const [pname, setPname] = useState("");
  const [card, setCard] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const handleInput = () => {
    setCard((card) => [...card, { pprice, pname }]);

    dispatch({
      type: "ADD_ALL_ITEM",
      payload: card.push(),
    });
    
    dispatch({
      type: "GET_ALL_ITEM",
      payload: [...card],
    });
  };


  const handleItem = () => {
    navigate("/item");
  };


  return (
    <div className="container">
      <div className="row mb-3 mt-5">
        <label className="col-sm-2 col-form-label">Product Name: </label>
        <div className="col-sm-10">
          <input
            className="form-control"
            value={pname}
            onChange={(e) => setPname(e.target.value)}
          />
        </div>
      </div>
      <div className="row mb-3">
        <label className="col-sm-2 col-form-label">Product Price: </label>
        <div className="col-sm-10">
          <input
            className="form-control"
            value={pprice}
            onChange={(e) => setPprice(e.target.value)}
          />
        </div>
      </div>
      <button className="btn btn-primary me-4" onClick={handleInput}>
        Save
      </button>
      <button className="btn btn-primary" onClick={handleItem}>
        Item
      </button>

      {/* {card.map((item)=>{
return(
<div>
  <div className="container">
    <div className="row">
      <div className="col-md-4">
      <Item name={item.pname} price={item.pprice}/>
      </div>
    </div>
    
  </div>
</div>
);
  })} */}
    </div>
  );
};

export default Form;
