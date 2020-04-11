import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Packages.scss';

function Packages(){
    return(
       <Container fluid={true}>
           <Row>
                <Col md="6" className="PackageText">
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
           
       </Container>
    )
}

export default Packages;