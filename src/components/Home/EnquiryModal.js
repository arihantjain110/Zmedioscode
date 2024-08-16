"use client"
import React, {useEffect, useState} from 'react';
import { ImSpinner3 } from 'react-icons/im';
import { submitEnquiryForm } from '../../lib/actions';

const EnquiryFormModal = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        message: '',
    });
    const [formSubmission, setFormSubmission] = useState({
        loading: false,
        error: false,
        status: "Submit"
    })

    const checkFields = () => {
        if(!formData.name || !formData.email || !formData.mobile || !formData.message ){
            return false;
        }
        return true;
    }

    useEffect(() => {
      // Check if the form has been shown before
      const hasSeenForm = localStorage.getItem('enquiryFormSeen');
      if (!hasSeenForm) {
        setIsOpen(true);
      }
    }, []);
  
    const handleCloseForm = () => {
      // Mark that the user has seen the form
      localStorage.setItem('enquiryFormSeen', 'true');
      setIsOpen(false);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
        
    const handleSubmit = async (e) => {
        e.preventDefault();

        const isFormValid = checkFields();
        if(!isFormValid){
            setFormSubmission((prevState) => ({
                ...prevState,
                error: true,
                status: 'All fields are required',
            }))
            setTimeout(()=>{
                setFormSubmission((prevState)=>({
                    ...prevState, 
                    error: false, 
                    status: 'Submit'
                }));
            },4000)
            return;
        }

        const data = new FormData();

        Object.keys(formData).forEach(key => {
            data.append(key, formData[key]);
        });

        setFormSubmission((prevState)=>({
            ...prevState,
            loading: true,
            status: 'Submitting...'
        }))


        // Temporary success response till the API is ready
        const response = {
            success: true,
            message: 'Enquiry submitted successfully!!'
        }
        // const response = await submitEnquiryForm(data);  

        if(response.success){
            setTimeout(() => {
                setFormSubmission((prevState)=>({
                    ...prevState,
                    loading: false,
                    status: response.message,
                }));
                setFormData({
                    name: '',
                    email: '',
                    mobile: '',
                    message: '',
                });
            }, 2000)

            setTimeout(() => {
                setFormSubmission((prevState)=>({
                    ...prevState,
                    status: 'Submit',
                }));
            }, 4000);

            setTimeout(() => {
                handleCloseForm();
            }, 7000)
        }
        else{
            setTimeout(() => {
                setFormSubmission((prevState)=>({
                    error: true,
                    loading: false,
                    status: response.message,
                }));
                setFormData({
                    name: '',
                    email: '',
                    mobile: '',
                    message: '',
                });
            }, 3000)
            setTimeout(() => {
                setFormSubmission((prevState)=>({
                    ...prevState,
                    error: false,
                    status: 'Submit',
                }));
            }, 6000);
        }
    }


    if (!isOpen) return null;

    return (
        <div className="hidden md:flex absolute right-16 w-full h-full z-20 items-center ">
            <div className="bg-zinc-100/80 px-6 pt-6 pb-8 rounded-lg shadow-lg w-full space-y-0">
                <div className='flex justify-between items-center '>
                    <h2 className="text-2xl">Enquiry Form</h2>
                    <button
                        onClick={handleCloseForm}
                        className="hover:border-2 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        X
                    </button>
                </div>
                <form onSubmit={handleSubmit}>
                    {/* Add your form fields here */}
                    <div className="mb-4">
                        <label className="block text-gray-900 text-sm font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-50 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className='flex gap-4 w-full'>
                        <div className="mb-4 w-1/2">
                            <label className="block text-gray-900 text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-50 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div className="mb-4 w-1/2">
                            <label className="block text-gray-900 text-sm font-bold mb-2" htmlFor="mobile">
                                Mobile
                            </label>
                            <input
                                type="text"
                                id="mobile"
                                name="mobile"
                                value={formData.mobile}
                                onChange={handleInputChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-50 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-900 text-sm font-bold mb-2" htmlFor="message">
                            Message
                        </label>
                        <textarea
                            type="text"
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            rows={2}
                            className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-50 text-gray-700 leading-tight resize-none focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <button type="submit" className="w-full button-3 bg-secondary hover:bg-primary flex justify-center text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        <div className="eff-3"></div>
                        <span className='text-base flex items-center '>
                            {formSubmission.loading && <ImSpinner3 />}
                            {formSubmission.error ? "Submit" : formSubmission.status}
                        </span>
                    </button>
                    {formSubmission.error && 
                        <div className='text-center mt-4 text-red-600 w-full'>
                            {formSubmission.status}
                        </div>
                    }
                </form>
            </div>
        </div>
    );
};

export default EnquiryFormModal;
