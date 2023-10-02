import React, { Component } from 'react';
import './BaiTapBookingTicket.css';
import ThongTinDatGhe from './ThongTinDatGhe.js'
import danhSachGheData from './Data/danhSachGhe.json'
import HangGhe from './HangGhe.js'
export default class BaiTapBookingTicket extends Component {

    // Render hàng ghế 
    renderHangGhe = () => {
        return danhSachGheData.map((hangGhe, index) => {
            return <div key={index}>
                <HangGhe hangGhe={hangGhe} soHangGhe={index} />

            </div>
        })

    }

    render() {
        return (
            <div style={{ position: "fixed", width: '100%', height: '100%', backgroundImage: "url('./img/bookingTicket/bgmovie.jpg')", backgroundSize: '100%' }}>
                <div style={{ position: 'fixed', width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.7)' }}>

                    <div className="container-fluid">

                        {/* Chia thông tin làm làm 2 bên  */}
                        <div className="row">

                            <div className="col-8  text-center">
                                <div className=" text-light display-4" >ĐẶT VÉ XEM PHIM</div>

                                {/* Thêm text màn hình  */}
                                <div className="mt-3 text-light" style={{ fontSize: '25px' }}>Màn hình</div>

                                {/* Cho lồng vào thẻ div để lấy effect (do không phải text nên ko center được) */}
                                {/* flexDirection: 'row': xếp item theo hàng ngang  */}
                                <div className='mt-2' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }} >
                                    {/* Thêm màn hình  */}
                                    <div className="screen" ></div>

                                    {/* Render ghế theo từng hàng  */}
                                    {this.renderHangGhe()}
                                </div>
                            </div>

                            {/* Layout bên phải: danh sách ghế bạn chọn  */}
                            <div className="col-4">

                                <div style={{ fontSize: '27px' }} className="text-warning mt-2" >DANH SÁCH GHẾ BẠN CHỌN</div>
                                <ThongTinDatGhe />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}