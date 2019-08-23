import React, {Component} from 'react';
 import {Container, ListGroup, Col, Row} from 'react-bootstrap'

class Footer extends Component {
    constructor(){
        super();       
    }
    render() {
        return (
        <footer>
            <Container>
                <Row className="media-container-row content">
                    
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
             
          
        );
    }
}
export default Footer;


        
        
    