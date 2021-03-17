import React from 'react';
import classes from './Styles.module.css';

const Menu = () => {
    return (
        <div className={classes.mainHeader}>
            <div className={classes.header}>
                <p>
                    Bảng giá
                </p>
                <h2>
                    MENU ĐỒ UỐNG
                </h2>
            </div>
            <div className={classes.container}>
                <div className={classes.div1}>
                    <div className={classes.mon1}>
                        <h3>Capuccino...............................<span>$10.95</span></h3>
                        <p>Mô tả về sản phẩm dịch vụ của bạn để khách hàng dễ <br/> dàng lựa chọn</p>
                    </div>
                    <div className={classes.mon2}>
                        <h3>Capuccino...............................<span>$10.95</span></h3>
                        <p>Mô tả về sản phẩm dịch vụ của bạn để khách hàng dễ <br/> dàng lựa chọn</p>
                    </div>
                </div>
                <div className={classes.div2}>
                    <div className={classes.mon3}>
                        <h3>Capuccino...............................<span>$10.95</span></h3>
                        <p>Mô tả về sản phẩm dịch vụ của bạn để khách hàng dễ <br/> dàng lựa chọn</p>
                    </div>
                    <div className={classes.mon4}>
                        <h3>Capuccino...............................<span>$10.95</span></h3>
                        <p>Mô tả về sản phẩm dịch vụ của bạn để khách hàng dễ <br/> dàng lựa chọn</p>
                    </div>
                </div>
            </div>
            <div className={classes.button}>
                <a className={classes.btn} href="">order now</a>
            </div>
        </div>
    )
}

export default Menu
