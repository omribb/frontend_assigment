import React, { useEffect, useState } from "react";
import { BInput } from "../components/binput";
import { BTitle, BTitleRegularColor } from "../components/btitle";
import axios from "axios";
import { IAirlineSearchResponse } from "../models/IAirlineSearchResponse";
import { useDebounce } from "../hooks/use-debounce";
import { BAirlineLine } from "../components/bairline-line";
import { BSpacer } from "../components/b-spacer";
import styled from "styled-components";
import logo from "../assets/blackrabbit-black-logo.svg";
import spinner from '../assets/spinner.svg';

export const Home: React.FC = () => {
  const [search, setSearch] = useState("");
  const debounce = useDebounce(search);
  const [result, setResult] = useState<IAirlineSearchResponse[]>([]);
  const [isLoading, setIsLoading] = useState(0);

  useEffect(() => {
    if (!debounce || debounce === "") {
      setResult([]);
      return;
    }
    setIsLoading((s) => s + 1);
    axios
      .get<IAirlineSearchResponse[]>(
        "https://frontend-assignment-api.azurewebsites.net/api/search?query=" +
          debounce
      )
      .then((res) => {
        setResult(res.data ?? []);
        setIsLoading((s) => {
          if (s > 0) {
            return s - 1;
          }
          return 0;
        });
      })
      .catch(() => {
        setResult([]);
        setIsLoading((s) => {
          if (s > 0) {
            return s - 1;
          }
          return 0;
        });
      });
  }, [debounce]);

  return (
    <HomeWrapper>
      <div className="main-content">
        <div>
          <img src={logo} alt="" style={{ height: "50px" }} />
        </div>
        <BSpacer />
        <BTitleRegularColor>Black Rabbit</BTitleRegularColor>
        <BTitle>Know your airline!</BTitle>
        <BSpacer />
        <div style={{ textAlign: "center", position: "relative" }}>
          <BInput
            onChange={setSearch}
            value={search}
            placeHolder="Search for airline"
          />
          {isLoading ? (
            <div
              style={{
                position: "absolute",
                top: "5px",
                right: "5px",
              }}
            >
              <img src={spinner} alt="" style={{ height: "30px" }} />
            </div>
          ) : null}
        </div>
        <BSpacer />
        <div style={{ height: "300px", overflowY: "auto" }}>
          {result.map((airline) => (
            <BAirlineLine key={airline.code} data={airline} />
          ))}
        </div>
      </div>
    </HomeWrapper>
  );
};

const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 60px);
  width: 100%;
  padding: 10px;
  .main-content {
    display: block;
    text-align: center;
    width: 500px;
  }
`;
