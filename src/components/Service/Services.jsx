import React from "react";
import "./about.css";
// import { MdDesignServices } from "react-icons/md";
// import { FiCodesandbox } from "react-icons/fi";
// import { CgWebsite } from "react-icons/cg";
import styled from "styled-components";
import CvPdf from "../../assets/file/CV_english_NguyenDuyManh_2024.pdf";
import { Slide } from "react-awesome-reveal";
import avata from "../../assets/img/Avata.PNG";
import { AiOutlineDownload } from "react-icons/ai";

import { Row, Col, Button } from "antd";

const Services = () => {
  return (
    <Container id="service">
      <div className="area_about_me">
        <Row>
          <Col className="left_img">
            <Slide direction="left">
              <div>
                {" "}
                <img id="avata" src={avata} alt="avata" />
              </div>
            </Slide>
          </Col>
          <Col className="right_text">
            <Slide direction="down">
              <h1>
                About <span className="green">me</span>
              </h1>
            </Slide>
            <Slide direction="right">
              <p className="text_normal">
                I graduated from Hanoi University of Science and Technology in
                2019 with major in Mechanical and Manufacturing Engineering. I
                have more than 5 years of experience in designing, assembling,
                and repairing mechanical equipment. To keep up with industry 4.0
                trends, I self-taught and have more than 1 year of work
                experience in process automation in businesses.I love everything
                about engineering, especially mechanics and automation process.
                I have always believed that science and engineering are the core
                elements to change the world.
              </p>
            </Slide>
            <Slide direction="up">
              <Row className="content">
                <Col className="area_left" span={7.5}>
                  <Row>
                    {" "}
                    <p>Name:</p>
                  </Row>
                  <Row>
                    {" "}
                    <p>Birth:</p>
                  </Row>
                  <Row>
                    {" "}
                    <p>Address:</p>
                  </Row>

                  <Row>
                    {" "}
                    <p>Email:</p>{" "}
                  </Row>
                  <Row>
                    {" "}
                    <p>Phone: </p>
                  </Row>
                </Col>
                <Col className="area_right text_normal" span={16}>
                  <Row>
                    {" "}
                    <p> Nguyen Duy Manh </p>
                  </Row>
                  <Row>
                    {" "}
                    <p> 24/11/1996</p>
                  </Row>
                  <Row>
                    {" "}
                    <p> Dong Anh, Ha noi, Viet Nam</p>
                  </Row>

                  <Row>
                    {" "}
                    <p> nguyenduymanh241196@gmail.com </p>
                  </Row>
                  <Row>
                    {" "}
                    <p> 0942627196 </p>
                  </Row>
                </Col>
              </Row>
            </Slide>
            <a
              href={CvPdf}
              download="CV_english_NguyenDuyManh_2024"
              target="_blank"
              rel="noreferrer"
            >
              <Button
                className="downloadBtn"
                type="primary"
                shape="round"
                icon={<AiOutlineDownload />}
                size="large"
              >
                Download CV
              </Button>
            </a>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Services;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 6rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }
`;
