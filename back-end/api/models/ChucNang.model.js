const mongoose=require('mongoose')
const otherSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    GioHang:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'KhoaHoc'
    }],
    KhoaHocDaMua:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'KhoaHoc'
    }],
    yeuThich:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]
}, {collection:'ChucNang'});
module.exports = mongoose.model('ChucNang', otherSchema);