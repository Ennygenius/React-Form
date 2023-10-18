// import multer from "multer";
// import cloudinary from "cloudinary";
// import { CloudinaryStorage } from "multer-storage-cloudinary";
// const storage = CloudinaryStorage({
//   folder: "VegeFoodsImages",
//   allowedFormats: ["jpg", "png"],
//   transformation: [
//     {
//       width: 500,
//       height: 500,
//       crop: "limit",
//     },
//   ],
//   cloudinary: cloudinary,
// });

// export default multer({ storage: storage });
import multer from "multer";
import { extname } from "path";

// Multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "upload/"); // Set your upload folder
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + extname(file.originalname));
  },
});

// Multer upload configuration
const upload = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
    let ext = extname(file.originalname);
    if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png") {
      cb(new Error("File type is not supported"), false);
      return;
    }
    cb(null, true);
  },
});

export default upload;

// import multer, { diskStorage } from "multer";

// export default multer({
//   storage: diskStorage({}),
//   limits: { fileSize: 500000 },
// });
