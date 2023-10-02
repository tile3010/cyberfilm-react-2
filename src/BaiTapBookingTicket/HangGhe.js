import React, { Component } from 'react'
import { connect } from 'react-redux';
import { datGheAction } from '../redux/action/BaiTapDatVeAction'; // Import the action here
class HangGhe extends Component {

    renderGhe = () => {
        return this.props.hangGhe.danhSachGhe.map((ghe, index) => {

            // True false đối với ghế đã hoặc chưa đặt 
            let cssGheDaDat = '';
            let disabled = false;
            //Trạng thái ghế đã bị người khác đặt rồi
            if (ghe.daDat) {
                cssGheDaDat = 'gheDuocChon';
                disabled = true;
            }

            //Xét trạng thái ghế đang đặt
            let cssGheDangDat = '';
            let indexGheDangDat = this.props.danhSachGheDangDat.findIndex
                (gheDangDat => gheDangDat.soGhe === ghe.soGhe);
            if (indexGheDangDat !== -1) {
                cssGheDangDat = 'gheDangChon'
            }

            // Disable những nút có ghế đã đặt (ghế được chọn): qua css chỉnh pointer thành no-drop

            // Trả các đối tượng được chọn vào nút trong vào lặp
            return (
                <button onClick={() => {
                    this.props.datGhe(ghe)

                }} disabled={disabled} className={`ghe ${cssGheDaDat} ${cssGheDangDat}`} key={index}>
                    {/* Mỗi lần trả sẽ ra đối tượng ghế - số ghế  */}
                    {/* chạy số tăng dần thêm 1 đơn vị  */}

                    {/* Có 2 cách trả dữ liệu ở đây  */}
                    {/* 1 là để số ghế tuy nhiên chữ sẽ có khả năng bị tràn lề  */}
                    {ghe.soGhe}

                    {/* 2 là để index+1 :đếm số tăng dần 1 đơn vị  */}
                    {/* {index+1}  */}
                </button>
            );
        });
    }


    renderSoHang = () => {
        return this.props.hangGhe.danhSachGhe.map((hang, index) => {
            return (
                <button className='rowNumber'>
                    {hang.soGhe}

                </button>
            )
        })
    }

    // Render hàng đầu tiên 
    renderHangGhe = () => {
        if (this.props.soHangGhe === 0) {
            return <div style={{ marginLeft: '2rem' }}>
                {this.props.hangGhe.hang} {this.renderSoHang()}
            </div>
        } else {
            return <div>
                {this.props.hangGhe.hang} {this.renderGhe()}
            </div>
        }
    }

    // Render hàng ghế 
    render() {
        return (
            <div className="text-light mt-3" style={{ marginLeft: '1rem', fontSize: 22 }}>
                {/* Đây chính là phần tử đầu tiên  */}
                {/* gọi hàm  */}
                {this.renderHangGhe()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        danhSachGheDangDat: state.BaiTapDatVeReducer.danhSachGheDangDat
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        datGhe: (ghe) => {
            dispatch(datGheAction(ghe))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HangGhe);