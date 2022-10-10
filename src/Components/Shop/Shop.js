import React, { useState } from 'react';
import "./Shop.css"
import Course from '../Course/Course';
import courseData from '../../fakeData/courseData';
import Cart from '../Cart/Cart';


const Shop = () => {
    const [course,setCourse] =useState(courseData);
    // console.log(course);
    const[cart,setCart] = useState([]);
    const handleBtn = (course) =>{
        console.log('product added',course);
        const newCart = [...cart,course];
        setCart(newCart);

       }
    return (
        <div>
            <div className='container'>
                <div className='course-container'>
                {
                 course.map((course) =>(
                   <Course course={course} handleBtn ={handleBtn }></Course>
                 ))
                }
                </div>
                <div className='cart-container'>
               <Cart cart={cart}></Cart>
                </div>
           </div>
           {/* <Course></Course> */}
        </div>
    );
};

export default Shop;