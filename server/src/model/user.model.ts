import mongoose from "mongoose";

const UserScema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      requird: true,
    },
    role: {
      type: String,
      enum: ["CANDIDATE", "INTERVIEWER", "ADMIN"],
    },
    status: {
      type: String,
      enum: ["ACTIVE", "INACTIVE", "SUSPENDED"],
      default: "ACTIVE",
    },
    avtarUrl: String,
    phoneNumber: String,

    googleSubject: String,
    lastLoginAt: Date,
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  },
);

export const UserModel = mongoose.model("User", UserScema);
