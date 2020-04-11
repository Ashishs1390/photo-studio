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