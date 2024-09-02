import { connectToDB } from "../../../lib/dbConnect";
import { RegistrationForm } from "../../../lib/models/registrationFormModel";
import multer from "multer";
import path from "path";
import fs from "fs";

const uploadsDir = path.join(process.cwd(), "uploads");
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir); // Save files to the 'uploads' directory
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({ storage });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method === "POST") {
    const uploadMiddleware = upload.single("file"); // 'file' should match the key used in the form data

    // Middleware for handling file upload
    await new Promise((resolve, reject) => {
      uploadMiddleware(req, res, (err) => {
        if (err) reject(err);
        else resolve();
      });
    });

    const {
      fullname,
      email,
      mobile,
      technology,
      ndaCheck,
      userType,
      companyName,
    } = req.body;
    const file = req.file;

    try {
      await connectToDB();

      // Prepare file metadata
      const fileData = file
        ? {
            filename: file.filename,
            filetype: file.mimetype,
            filesize: file.size,
          }
        : null;

      const registrationForm = new RegistrationForm({
        fullname,
        email,
        mobile,
        technology,
        ndaCheck,
        userType,
        companyName,
        file: fileData,
      });

      await registrationForm.save();
      res.status(200).json({ message: "Form Submitted Successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
