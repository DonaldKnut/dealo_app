// Import the Cloudinary SDK
import { v2 as cloudinary, UploadApiResponse } from "cloudinary";

// Configure Cloudinary with your credentials
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Example: Upload an image
const imagePath: string = "../../dealo-app/public/assets/dealo-itself.png"; // Replace with your local image path

cloudinary.uploader.upload(
  imagePath,
  { folder: "uploads" },
  (error: any, result: UploadApiResponse | undefined) => {
    if (error) {
      console.error("Error uploading image to Cloudinary:", error);
    } else {
      // Check if the upload was successful
      if (result && result.secure_url) {
        console.log(
          "Image uploaded successfully. Public URL:",
          result.secure_url
        );
      } else {
        console.error("Unexpected response from Cloudinary:", result);
      }
    }
  }
);
