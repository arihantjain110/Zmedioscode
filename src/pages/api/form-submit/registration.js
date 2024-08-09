import { connectToDB } from "../../../lib/dbConnect";
import { RegistrationForm } from "../../../lib/models";

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { fullname, email, mobile, technology, joiningDays, jobTitle, preferredLocation, fileLink, userType, companyName } = req.body;

        try {
            await connectToDB();
            const registrationForm = new RegistrationForm({ fullname, email, mobile, technology, joiningDays, jobTitle, preferredLocation, fileLink, userType, companyName });
            await registrationForm.save();
            res.status(200).json({ message: 'Form Submitted Successfully' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}