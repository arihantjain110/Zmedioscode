import { connectToDB } from "../../../lib/dbConnect";
import { EnquiryForm } from "../../../lib/models";

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, mobile, message } = req.body;
        try {
            await connectToDB();
            const enquiryForm = new EnquiryForm({ name, email, mobile, message });
            await enquiryForm.save();
            res.status(200).json({ message: 'Form Submitted Successfully' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}