import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Packages.scss';
import section1 from './../../images/packages/bridalmakeup.jpg';
import airbrushmakeup from './../../images/packages/airbrushmakeup.jpg';
import HDmakeup from './../../images/packages/HDmakeup.jpg';
import preeweddingmakeup from './../../images/packages/preeweddingmakeup.jpg';
import sidermakeup from './../../images/packages/sidermakeup.jpg';
import portfoliomakeup from './../../images/packages/portfoliomakeup.jpg';
import editorialgashionmakeup from './../../images/packages/editorialgashionmakeup.jpg';
import Meternity from './../../images/packages/meternitymakeup.jpg';







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
                        <li className="PackageList">Meternity Makeup</li>
                        <li className="PackageList">Groom Makeup</li>
                        <li className="PackageList">Editorial/Fashion Makeup</li>
                        <li className="PackageList">Fantasy Makeup</li>
                    </ul>
                </Col>
                <Col md="6" className="PackageImg">
                  <div>
                      <img src={section1} height="800" width="800" ></img>
                  </div>
                </Col>
           </Row>
           <Row>
               <Col md="6">
               {/* <div className="ImgSection">
                  </div>
                   */}
                   <div>
                      <img src={section1} height="800" width="800" ></img>
                  </div>
               </Col>
               <Col md="6" className="PackageText Section-2">
                   <h3 className="PackageHeader"> 
                        BRIDAL MAKEUP
                   </h3>
                   <p>It is your wedding day and making you look the best on your D-day is a promise that Sweekar Pharande Makeup Artist extends to you.
                        Whether you are looking for a complete traditional look, contemporary or a subtle bridal look, Sweekar is the perfect bridal makeup artist and hairstylist for you.
                         Ensuring that you look your radiant best and be the centre of attention on your big day is his speciality. 
                   </p>
               </Col>
           </Row>
           <Row>
               <Col md="6" className="PackageText Section-3">
               <h3 className="PackageHeader"> 
                    HD Makeup
                </h3>
                <p>
                    With the use of HD cameras to capture close ups of the bride, it is also important to use HD products to hide the blemishes and acne spots. HD makeup makes the bride’s look flawless and camera ready. 
                    Sweekar is the perfect bridal HD makeup artist and hairstylist for you.  
                </p>
               </Col>
               <Col md="6">
                   <div>
                      <img src={HDmakeup} height="800" width="800" ></img>
                  </div>
               </Col>
           </Row>
           <Row>
                <Col md="6">
                    {/* <div className="ImgSection">
                    </div>
                    */}
                    <div>
                        <img src={airbrushmakeup} height="800" width="800" ></img>
                    </div>
                </Col>
                <Col md="6" className="PackageText Section-4">
                <div className="Courses"> 
                    <h3 className="PackageHeader"> 
                        Airbrush Makeup
                    </h3>
                    <p>
                    The glamorous and smooth even finish of airbrush makeup is enough to justify its cost. 
                    Airbrush makeup is a silicon-based lightweight makeup applied with an airgun. 
                    A special kind of liquid foundation is poured into the small chamber of the airgun and sprayed on the brides face.
                    As the trigger is pressed, a mist of foundation covers the face to give a flawless finish and the makeup blends perfectly with the skin giving a very long lasting effect.
                    </p>
                </div>
                
                
                </Col>

           </Row>
           <Row>
                <Col md="6" className="PackageText Section-5">
                    <div className="Courses"> 
                            <h3 className="PackageHeader"> 
                                SIDER MAKEUP
                            </h3>
                            <p>
                                Your engagement or any occasion is a gala affair because of the presence of family members and friends. Let’s not forget that they need to look their best, as well. At Sweekar Pharande Makeup Artist, we offer makeup services to family and friends of the bride. From the makeup to the hair, leave it to us to doll up everyone around you with the best cosmetic products. As he is the one of the best makeup artist and hairstylist in Pune, engaging his services will not disappoint you. So, schedule an appointment and up the glam quotient of your event.
                            </p>
                        </div>
                </Col>
                <Col md="6">
                        <div>
                            <img src={sidermakeup} height="800" width="800" ></img>
                        </div>
                </Col>
           </Row>
           <Row>
                <Col md="6">
                    <div>
                        <img src={preeweddingmakeup} height="800" width="800" ></img>
                    </div>
                </Col>
                <Col md="6" className="PackageText Section-6">
                    <div className="Courses"> 
                            <h3 className="PackageHeader"> 
                            PRE WEDDING MAKEUP FOR SHOOTS
                            </h3>
                            <p>
                            Are you looking up for a pre-wedding photo shoot? Sweekar Pharande Makeup Artist in Pune is the ultimate place to get your makeup and hair done. Sweekar is a professional pre-wedding makeup artist & hairstylist and has decked up many brides-to-be for their magical and romantic pre-wedding shoots. He will coordinate your whole look with the event and ensure that you steal the focus of each image. With the best makeup artist in Pune on your side, you can immortalise the memories of your wedding.
                            </p>
                        </div>
                </Col>
           </Row>
           <Row>
                
                <Col md="6" className="PackageText Section-7">
                    <div className="Courses"> 
                            <h3 className="PackageHeader"> 
                            PORTFOLIO MAKEUP FOR MODEL SHOOT
                            </h3>
                            <p>
                            Sweekar Pharande Makeup Artist can help you jumpstart your portfolio and attract real modelling work. As a professional and renowned portfolio shoot makeup artist in Pune, Sweekar is experienced in personally designing and tailoring looks to achieve different styles. When it comes to working with diverse, creative concepts, there are very few makeup artists and hairstylists as flexible as her. By using only the very best makeup and hair products, he ensures that the look achieved does not fade behind camera lenses and harsh lights. Sweekar had done many portfolio makeover for many well known models, he can make your portfolio appear charismatic and glamorous.
                            </p>
                        </div>
                </Col>
                <Col md="6">
                    <div>
                        <img src={portfoliomakeup} height="800" width="800" ></img>
                    </div>
                </Col>
           </Row>
           <Row>
            <Col md="6">
                        <div>
                            <img src={editorialgashionmakeup } height="800" width="800" ></img>
                        </div>
                    </Col>
                    
                    <Col md="6" className="PackageText Section-8">
                        <div className="Courses"> 
                                <h3 className="PackageHeader"> 
                                EDITORIAL / FASHION MAKEUP
                                </h3>
                                <p>
                                Sweekar Pharande Makeup Artist exists to make you look your glamorous best. Whether you are looking for editorial/fashion makeup services to build your portfolio as a model, for appearing on TV ads or magazines, or walking the runway, Sweekar can bring your creative vision to life with great finesse. Sweekar had experience in editorial/fashion makeup a best makeup artist in pune.
                                </p>
                            </div>
                    </Col>
                
           </Row>
           <Row>
            
                    
                    <Col md="6" className="PackageText Section-9">
                        <div className="Courses"> 
                                <h3 className="PackageHeader"> 
                                METERNITY MAKEUP FOR SHOOT
                                </h3>
                                <p>
                                Are you looking up for a meternity photo shoot? Sweekar Pharande Makeup Artist in Pune is the ultimate place to get your makeup and hair done. Sweekar is a professional meternity makeup artist & hairstylist and has done up many Moms for shoots. He will coordinate your whole look with the event and ensure that you steal the focus of each image. With the best makeup artist in Pune on your side, you can immortalise the memories of your shoot.
                                </p>
                            </div>
                    </Col>
                    <Col md="6">
                        <div>
                            <img src={Meternity } height="800" width="800" ></img>
                        </div>
                    </Col>
                
           </Row>
           
           
       </Container>
    )
}

export default Packages;