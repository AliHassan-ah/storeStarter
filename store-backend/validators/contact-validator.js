const z = require("zod");
const contactShema = z.object({
  username: z
    .string({ required_error: "Username is required" })
    .trim()
    .min(3)
    .max(30),
  email: z.string({ required_error: "Email is required" }).email().trim(),
  message: z
    .string({ required_error: "Message is required" })
    .min(10, { message: "Minimum 10 characters" }),
});
module.exports = contactShema;
