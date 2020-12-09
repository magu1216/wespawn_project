import mongoose from "mongoose";

const statusSchema = new mongoose.Schema({
  platform: { type: String, required: true },
  color: { type: String, required: true },
});

export default mongoose.model("Status", statusSchema);
