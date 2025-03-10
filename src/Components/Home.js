import React,{Component} from 'react';
import Intro from './Intro';
import Sponsor from './Sponsor';
import Project from './Project';
import './Home.css';
import {Jumbotron, Row, Card,Col,CardImg,CardBody,CardTitle,CardText, CardSubtitle, Button} from 'reactstrap';
import Card1 from './CardUI';

function Home() {
    return (
        <div class='Home'>
            <div className="Header text-center">
                <div className="container-fluid d-flex justify-content-center">
                 <div className="row">
                   <div className="col-md-4">
                     <Card1/>
                   </div>
                   <div className="col-md-4">
                      <Card1/>
                     </div>
                   <div className="col-md-4">
                     <Card1/>
                 </div>
                  </div>
                </div>
            </div>            
            <Intro />
            <Sponsor />
            <Project />
        </div>
    )
}

export default Home
