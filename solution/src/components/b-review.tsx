import { get } from "lodash";
import React from "react";
import styled from "styled-components";
import { Review } from "../models/IAirlineResponse";
import { BReviewStars } from "./b-review-stars";

export const scoreProps = [
  { prop: "overallScore", title: "Overall Score" },
  { prop: "cleanliness", title: "Cleanliness" },
  { prop: "foodQuality", title: "Food Quality" },
  { prop: "legRoom", title: "Leg Room" },
  { prop: "staff", title: "Staff" },
  { prop: "wouldRecommend", title: "Would Recommend" },
];

export const BReview: React.FC<{ review: Review }> = ({ review }) => {
  return (
    <Wrapper>
      <div className="avatar"><div className="circle"></div></div>
      <div className="review">
        <div className="name-title">{review.customerName}</div>
        <div>{review.review}</div>
      </div>
      <div className="score">
        {scoreProps.map((item) => (
          <div key={item.prop} style={{ display: "flex" }}>
            <div style={{ width: "50%" }}>
              {item.title}
              {":"}
            </div>
            <div style={{ width: "50%", textAlign: "end" }}>
              <BReviewStars amount={get(review, item.prop) ?? 0} />
            </div>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  padding: 10px;
  border-radius: ${(props): string => props.theme.borderRadius};
  background-color: ${(props): string => props.theme.colors.veryLightGrey};
  margin-bottom: 10px;
  .avatar {
    width: 50px;
    .circle {
      width: 40px;
      height: 40px;
      border-radius: 40px;
      background-color: grey;
      display: inline-block;
    }
  }
  .review {
    width: calc(100% - 280px - 50px);
    padding-right: 20px;
    .name-title {
      font-size: 22px;
    }
  }
  .score {
    width: 280px;
  }
`;
