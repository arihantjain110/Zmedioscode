"use client";
import { usePathname } from "next/navigation";
import React, { useState, useCallback } from "react";
import Image from "next/image";
import { useDropzone } from "react-dropzone";
import { ImSpinner3 } from "react-icons/im";
import {
  getFileLink,
  submitRegistrationForm,
  subscribeNewsletter,
} from "../../lib/actions";

const DeveloperRegistrationSection = () => {
  const pathname = usePathname();
  const [file, setFile] = useState(null);
  // const [ndaCheck, setNdaCheck] = useState(false);
  const [registrationFormSubmission, setRegistrationFormSubmission] = useState({
    loading: false,
    error: false,
    status: "Submit",
  });
  const [newsletterFormSubmission, setNewsletterFormSubmission] = useState({
    loading: false,
    error: false,
    status: "",
  });
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    mobile: "",
    companyName: "",
    technology: [],
  });

  const checkFields = () => {
    if (
      !formData.fullname ||
      !formData.email ||
      !formData.mobile ||
      !formData.technology
    ) {
      return false;
    }
    if (pathname.includes("/hire-developer") && !formData.companyName) {
      return false;
    }
    return true;
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // const onDrop = useCallback((acceptedFiles) => {
  //   if (acceptedFiles.length === 0) return;
  //   setFile(acceptedFiles[0]);
  // }, []);
  // const onDropRejected = useCallback((fileRejections) => {
  //   const fileRejection = fileRejections[0];
  //   const fileError = fileRejection.errors[0];
  //   if (fileError.code === "file-too-large") {
  //     alert("File is too large. Max file size is 10MB");
  //   }
  // }, []);

  // const { getRootProps, getInputProps, isDragActive } = useDropzone({
  //   onDrop,
  //   onDropRejected,
  //   accept: {
  //     "application/pdf": [".pdf"],
  //     "application/msword": [".doc", ".docx"],
  //   },
  //   maxSize: 10 * 1024 * 1024, // 10 MB
  // });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleTechnologyChange = (value) => {
    setFormData((prevData) => {
      const updatedTechnology = Array.isArray(prevData.technology)
        ? prevData.technology.includes(value)
          ? prevData.technology.filter((tech) => tech !== value)
          : [...prevData.technology, value]
        : [value]; // Default to an array if it's not
      return {
        ...prevData,
        technology: updatedTechnology,
      };
    });
  };

  const handleRemoveChip = (techToRemove) => {
    setFormData((prevData) => ({
      ...prevData,
      technology: prevData.technology.filter((tech) => tech !== techToRemove),
    }));
  };

  const handleRegistrationSubmit = async (e) => {
    console.log("Zmedios - handleRegistrationSubmit - e:", e);
    e.preventDefault();

    const isFormValid = checkFields();
    if (!isFormValid) {
      setRegistrationFormSubmission((prevState) => ({
        ...prevState,
        error: true,
        loading: false,
        status: "Please fill all the fields",
      }));

      setTimeout(() => {
        setRegistrationFormSubmission((prevState) => ({
          ...prevState,
          error: false,
          loading: false,
          status: "Submit",
        }));
      }, 4000);

      return;
    }

    if (!file) {
      setRegistrationFormSubmission((prevState) => ({
        ...prevState,
        error: true,
        loading: false,
        status: "Please upload a file",
      }));

      setTimeout(() => {
        setRegistrationFormSubmission((prevState) => ({
          ...prevState,
          error: false,
          loading: false,
          status: "Submit",
        }));
      }, 2000);

      return;
    }

    setRegistrationFormSubmission((prevState) => ({
      ...prevState,
      loading: true,
      status: "Submitting...",
    }));

    const data = new FormData();
    data.append("fullname", formData.fullname);
    data.append("email", formData.email);
    data.append("mobile", formData.mobile);
    data.append("companyName", formData.companyName);
    data.append("technology", JSON.stringify(formData.technology));
    data.append("file", file);

    try {
      const response = await submitRegistrationForm(data);

      if (response.success) {
        setRegistrationFormSubmission((prevState) => ({
          ...prevState,
          loading: false,
          status: response.message,
        }));
        setFormData({
          fullname: "",
          email: "",
          mobile: "",
          companyName: "",
          technology: [],
        });
        setFile(null);
        // setNdaCheck(false);
      } else {
        setRegistrationFormSubmission((prevState) => ({
          ...prevState,
          error: true,
          loading: false,
          status: response.message,
        }));
      }

      setTimeout(() => {
        setRegistrationFormSubmission((prevState) => ({
          error: false,
          loading: false,
          status: "Submit",
        }));
      }, 5000);
    } catch (error) {
      setRegistrationFormSubmission((prevState) => ({
        ...prevState,
        error: true,
        loading: false,
        status: "Error submitting form",
      }));
    }
  };

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    const subscribedEmail = e.target.email.value;
    if (!subscribedEmail) {
      setNewsletterFormSubmission({
        error: true,
        loading: false,
        status: "Please enter your email",
      });

      setTimeout(() => {
        setNewsletterFormSubmission((prevState) => ({
          ...prevState,
          error: false,
          status: "",
        }));
      }, 9000);

      return;
    }
    setNewsletterFormSubmission((prevState) => ({
      ...prevState,
      loading: true,
      status: "Subscribing...",
    }));
    const formData = new FormData();
    formData.append("email", subscribedEmail);

    const response = await subscribeNewsletter(formData);

    if (response.success) {
      setTimeout(() => {
        setNewsletterFormSubmission((prevState) => ({
          ...prevState,
          loading: false,
          status: response.message,
        }));
        e.target.email.value = "";
      }, 1000);
    } else {
      setTimeout(() => {
        setNewsletterFormSubmission({
          error: true,
          loading: false,
          status: response.message,
        });
        e.target.email.value = "";
      }, 4000);
    }
    setTimeout(() => {
      setNewsletterFormSubmission({
        loading: false,
        error: false,
        status: "",
      });
    }, [5000]);
  };

  return (
    <>
      <div className="pt-16">
        <div className="container-ack md:grid grid-cols-2 md:px-0 md:pt-0 ">
          <div className="w-[548px]">
            <h1 className="font-bold text-4xl leading-[70.4px] text-[#383C3E]">
              Registration Form
            </h1>
            <p className="font-normal text-base leading-[25.6px] text-[#737B7D]">
              {
                "Join our developer network by filling out our quick registration form. Your details will help us match you with exciting projects that fit your skills and interests. Let's get started on your next coding adventure together!"
              }
            </p>

            {/* form start */}
            <form
              onSubmit={handleRegistrationSubmit}
              className="md:pt-0 pt-7 text-[#8E8E8E]"
            >
              <div className="space-y-2 md:pr-16 py-8 text-sm">
                <div className="relative  sm:col-span-3 w-[548px]">
                  <input
                    type="text"
                    name="fullname"
                    id="fullname"
                    placeholder=" "
                    value={formData.fullname}
                    onChange={handleInputChange}
                    className="peer block w-full px-3 pb-3 pt-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-900 placeholder-transparent focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                  />
                  <label
                    for="fullname"
                    className="absolute left-3 -top-3 bg-white px-1 text-sm transform scale-75 origin-[0] transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:scale-100 peer-placeholder-shown:bg-transparent peer-placeholder-shown:px-0 peer-placeholder-shown:text-gray-400 peer-focus:-top-3 peer-focus:bg-white peer-focus:px-1 peer-focus:scale-90 peer-focus:text-gray-600 peer-focus:text-lg"
                  >
                    Full Name
                  </label>
                </div>

                <div
                  className="relative  sm:col-span-3 w-[548px]"
                  style={{ marginTop: 15 }}
                >
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="peer block w-full px-3 pb-3 pt-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-900 placeholder-transparent focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                  />
                  <label
                    for="email"
                    className="absolute left-3 -top-3 bg-white px-1 text-sm transform scale-75 origin-[0] transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:scale-100 peer-placeholder-shown:bg-transparent peer-placeholder-shown:px-0 peer-placeholder-shown:text-gray-400 peer-focus:-top-3 peer-focus:bg-white peer-focus:px-1 peer-focus:scale-90 peer-focus:text-gray-600 peer-focus:text-lg"
                  >
                    Email
                  </label>
                </div>

                <div
                  className="relative sm:col-span-3 w-[548px]"
                  style={{ marginTop: 15 }}
                >
                  <input
                    type="text"
                    name="mobile"
                    id="mobile"
                    placeholder="Phone"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    className="peer block w-full px-3 pb-3 pt-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-900 placeholder-transparent focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                  />
                  <label
                    for="mobile"
                    className="absolute left-3 -top-3 bg-white px-1 text-sm transform scale-75 origin-[0] transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:scale-100 peer-placeholder-shown:bg-transparent peer-placeholder-shown:px-0 peer-placeholder-shown:text-gray-400 peer-focus:-top-3 peer-focus:bg-white peer-focus:px-1 peer-focus:scale-90 peer-focus:text-gray-600 peer-focus:text-lg"
                  >
                    Mobile
                  </label>
                </div>

                {pathname.includes("/hire-developer") && (
                  <div
                    className="relative sm:col-span-3 w-[548px]"
                    style={{ marginTop: 15 }}
                  >
                    <input
                      type="text"
                      name="companyName"
                      id="companyName"
                      placeholder="Company Name"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      className="peer block w-full px-3 pb-3 pt-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-900 placeholder-transparent focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                    />
                    <label
                      for="companyName"
                      className="absolute left-3 -top-3 bg-white px-1 text-sm transform scale-75 origin-[0] transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:scale-100 peer-placeholder-shown:bg-transparent peer-placeholder-shown:px-0 peer-placeholder-shown:text-gray-400 peer-focus:-top-3 peer-focus:bg-white peer-focus:px-1 peer-focus:scale-90 peer-focus:text-gray-600 peer-focus:text-lg"
                    >
                      Company Name
                    </label>
                  </div>
                )}

                <div
                  className="relative sm:col-span-3 w-[548px]"
                  style={{ marginTop: 15 }}
                >
                  <div className="mb-2 flex flex-wrap">
                    {(Array.isArray(formData.technology)
                      ? formData.technology
                      : []
                    ).map((tech) => (
                      <div
                        key={tech}
                        className="bg-blue-600 text-white px-3 py-1 rounded-full flex items-center mr-2 mb-2"
                      >
                        <span className="mr-2">{tech}</span>
                        <button
                          type="button"
                          className="focus:outline-none"
                          onClick={() => handleRemoveChip(tech)}
                        >
                          ✕
                        </button>
                      </div>
                    ))}
                  </div>

                  <select
                    id="technology"
                    name="technology"
                    value=""
                    onChange={(e) => handleTechnologyChange(e.target.value)}
                    className="peer block w-full px-3 pb-3 pt-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-900 placeholder-transparent focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                  >
                    <option value="" disabled>
                      Select Technology
                    </option>
                    <option value="Java">Java</option>
                    <option value="vuejs">VueJS</option>
                    <option value="reactjs">React</option>
                    <option value="iOS">iOS</option>
                    <option value="Android">Android</option>
                    <option value="Python">Python</option>
                    <option value=".NET">.Net</option>
                    <option value="nextjs">Next js</option>
                    <option value="nodejs">Node js</option>
                    <option value="angular">Angular</option>
                    <option value="GraphQl">GraphQl</option>
                    <option value="kafka">Kafka</option>
                    <option value="Figma">Figma</option>
                    <option value="GraphicDesign">Graphic Design</option>
                  </select>
                </div>

                {/* <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  <label
                    for="dropzone-file"
                    className="flex flex-col items-center justify-center w-full h-28 border border-[#346e41] border-dashed rounded-lg cursor-pointer "
                  >
                    <div className="flex flex-col items-center justify-center ">
                      {!file ? (
                        <>
                          <svg
                            className="w-8 h-8 mb-4  "
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 16"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                            />
                          </svg>
                          <p className="mb-2 text-sm  text-gray-900 ">
                            <span className="font-semibold ">
                              Click to upload resume
                            </span>{" "}
                            or drag and drop
                          </p>
                          <p className="text-xs   text-gray-900">
                            File size of your documents should not exceed 10MB.
                          </p>
                        </>
                      ) : (
                        <>
                          <p className="font-semibold">{`Uploaded file : ${file?.name}`}</p>
                        </>
                      )}
                    </div>
                  </label>
                </div>*/}
                {/* <button
                  type="submit"
                  className={`${registrationFormSubmission.error && checkFields() && "cursor-not-allowed"} bg-[#008F17] text-white px-8 py-2 rounded-md w-[548px] flex justify-center items-center`}
                >
                  <span className="text-base flex items-center space-x-4">
                    {registrationFormSubmission.loading ? <ImSpinner3 /> : null}
                    {registrationFormSubmission.status === "success"
                      ? "Upload Resume"
                      : registrationFormSubmission.status === "error"
                        ? "Upload Resume"
                        : "Upload Resume"}
                  </span>
                </button>  */}

                <div className="relative sm:col-span-3 w-[548px] py-3">
                  <label
                    for="file_input"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Upload Resume
                  </label>
                  <input
                    className="peer block w-full px-3 pb-3 pt-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-900 placeholder-transparent focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                    aria-describedby="file_input_help"
                    id="file_input"
                    type="file"
                    onChange={handleFileChange}
                    accept=".pdf,.docx"
                  />
                  <p
                    class="mt-1 text-sm text-gray-500 dark:text-gray-300"
                    id="file_input_help"
                  >
                    .pdf or .docx files accepted only.
                  </p>
                </div>
                <div className="pt-2">
                  <button
                    type="submit"
                    className={`${registrationFormSubmission.error && checkFields() && "cursor-not-allowed"} bg-[#008F17] text-white px-8 py-2 rounded-md w-[548px] flex justify-center items-center`}
                  >
                    <span className="text-base flex items-center space-x-4">
                      {registrationFormSubmission.loading ? (
                        <ImSpinner3 />
                      ) : null}
                      {registrationFormSubmission.status === "success"
                        ? "Submit"
                        : registrationFormSubmission.status === "error"
                          ? "Submit"
                          : "Submit"}
                    </span>
                  </button>
                  {registrationFormSubmission.error && (
                    <p className="text-red-600 text-sm mt-2">
                      {registrationFormSubmission.status}
                    </p>
                  )}
                </div>

                {/* <div className="flex space-x-2 items-center w-[365px]">
                  <input
                    checked={ndaCheck}
                    onChange={() => {
                      setNdaCheck(!ndaCheck);
                    }}
                    id="nda-check"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-500 bg-gray-100 border-gray-900 rounded"
                  />
                  <label
                    for="nda-check"
                    className="ms-2 text-sm font-normal text-[#383C3E] "
                  >
                    I want to protect my data by siging an NDA
                  </label>
                </div> */}
                <div
                  className={`text-center w-[548px] ${!registrationFormSubmission.error ? "text-[#008F17]" : "text-red-600"}`}
                >
                  {registrationFormSubmission.error &&
                    registrationFormSubmission.status}
                </div>
              </div>
            </form>
            {/* form end */}
          </div>
          <div className="flex flex-col items-center mt-16 space-y-10 text-[#383C3E]">
            <div className="w-[357px]">
              <h1 className="font-bold mb-5">Office Address</h1>
              <p className="">
              MiQB Executive Coworking Space C-25, C Block, Sector 58,
              Noida, Uttar Pradesh 201301
              </p>
            </div>
            <div className="w-[357px]">
              <h1 className="font-bold mb-5">For Quick Inquiries</h1>
              <p className="flex space-x-3 w-[262px]">
                <Image
                  src="/assets/images/india.png"
                  width={20}
                  height={20}
                  alt="india flag"
                />
                <span>+91-9319062156</span>
              </p>
            </div>
            <div className="w-[357px]">
              <h1 className="font-bold mb-5">
                Would you like to join our newsletter ?
              </h1>
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
                    className="peer block w-full px-3 pb-2 pt-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-900 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <button className="bg-[#008F17] text-white w-[71px] h-8  flex justify-center items-center  ">
                  {!newsletterFormSubmission.loading ? (
                    <>&#10004;</>
                  ) : (
                    <ImSpinner3 />
                  )}
                </button>
              </form>
              <div
                className={`text-center mt-4 ${!newsletterFormSubmission.error ? "text-[#008F17]" : "text-red-600"}`}
              >
                {newsletterFormSubmission.status}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeveloperRegistrationSection;
