"use server";
import axios from 'axios'

export const subscribeNewsletter = async (formData) => {
    const { email } = Object.fromEntries(formData);

    try{
        const response = await axios.post('/api/form-submit/newsletter', { email });
        return {
            success: response.status===200 ? true : false,
            message: response.status===200 ? 'Successfully subscribed!' : "Error in subscribing! Please try again later"
        };
    }
    catch(error){
        console.error(`Error in subscribeNewsletter: ${error.message}`)
        return {
            success: false,
            message: "Error in subscribing! Please try again later"
        }
    }
}

export const submitContactUsForm = async (formData) => {
    const { name, email, mobile, service, message } = Object.fromEntries(formData);

    try{
        const response = await axios.post('/api/form-submit/contact-us', { name, email, mobile, service, message });
        return {
            success: response.status===200 ? true : false,
            message: response.status===200 ? 'Details Sent Successfully!' : "Error in sending details! Please try again later"
        };
    }
    catch(error){
        console.error(`Error in submitContactUsForm: ${error.message}`)
        return {
            success: false,
            message: "Error in sending details! Please try again later"
        }
    }
}

export const submitRegistrationForm = async (formData) => {
    const { fullname, email, mobile, technology, joiningDays, jobTitle, preferredLocation, fileLink, userType, companyName } = Object.fromEntries(formData);

    try{
        const response = await axios.post('/api/form-submit/registration', {
            fullname, email, mobile, technology, joiningDays, jobTitle, preferredLocation, fileLink, userType, companyName
        });
        return {
            success: response.status===200 ? true : false,
            message: response.status===200 ? 'Registration successful!' : "Error! Please try again later"
        };
    }
    catch(error){
        console.error(`Error in submitRegistrationForm: ${error.message}`)
        return {
            success: false,
            message: "Error! Please try again later"
        }
    }
}

export const submitEnquiryForm = async (formData) => {
    const { name, email, mobile, message } = Object.fromEntries(formData);

    try{
        const response = await axios.post('/api/form-submit/enquiry', { name, email, mobile, message });
        return {
            success: response.status===200 ? true : false,
            message: response.status===200 ? 'Enquiry submitted successfully' : "Error! Please try again later"
        };
    }
    catch(error){
        console.error(`Error in submitEnquiryForm: ${error.message}`)
        return {
            success: false,
            message: "Error! Please try again later"
        }
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
