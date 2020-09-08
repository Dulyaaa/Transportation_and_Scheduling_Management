import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";

export default function Step2(props) {
    return (
        <Container>
            <Row
                style={{ marginTop: "30px" }}
                className="h-100 justify-content-center align-items-center"
            >
                <Col md={{ span: 6 }} className="text-center my-auto">
                    <h3 style={{ marginBottom: "1rem" }}>Dati Veicolo</h3>
                    <Form>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Control type="text" placeholder="Marca" required />
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Control type="text" placeholder="Targa" required />
                            </Form.Group>
                        </Form.Row>
                        <Form.Group>
                            <Form.Control
                                type="text"
                                placeholder="Paese immatricolazione"
                                required
                            />
                        </Form.Group>
                        <h6 style={{ marginBottom: "1rem" }}>Possiede un rimorchio?</h6>
                        <Form.Group>
                            <Form.Control type="text" placeholder="Targa" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control type="text" placeholder="Paese immatricolazione" />
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}
