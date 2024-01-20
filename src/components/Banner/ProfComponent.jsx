import React from "react";
import "./Home.css";
import styled from "styled-components";
import { FaGithub } from "react-icons/fa";
import { GiEarthAmerica } from "react-icons/gi";
import { FaLinkedinIn } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";

const ProfComponent = () => {
  window.onload = function () {
    // array with texts to type in typewriter
    var dataText = [
      "I am Mechanical Engineer.",
      "I am Process Automation Engineer",
      "I am Web Designer too",
      "I love technical works!",
    ];

    // type one text in the typwriter
    // keeps calling itself until the text is finished
    function typeWriter(text, i, fnCallback) {
      // chekc if text isn't finished yet
      if (i < text.length) {
        // add next character to h1
        document.querySelector(".run_text").innerHTML =
          text.substring(0, i + 1) + '<span aria-hidden="true"></span>';

        // wait for a while and call this function again for next character
        setTimeout(function () {
          typeWriter(text, i + 1, fnCallback);
        }, 100);
      }
      // text finished, call callback if there is a callback function
      else if (typeof fnCallback == "function") {
        // call callback after timeout
        setTimeout(fnCallback, 700);
      }
    }
    // start a typewriter animation for a text in the dataText array
    function StartTextAnimation(i) {
      if (typeof dataText[i] == "undefined") {
        setTimeout(function () {
          StartTextAnimation(0);
        }, 20000);
      }
      // check if dataText[i] exists
      if (i < dataText[i].length) {
        // text exists! start typewriter animation
        typeWriter(dataText[i], 0, function () {
          // after callback (and whole text has been animated), start next text
          StartTextAnimation(i + 1);
        });
      }
    }
    // start the text animation
    StartTextAnimation(0);
  };

  return (
    <Container id="home">
      <Slide direction="left">
        <Texts>
          <h3>
            Hello <span className="green">I'm</span>
          </h3>
          <h1 className="green">Manh Nguyen</h1>
          <h3 className="run_text">hello</h3>
          <Social>
            <p>Check out my</p>
            <div className="social-icons">
              <span>
                <a href="https://github.com/ManhNguyen241196" target="_blank">
                  <FaGithub />
                </a>
              </span>
              <span>
                <a href="/">
                  <GiEarthAmerica />
                </a>
              </span>
              <span>
                <a
                  href="https://www.linkedin.com/in/m%E1%BA%A1nh-nguy%E1%BB%85n-duy-97b91427b/"
                  target="_blank"
                >
                  <FaLinkedinIn />
                </a>
              </span>
            </div>
          </Social>
        </Texts>
      </Slide>
    </Container>
  );
};

export default ProfComponent;

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding-top: 18%;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  z-index: 1;
  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;
const Texts = styled.div`
  flex: 1;
  h4 {
    padding: 1rem 0;
    font-weight: 500;
  }
  h1 {
    font-size: 2.5rem;
    font-family: "Secular One", sans-serif;
    letter-spacing: 2px;
  }
  h3 {
    font-weight: 500;
    font-size: 1.5rem;
    padding-bottom: 1.2rem;
    padding-top: 1.2rem;

    text-transform: capitalize;
  }
  p {
    font-weight: 300;
  }

  button {
    padding: 0.7rem 2rem;
    margin-top: 3rem;
    cursor: pointer;
    background-color: #01be96;
    border: none;
    color: #fff;
    font-weight: 500;
    filter: drop-shadow(0px 10px 10px #01be9551);
    :hover {
      filter: drop-shadow(0px 10px 10px #01be9570);
    }
  }
`;
const Social = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  p {
    font-size: 0.9rem;
    @media (max-width: 690px) {
      font-size: 0.7rem;
    }
  }

  .social-icons {
    display: flex;
    align-items: center;
    gap: 1rem;
    span {
      width: 2.3rem;
      height: 2rem;
      clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
      background-color: #01be96;
      position: relative;
      transition: transform 400ms ease-in-out;
      :hover {
        transform: rotate(360deg);
      }
    }

    a {
      color: #fff;
      position: absolute;
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;
