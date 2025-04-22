import React from "react";
import Header from "../components/Common/Header";
import Footer from "../components/Common/Footer";
import { useRouter } from "next/router";

const Staffing = () => {
  const router = useRouter();
  const { type } = router.query;

  console.log(type, 94589485);
  return (
    <>
      <Header />
      <div className="md:px-0 px-5 relative md:pt-0">
        <video width="100%" height="auto" autoPlay muted loop playsInline>
          <source src="/assets/firstZm.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {type === "resource-staffing" && (
          <div className="staffing_content">
            <h1 className="text-xl">IT & Non-IT Resource Staffing</h1>
            <p className="para_txt">
              {
                "At Zmedios Technology Pvt Ltd, we specialize in providing top-tier IT & Non-IT staffing solutions tailored to meet the dynamic needs of businesses across various industries. Whether you’re looking to hire highly skilled IT professionals or need dependable Non-IT staff, we have a diverse pool of talent ready to support your growth."
              }
            </p>
            <h1 className="text-xl">Our Staffing Solutions Include</h1>
            <p className="para_txt">
              {
                "IT Staffing Services: We understand that the tech industry is ever-evolving, and businesses need qualified IT professionals to stay ahead of the curve. Our IT staffing services provide businesses with access to a wide range of highly skilled candidates, including developers, software engineers, system architects, cybersecurity experts, and more. Whether you need short-term contract workers or full-time hires, we have the expertise to find the right talent to drive your technology initiatives forward."
              }
            </p>
            <p className="para_txt">
              {
                "Non-IT Staffing Services: In addition to IT staffing, we offer expert staffing solutions for various Non-IT roles. From administrative support, finance, and HR, to operations and customer service, our network of qualified professionals ensures that your business runs smoothly and efficiently. We understand the importance of having the right people in the right positions, and we are committed to delivering exceptional candidates for all your Non-IT needs."
              }
            </p>
            <h2 className="text-xl">Why Choose Us?</h2>
            <p className="para_txt">
              {
                "Tailored Solutions: We offer customized staffing plans to match your company’s specific needs and culture. Vast Talent Pool: We have a large network of highly qualified professionals across both IT and Non-IT sectors. Efficient Hiring Process: Our recruitment process is streamlined to ensure you get the best talent quickly. Flexible Options: From full-time, part-time, to contract-based staffing, we provide flexible staffing solutions to fit your business model"
              }
            </p>

            <p className="para_txt">
              {
                "End-to-End Support: From job description creation to onboarding, we provide full-cycle staffing services to ensure a smooth and successful hiring experience."
              }
            </p>

            <h2>Our Expertise</h2>
            <p className="para_txt">
              {
                "IT Roles: Software Developers, Data Analysts, System Administrators, Cloud Engineers, Network Engineers, DevOps Engineers, Cybersecurity Experts, Business Analysts, QA Engineers, and more. Non-IT Roles: Accountants, HR Managers, Marketing Experts, Customer Support Agents, Project Managers, Sales Professionals, and Administrative Assistants."
              }
            </p>
          </div>
        )}

        {type === "contract-staffing" && (
          <div className="staffing_content">
            <h1 className="text-xl">Contract Staffing Solutions</h1>
            <p className="para_txt">
              {
                "At Zmedios Technology Pvt Ltd, we specialize in providing flexible and scalable Contract Staffing Solutions to meet the evolving demands of your business. Whether you need highly skilled professionals for short-term projects, seasonal demands, or to fill resource gaps, we provide you with the right talent, exactly when you need it."
              }
            </p>
            <h1 className="text-xl">What is Contract Staffing?</h1>
            <p className="para_txt">
              {
                "Contract staffing allows businesses to hire skilled professionals for a fixed-term period or specific project needs without the long-term commitment of permanent employment. This solution offers greater flexibility, speed in hiring, and cost-effectiveness, making it ideal for organizations seeking to optimize their workforce based on current business needs."
              }
            </p>

            <h2 className="text-xl">
              Why Choose Our Contract Staffing Services?{" "}
            </h2>
            <p className="para_txt">
              {
                "Quick Access to Talent: We offer immediate access to a wide pool of pre-vetted, highly skilled contract professionals who can hit the ground running."
              }
            </p>
            <p className="para_txt">
              {
                "Flexible Workforce: Contract staffing allows your business to scale up or down quickly, adjusting to fluctuating workloads, project timelines, and budget constraints."
              }
            </p>

            <p className="para_txt">
              {
                "Cost Efficiency: With contract staffing, you only pay for the work done, eliminating long-term salary and benefits commitments, and reducing overhead costs."
              }
            </p>
            <p className="para_txt">
              {
                "Expertise on Demand: Whether it’s a short-term project, a special initiative, or seasonal support, we provide experts across various domains, ensuring high-quality work and timely delivery."
              }
            </p>
            <h2>
              Our Contract Staffing Services Include / {"IT Contract Staffing"}
            </h2>

            <p className="para_txt">
              {
                "We provide contract staffing solutions for the IT sector, ensuring that your tech projects are powered by experts with specialized skills in software development, system administration, cloud computing, cybersecurity, data analysis, and more. From developers to network engineers, we offer access to a wide range of tech talent that can be deployed immediately."
              }
            </p>
            <h2>Non-IT Contract Staffing</h2>
            <p className="para_txt">
              {
                "Our Non-IT contract staffing services provide professionals across a variety of industries and functions. Whether you need temporary support for administration, finance, marketing, HR, or operations, we have the talent to fill your requirements quickly and effectively."
              }
            </p>
            <h2>Project-Based Staffing</h2>
            <p className="para_txt">
              {
                "For businesses with specific project-based needs, our contract staffing solutions help you secure professionals who can deliver quality results within deadlines, without the long-term obligation of hiring full-time employees."
              }
            </p>
            <h2>Seasonal & Temporary Staffing</h2>
            <p className="para_txt">
              {
                "If your business experiences fluctuations in demand during certain times of the year, our seasonal staffing services can ensure that you have the right workforce in place to manage peaks without unnecessary overhead costs during off-seasons."
              }
            </p>
            <h2>Benefits of Contract Staffing:</h2>
            <p className="para_txt">
              {
                "Flexibility: Hire the right talent for your needs and timelines without committing to permanent employment contracts. Speed: Rapidly fill key positions with experienced professionals to maintain productivity and meet deadlines. Cost-Effective: Save on recruitment, training, and long-term compensation costs by hiring contract staff only when needed. Reduced Risk: Evaluate contractors on the job before considering them for permanent roles, reducing the risk of a bad hire. Focus on Core Business: Outsource non-core tasks to contract professionals, allowing your internal teams to focus on strategic initiatives."
              }
            </p>
          </div>
        )}

        {type === "permanent-staffing" && (
          <div className="staffing_content">
            <h1 className="text-xl">Permanent Staffing Solutions</h1>
            <p className="para_txt">
              {
                "At Zmedios Technology Pvt Ltd, we offer comprehensive Permanent Staffing Solutions designed to help businesses find and hire the best long-term talent for their teams. Whether you're looking to expand your workforce or replace a key team member, we specialize in connecting you with qualified professionals who align with your company’s culture and goals."
              }
            </p>
            <h1 className="text-xl">What is Permanent Staffing?</h1>
            <p className="para_txt">
              {
                "Permanent staffing refers to the recruitment and placement of candidates for full-time, long-term positions within your organization. Unlike temporary or contract staffing, permanent staffing ensures that the professionals you hire are fully integrated into your team and committed to your business's long-term success."
              }
            </p>
            <h2 className="text-xl">
              Why Choose Our Permanent Staffing Services?
            </h2>

            <p className="para_txt">
              {
                "Quality Talent Pool: We provide access to a diverse and highly skilled pool of candidates who are looking for long-term career opportunities. From entry-level positions to senior executives, we have the talent to meet your needs. End-to-End Recruitment: Our permanent staffing process covers everything from understanding your staffing requirements to onboarding and integrating new hires into your company culture. We handle all the recruitment steps, so you can focus on your core business activities."
              }
            </p>

            <p className="para_txt">
              {
                "End-to-End Support: From job description creation to onboarding, we provide full-cycle staffing services to ensure a smooth and successful hiring experience."
              }
            </p>
            <p className="para_txt">
              {
                "Cultural Fit: We prioritize finding candidates who not only have the right skills but also fit seamlessly with your company’s culture and values, ensuring long-term retention and success. Reduced Hiring Time: Our streamlined recruitment process helps you fill key positions quickly, reducing downtime and ensuring your business operations continue smoothly."
              }
            </p>
            <h2>
              Our Permanent Staffing Services Include: IT & Technology Staffing
            </h2>
            <p className="para_txt">
              {
                "Whether you need software developers, system administrators, cybersecurity professionals, data analysts, or cloud engineers, we provide permanent staffing solutions for your IT needs. Our extensive network ensures we match you with the best tech talent in the market."
              }
            </p>
            <h2 className="text-xl">Non-IT Staffing</h2>
            <p className="para_txt">
              {
                "From finance, marketing, and human resources to operations, sales, and customer service, we offer permanent staffing solutions for all your non-IT requirements. We help you hire skilled professionals who are committed to delivering long-term value for your organization."
              }
            </p>

            <h2 className="text-xl"> Executive Search</h2>
            <p className="para_txt">
              {
                "For senior leadership and executive roles, we offer specialized Executive Search services. Our team works closely with you to understand the requirements of top-level positions and ensures the candidates we present are the best fit for your business objectives."
              }
            </p>
            <h2 className="text-xl"> Specialized Roles </h2>
            <p className="para_txt">
              {
                "No matter how niche your hiring needs are, we have the expertise to recruit for specialized roles across various industries. Our consultants leverage industry insights and networks to connect you with the talent you need."
              }
            </p>
            <h2 className="text-xl">Benefits of Permanent Staffing:</h2>
            <p className="para_txt">
              {
                "Long-Term Value: Permanent staff are committed to growing with your organization and can make a significant long-term impact on your success."
              }
            </p>
            <p className="para_txt">
              {
                "Cost Efficiency: Save time and resources by reducing turnover and avoiding the repeated hiring cycle, which is often the case with contract staffing."
              }
            </p>
            <p className="para_txt">
              {
                "Stronger Team Dynamics: Permanent employees develop a deep understanding of your business, allowing them to contribute more effectively and foster better collaboration."
              }
            </p>
            <p className="para_txt">
              {
                "Improved Retention: By hiring candidates that align with your culture and vision, you increase the likelihood of long-term employee retention. Consistency and Stability: A permanent workforce provides consistency and stability, helping you build a strong organizational foundation."
              }
            </p>
          </div>
        )}

        {type === "employee-leasing" && (
          <div className="staffing_content">
            <h1 className="text-xl">Employee Leasing Services</h1>
            <p className="para_txt">
              {
                "At Zmedios Technology Pvt Ltd, we offer comprehensive Employee Leasing Services designed to meet your organization’s workforce needs with flexibility, efficiency, and cost-effectiveness. Whether you’re a startup, a growing business, or an established enterprise, we provide the talent you need to scale operations without the long-term commitments of traditional hiring."
              }
            </p>
            <h1 className="text-xl">What is Employee Leasing?</h1>
            <p className="para_txt">
              {
                "Employee Leasing, also known as Staff Augmentation or Personnel Leasing, is a service where we provide your business with skilled professionals to work on a temporary or long-term basis. These employees remain on our payroll while working for you, allowing you to focus on your core operations and avoid administrative burdens."
              }
            </p>

            <p className="para_txt">
              {
                "Non-IT Staffing Services: In addition to IT staffing, we offer expert staffing solutions for various Non-IT roles. From administrative support, finance, and HR, to operations and customer service, our network of qualified professionals ensures that your business runs smoothly and efficiently. We understand the importance of having the right people in the right positions, and we are committed to delivering exceptional candidates for all your Non-IT needs."
              }
            </p>
            <h2 className="text-xl">
              Why Choose Zmedios Technology Pvt Ltd for Employee Leasing?
            </h2>
            <p className="para_txt">
              {
                "Cost-Effective Workforce Solution: Save on recruitment, training, and HR management costs. With our leasing services, you can quickly access the talent you need without worrying about overhead expenses."
              }
            </p>

            <p className="para_txt">
              {
                "Access to Skilled Talent: We have a vast pool of qualified candidates in various domains, including IT, non-IT, administrative roles, and specialized fields. Whether you need developers, marketers, or customer support, we ensure you get the right fit for your business."
              }
            </p>

            <p className="para_txt">
              {
                "Flexibility and Scalability: Our leasing services allow you to scale your team up or down based on project needs, market demands, or seasonal fluctuations. You won’t be locked into permanent contracts."
              }
            </p>
            <p className="para_txt">
              {
                "Streamlined HR Management: We handle all HR functions, including payroll, benefits, and compliance, so you can focus on driving your business forward without worrying about employment laws and regulations."
              }
            </p>
            <p className="para_txt">
              {
                "Quick Deployment: We understand the urgency of meeting business goals. Our streamlined process ensures that you get skilled professionals on board quickly, without unnecessary delays."
              }
            </p>
            <h2>Our Employee Leasing Solutions Include:</h2>
            <p className="para_txt">
              {
                "IT & Non-IT Staffing: From developers and system administrators to HR professionals and sales experts, we offer flexible staffing solutions across industries."
              }
            </p>
            <p className="para_txt">
              {
                "Temporary or Project-Based Hiring: Whether you need short-term support or talent for long-term projects, we provide skilled employees who can integrate seamlessly into your team."
              }
            </p>

            <p className="para_txt">
              {
                "Full HR Management Services: We take care of all employee-related services including recruitment, onboarding, payroll, benefits administration, and compliance with local labor laws."
              }
            </p>
            <p className="para_txt">
              {
                "Remote & On-Site Professionals: We offer both remote and on-site leasing options, ensuring that you can hire talent that fits your team dynamics and operational requirements."
              }
            </p>
            <ul>
              <h1>Industries We Serve:</h1>
              <li>Shipping & Logistics</li>
              <li>Manufacturing</li>
              <li>Retail & E-commerce</li>
              <li>Education & Training</li>
            </ul>
            <h2 className="text-xl">How It Works:</h2>
            <p className="para_txt">
              {
                "Initial Consultation: We begin by understanding your business needs and the specific skills required for the roles you need to fill."
              }
            </p>
            <p className="para_txt">
              {
                "Candidate Selection: Based on your requirements, we source candidates from our extensive database or search for the best talent to match your specifications."
              }
            </p>
            <p className="para_txt">
              {
                "Leasing Agreement: Once you’ve selected the talent, we finalize a leasing agreement that suits your operational requirements, project timelines, and budget."
              }
            </p>
            <p className="para_txt">
              {
                "Onboarding & Integration: Our team ensures a smooth onboarding process for the leased employee, allowing them to integrate into your organization efficiently."
              }
            </p>
            <p className="para_txt">
              {
                "Ongoing Support: We provide continued support for both you and the employee, ensuring satisfaction and productivity throughout the lease period."
              }
            </p>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Staffing;
