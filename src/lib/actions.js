"use server";

import { RegistrationForm, ContactUs, Newsletter } from './models';
import { connectToDB } from './dbConnect';
import axios from 'axios'

export const subscribeNewsletter = async (formData) => {
    const { email } = Object.fromEntries(formData);

    try{
        await connectToDB();
        const newsletter = new Newsletter({ email });
        await newsletter.save();
    }
    catch(error){
        console.error(`Error in subscribeNewsletter: ${error.message}`)
    }
}

export const submitContactUsForm = async (formData) => {
    const { name, email, mobile, service, message } = Object.fromEntries(formData);

    try{
        await connectToDB();
        const contactUs = new ContactUs({ name, email, mobile, service, message });
        await contactUs.save();
    }
    catch(error){
        console.error(`Error in submitContactUsForm: ${error.message}`)
    }
}

export const submitRegistrationForm = async (formData) => {
    const { fullname, email, mobile, technology, joiningDays, jobTitle, preferredLocation, fileLink, userType, companyName } = Object.fromEntries(formData);

    try{
        // Add code to upload pdf to cloud storage and get the link
        await connectToDB();
        // await connectToDatabase()
        const registrationForm = new RegistrationForm({ fullname, email, mobile, technology, joiningDays, jobTitle, preferredLocation, fileLink, userType, companyName });
        await registrationForm.save();
    }
    catch(error){
        console.error(`Error in submitRegistrationForm: ${error.message}`)
    }
}

export const getFileLink = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    try{
        const response = await axios.post('/api/upload', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
        });
        return response.data.link;
    }
    catch(error){
        console.error(`Error in uploadFile: ${error.message}`)
        return null;
    }
};
