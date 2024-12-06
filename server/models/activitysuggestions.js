import mongoose from 'mongoose';

// Define the ActivitySuggestion schema
const activitySuggestionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
        enum: ['Outdoor', 'Indoor', 'Adventure', 'Relaxation', 'Cultural', 'Sport', 'Food & Drink'] // Example categories
    },
    location: {
        type: String,
        required: true
    },
    duration: {
        type: Number, // Duration in minutes
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Create the ActivitySuggestion model
const ActivitySuggestion = mongoose.model('ActivitySuggestion', activitySuggestionSchema);

// Export the model
export default ActivitySuggestion;