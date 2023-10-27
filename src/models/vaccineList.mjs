import mongoose from "mongoose";
mongoose.set('autoCreate', false);

const VaccineSchema = new mongoose.Schema({
    type: {
        type: String,
    },
    vaccineName: {
        type: String,
    }
}, {
    timestamps: true
});

export default mongoose.models.vaccinelist || mongoose.model("vaccinelist", VaccineSchema);