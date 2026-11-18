import mongoose from "mongoose";
import { required } from "zod/mini";

const notificationSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    type: {
      type: String,
      required: true,
      enum: ["BOOKING_CONFIRMED", "FEEDBACK_READY"],
    },
    subject: {
      type: String,
      required: true,
    },
    payload: {
        type : Object,
        required : true
    },
    status: {
      type: String,
      enum: ["PENDING", "PROCESSING", "SENT", "FAILED"],
    },

    attemptCount: {
      type: Number,
      required: true,
    },
    nextAttemptAt: Date,
    sentAt: Date,
    lastError: String,
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  },
);

export const notificationModel = mongoose.model(
  "Notification",
  notificationSchema,
);
