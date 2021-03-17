import React from 'react';
import classes from './Styles.module.css';

const Footer = () => {
    return (
        <div className={classes.container}>
            <div className={classes.div1}>
                <p className={classes.p1}>
                    Phone <br/> +(84) 989-546-292
                </p>
            </div>
            <div className={classes.div2}>
                <p className={classes.p2}>
                    Address <br/> 1 Lũy Bán Bích, Quận Tân Phú, TP Hồ Chí Minh
                </p>
            </div>
            <div className={classes.div3}>
                <p className={classes.p3}>
                designed & developed by Andy Vo<br/>mail me at andyvo190998@gmail.com
                </p>
            </div>
        </div>
    )
}

export default Footer
