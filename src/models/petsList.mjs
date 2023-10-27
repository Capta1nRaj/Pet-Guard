import mongoose from "mongoose";
mongoose.set('autoCreate', false);

const PetsSchema = new mongoose.Schema({
    petProfile: {
        type: String,
        default: ""
    },
    yourName: {
        type: String,
        default: ""
    },
    petName: {
        type: String,
        default: ""
    },
    petType: {
        type: String,
        default: ""
    },
    petBreed: {
        type: String,
        default: ""
    },
    petVaccine: {
        type: [String],
        default: [],
    },
    vaccinated: {
        type: String,
        default: "No"
    }
}, {
    timestamps: true
});

export default mongoose.models.petslist || mongoose.model("petslist", PetsSchema);