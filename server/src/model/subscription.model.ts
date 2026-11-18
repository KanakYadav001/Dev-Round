import mongoose from "mongoose";


const subscriptionSchema = new mongoose.Schema(
  {
    user_Id: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    planId: {
      type: mongoose.Types.ObjectId,
      ref: "Plan",
      required: true,
    },
    planSnapshot : {
        type :Object,
      required: true,
    },
    status : {
        type : String ,
        enum : ['PENDING' , 'ACTIVE' , 'PAST_DUE' , 'CANCELLED' , 'EXPIRED'],
    },
    startsAt : Date,
    endsAt : Date ,
    autoRenew : {
        type : Boolean,
        required : true
    },
    cancelledAt : Date ,
    paymentId : {
        type : mongoose.Types.ObjectId,
        ref : 'Payment'
    },
    


  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  },
);

export const subscriptionModel = mongoose.model(
  "Subscriptions",
  subscriptionSchema,
);
