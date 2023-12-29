const z = require("zod");

const signupSchema = z.object({
  username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must be atleast of three characters" })
    .max(200, { message: "Name must not be grater than 200" }),
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid emeil address" })
    .min(3, { message: "Email must be atleast of three characters" })
    .max(200, { message: "Email must not be grater than 150" }),
  phone: z
    .string({ required_error: "Phone is required" })
    .trim()
    .min(10, { message: "Phone must be atleast 10 digits" }),
  password: z
    .string({ required_error: "Password is required" })
    .min(7, { message: "Minimum 7 characters" })
    .max(1024, { message: "Password can't be greater than 1024 characters" }),
});
module.exports = signupSchema;
