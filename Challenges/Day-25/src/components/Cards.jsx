import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import image1 from "../assets/img/card-1.jpg";
import image2 from "../assets/img/card-2.jpg";
import image3 from "../assets/img/card-3.jpg";

export default function Cards() {
  return (
    <div>
      <Container className="mt-5" fluid>
        <Row>
          <Col>
            <Card bg="dark" text="white" className="shadow-lg">
              <Card.Img
                variant="top"
                src={image1}
                width="100%"
                height="260px"
              />
              <Card.Body>
                <Card.Title>Playstation 5</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card bg="dark" text="white" className="shadow-lg">
              <Card.Img
                variant="top"
                src={image2}
                width="100%"
                height="260px"
              />
              <Card.Body>
                <Card.Title>Xbox Series X</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card bg="dark" text="white" className="shadow-lg">
              <Card.Img
                variant="top"
                src={image3}
                width="100%"
                height="260px"
              />
              <Card.Body>
                <Card.Title>Nintendo Switch</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
