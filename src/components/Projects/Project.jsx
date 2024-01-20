import React from "react";
import styled from "styled-components";

import { Modal } from "antd";
import { useState } from "react";
const Project = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { img, disc } = props.item;

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
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
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
