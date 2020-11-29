/*!

=========================================================
* BLK Design System PRO React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-pro-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators
} from "reactstrap";

// core components
const items = [
  {
    content: (
      <Card className="card-testimonial card-plain">
        <div className="card-avatar">
          <a href="#pablo" onClick={e => e.preventDefault()}>
            <img
              alt="..."
              className="img img-raised rounded"
                          src="https://bn1305files.storage.live.com/y4mbgUD7TNFn89XAlFprveXropK86HC8jzGSPyiqMBwQflaOH69m2XRyRUaUvN9C5yi658a84ZVi58tgv7uB6XsUKZjLOrydl45ucGQxaIL80otIq2XQ2NSys_1AlleFWXngS3omDbrounqxEYWzT3Y6Dc6w_MpDzvsqF2_rwoFaG-Tt2qMNaFlIneusz6wuWx0?width=1197&height=1197&cropmode=none"
            />
          </a>
        </div>
        <CardBody>
          <p className="card-description">
                      {`"Daniel is the go-to guy when it comes to development and design for your website. 
                         His creativity building my websites has brought my movie projects to life, with visuals a
                         screenwriter or producer needs. You can leave him to come up with everything as I usually do,
                         yet he’s easy to work with when I turn into a micromanager. He’s not only adept at the technical
                         gobbledygook, but also at understanding your brand and users. His work around the clock exceeded my expectations.
                         More important to me, Daniel treats you like a friend"`}
          </p>
          <CardTitle tag="h4">Tommy Musni</CardTitle>
                  <h6 className="category text-muted">Writer & Producer</h6>
          <CardFooter>
                <i className="fa fa-star text-success" />
                <i className="fa fa-star text-success ml-1" />
                <i className="fa fa-star text-success ml-1" />
                <i className="fa fa-star text-success ml-1" />
                <i className="fa fa-star text-success ml-1" />
          </CardFooter>
        </CardBody>
      </Card>
    ),
    altText: "",
    caption: "",
    src: "0"
    },


  {
    content: (
      <Card className="card-testimonial card-plain">
        <div className="card-avatar">
          <a href="#pablo" onClick={e => e.preventDefault()}>
            <img
              alt="..."
              className="img img-raised rounded"
                          src="https://bn1305files.storage.live.com/y4mgb_aTBgGL9cSJ-QXWmjtzsqHIzgftfH0IkMz1pQ040H6f9qKJZOW1HasazAqG_wZKsocLvTnFyekJiSuVsgWl6yhQJxtXP59L4to3TubpHgxfDhuGJbvKc7Es9sDowTaWciWsikoHo0CgqowmdaUvv7BldZBVvUaOfjqrHjr1RWzvc_KwvCR-zZwQ2qVkD1t?width=540&height=540&cropmode=none"
            />
          </a>
        </div>
        <CardBody>
          <p className="card-description">
                      {`"Daniel Dover has been a god-send to our start-up production company. 
                         He has created websites for our company and for several of our projects.
                         Working with Daniel is easy and pleasant. He listens to what we need in the website
                         and delivers that with his own creative twist to it, giving us a product that is everything
                         we need and more. I wholeheartedly recommend Daniel to anyone and everyone."`}
          </p>
          <CardTitle tag="h4">Colleen Keane</CardTitle>
          <h6 className="category text-muted">Producer</h6>
          <CardFooter>
            <i className="fa fa-star text-success" />
                <i className="fa fa-star text-success ml-1" />
                <i className="fa fa-star text-success ml-1" />
                <i className="fa fa-star text-success ml-1" />
                <i className="fa fa-star text-success ml-1" />
          </CardFooter>
        </CardBody>
      </Card>
    ),
    altText: "",
    caption: "",
    src: "1"
    }
];

class Testimonials extends React.Component {
  state = {
    activeIndex: 0
  };
  onExiting = () => {
    this.animating = true;
  };

  onExited = () => {
    this.animating = false;
  };

  next = () => {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  };

  previous = () => {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  };

  goToIndex = newIndex => {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  };
  render() {
    return (
    
        <div className="section-testimonials">
          <Row>
            <Col className="mx-auto" md={4} xs={6}>
              <Carousel
                activeIndex={this.state.activeIndex}
                next={this.next}
                previous={this.previous}
              >
                <CarouselIndicators
                  items={items}
                  activeIndex={this.state.activeIndex}
                  onClickHandler={this.goToIndex}
                />
                {items.map((item, key) => {
                  return (
                    <CarouselItem
                      onExiting={this.onExiting}
                      onExited={this.onExited}
                      key={key}
                    >
                      {item.content}
                    </CarouselItem>
                  );
                })}
              </Carousel>
            </Col>
            <a
              className="carousel-control-prev"
              data-slide="prev"
              href="#pablo"
              onClick={e => {
                e.preventDefault();
                this.previous();
              }}
              role="button"
            >
              <i className="tim-icons icon-minimal-left" />
            </a>
            <a
              className="carousel-control-next"
              data-slide="next"
              href="#pablo"
              onClick={e => {
                e.preventDefault();
                this.next();
              }}
              role="button"
            >
              <i className="tim-icons icon-minimal-right" />
            </a>
          </Row>
        </div>
     
    );
  }
}

export default Testimonials;
