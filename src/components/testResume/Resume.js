// import BarGraph from "./BarGraph";
// import DownloadIcon from "@mui/icons-material/Download";
import { Row, Col } from "antd";
import styled from "styled-components";
import "./resume.css";
import { Slide } from "react-awesome-reveal";
// import { MdDesignServices } from "react-icons/md";
// import { FiCodesandbox } from "react-icons/fi";
// import { CgWebsite } from "react-icons/cg";
import Card from "./Card";

// load img
import Solidwork from "../../assets/img/sorfware/solidwork.png";
import Ansa from "../../assets/img/sorfware/ANSA.png";
import NX from "../../assets/img/sorfware/NX.png";
import Autocad from "../../assets/img/sorfware/autoCad.jpg";
import Vcollab from "../../assets/img/sorfware/vcollab.jpg";
import Festo from "../../assets/img/sorfware/FESTO.png";
import { FaPython, FaNodeJs, FaReact, FaHtml5, FaCss3 } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { SiMongodb, SiMicrosoftexcel } from "react-icons/si";

export default function Resume() {
  return (
    <Container id="project">
      <div className="tilte_section">
        <h1>
          My <span className="green">Resume</span>
        </h1>
      </div>

      <Row>
        <Col xs={24} xl={12}>
          <span className="line_resume"></span>
          <Cards>
            <Slide direction="up">
              <Card
                date={"20/1/2019 - 23/1/2020"}
                Name_company={"SHIOGAI SEIKI VIETNAM CO., LTD"}
                position={"Technical Staff"}
                disc={`Participating in the design 3D, make 2D drawings, quote and assemble of the "tape eraser production line" for Plus
                company, Spring Winding Machines, Semiautomatic Chamfering Machine,... `}
              />
            </Slide>

            <Slide direction="up">
              <Card
                date={"20/1/2020 - 23/1/2021"}
                Name_company={"TERUMO VIETNAM CO., LTD"}
                position={"Production equipment engineer"}
                disc={`Participating in the improvement and manufacture of a solvent supply system to
                separate the mold for the ( RFC end processing machine).I was extremely lucky also responsible for technology transfer
                machine technology from Japan related to Radifocus Glidecath products. In addition, the job also includes research manufacture jigs, installation jigs to support equipment as well as worker's
                manipulation to increase productivity`}
              />
            </Slide>

            <Slide direction="up">
              <Card
                date={"20/1/2022 - NOW"}
                Name_company={"FPT Software Company Limited"}
                position={"CAD/CAE engineer"}
                disc={`Recreate CAD data, create pre-CAE data: create meshes, attach connections, materials
and render force,... using ANSA software. Automate the data collection and processing process using Python, VBA (excel)
Create your own tools works on ANSA software to optimize tasks using Python. Data CRUD tasks on the customer's internal website: timesheets, management
meeting schedule, web scraping,... using Node.js, Express.js, MongoDB, python.`}
              />
            </Slide>
          </Cards>
        </Col>
        <Col xs={24} xl={12}>
          <div className="skill_container">
            <h2 className="title">My Skills</h2>
            <div className="skill_content">
              <div className="mechanical_skill">
                <h3 className="title_skill">Mechanical: </h3>
                <Slide direction="right">
                  <div className="Img_skill">
                    <img src={Solidwork} alt="Solidwork" width="100rem"></img>
                    <img src={Ansa} alt="Ansa" width="170rem"></img>
                    <img src={NX} alt="NX" width="90rem"></img>
                    <img src={Autocad} alt="Autocad" width="90rem"></img>
                    <img src={Vcollab} alt="Vcollab" width="90rem"></img>
                    <img src={Festo} alt="Festo" width="90rem"></img>
                  </div>
                </Slide>
              </div>
              <div className="automation_skill">
                <h3 className="title_skill"> Process Automation: </h3>
                <Slide direction="right">
                  <div className="icon_skill">
                    <span>
                      {" "}
                      <FaPython />
                    </span>
                    <span>
                      {" "}
                      <FaNodeJs />
                    </span>
                    <span>
                      {" "}
                      <FaReact />
                    </span>
                    <span>
                      {" "}
                      <FaHtml5 />
                    </span>
                    <span>
                      {" "}
                      <FaCss3 />
                    </span>
                    <span>
                      {" "}
                      <SiMysql />
                    </span>
                    <span>
                      {" "}
                      <SiMongodb />
                    </span>
                    <span>
                      <SiMicrosoftexcel />
                    </span>
                  </div>
                </Slide>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  text-align: center;
  position: relative;
  @media (max-width: 840px) {
    width: 90%;
  }
  h1 {
    font-size: 1.9rem;
  }

  p {
    width: 28rem;
    margin: 0 auto;
    padding: 1rem 0;
    font-size: 0.9rem;
    @media (max-width: 500px) {
      width: 90%;
    }
  }
`;

const Cards = styled.div`
  display: flex;
  flex-direction: column;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 2rem;
  gap: 0.5rem;
`;
