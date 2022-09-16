import {Container, Row, Col, Carousel, Form, Button} from 'react-bootstrap';

const BootstrapTest = () => {
    return (
        <Container className="mt-5 mb-5">
            <Row>
                <Col>
                  <Form>
                        <fieldset disabled>
                            <Form.Group className="mb-3">
                            <Form.Label htmlFor="disabledTextInput">Disabled input</Form.Label>
                            <Form.Control id="disabledTextInput" placeholder="Disabled input" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                            <Form.Label htmlFor="disabledSelect">Disabled select menu</Form.Label>
                            <Form.Select id="disabledSelect">
                                <option>Disabled select</option>
                            </Form.Select>
                            </Form.Group>
                            <Form.Group className="mb-3">
                            <Form.Check
                                type="checkbox"
                                id="disabledFieldsetCheck"
                                label="Can't check this"
                            />
                            </Form.Group>
                            <Button type="submit">Submit</Button>
                        </fieldset>
                        </Form>
                </Col>
                <Col>
                
                    <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://ichef.bbci.co.uk/news/999/cpsprodpb/15951/production/_117310488_16.jpg"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://media.macphun.com/img/uploads/customer/how-to/579/15531840725c93b5489d84e9.43781620.jpg?q=85&w=1340"
                        alt="Second slide"
                        />

                        <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://expresstricks.com/wp-content/uploads/2019/04/comments-for-beautiful-pictures.jpg"
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
        </Container>
    )
}

export default BootstrapTest;