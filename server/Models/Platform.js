import mongoose from "mongoose";

const platformSchema = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  version: { type: String, required: true },
  color: String,
});

export default mongoose.model("Platform", platformSchema);
