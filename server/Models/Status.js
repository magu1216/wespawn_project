import mongoose from "mongoose";

const statusSchema = new mongoose.Schema({
  platform: String,
  color: String,
  active: Boolean,
});

export default mongoose.model("Status", statusSchema);
