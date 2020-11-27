import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';



class App extends Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: 2 };
    }

    render() {
        return (
            <div className="demo-big-content">
                <Layout>
            <Header transparent title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">Daniel Dover</Link>} scroll>
                <Navigation>
                    <Link to="/resume">Resume</Link>
                    <Link to="/aboutme">About Me</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/contact">Contact</Link>
                </Navigation>
            </Header>
                    <Drawer title={<Link style={{ textDecoration: 'none', color: 'black' }} to="/">Daniel Dover</Link>}>
                <Navigation>
                  <Link to="/resume">Resume</Link>
                  <Link to="/aboutme">About Me</Link>
                  <Link to="/projects">Projects</Link>
                  <Link to="/contact">Contact</Link>
                </Navigation>
            </Drawer>
            <Content>
                <div className="page-content" />
                        <Main />      
            </Content>
        </Layout>
      </div>

    );
  }
}

export default App;
