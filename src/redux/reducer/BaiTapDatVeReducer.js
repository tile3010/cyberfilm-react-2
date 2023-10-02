import {DAT_GHE} from "../types/BaiTapDatVeType";

const stateDefault = {
    danhSachGheDangDat: [


    ]
}


const BatTapDatVeReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'DAT_GHE': {
            let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];

            let index = danhSachGheDangDatUpdate.findIndex((gheDangDat) => gheDangDat.soGhe === action.ghe.soGhe);
            if (index !== -1) { //Ghế đang đặt có trong mảng khi người dùng click đã có trong mảng => remvove đi

                //
                danhSachGheDangDatUpdate.splice(index, 1);

            }else { //Ghế đang đặt có trong mảng khi người dùng click chưa có trong mảng => push vào mảng
                danhSachGheDangDatUpdate.push(action.ghe)
            }

            //Cập nhật lại state => giao diện render lại
            return { ...state, danhSachGheDangDat: danhSachGheDangDatUpdate };
        }

        case 'HUY_GHE' :{
            let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];

            let index = danhSachGheDangDatUpdate.findIndex((gheDangDat) => gheDangDat.soGhe === action.soGhe);
            if (index !== -1) { //Ghế đang đặt có trong mảng khi người dùng click đã có trong mảng => remvove đi

                //
                danhSachGheDangDatUpdate.splice(index, 1);
            }

            state.danhSachGheDangDat = danhSachGheDangDatUpdate;
            return {...state};

        }
        default: return { ...state }
    }
};

export default BatTapDatVeReducer;