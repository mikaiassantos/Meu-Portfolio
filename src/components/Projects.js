import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Starbucks®",
      description: "Design & Desenvolvimento",
      imgUrl: projImg1,
    },
    {
      title: "Communication",
      description: "Design & Desenvolvimento",
      imgUrl: projImg2,
    },
    {
      title: "TrendTrove",
      description: "Design & Desenvolvimento",
      imgUrl: projImg3,
    },
    {
      title: "Cold Brew",
      description: "Design & Desenvolvimento",
      imgUrl: projImg4,
    },
    {
      title: "Base Apparel",
      description: "Design & Desenvolvimento",
      imgUrl: projImg5,
    },
    {
      title: "Business Startup",
      description: "Design & Desenvolvimento",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projetos</h2>
                <p>Aqui estão alguns dos meus principais projetos pessoais e acadêmicos, desenvolvidos ao longo do tempo, demonstrando minhas habilidades e evolução contínua na área.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Guia 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Guia 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Guia 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Esta área está reservada para meus futuros projetos. Em breve, você poderá conferir aqui as inovações e realizações que estou desenvolvendo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Esta área está reservada para meus futuros projetos. Em breve, você poderá conferir aqui as inovações e realizações que estou desenvolvendo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}