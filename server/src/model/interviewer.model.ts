import mongoose from "mongoose";

const InterviewerScema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    headline: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
      required: true,
    },

    experience: {
      type: Number,
      require: true,
    },
    skills: {
      type: [String],
      required: true,
    },
    techStack: [String],
    currentCompany: String,
    currentJobTitle: String,
    linkdinUrl: String,
    profileImageUrl: String,

    reviewReason: String,
    reviewedBy: { 
      type : mongoose.Types.ObjectId,
      ref : 'User'
    },

    reviewedAt: Date,
    submittedAt: Date,

    profileStatus: {
      type: String,
      enum: ["PENDING", "APPROVED", "REJECTED", "SUSPENDED"],
      default: "PENDING",
    },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  },
);

export const InterviewerModel = mongoose.model("Interviewer", InterviewerScema);
