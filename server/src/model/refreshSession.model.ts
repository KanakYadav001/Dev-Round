import mongoose from "mongoose";

const refreshSessions = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      ref : "User",
      require: true,
    },

    tokenHash: {
      type: String,
      require: true,
    },
    familyId: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["ACTIVE", "USED", "REVOKED"],
      default: "ACTIVE",
    },
    expireAt: {
      type: Date,
      require: true,
    },
    replacedBySessionId: mongoose.Types.ObjectId,

     revokeAt : Date ,
     revocationReason : String,
     userAgent : String,
     ipAddress : String,
     lastUsedAt: Date
  },
    

  {
    timestamps: true
     
  },
);



export const refreshSessionModel = mongoose.model('refreshSessions',refreshSessions)
