import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";

import movie_tailwind from "../assets/img/movie_tailwind.jfif";
import movie_bootstrap from "../assets/img/movie_bootstrap.jfif";
import admin_FE from "../assets/img/admin_FE.jfif";

import admin_watch_image from "../assets/img/admin_watch.jfif";
import customer_watch_image from "../assets/img/customer_watch.jfif";
import server_watch_image from "../assets/img/2a8f58fd2a3c8962d02d.jpg";

import courseFigma from "../assets/img/course.jpg";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Movie website",
      description: "Developed with ReactJS, Tailwind CSS, and integrated with APIs for dynamic data.",
      imgUrl: movie_tailwind,
      linkUrl: 'https://capstone-movie-one.vercel.app/'
    },
    {
      title: "Movie website",
      description: "Created a UI-focused design using Bootstrap to enhance user experience.",
      imgUrl: movie_bootstrap,
      linkUrl: 'https://movie-khaki-one.vercel.app/'
    },
    {
      title: "Admin bán phân bón",
      description: "Designed the UI and implemented the front-end using React and Tailwind CSS.",
      imgUrl: admin_FE,
      linkUrl:'https://phan-bon-tan-thanh-ui.vercel.app/'
    },
  ];

  const fullStack = [
    {
      title: "Admin Watch",
      description: "Developed a full-featured admin panel for managing watch inventory using ReactJS, Redux, Axios, and Tailwind CSS.",
      imgUrl: admin_watch_image, 
      linkUrl: 'https://github.com/hoangkha442/watch_admin',
    },
    {
      title: "Customer Watch",
      description: "Built a responsive customer-facing watch store interface with ReactJS, Redux, Axios, and Tailwind CSS for seamless browsing and purchasing.",
      imgUrl: customer_watch_image, 
      linkUrl: 'https://github.com/hoangkha442/watch_customer', 
    },
    ,
    {
      title: "Server Watch",
      description: "Implemented a server-side application for the watch store using NestJS to handle API requests, data management, and secure transactions.",
      imgUrl: server_watch_image, 
      linkUrl: 'https://github.com/hoangkha442/API_Watch', 
    },
  ];
  
  const UI = [
    {
      title: "UI Course Register",
      description: "Designed wireframes and UI layouts for an online course registration platform using Figma.",
      imgUrl: courseFigma,
      linkUrl: 'https://www.figma.com/design/p8Hv3Cw7ZVjrOIqdRVw0XI/UI-UX-Colorme?node-id=73-213&t=txzIfa2UyD511zpC-0',
    }
  ];
  
  

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Explore a curated selection of my projects showcasing expertise in front-end, full-stack development, and UI design. Each project highlights my commitment to creating dynamic, user-friendly web applications.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Front end</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">FullStack</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">UI</Nav.Link>
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
                    <Row>
                        {
                          fullStack.map((project, index) => {
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
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          UI.map((project, index) => {
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