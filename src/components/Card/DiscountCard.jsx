import React from "react";
import { FaUsers, FaClock, FaBook } from "react-icons/fa";
import img from "/src/assets/discount.png";

const DiscountCard = () => {
  return (
    <div className="card">
      <img src={img} alt="No Discount" className="card-image" />
      <div className="card-content">
        <h2 className="card-title">HTML Course</h2>
        <p className="card-description">
          It's discount course, Lorem ipsum dolor sit amet.
        </p>
        <div className="flex justify-around items-center w-full  text-sm">
          <p className="m-0">
            <del>$1050</del>
          </p>
          <p className="price"> $750 </p>
          <p className="pricebtn"> You Save $250 </p>
        </div>
      </div>
      <hr />
      {/* Icons in row format */}
      <div className="icon-row">
        <div className="icon-container">
          <FaClock className="icon" />
          <span className="icon-text">10 hrs</span>
        </div>
        <div className="icon-container">
          <FaUsers className="icon" />
          <span className="icon-text">308</span>
        </div>

        <div className="icon-container">
          <FaBook className="icon" />
          <span className="icon-text">17</span>
        </div>
      </div>
    </div>
  );
};

export default DiscountCard;
