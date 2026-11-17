import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    candidateId: {
      type: mongoose.Types.ObjectId,
      requird: true,
      ref: "User",
    },
    interviewerid: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "User",
    },

    slotId: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "availability",
    },
    startAt: {
      type: Date,
      required: true,
    },
    endAt: {
      type: Date,
      required: true,
    },
    timezone: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: [
        "PENDING_PAYMENT",
        "CONFIRMED",
        "IN_PROGRESS",
        "COMPLETED",
        "CANCELLED",
        "EXPIRED",
      ],
      default: "PENDING_PAYMENT",
    },
    meetingUrl: String,
    sessionTitle: String,
    candidateNote: String,

    priceAmount: Number,
    currency: {
      type: String,
      enum: ["INR", "USD"],
      default: "INR",
    },
    creditCost: {
      type: Number,
      required: true,
    },
    cancelledBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    cancellationReason: String,
    cancelledAt: Date,
    startedAt: Date,
    completedAt: Date,
    noShowBy: {
      type: String,
      enum: ["CANDIDATE", "INTERVIEWER"],
    },
    idempotencyKey: String,
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  },
);

export const bookingModel = mongoose.model("Booking", bookingSchema);
