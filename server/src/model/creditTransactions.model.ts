import mongoose from "mongoose";

const creditTransactionsSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    type: {
      type: String,
      required: true,
      enum: ["GRANT", "HOLD", "CONSUME", "RELEASE", "ADJUSTMENT"],
    },
    amount: {
      type: Number,
      required: true,
    },
    bookingId: {
      type: mongoose.Types.ObjectId,
      ref: "Booking",
    },
    paymentId: {
    type: mongoose.Types.ObjectId,
      ref: "Payment",
    },
    subscriptionId: {
        type: mongoose.Types.ObjectId,
      ref: "Subscriptions",
    },
    idempotencyKey: {
         type: String,
         required : true
    },
    reason: {
        type : String ,
        required : true
    },
    createdBy : {
        type : mongoose.Types.ObjectId,
        ref : 'User'
    }
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  },
);

export const creditTransactionModel = mongoose.model(
  "creditTransaction",
  creditTransactionsSchema,
);
