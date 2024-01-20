import React, { useRef } from "react";
import Slider from "react-slick";
import Project from "./Project";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from "styled-components";

import jibcrane from "../../assets/img/project/jibcrane.jpg";
import carthenter from "../../assets/img/project/Cathenter.jpg";
import whitetape from "../../assets/img/project/whitetape.jpg";
import spring from "../../assets/img/project/Spring.jpg";
import CAE from "../../assets/img/project/CAE.jpg";
import ANSA from "../../assets/img/project/ANSA.jpg";

let data = [
  {
    img: jibcrane,
    disc: "Jib Crane is a product to support assembly in the workshop. It differs from standard cranes in being designed ...",
    num: 1,
  },
  {
    img: carthenter,
    disc: "Assembling, designing and receiving technology transfer from Japan for Terumo's production line is one of the most difficult ...",
    num: 2,
  },
  {
    img: whitetape,
    disc: "The Correction Tape Pen product assembly line was the first large-scale project that I participated in after graduating ...",
    num: 3,
  },
  {
    img: spring,
    disc: "Spring Coiling Machine is a machine that I designed and assembled for the first time as a leader. This is the product that impressed me the most",
    num: 4,
  },
  {
    img: CAE,
    disc: "The CAE project is a really new project for me. I have worked and learned with the CAE process of 1 product...",
    num: 5,
  },
  {
    img: ANSA,
    disc: "Automating the data retrieval and processing process on ANSA software combined with Excel VBA was the first project that made me approach mechanics 4.0.",
    num: 6,
  },
];

var settings = {
  className: "center",
  centerMode: true,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  arrows: false,
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        centerMode: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        centerMode: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
      },
    },
  ],
};
const SliderComp = () => {
  const arrowRef = useRef(null);
  let sliderProject = "";
  sliderProject = data.map((item, i) => <Project item={item} key={i} />);
  return (
    <Container>
      <Slider ref={arrowRef} {...settings}>
        {sliderProject}
      </Slider>
      <Buttons>
        <button onClick={() => arrowRef.current.slickPrev()} className="back">
          <IoIosArrowBack />
        </button>
        <button onClick={() => arrowRef.current.slickNext()} className="next">
          <IoIosArrowForward />
        </button>
      </Buttons>
    </Container>
  );
};

export default SliderComp;

const Container = styled.div`
  position: relative;
`;

const Buttons = styled.div`
  button {
    width: 2rem;
    height: 2rem;
    background-color: rgba(255, 255, 255, 0.1);
    cursor: pointer;
    color: #01be96;
    border: none;
    position: absolute;
    top: 45%;
    right: -1rem;
  }

  .back {
    left: -1rem;
  }
`;
