import React from 'react';
import "./Course.css";
import { FaShoppingCart } from "react-icons/fa";

const Course = (props) => {
    const {img,name,instructor,price} = props.course ;
    const handleBtn  = props.handleBtn ;
    return (
        <div className='course'>
            <div>
            <img src={img} alt="image" />
            </div>
           <div className='course-details'>
            <h1>{name}</h1>
            <p>Instructor:{instructor}</p>
            <p>Price:{price}</p>
            <button type="button" class="btn btn-warning" onClick={() => handleBtn (props.course)}> <FaShoppingCart/> Enroll Now</button>
           </div>   
        </div>
    );
};

export default Course;