import React from "react";
import Products from "./Products";

export default function Home() {
  return (
    <>
      <div className="hero">
        <div className="card text-white bg-dark border-0">
          <img
            src="assets/bg2.jpeg"
            className="card-img"
            alt="Background"
            height="686px"
          />
          <div className="card-img-overlay my-3">
            <div className="container">
              <h5 className="card-title text-dark display-3 fw-bolder mb-0">
                New Season Arrival
              </h5>
              <p className="card-text text-dark lead fs-2">
                Check out all the trends.
              </p>
            </div>
          </div>
        </div>
        <Products />
      </div>
    </>
  );
}
