import React, { Component } from 'react'
import { connect } from 'react-redux';

class ThongTinDatGhe extends Component {
    render() {
        return (
            <div>
                <div className='mt-5'>
                    <button className='gheDuocChon'></button>
                    <span className='text-light' style={{ fontSize: '30px' }}>Ghế Đã Đặt</span>
                    <br />
                    <button className='gheDangChon'></button>
                    <span className='text-light' style={{ fontSize: '30px' }}>Ghế Đang Đặt</span>
                    <br />
                    <button className='ghe' style={{ marginLeft: 0 }}></button>
                    <span className='text-light' style={{ fontSize: '30px' }}>Ghế Chưa Đặt</span>
                </div>

                {/* Tạo table  */}
                <div className='mt-5'>
                    <table className="table" border="2">
                        <thead>
                            <tr className='text-light' style={{ fontSize: '25' }}>
                                <th>Số ghế</th>
                                <th>Giá</th>
                                <th></th>
                            </tr>
                        </thead>

                        <tbody className='text-warning'>
                            {this.props.danhSachGheDangDat.map((gheDangDat, index) => {
                                return <tr key={index}>
                                    <td>{gheDangDat.soGhe}</td>
                                    <td>{gheDangDat.gia.toLocaleString()}</td>
                                    <td>
                                        <button className="btn btn-danger" onClick={() => {
                                            this.props.dispatch({
                                                type: 'HUY_GHE',
                                                soGhe: gheDangDat.soGhe
                                            })
                                        }}>Huỷ</button>
                                    </td>


                                </tr>
                            })}

                        </tbody>

                        {/* Tính tổng tiền cho giá  */}
                        <tfoot>
                            <tr className='text-warning'>
                                <td>Tổng Tiền</td>

                                <td>{this.props.danhSachGheDangDat.reduce(
                                    (tongTien, gheDangDat, index) => {
                                        return tongTien += gheDangDat.gia;

                                    }, 0).toLocaleString()}</td>

                                <td>VND</td>


                            </tr>
                        </tfoot>
                    </table>


                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        danhSachGheDangDat: state.BaiTapDatVeReducer.danhSachGheDangDat
    }

}

export default connect(mapStateToProps)(ThongTinDatGhe);