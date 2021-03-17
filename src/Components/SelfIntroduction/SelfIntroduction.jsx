import React from 'react';
import Classes from './Styles.module.css';


const SelfIntroduction = () => {
    return (
        <div className={Classes.mainHeader}>
            <div className={Classes.header}>
                <h2>homie coffee</h2>
                <p>
                    Mô tả thông tin có giá trị, những điểm nổi bật, lời giới thiệu hấp dẫn về sản phẩm dịch vụ.
                </p>
            </div>
            <div className={Classes.container}>
                <div className={Classes.card}>
                    <img src='https://scontent.xx.fbcdn.net/v/t1.15752-9/161050375_933961277351057_7656727642557610378_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=58c789&_nc_ohc=b4ukk8kcYzUAX-UzACf&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=af1869f64abd68e81d7bc48d87466a63&oe=60741647' alt=""/>
                    <h3>
                        Không gian thư giãn
                    </h3>
                    <p>
                        Mô tả thông tin có giá trị về sản phẩm dịch vụ, giúp người xem dễ dàng tìm thấy nội dung của bạn trong kết quả tìm kiếm. Những mô tả được viết tốt kèm theo các từ khóa phù hợp có thể tăng lượt xem vì chúng giúp landingpage của bạn hiển thị tốt trong kết quả tìm kiếm.
                    </p>
                </div>
                <div className={Classes.card}>
                    <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/160782308_2504358863205361_418175967217308565_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=58c789&_nc_ohc=ZvyMv9C6CUcAX8N3g6E&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=1f99efbde25c87fa7ef510630d41923f&oe=60777EB4" alt=""/>
                    <h3>Cà phê chất lượng </h3>
                    <p>
                        Mô tả thông tin có giá trị về sản phẩm dịch vụ, giúp người xem dễ dàng tìm thấy nội dung của bạn trong kết quả tìm kiếm. Những mô tả được viết tốt kèm theo các từ khóa phù hợp có thể tăng lượt xem vì chúng giúp landingpage của bạn hiển thị tốt trong kết quả tìm kiếm.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SelfIntroduction
