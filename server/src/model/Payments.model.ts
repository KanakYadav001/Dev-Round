import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "User",
    },
    planId: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "Plan",
    },
    subscriptionId: {
      type: mongoose.Types.ObjectId,
      ref: "Subscriptions",
    },
    provider: {
      type: String,
      required: true,
    },
    providerOrderId: String,
    providerPaymentId: String,
    amountMinor: {
      type: Number,
      required: true,
    },
    currency: {
      type: String,
      required: true,
      enum: ["INR", "USD"],
    },
    checkoutSignatureVerifiedAt: Date,
    failureCode: String,
    failureDescription: String,
    idempotencyKey: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  },
);

export const PaymentModel = mongoose.model("Pyment", paymentSchema);
