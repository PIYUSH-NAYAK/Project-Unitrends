const { z } = require("zod");

const signup = z.object({
  name: z
    .string()
    .min(1, { message: "Name is required" })
    .max(50, { message: "Name must be at most 50 characters" }),

  email: z
    .string()
    .email({ message: "Invalid email address" })
    .refine(
      (email) =>
        email.endsWith("@gmail.com") || email.endsWith("@iiitl.ac.in"),
      {
        message: "Email must belong to @gmail.com or @iiitl.ac.in domains",
      }
    ),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .max(128, { message: "Password must be at most 128 characters" })
    .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" })
    .regex(/[a-z]/, { message: "Password must contain at least one lowercase letter" })
    .regex(/[0-9]/, { message: "Password must contain at least one number" })
    .regex(/[@$!%*?&#]/, { message: "Password must contain at least one special character" }),
});

module.exports = signup