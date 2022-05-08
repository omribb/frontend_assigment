import axios from "axios";
import { get } from "lodash";
import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { BReview, scoreProps } from "../components/b-review";
import { BReviewStars } from "../components/b-review-stars";
import { BSpacer } from "../components/b-spacer";
import { BTitle } from "../components/btitle";
import { useIsMobile } from "../context/is-mobile-context";
import { IAirlineResponse } from "../models/IAirlineResponse";

export const Airline: React.FC = () => {
  const isMobile = useIsMobile();
  const { airlineCode } = useParams();
  const [airline, setAirline] = useState<IAirlineResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (airlineCode) {
      setIsLoading(true);
      axios
        .get<IAirlineResponse>(
          "https://frontend-assignment-api.azurewebsites.net/api/airline?airline-code=" +
            airlineCode
        )
        .then((res) => {
          setAirline(res.data);
          setIsLoading(false);
        })
        .catch(() => {
          setAirline(null);
          setIsLoading(false);
        });
    }
  }, [airlineCode]);

  const calculatedScores = useMemo(() => {
    if (!airline) {
      return null;
    }
    const toReturn: {
      prop: string;
      title: string;
      score: number;
    }[] = [];
    for (const prop of scoreProps) {
      toReturn.push({
        prop: prop.prop,
        title: prop.title,
        score:
          airline.reviews.reduce(
            (acc, review) => (acc += get(review, prop.prop) ?? 0),
            0
          ) / airline.reviews.length,
      });
    }
    return toReturn;
  }, [airline]);

  if (isLoading) {
    return (
      <div style={{ padding: "10px" }}>Loading...</div>
    )
  }

  if (!airline) {
    return null;
  }

  return (
    <div style={{ padding: "10px" }}>
      {!isMobile ? (
        <>
          <BSpacer />
          <BSpacer />
        </>
      ) : null}
      <BTitle>
        <img src={airline.logo} alt="" style={{ height: "24px" }} />
        &nbsp;&nbsp;
        {airline.name}&nbsp;{"-"}&nbsp;{airline.code}
      </BTitle>
      <BSpacer />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <div style={{ width: isMobile ? "100%" : "30%" }}>
          <div>Customer Support Email</div>
          <div>{airline.customerServiceEmail}</div>
          {!isMobile ? <BSpacer /> : null}
          <div>Customer Support Phone</div>
          <div>{airline.customerServicePhone}</div>
          {!isMobile ? <BSpacer /> : null}
          <div>Website</div>
          <div>{airline.customerServiceWebsite}</div>
          <div>
            <BSpacer />
            {calculatedScores?.map((reviewTotal) => (
              <div
                key={reviewTotal.prop}
                style={
                  isMobile
                    ? { display: "inline-block", width: "50%" }
                    : undefined
                }
              >
                <div>{reviewTotal.title}</div>
                <div>
                  <BReviewStars amount={Math.round(reviewTotal.score)} />
                </div>
                {!isMobile ? <BSpacer /> : null}
              </div>
            ))}
          </div>
          {isMobile ? <BSpacer /> : null}
        </div>
        <div style={{ width: isMobile ? "100%" : "70%" }}>
          {airline.reviews.map((review, index) => (
            <BReview review={review} key={index} />
          ))}
        </div>
      </div>
      <BSpacer />
      <BSpacer />
    </div>
  );
};
