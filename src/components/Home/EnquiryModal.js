import React, {useEffect, useState} from 'react';

const EnquiryFormModal = () => {

    const [isOpen, setIsOpen] = useState(false);

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


    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-20 flex items-center justify-center bg-gray-800 bg-opacity-75">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-96 space-y-4">
                <div className='flex justify-between items-center '>
                    <h2 className="text-2xl">Enquiry Form</h2>
                    <button
                        onClick={handleCloseForm}
                        className="hover:border  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        X
                    </button>
                </div>
                <form>
                    {/* Add your form fields here */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mobile">
                            Mobile
                        </label>
                        <input
                            id="mobile"
                            type="text"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                            Message
                        </label>
                        <textarea
                            id="message"
                            type="text"
                            rows={3}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight resize-none focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EnquiryFormModal;
