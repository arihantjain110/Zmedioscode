import axios from "axios";

// Helper function to handle API calls
const handleFormSubmission = async (url, data, headers) => {
  try {
    const response = await axios.post(url, data, { headers });
    return {
      success: response.status === 200,
      message:
        response.status === 200
          ? "Operation successful!"
          : "Operation failed! Please try again later",
    };
  } catch (error) {
    console.error(`Error in form submission: ${error.message}`);
    return {
      success: false,
      message:
        error.response?.data?.message ||
        "An error occurred! Please try again later",
    };
  }
};

export const subscribeNewsletter = async (formData) => {
  const { email } = Object.fromEntries(formData);
  return await handleFormSubmission("/api/form-submit/newsletter", { email });
};

export const submitContactUsForm = async (formData) => {
  const { name, email, mobile, service, message } =
    Object.fromEntries(formData);
  return await handleFormSubmission("/api/form-submit/contact-us", {
    name,
    email,
    mobile,
    service,
    message,
  });
};

export const submitRegistrationForm = async (formData) => {
  console.log("Zmedios - submitRegistrationForm - formData:", formData);
  console.log("Submitting form data to:", "/api/form-submit/registration");

  // Prepare headers for multipart/form-data
  const headers = {
    "Content-Type": "multipart/form-data",
  };

  try {
    const response = await handleFormSubmission(
      "/api/form-submit/registration",
      formData, // formData already includes files
      headers
    );
    console.log("Response received from backend:", response);
    return response;
  } catch (error) {
    console.error("Error in submitRegistrationForm:", error);
    throw error;
  }
};

export const submitEnquiryForm = async (formData) => {
  const { name, email, mobile, message } = Object.fromEntries(formData);
  return await handleFormSubmission("/api/form-submit/enquiry", {
    name,
    email,
    mobile,
    message,
  });
};

// export const getFileLink = async (file) => {
//   const formData = new FormData();
//   formData.append("file", file);
//   try {
//     const response = await axios.post("/api/upload/google-drive", formData, {
//       headers: {
//         "Content-Type": "multipart/form-data",
//       },
//     });
//     return response.data.link;
//   } catch (error) {
//     console.error(`Error in getFileLink: ${error.message}`);
//     return null;
//   }
// };
