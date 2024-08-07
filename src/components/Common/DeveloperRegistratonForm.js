"use client"
import { usePathname } from 'next/navigation'
import React, {useState, useCallback} from "react";
import Image from "next/image";
import {useDropzone} from 'react-dropzone'
import { ImSpinner3 } from "react-icons/im";
import { getFileLink, submitRegistrationForm, subscribeNewsletter } from "../../lib/actions";


const DeveloperRegistrationSection = () => {

    const pathname = usePathname();
    const [file, setFile] = useState(null);
    const [ndaCheck, setNdaCheck] = useState(false);
    const [registrationFormSubmission, setRegistrationFormSubmission] = useState({
        loading: false,
        error: false,
        status: 'Submit'
    })
    const [newsletterFormSubmission, setNewsletterFormSubmission] = useState({
        loading: false,
        error: false,
        status: ''
    })
    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        mobile: '',
        companyName: '',
        technology: '',
        joiningDays: '',
        jobTitle: '',
        preferredLocation: '',
    });

    const checkFields = () => {
        if(!formData.fullname || !formData.email || !formData.mobile || !formData.technology || !formData.joiningDays || !formData.jobTitle || !formData.preferredLocation){
            return false;
        }
        if(pathname.includes('/hire-developer') && !formData.companyName){
            return false;
        }
        return true;
    }

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
        const isFormValid = checkFields();

        if(!isFormValid){
            setRegistrationFormSubmission((prevState) => ({
                ...prevState,
                error: true,
                loading: false,
                status: 'Please fill all the fields'
            }))

            setTimeout(()=>{
                setRegistrationFormSubmission((prevState) => ({
                    ...prevState,
                    error: false,
                    loading: false,
                    status: 'Submit'
                }))
            },5000)

            return;
        }
        
        setRegistrationFormSubmission((prevState) => ({
            ...prevState,
            loading: true,
            status: 'Submitting...'
        }))
        const data = new FormData()
        
        if(file){
            const link = await getFileLink(file);
            data.append('fileLink', link);
        }
        else{
            data.append('fileLink', '');
        }

        if(!file){
            setRegistrationFormSubmission((prevState) => ({
                ...prevState,
                error: true,
                loading: false,
                status: 'Please upload a file'
            }))

            setTimeout(()=>{
                setRegistrationFormSubmission((prevState) => ({
                    ...prevState,
                    error: false,
                    loading: false,
                    status: 'Submit'
                }))
            },5000)

            return;
        }
        
        data.append('ndaCheck', ndaCheck);
        
        Object.keys(formData).forEach(key => {
            data.append(key, formData[key]);
        });
        
        data.append('userType', pathname==="/hireme" ? "individual" : "company");
        data.append("companyName", pathname==="/hireme" ? "" : formData.companyName);
        
        
        
        const response = await submitRegistrationForm(data)

        if(response.success){
            setTimeout(() => {
                setRegistrationFormSubmission((prevState) => ({
                    ...prevState,
                    loading: false,
                    status: response.message
                }));
                setFormData({
                    fullname: '',
                    email: '',
                    mobile: '',
                    companyName: '',
                    technology: '',
                    joiningDays: '',
                    jobTitle: '',
                    preferredLocation: ''
                });
                setFile(null);
            }, 4000)
        }
        else{
            setTimeout(() => {
                setRegistrationFormSubmission((prevState) => ({
                    error: true,
                    loading: false,
                    status: response.message
                }));
                setFile(null);
                setNdaCheck(false);
                setFormData({
                    fullname: '',
                    email: '',
                    mobile: '',
                    companyName: '',
                    technology: '',
                    joiningDays: '',
                    jobTitle: '',
                    preferredLocation: ''
                });
            }, 4000)
        }
        setTimeout(() => {
            setRegistrationFormSubmission((prevState) => ({
                error: false,
                loading: false,
                status: 'Submit'
            }));
        }, 8000);
    };

    const handleNewsletterSubmit = async (e) => {
        e.preventDefault();
        const subscribedEmail = e.target.email.value;
        if(!subscribedEmail){
            setNewsletterFormSubmission({
                error: true,
                loading: false,
                status: 'Please enter your email'
            });

            setTimeout(()=>{
                setNewsletterFormSubmission((prevState) => ({
                    ...prevState,
                    error: false,
                    status: ''
                }))
            },3000)

            return;
        }
        setNewsletterFormSubmission((prevState) => ({
            ...prevState,
            loading: true,
            status: 'Subscribing...'
        }))
        const formData = new FormData();
        formData.append('email', subscribedEmail);

        const response = await subscribeNewsletter(formData);
        if(response.success){
            setTimeout(() => {
                setNewsletterFormSubmission((prevState) => ({
                    ...prevState,
                    loading: false,
                    status: response.message
                }));
                e.target.email.value = '';
            }, 4000)
        }
        else{
            setTimeout(() => {
                setNewsletterFormSubmission({
                    error: true,
                    loading: false,
                    status: response.message
                });
                e.target.email.value = '';
            }, 4000)
        }
        setTimeout(() => {
            setNewsletterFormSubmission({
                loading: false,
                error: false,
                status: ''
            });
        }, [8000])
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
                                        value={formData.fullname}
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
                                        name="mobile"
                                        id="mobile"
                                        placeholder="Phone"
                                        value={formData.mobile}
                                        onChange={handleInputChange}
                                        className="w-full px-3 pb-3 border-b-2 focus:outline-none"
                                    />
                                </div>
                                {pathname.includes('/hire-developer') && <div className="w-[548px] py-3">
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
                                <button type="submit" className={`${(registrationFormSubmission.error && checkFields()) && "cursor-not-allowed"} bg-[#008F17] text-white px-8 py-2 rounded-md w-[548px] flex justify-center items-center`}>
                                    <span className="text-base flex items-center space-x-4"> 
                                        {registrationFormSubmission.loading ? <ImSpinner3 /> : <></>}
                                        {registrationFormSubmission.error ? "Submit" : registrationFormSubmission.status} 
                                    </span>
                                </button>
                                <div className="flex space-x-2 items-center w-[365px]">
                                    <input checked={ndaCheck} onChange={()=>{setNdaCheck(!ndaCheck)}} id="nda-check" type="checkbox" value="" className="w-4 h-4 text-blue-500 bg-gray-100 border-gray-300 rounded" />
                                    <label htmlFor="nda-check" className="ms-2 text-sm font-normal text-[#383C3E] ">I want to protect my data by siging an NDA</label>
                                </div>
                                <div className={`text-center w-[548px] ${!registrationFormSubmission.error ? 'text-[#008F17]' : 'text-red-600'}`}>
                                    {registrationFormSubmission.error && registrationFormSubmission.status}
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
                                className="flex justify-between items-start"
                            >
                                <div className="w-[262px] h-9">
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="Email"
                                        className="w-full px-3 pb-2 border-b-2 focus:outline-none"
                                    />
                                </div>
                                <button className="bg-[#008F17] text-white w-[71px] h-8  flex justify-center items-center  ">
                                    { !newsletterFormSubmission.loading ? <>&#10004;</> : <ImSpinner3 /> }
                                </button>

                            </form>
                            <div className={`text-center mt-4 ${ !newsletterFormSubmission.error ? 'text-[#008F17]' : 'text-red-600'}`}>{newsletterFormSubmission.status}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DeveloperRegistrationSection;