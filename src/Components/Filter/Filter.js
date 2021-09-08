import React from "react";
import ReactStars from "react-rating-stars-component";

const Filter = ({ handleChange, title,ratingChanged }) => {
  return (
    <div className="col-md-4">
      <label htmlFor="">Search</label>
      <input
        type="text"
        className="form-control"
        onChange={handleChange}
        title={title}
      />
      <ReactStars
        count={5}
        onChange={ratingChanged}
        size={30}
        activeColor="#ffd700"
        isHalf={true}
      />
    </div>
  );
};

export default Filter;
