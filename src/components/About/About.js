import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './About.scss'
import me from './../../images/me.jpeg';

function About(){
    return(
        <Container fluid={true}>
            <Row>
                <Col md="12">
                    <div className="AboutContainer">
                        <div className="AboutInfo">
                            <div className="AboutDesc">
                            <h2>About</h2>
                            <div>
                                <p>Hey! If you are looking for best commercial, Party, celebrity, editorial, portfolio, bridal makeup artist
                                    and hairstylist for your any event, you have landed on right place.
                                </p>
                                <p>
                                    I have done MBA in marketing and had worked with brands like four fountains as manager, Future Group, Central
                                    Mall as Departmental Manager and in Wikifield as Territory sales Manager. But soon I realised my true passion. 
                                    When my relatives and friends started asking me to do their makeup wedding and other events. 
                                </p>
                                <p>
                                    I love that that I get to be creative. I especially love bridal makeups because I feel honoured to able to contrivute
                                    to someones big day.
                                </p>
                                <p>
                                    Apart from all these things I love travelling, meeting people and experiencing new culture.
                                </p>
                            </div>
                            </div>
                            <div className="AboutImage">
                                {/* <img src={me}></img> */}
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default About;