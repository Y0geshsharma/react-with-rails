import React, { Component } from "react";
import Thumbnail from "./Thumbnail";
import "../utils/list.scss";
export default function List(props) {
  return (
    <div className="row pt-4 pb-4">
      <div className="col-md-10 setoff-md-1">
        <div className="card px-5">
          <div className="row">
            <div className="col-md-4">
              <Thumbnail />
            </div>
            <div className="col-md-8">
              <div className="pt-4 pb-4">
                <h4>
                  {props.slnum} {props.title}
                </h4>
                <p>{props.description}</p>
                <div className="cta-wrapper">
                  <a onClick = {props.status} className="btn cta-btn">Watch Videos</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
