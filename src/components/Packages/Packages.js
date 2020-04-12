import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Packages.scss';

function Packages(){
    return(
       <Container fluid={true}>
           <Row>
                <Col md="6" className="PackageText Section-1">
                    <h3 className="PackageHeader">
                        Service Offered
                    </h3>
                    
                    <ul className="PackageLists">
                        <li className="PackageList"> Bridal Make Up</li>
                        <li className="PackageList">Hi Definition Makeup </li>
                        <li className="PackageList">Air brush Makeup</li>
                        <li className="PackageList">Engagement Makeup</li>
                        <li className="PackageList">Occasional Makeup </li>
                        <li className="PackageList">Destination Makeup</li>
                        <li className="PackageList">Party Makeup </li>
                        <li className="PackageList">Pre Wedding Makeup</li>
                        <li className="PackageList">Cmoom Makeyp</li>
                        <li className="PackageList">Fantasy Makeup</li>
                    </ul>
                </Col>
                <Col md="6" className="PackageImg">
                  <div className="ImgSection">
                  </div>
                </Col>
           </Row>
           <Row>
               <Col md="6">
               <div className="ImgSection">
                  </div>
               </Col>
               <Col md="6" className="PackageText Section-2">
                   <h3 className="PackageHeader"> 
                       Foundation Course
                   </h3>
                   <p>The foundation course provides basic training in professional makeup skill and artistry covering day, night,
                       corporate and makeup for special occasions. The students will be trained in.
                   </p>
                   <ul className="PackageLists">
                       <li className="PackageList">
                            Everday Makeup
                       </li>
                       <li className="PackageList">Day and Night makeup</li>
                       <li className="PackageList">Corporate makeup</li>
                       <li className="PackageList">Party makeup</li>
                       <li className="PackageList">Occasion makeup</li>
                       <li className="PackageList">Engagement makeup</li>
                   </ul>
               </Col>
           </Row>
           <Row>
               <Col md="6" className="PackageText Section-3">
               <h3 className="PackageHeader"> 
                    Professional Makeup Artist Course
                </h3>
                <p>This course give a deeper understanding of advance makeup concepts, enabling students to succeed a
                    professional makeup artists in the beauty industry. 
                </p>
                <p>
                    Students are taught about the latest makeup trends so that they gain expertise and are able to deliver
                    advance makeup solutions for photoshoots and Films. The student will gain expertise in 
                </p>
                <ul className="PackageLists">
                    <li className="PackageList">
                        Occasional Makeup
                    </li>
                    <li className="PackageList">Bridal Makeup</li>
                    <li className="PackageList">Fantasy Makeup</li>
                    <li className="PackageList">Hi-defination Makeup</li>
                    <li className="PackageList">UIH mate AirBrush Makeup</li>
                </ul>
               </Col>
               <Col md="6">
               <div className="ImgSection">
                  </div>
               </Col>
           </Row>
           <Row>
           <Col md="6">
                <div className="ImgSection">
                </div>
            </Col>
            <Col md="6" className="PackageText Section-4">
            <div className="Courses"> 
                <h3 className="PackageHeader"> 
                    Bridal Makeup Course (15 days) 
                </h3>
                <ul className="PackageLists">
                    <li className="PackageList">Day Makeup</li>
                    <li className="PackageList">Party Makeup</li>
                    <li className="PackageList">Engagement Makeup</li>
                    <li className="PackageList">Bridal Makeup</li>
                    <li className="PackageList">Eye makeup techniques</li>
                </ul>
            </div>
            <div className="Courses"> 
                <h3 className=""> 
                    Personal Grooming Makeup  (4 days) 
                </h3>
                <ul className="PackageLists">
                    <li className="PackageList">Base application</li>
                    <li className="PackageList">Eye makeup techniques</li>
                    <li className="PackageList">Types of eyelinear</li>
                    <li className="PackageList">Basic hairstyle</li>
                </ul>
            </div>
            
            </Col>

           </Row>
           <Row>
           <Col md="6" className="PackageText Section-4">
            <div className="Courses"> 
                <h3 className="PackageHeader"> 
                    Hairup styling course (6 days)
                </h3>
                <p>
                    Acquire strong up-style basic skills,which are the stepping stones to a future in
                    mastering the art and international techniques.The students will be trained in  
                </p>
                <ul className="PackageLists">
                    <li className="PackageList">High and low pony tail</li>
                    <li className="PackageList">Strand Braid</li>
                    <li className="PackageList">Bouffant</li>
                    <li className="PackageList">Basic Bun</li>
                    <li className="PackageList">Doughnut stuffing with Braids</li>
                </ul>
            </div>
            <div className="Courses"> 
                <h3 className="PackageHeader"> 
                    Hairup styling course (5 days)
                </h3>
                <p>
                    Learn advanced up-styling skills, which are the basics for excelling in the
                    art. The students will be trained in
                </p>
                <ul className="PackageLists">
                    <li className="PackageList">Morning Bride</li>
                    <li className="PackageList">Cockail</li>
                    <li className="PackageList">Outdoor Bride</li>
                    <li className="PackageList">Sangeet Fusion Bride</li>
                </ul>
            </div>
            
            </Col>
           <Col md="6">
                <div className="ImgSection">
                </div>
            </Col>
           </Row>
           
       </Container>
    )
}

export default Packages;