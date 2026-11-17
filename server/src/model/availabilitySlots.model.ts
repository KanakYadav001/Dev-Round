
import mongoose from "mongoose";


const availabilitySlotSchema  = new mongoose.Schema({

    interviewerId : {
        type : mongoose.Types.ObjectId,
        ref : "User",
        required : true
    },
    startAt : {
        type : Date,
        required : true
    },
    endAt : {
        type : Date,
        required : true
    },
    timezone : {
        type : String,
        required : true
    },
    status : {
        type : String,
        enum : ["AVAILABLE" , "HELD" , "BOOKED" , "EXPIRED"],
        default : "AVAILABLE"
    },
    holdExpiresAt : Date , 
    bookingId : {
        type : mongoose.Types.ObjectId,
        ref : "Booking"
    },






} , {
    timestamps : {
        createdAt : 'created_at',
        updatedAt : ' updated_at'
    }
})



export const availabilitySlotModel = mongoose.model('availability', availabilitySlotSchema)