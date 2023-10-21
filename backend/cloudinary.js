import { CloudinaryStorage } from "multer-storage-cloudinary";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "dxjqmfcfn",
  api_key: "116332428563717",
  api_secret: "TcZJYCJj_U_1EtrS_DyqoZthoY0",
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary, // Use cloudinary, not cloudinary.v2
  allowedFormats: ["jpg", "jpeg", "png"], // Use allowedFormats, not allowedFormat
  params: {
    folder: "image/v2",
  },
});

export default storage;
