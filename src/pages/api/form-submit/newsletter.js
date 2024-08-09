import { connectToDB } from "../../../lib/dbConnect";
import { Newsletter } from "../../../lib/models";

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { email } = req.body;
        try {
            await connectToDB();
            const newsletter = new Newsletter({ email });
            await newsletter.save(); 
            res.status(200).json({ message: 'Form Submitted Successfully' });
        } catch (error) {
            console.log("Error : ", error)
            res.status(500).json({ error: error.message });
        }
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}