import { ProjectCards } from "./ProjectCards";

export const Projects = () => {
  const projects = [
    {
      title: "Business Startup",
      description: "Design and Developement",
      imgURL: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design and Developement",
      imgURL: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design and Developement",
      imgURL: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design and Developement",
      imgURL: projImg4,
    },
  ];
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>Lorem Ipsum</p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">Tab One</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Tab Two</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">Tab Three</Nav.Link>
              </Nav.Item>
            </Nav>
            </Tab.Container>
            <Tab.Pane eventKey="first">
                <Row>
                    {
                        projects.map((projects, index) => {
                            return (
                                <ProjectCards key={index} {...project}/>
                            )
                        })
                    }
                </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
                <Row>
                    {
                        projects.map((projects, index) => {
                            return (
                                <p>{projects.title}</p>
                            )
                        })
                    }
                </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="third">
                <Row>
                    {
                        projects.map((projects, index) => {
                            return (
                                <p>{projects.title}</p>
                            )
                        })
                    }
                </Row>
            </Tab.Pane>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
