import React from 'react';
import Classes from './Styles.module.css';

const Products = () => {
    return (
        <div className={Classes.mainContainer}>
            <div className={Classes.header}>
                <h2>coffee time</h2>
            </div>
            <div className={Classes.coffeeHomie}>
                <h3>Cà phê nguyên chất</h3>
                <p>Cà phê Homie khẳng định cà phê phải được làm từ cà phê</p>
            </div>
            <div className={Classes.middle}>
                <p className={Classes.p1}>Mô tả thông tin có giá trị, những điểm nổi bật, lời giới thiệu hấp dẫn về sản phẩm dịch vụ, giúp người xem dễ dàng tìm thấy nội dung của bạn trong kết quả tìm kiếm. Những mô tả được viết tốt kèm theo các từ khóa phù hợp có thể tăng lượt xem vì chúng giúp landingpage của bạn hiển thị tốt trong kết quả tìm kiếm.</p>
                <p className={Classes.p1}>Mô tả thông tin có giá trị, những điểm nổi bật, lời giới thiệu hấp dẫn về sản phẩm dịch vụ, giúp người xem dễ dàng tìm thấy nội dung của bạn trong kết quả tìm kiếm</p>
            </div>
            <div className={Classes.media}>
                <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/161410579_186309849692406_1051561482745345001_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=58c789&_nc_ohc=5RUVUTjcr1AAX-ZRy9P&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=82ac45122137a1f14790fd69a6ef1984&oe=60741D04" alt="img 1" className={Classes.img}/>
                <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/161327296_433674777860787_3450784613367211377_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=58c789&_nc_ohc=QdpK7SQwg90AX_fsys4&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=e658aa07654f3f978dfac9aa5fda6262&oe=60762E8A" alt="img 2" className={Classes.img}/>
                <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/161143176_925363994959534_8423260744923653347_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=58c789&_nc_ohc=c6GD3lka7WwAX9YC5YL&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=776aac24e49fd3cba5c8e3c6a900a253&oe=6075A318" alt="img 3" className={Classes.img}/>
            </div>
        </div>
    )
}

export default Products
