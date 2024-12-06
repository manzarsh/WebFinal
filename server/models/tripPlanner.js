import mongoose from 'mongoose';

// Define the Trip schema
const tripSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User ', // Reference to the User model
        required: true
    },
    destination: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    activities: [{
        type: String
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Define the User schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    trips: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Trip' // Reference to the Trip model
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Create the models
const Trip = mongoose.model('Trip', tripSchema);
const User = mongoose.model('User ', userSchema);

// Export the models
export { Trip, User };