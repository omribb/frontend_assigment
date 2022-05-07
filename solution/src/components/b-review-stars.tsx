import React, { Fragment } from "react";
import star from "../assets/star.svg";
import starHollow from "../assets/star-hollow.svg";

export const BReviewStars: React.FC<{ amount: number }> = (props) => {
  return (
    <div style={{ display: "inline-block" }}>
      {new Array(props.amount).fill("X").map((_, index) => (
        <Fragment key={index}>
          <img src={star} alt="" style={{ height: "18px" }} />
        </Fragment>
      ))}
      {new Array(5 - props.amount).fill("X").map((_, index) => (
        <Fragment key={index}>
          <img src={starHollow} alt="" style={{ height: "18px" }} />
        </Fragment>
      ))}
    </div>
  );
};
