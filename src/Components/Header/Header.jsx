import React from 'react';
import Classes from './Styles.module.css';

const Header = () => {
    return (
        <div className={Classes.container}>
            <div className={Classes.contact}>
                <div className={Classes.logo}>
                    <img className={Classes.img} src="https://images.pexels.com/photos/544113/pexels-photo-544113.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="Shop logo"/>
                    <p>Homie Coffee Shop</p>
                </div>
                <div className={Classes.contact1}>
                    <p className={Classes.p}>+(84) 989-546-292</p>
                    <p className={Classes.p}>T2-T7 09:00-21:00</p>
                </div>
            </div>

            <div className={Classes.intro}>
                <h1>cà phê buổi sáng vị thơm đúng điệu</h1>
                <p className={Classes.description}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, sed.</p>
                <a className={Classes.btn} href="#">ghé thăm quán</a>
            </div>
        </div>
    )
}

export default Header
