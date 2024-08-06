"use server";
import axios from 'axios'

export const subscribeNewsletter = async (formData) => {
    const { email } = Object.fromEntries(formData);

    try{
        const response = await axios.post('/api/form-submit/newsletter', { email });
        return response.data;
    }
    catch(error){
        console.error(`Error in subscribeNewsletter: ${error.message}`)
    }
}

export const submitContactUsForm = async (formData) => {
    const { name, email, mobile, service, message } = Object.fromEntries(formData);

    try{
        const response = await axios.post('/api/form-submit/contact-us', { name, email, mobile, service, message });
        return response.data;
    }
    catch(error){
        console.error(`Error in submitContactUsForm: ${error.message}`)
    }
}

export const submitRegistrationForm = async (formData) => {
    const { fullname, email, mobile, technology, joiningDays, jobTitle, preferredLocation, fileLink, userType, companyName } = Object.fromEntries(formData);

    try{
        const response = await axios.post('/api/form-submit/registration', {
            fullname, email, mobile, technology, joiningDays, jobTitle, preferredLocation, fileLink, userType, companyName
        });

        return response.data;
    }
    catch(error){
        console.error(`Error in submitRegistrationForm: ${error.message}`)
    }
}

export const getFileLink = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    try{
        const response = await axios.post('/api/upload/google-drive', formData, {
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
