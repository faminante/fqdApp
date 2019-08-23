import React, {Component} from 'react';
 import {Container, ListGroup, Col, Row} from 'react-bootstrap'
import {Carousel} from 'react-bootstrap';
class Footer extends Component {
    constructor(){
        super();       
    }
    render() {
        return (
            <div>
                <Container class='cl_part'>
                <h2 class="text-center"> Notre Partenaire</h2>
                    <Carousel className='carousel'>
                        
                        <Carousel.Item>
                          <img
                            className="d-block w-100"
                            src=""
                            alt="First slide"
                          />
                          <Carousel.Caption>
                            <h3>First slide label</h3>

                          </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                          <img
                            className="d-block w-100"
                            src=""
                            alt="Third slide"
                          />

                          <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                          </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                          <img
                            className="d-block w-100"
                            src=""
                            alt="Third slide"
                          />

                          <Carousel.Caption>
                            <h3>Third slide label</h3>

                          </Carousel.Caption>
                        </Carousel.Item>
                      </Carousel>
                      </Container>

                <footer>
                    <Container>
                        <Row className="media-container-row content text-white">

                                <Col>
                                    <h5 class="pb-3 column-title display-5">
                                        Links
                                    </h5>
                                    <div class="mbr-text mbr-fonts-style display-7">
                                        <ListGroup>
                                            <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                                            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                                          </ListGroup>
                                    </div>
                                </Col>
                                <Col>
                                    <h5 class="pb-3 column-title display-5">
                                        Links
                                    </h5>
                                    <div class="mbr-text mbr-fonts-style display-7">
                                        <ListGroup>
                                            <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                                            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                                          </ListGroup>
                                    </div>
                                </Col>
                                <Col>
                                    <h5 class="pb-3 column-title display-5">
                                        Links
                                    </h5>
                                    <div class="mbr-text mbr-fonts-style display-7">
                                        <ListGroup>
                                            <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                                            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                                          </ListGroup>
                                    </div>
                                </Col>

                        </Row>
                    </Container>
                </footer> 
            </div>          
        );
    }
}
export default Footer;


        
        
    