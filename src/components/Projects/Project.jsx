import React from "react";
import styled from "styled-components";

import { Modal } from "antd";
import { useState } from "react";
const Project = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { img, disc, num } = props.item;

  // func_modal
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  //func content
  function ContentModal({ numtitle }) {
    if (numtitle == 1) {
      return (
        <div className="item">
          <span>
            This is a support project for the "tape eraser assembly line"
            project that I participated in earlier. With the requirement to move
            and assemble large machine clusters within the workshop, we were
            asked to homemade design and assembly a simple Jib crane with a
            capacity of 2 tons.
          </span>
          <br />
          <img
            src="https://d2t1xqejof9utc.cloudfront.net/screenshots/pics/a0f78897364c36929bfc1b4ed2c265eb/large.JPG"
            alt="jib crane"
            width="60%"
          />
          <p>
            {" "}
            <b>Request:</b>{" "}
          </p>
          <ul>
            <ol>Capacity: 2 tons </ol>
            <ol> Cover semi-circular work areas (270 degree angle)</ol>
            <ol>
              {" "}
              Are versatile enough to perform a wide variety of local handling
              and spotting functions
            </ol>
            <ol> Ensure safety when lifting.</ol>
            <ol>
              Comply with design standards of F.E.M rules (Finite Element
              Method)
            </ol>
          </ul>
          <p>
            {" "}
            <b>What did we do:</b>{" "}
          </p>
          <span>
            Due to the short design time and urgent requirements for assembly,
            we agreed to refer to standard designs available on the market and
            adjust them to suit the factory space and usage conditions. There
            are different types of jib crane but we choose floor-mounted with
            the mount fixed to the factory floor. We chose that option because
            The assembly location of structural tools is usually in the middle
            of the workshop, the workshop floor is also easy to renovate
          </span>
        </div>
      );
    }
    return (
      <li className="item">
        {" "}
        <p>Updating ...</p>
      </li>
    );
  }
  return (
    <Container className="project">
      <img src={img} alt="project" />
      <div className="disc">
        <h1>Description</h1>
        <p>
          {disc} &nbsp;&nbsp;
          <span className="Showmore" onClick={showModal}>
            Show more
          </span>
        </p>
      </div>

      <Modal
        title="Describe"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <ContentModal numtitle={num} />
      </Modal>
    </Container>
  );
};

export default Project;

const Container = styled.div`
  height: 10rem;
  background-color: #4e5156;
  margin: 0 0.5rem;
  padding: 0.5rem;
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 400ms ease-in-out;
  }
  .disc {
    position: absolute;
    right: 0;
    left: 0;
    bottom: -10rem;
    text-align: left;
    padding: 0.5rem;
    background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.8));
    transition: all 400ms ease-in-out;
    h1 {
      font-size: 1rem;
    }

    p {
      width: 90%;
      font-size: 0.8rem;
      a {
        margin-left: 0.4rem;
        color: red;
      }
    }
  }

  :hover > img {
    transform: scale(1.3);
  }

  :hover > .disc {
    bottom: 0;
  }
  .Showmore {
    text-decoration: underline;
    color: red;
  }
`;
