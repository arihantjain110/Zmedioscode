
import { google } from 'googleapis';
import * as formidable from 'formidable';
import fs from 'fs';

export const config = {
    api: {
      bodyParser: false, // Important: Disable the default body parser
    },
};

const SCOPE = ['https://www.googleapis.com/auth/drive'];

const googleAuthorize = async () => {

    const jwtClient = new google.auth.JWT(
        process.env.GDRIVE_CLIENT_EMAIL,
        null,
        process.env.GDRIVE_PRIVATE_KEY.replace(/\\n/gm, "\n"),
        SCOPE
    );

    await jwtClient.authorize();
    return jwtClient;
};

const uploadFile = (authClient, file) => {
    return new Promise((resolve, reject) => {
        const drive = google.drive({ version: 'v3', auth: authClient });
        const fileMetaData = {
        name: file.originalFilename,
        parents: [process.env.GDRIVE_FOLDER_ID], // Your Google Drive folder ID
        };
        const media = {
            mimeType: file.mimetype,
            // body: Buffer.from(file.buffer),
            body: fs.createReadStream(file.filepath),
        };
        drive.files.create(
        {
            resource: fileMetaData,
            media: media,
            fields: 'id, webViewLink',
        },
        (error, file) => {
            if (error) {
            return reject(error);
            }
            resolve(file.data);
        }
        );
    });
};

export default async function handler(req, res) {

    if (req.method === 'POST') {

        const form = new formidable.IncomingForm();
        await form.parse(req, async function (err, fields, files){
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            try {
                const authClient = await googleAuthorize();
                const uploadedFile = await uploadFile(authClient, files.file[0]);
                res.status(200).json({ link: uploadedFile.webViewLink });
            } catch (error) {
                console.error('Error in uploadFile:', error.message);
                res.status(500).json({ error: error.message });
            }
        });

    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
