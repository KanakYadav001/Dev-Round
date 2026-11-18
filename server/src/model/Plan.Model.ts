import mongoose from "mongoose";

const PlanSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: String,
    priceAmountMinor: {
      type: Number,
      required: true,
    },
    currency: {
      type: String,
      enum: ["INR", "USD"],
      default: "INR",
    },
    creditsGranted: {
      type: Number,
      required: true,
    },
    durationDays: {
      type: Number,
      required: true,
    },
    features: [String],
    isActive: {
      type: Boolean,
      required: true,
    },
    displayOrder: Number,
    version: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "update_at",
    },
  },
);

export const PlanModel = mongoose.model("Plan", PlanSchema);
