import React from "react";
import "./HeroSection.css";
import {
  MDBCarousel,
  MDBCarouselCaption,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask,
  MDBContainer,
} from "mdbreact";

import "bootstrap-css-only/css/bootstrap.min.css";
// import "mdbreact/dist/css/mdb.css";

import cups2 from "../../assets/images/products/cups-2.jpg";
import pot3 from "../../assets/images/products/pot-and-pans-set-3.jpg";
import cups4 from "../../assets/images/products/cups-4.jpg";

const HeroSection = () => {
  return (
    <>
      <div className="hero-section">
        <div className="hero-text">
          <h2 className="new-arrivals">New Arrivals</h2>
          <h2 className="special-offer">Special Offer</h2>
          <h2 className="off">40% Off</h2>
          <button>Shop Now</button>
        </div>
        <div className="hero-slider">
          <MDBContainer>
            <MDBCarousel
              activeItem={1}
              length={3}
              showControls={false}
              showIndicators={false}
              className="z-depth-1"
              slide
            >
              <MDBCarouselInner>
                <MDBCarouselItem itemId="1">
                  <MDBView>
                    <img className="d-block" src={cups2} alt="First slide" />
                    {/* <MDBMask overlay="black-light" /> */}
                  </MDBView>
                  <MDBCarouselCaption>
                    {/* <h3 className="h3-responsive">40% Off</h3> */}
                    {/* <p>First text</p> */}
                  </MDBCarouselCaption>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="2">
                  <MDBView>
                    <img className="d-block" src={pot3} alt="Second slide" />
                    {/* <MDBMask overlay="black-light" /> */}
                  </MDBView>
                  <MDBCarouselCaption>
                    {/* <h3 className="h3-responsive">Buy Now</h3> */}
                  </MDBCarouselCaption>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="3">
                  <MDBView>
                    <img className="d-block" src={cups4} alt="Third slide" />
                    {/* <MDBMask overlay="black-light" /> */}
                  </MDBView>
                  <MDBCarouselCaption>
                    {/* <h3 className="h3-responsive">Limited Sales</h3> */}
                  </MDBCarouselCaption>
                </MDBCarouselItem>
              </MDBCarouselInner>
            </MDBCarousel>
          </MDBContainer>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
