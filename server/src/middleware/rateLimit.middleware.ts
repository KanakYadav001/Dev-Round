import rateLimit from "express-rate-limit";

export const ratelimitMiddleware = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 50, // Limit each IP to 100 requests per window
  standardHeaders: true, // Return rate limit info in the RateLimit-* headers
  legacyHeaders: false, // Disable X-RateLimit-* headers

  message: {
    success: false,
    message: "Too many requests. Please try again after 15 minutes.",
  },
});