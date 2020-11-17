import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default class Testimonials extends Component {
    render() {
        return (
            <Carousel
                showArrows={true}
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}
                autoPlay={true}
                interval={6700}
            >
                <div>
                    <img src="/images/tommy.jpg" />
                    <div>
                        <h3>Tommy Musni</h3>
                        <h4>Writer & Producer</h4>
                        <p>
                            " Daniel is the go-to guy when it comes to development and design for your website. 
                            His creativity building my websites has brought my movie projects to life, with visuals a screenwriter or producer needs. 
                            You can leave him to come up with everything as I usually do, yet he is easy to work with when I turn into a micromanager. 
                            He is not only adept at the technical gobbledygook, but also at understanding your brand and users. His work around the clock exceeded my expectations. 
                            More important to me, Daniel treats you like a friend. "
                        </p>
                    </div>
                </div>

                <div>
                    <img src="/images/colleen.jpg" />
                    <div>
                        <h3>Colleen Keane</h3>
                        <h4>Producer</h4>
                        <p>
                           " Daniel Dover has been a god-send to our start-up production company. 
                            He has created websites for our company and for several of our projects. 
                            Working with Daniel is easy and pleasant. He listens to what we need in the website and delivers that with his own creative twist to it, 
                            giving us a product that is everything we need and more. I wholeheartedly recommend Daniel to anyone and everyone. "
                        </p>
                    </div>
                </div>
            </Carousel>
        );
    }
}