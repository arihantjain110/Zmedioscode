"use client"
import { usePathname } from 'next/navigation'
import React, {useState, useCallback} from "react";
import Image from "next/image";
import {useDropzone} from 'react-dropzone'
import { getFileLink, submitRegistrationForm, subscribeNewsletter } from "../../lib/actions";

const DeveloperRegistrationSection = () => {

    const pathname = usePathname();
    const [file, setFile] = useState(null);
    const [ndaCheck, setNdaCheck] = useState(true);
    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        phone: '',
        companyName: '',
        technology: '',
        joiningDays: '',
        jobTitle: '',
        preferredLocation: '',
    });

    const onDrop = useCallback(acceptedFiles => {
        if(acceptedFiles.length === 0) return;
        setFile(acceptedFiles[0]);
    }, [])
    const onDropRejected = useCallback(
        (fileRejections) => {
            const fileRejection = fileRejections[0];
            const fileError = fileRejection.errors[0];
            if(fileError.code === 'file-too-large'){
                alert('File is too large. Max file size is 10MB');
            }
        }, 
        []
    )

    const {getRootProps, getInputProps, isDragActive} = useDropzone({
        onDrop,
        onDropRejected,
        accept: {
            'application/pdf': ['.pdf'],
            'application/msword': ['.doc', '.docx'],
        },
        maxSize: 10 * 1024 * 1024 // 10 MB
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleRegistrationSubmit = async (e) => {
        e.preventDefault();
        
        const data = new FormData()

        if(file){
            const link = await getFileLink(file);
            data.append('fileLink', link);
        }
        else{
            data.append('fileLink', '');
        }

        data.append('ndaCheck', ndaCheck);

        Object.keys(formData).forEach(key => {
            data.append(key, formData[key]);
        });

        data.append('userType', pathname==="/hireme" ? "individual" : "company");
        data.append("companyName", pathname==="/hireme" ? "" : formData.companyName);

        
        const response = await submitRegistrationForm(data)
    };

    const handleNewsletterSubmit = async (e) => {
        e.preventDefault();
        const subscribedEmail = e.target.email.value;
        const formData = new FormData();
        formData.append('email', subscribedEmail);

        const response = await subscribeNewsletter(formData);
    }

    return (
        <>
            <div className="pt-16"  >
                <div className="container-ack md:grid grid-cols-2 md:px-0 md:pt-0 ">
                    <div className="w-[548px]">
                        <h1 className="font-bold text-4xl leading-[70.4px] text-[#383C3E]">Registration Form</h1>
                        <p className="font-normal text-base leading-[25.6px] text-[#737B7D]">
                        {"Join our developer network by filling out our quick registration form. Your details will help us match you with exciting projects that fit your skills and interests. Let's get started on your next coding adventure together!"}
                        </p>
                        
                        {/* form start */}
                        <form 
                            onSubmit={handleRegistrationSubmit}
                            className="md:pt-0 pt-7 text-[#8E8E8E]"
                        >
                            <div className="space-y-2 md:pr-16 py-8 text-sm">
                                <div className="w-[548px] py-3">
                                    <input
                                        type="text"
                                        name="fullname"
                                        id="fullname"
                                        placeholder="Full Name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className="w-full px-3 pb-3 border-b-2 focus:outline-none"
                                    />
                                </div>
                                <div className="w-[548px] py-3">
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="Email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-full px-3 pb-3 border-b-2 focus:outline-none"
                                    />
                                </div>
                                <div className="w-[548px] py-3">
                                    <input
                                        type="text"
                                        name="phone"
                                        id="phone"
                                        placeholder="Phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className="w-full px-3 pb-3 border-b-2 focus:outline-none"
                                    />
                                </div>
                                {pathname==='/hire-developer' && <div className="w-[548px] py-3">
                                    <input
                                        type="text"
                                        name="companyName"
                                        id="companyName"
                                        placeholder="Company Name"
                                        value={formData.companyName}
                                        onChange={handleInputChange}
                                        className="w-full px-3 pb-3 border-b-2 focus:outline-none"
                                    />
                                </div>}
                                <div className="w-[548px] py-3">
                                    <select 
                                        id="technology" 
                                        name="technology"
                                        value={formData.technology}
                                        onChange={handleInputChange}
                                        className="w-full px-2 pb-3 border-b-2 focus:outline-none"
                                    >
                                        <option value="">Technology</option>
                                        <option value="reactjs">React</option>
                                        <option value="vuejs">VueJS</option>
                                    </select>
                                </div>
                                <div className="w-[548px] py-3">
                                    <input
                                        type="text"
                                        name="joiningDays"
                                        id="joiningDays"
                                        placeholder="Joining Days"
                                        value={formData.joiningDays}
                                        onChange={handleInputChange}
                                        className="w-full px-3 pb-3 border-b-2 focus:outline-none"
                                    />
                                </div>
                                <div className="w-[548px] py-3">
                                    <input
                                        type="text"
                                        name="jobTitle"
                                        id="jobTitle"
                                        placeholder="Job Title"
                                        value={formData.jobTitle}
                                        onChange={handleInputChange}
                                        className="w-full px-3 pb-3 border-b-2 focus:outline-none"
                                    />
                                </div>
                                <div className="w-[548px] py-3">
                                    <select 
                                        id="preferredLocation" 
                                        name="preferredLocation"
                                        value={formData.location}
                                        onChange={handleInputChange}
                                        className="w-full px-2 pb-3 border-b-2 focus:outline-none"
                                    >
                                        <option value="">Preferred Location</option>
                                        <option value="US">United States</option>
                                        <option value="CA">Canada</option>
                                        <option value="FR">France</option>
                                        <option value="DE">Germany</option>
                                    </select>
                                </div>
                                <div {...getRootProps()}>
                                    <input {...getInputProps()} />
                                    <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-28 border border-[#8E8E8E] border-dashed rounded-lg cursor-pointer ">
                                        <div className="flex flex-col items-center justify-center ">
                                            {!file ? 
                                                <>
                                                    <svg className="w-8 h-8 mb-4  " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                                    </svg>
                                                    <p className="mb-2 text-sm  "><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                                    <p className="text-xs  ">Attach file. File size of your documents should not exceed 10MB.</p>
                                                </> 
                                                :
                                                <>
                                                    <p className="font-semibold">{`Uploaded file : ${file?.name}`}</p>
                                                </>
                                            }
                                        </div>
                                    </label>
                                </div>
                                <button type="submit" className="bg-[#008F17]  text-white px-8 py-2 rounded-md w-[548px] flex justify-center items-center  ">
                                    <span className="text-base"> SUBMIT </span>
                                </button>
                                <div className="flex space-x-2 items-center w-[365px">
                                    <input checked={ndaCheck} onChange={()=>{setNdaCheck(!ndaCheck)}} id="nda-check" type="checkbox" value="" className="w-4 h-4 text-blue-500 bg-gray-100 border-gray-300 rounded" />
                                    <label htmlFor="nda-check" className="ms-2 text-sm font-normal text-[#383C3E] ">I want to protect my data by siging an NDA</label>
                                </div>
                            </div>
                        </form>
                        {/* form end */}

                    </div>
                    <div className="flex flex-col items-center mt-16 space-y-10 text-[#383C3E]">
                        <div className="w-[357px]">
                            <h1 className="font-bold mb-5">Offices</h1>
                            <p className="">
                                India
                                <br />
                                IV, JMD MEGAPOLIS, Badshahpur Sohna Rd Hwy, Bhondsi, Gurugram, Haryana 122018
                            </p>                        
                        </div>
                        <div className="w-[357px]">
                            <h1 className="font-bold mb-5">For Quick Inquiries</h1>
                            <p className="flex space-x-3 w-[262px]">
                                <Image src="/assets/images/india.png" width={20} height={20} alt="india flag" />
                                <span>+91-9340609004</span>
                            </p>
                        </div>
                        <div className="w-[357px]">
                            <h1 className="font-bold mb-5">Would you like to join our newsletter ?</h1>
                            <form 
                                onSubmit={handleNewsletterSubmit}
                                className="flex justify-between items-start">
                                <div className="w-[262px] h-[76px]">
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="Email"
                                        className="w-full px-3 pb-3 border-b-2 focus:outline-none"
                                    />
                                </div>
                                <button className="bg-[#008F17] text-white w-[71px] h-8  flex justify-center items-center  ">
                                    &#10004;
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DeveloperRegistrationSection;