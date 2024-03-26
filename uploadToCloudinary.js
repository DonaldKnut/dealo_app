"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Import the Cloudinary SDK
var cloudinary_1 = require("cloudinary");
// Configure Cloudinary with your credentials
cloudinary_1.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});
// Example: Upload an image
var imagePath = "../../dealo-app/public/assets/dealo-itself.png"; // Replace with your local image path
cloudinary_1.v2.uploader.upload(imagePath, { folder: "uploads" }, function (error, result) {
    if (error) {
        console.error("Error uploading image to Cloudinary:", error);
    }
    else {
        // Check if the upload was successful
        if (result && result.secure_url) {
            console.log("Image uploaded successfully. Public URL:", result.secure_url);
        }
        else {
            console.error("Unexpected response from Cloudinary:", result);
        }
    }
});
