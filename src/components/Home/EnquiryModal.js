import React, {useEffect, useState} from 'react';
import { submitEnquiryForm } from '../../lib/actions';

const EnquiryFormModal = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        message: '',
    });
    const [formSubmissionStatus, setFormSubmissionStatus] = useState('Submit')

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
        setFormSubmissionStatus('Submitting...');
        const data = new FormData();

        Object.keys(formData).forEach(key => {
            data.append(key, formData[key]);
        });

        const response = await submitEnquiryForm(data);  

        if(response.success){
            setTimeout(() => {
                setFormSubmissionStatus(response.message);
                setFormData({
                    name: '',
                    email: '',
                    mobile: '',
                    message: '',
                });
            }, 3000)

            setTimeout(() => {
                setFormSubmissionStatus('Submit');
                handleCloseForm();
            }, 5000);
        }
        else{
            setTimeout(() => {
                setFormSubmissionStatus(response.message);
                setFormData({
                    name: '',
                    email: '',
                    mobile: '',
                    message: '',
                });
            }, 3000)
            setTimeout(() => {
                setFormSubmissionStatus('Submit');
            }, 5000);
        }
    }


    if (!isOpen) return null;

    return (
        <div className="absolute right-16 w-[32%] h-[61%]   z-20 flex items-center ">
            <div className="bg-zinc-100/80 p-6 rounded-lg shadow-lg w-full space-y-4">
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
                    <div className='flex gap-4'>
                        <div className="mb-4">
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
                        <div className="mb-4">
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
                        <span className='text-base flex items-center '>{formSubmissionStatus}</span>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EnquiryFormModal;
