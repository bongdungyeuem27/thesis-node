import mongoose from "mongoose";

export async function mongoServer() {
  mongoose.set("strictQuery", true);
  await mongoose
    .connect(process.env.ENDPOINT_MONGODB, {
      dbName: process.env.DATABASE,
    })
    .then(() => {
      console.log("connect to mongodb");
    });
}
