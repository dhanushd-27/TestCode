import express from "express";
import { userSchema } from "@repo/zod";

const app = express();

app.get("/", (req, res) => {
  const user = userSchema.parse({
    name: "John Doe",
    email: "john.doe@example.com",
    age: 30,
  });

  const user2 = userSchema.safeParse({
    name: 1231,
    email: 1231,
    age: "dhanush",
  });

  if (!user2.success) {
    console.log(user2.error);
  }
  
  console.log(user);
  res.send(user);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});