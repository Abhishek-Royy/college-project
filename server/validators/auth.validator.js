const { z } = require("zod");

// Creating an Object Schema..
const signupSchema = z.object({
  username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must be atleast 3 charecters.." })
    .max(255, { message: "Name not be more than 255 charecters.." }),
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .min(3, { message: "Email must be atleast 3 charecters.." })
    .max(255, { message: "Email not be more than 255 charecters.." }),
  phone: z
    .string({ required_error: "phone is required" })
    .trim()
    .min(10, { message: "phone must be atleast 10 charecters.." })
    .max(11, { message: "phone not be more than 11 charecters.." }),
  password: z
    .string({ required_error: "Password is required" })
    .trim()
    .min(6, { message: "Password must be atleast 6 charecters.." })
    .max(1024, { message: "Password not be more than 1024 charecters.." }),
});

module.exports = signupSchema;
