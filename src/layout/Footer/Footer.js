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
                            alt="Orange Madagascar"
                          />
                          <Carousel.Caption>
                            <h3>Orange Madagascar</h3>

                          </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                          <img
                            className="d-block w-100"
                            src=""
                            alt="Telma Madagascar"
                          />

                          <Carousel.Caption>
                            <h3>Telma Madagascar</h3>
                            
                          </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                          <img
                            className="d-block w-100"
                            src=""
                            alt="Airtel Madagascar"
                          />

                          <Carousel.Caption>
                            <h3>Airtel Madagascar</h3>

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


        
        
    