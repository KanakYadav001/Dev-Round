import mongoose from "mongoose";


const feedBackSchema  = new mongoose.Schema({

 bookingId : {
    type : mongoose.Types.ObjectId,
    ref : 'Booking',
    required : true
 },
 candidateId : {
    type : mongoose.Types.ObjectId,
    ref : 'User',
    required : true
 },
 interviewerId :{
    type : mongoose.Types.ObjectId,
    ref : "User",
    required : true
 },
 overallScore :{
    type : Number ,
    required : true
 },
 technicalScore :{
    type : Number,
    required : true
 },
 problemSolvingScore : {
    type :Number ,
    required : true
 },
 communicationScore : {
    type : Number,
    required : true
 },
 strengths :{
    type : [String],
    required : true

 },
 improvements : {
    type : [String],
    required : true
 },
 topicsCovered : {
    type : [String],
    required : true
 },
 writtenFeedback : {
    type : String,
    required : true
 },
 recommendations : [String],
 visibilityStatus : {
    type : String,
    enum : ["VISIBLE" , "HIDDEN"]
 },

 submittedAt : {
    type : Date,
    required : true
 },
 amendedAt : Date,
 
 





} ,{
    timestamps : {
        createdAt : 'created_at',
        updatedAt : 'updated_at'
    }
})



export const FeedbackModel = mongoose.model('FeedBack' , feedBackSchema)