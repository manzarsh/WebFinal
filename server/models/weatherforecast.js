import mongoose from 'mongoose';

// Define the WeatherForecast schema
const weatherForecastSchema = new mongoose.Schema({
    location: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    temperature: {
        type: Number,
        required: true
    },
    humidity: {
        type: Number,
        required: true
    },
    windSpeed: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Create the WeatherForecast model
const WeatherForecast = mongoose.model('WeatherForecast', weatherForecastSchema);

// Export the model
export default WeatherForecast;