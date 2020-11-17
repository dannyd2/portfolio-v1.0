import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import profilepic from '../profile.jpg';
import Testimonials from "./testimonials.js";

   
class Landing extends Component {
        render() {    
    return (
        <div style={{ width: '100%', margin: 'auto' }}>
            <Grid className="landing-grid">
                <Cell col={12}>
                    <img
                        src={profilepic}
                        alt="avatar"
                        className="avatar-img"
                    />

                    <br />
                    <br />

                    <div className="banner-text">
                        <div className="social-links">

                            {/* Email */}
                            <a href="mailto:info@danieldover.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-envelope" aria-hidden="true" />
                            </a>

                            {/* Github */}
                            <a href="https://github.com/dannyd2?tab=repositories" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github" aria-hidden="true" />
                            </a>
                        </div>
                    </div>
                    <br />
                    <Testimonials />
                </Cell>
            </Grid>

        </div>
    );
}
        }


export default Landing;
