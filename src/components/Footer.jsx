import '../index.css'
import React from 'react'
import {Row,Col} from 'react-bootstrap'
import {SocialIcon} from 'react-social-icons';


export default function Footer(){
    return(
        <footer className="text-light"  >
            <Row className="align-items-center" style={{backgroundColor:"#212529"}}>
                <Col className="text-center">
                    <SocialIcon className="m-1" fgColor="white" style={{height: "35px", width: "35px"}} url="https://www.facebook.com/NEECIST/"/>
                    <SocialIcon className="m-1" bgColor="#FB2253" fgColor="white" style={{height: "35px", width: "35px"}} url="https://www.instagram.com/neecist/"/>
                    <SocialIcon className="m-1" fgColor="white" style={{height: "35px", width: "35px"}} url="https://www.linkedin.com/company/neecist/mycompany/"/>
                    <SocialIcon className="m-1" fgColor="white" style={{height: "35px", width: "35px"}} url="https://www.youtube.com/user/NEECIST"/>
                </Col>
            </Row>
        </footer>
    );
}