import React from "react";
import "./card.css";
import styled from "styled-components";
import { AiFillCalendar } from "react-icons/ai";
const Card = (props) => {
  const { Name_company, position, date, disc } = props;
  return (
    <Container>
      <div className="icon_calender">
        <span className="background_icon">
          <span className="icon">
            <AiFillCalendar />
          </span>
        </span>
        <p className="text_calender"> {date}</p>
      </div>
      <div className="job_info">
        <h2>{Name_company}</h2>
        <h4 className="position_name">{position}</h4>
        <p className="position_des">{disc}</p>
      </div>
    </Container>
  );
};

export default Card;

const Container = styled.div`
  width: 100%;
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
  // background-color: green;
  padding: 1rem;
  text-align: center;
  span {
    font-size: 4rem;
  }

  h1 {
    font-size: 1.2rem;
    padding-bottom: 1rem;
  }

  p {
    font-size: 0.8rem;
  }
`;
