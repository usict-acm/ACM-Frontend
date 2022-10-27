import React from 'react';
import Badge from 'react-bootstrap/Badge';
import "./Assests/CSS/title.css";
import Button from 'react-bootstrap/Button';

export default function Title({title}){
    return (
      <>
    <div className='head'>
         <h1>
         <Badge bg="light" text="dark">
        {title}
      </Badge>{' '}
      </h1>
    </div>
    <div className = 'button'>
    <Button className='float-end innerbutton' variant="info">ADD NEW ANNOUNCEMENTS</Button>{' '}
    </div>
    </>
    );
}