import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Home.scss'
import img from './../../images/img_brian_circle.png';
import img2 from './../../images/img_danielle_circle.png';
import img3 from './../../images/img_lisa_circle.png';
import Carousel from './../Carousel/Carousel.js'

function Home(){
    return(<div>

    
        <Container  fluid={true} className="MainContent">
            <Row>
                <Col md="12" className="HeroImgContainer">
                    <div className="HeroImg">
                        {/* <h2>I am sweekar. Hair and make up artist from Pune.</h2> */}
                        <div className="ImgContainer">
                            {/* <img src={img}></img> */}
                            <img src={img2}></img>
                            {/* <img src={img3}></img> */}

                        </div>
                    </div>
                </Col>
                <Col md="12">
                    <div className="Headline">
                        <h2>I am sweekar. Hair and make up artist from Pune.</h2>
                        <div className="Classification">
                            <p>MakeUp</p>
                            <p>Hair</p>
                            <p>Studio</p>
                            <p>Academy</p>
                        </div>
                        <h2>Say Yes To Look Beautiful</h2>
                    </div>
                </Col>
                <Col md="12">
                <div  className="ParentCarousel">
                    <Carousel></Carousel>
                </div>
                </Col>
            </Row>
        </Container>
        {/* <Carousel></Carousel> */}

        </div>
    )
}

export default Home;