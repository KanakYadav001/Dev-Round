import mongoose from "mongoose";

const InterviewerScema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      require: true,
    },
    experience: {
      type: Number,
      require: true,
    },
    skills: [String],
    techStack: [String],

    profileStatus: {
      type: String,
      enum: ["PENDING", "APPROVED", "REJECTED", "SUSPENDED"],
      default: "PENDING",
    },
  },
  {
    timestamps: true,
  },
);

export const InterviewerModel = mongoose.model("Interviewer", InterviewerScema);
