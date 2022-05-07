import { get } from "lodash";
import React from "react";
import styled from "styled-components";
import { useIsMobile } from "../context/is-mobile-context";
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
  const isMobile = useIsMobile();

  return (
    <Wrapper isMobile={isMobile}>
      <div className="avatar">
        <div className="circle"></div>
      </div>
      <div className="review">
        <div className="name-title">{review.customerName}</div>
        <div>{review.review}</div>
      </div>
      {isMobile ? <div className="line">&nbsp;</div> : null}
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

const Wrapper = styled.div<{ isMobile: boolean }>`
  display: flex;
  flex-wrap: wrap;
  padding: 10px 20px 10px 10px;
  border-radius: ${(props): string => props.theme.borderRadius};
  background-color: ${(props): string => props.theme.colors.veryLightGrey};
  margin-bottom: 10px;
  .avatar {
    display: ${(props): string => props.isMobile ? "none" : "unset"};
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
    width: ${(props): string =>
      props.isMobile ? "calc(100% - 50px)" : "calc(100% - 320px)"};
    padding-right: 20px;
    .name-title {
      font-size: 22px;
    }
  }
  .score {
    width: ${(props): string => (props.isMobile ? "100%" : "270px")};
  }
`;
