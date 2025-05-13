import Link from "next/link";
import React from "react";

const Card = () => {
  
  const data = [
    {
      id: 1,
      para: "lorem",
      text: "lorem",
      designation: "lorem",
      title: 'Healthcare',
      subtitle: 'Make the patient data rich insights with interactive dashboards for better diagnosis and operational efficiency. Imagine treatment trends, hospital performance and future analysis for the delivery of better care. Our solutions help health professionals make data -driven decisions faster.'
    },
    {
      id: 2,
      para: "lorem",
      text: "lorem",
      designation: "lorem",
      title: 'Real Estate',
      subtitle: 'Customer preferences via the track market trend, valuation of properties and dynamic bleeding and comparative analysis. Imagine sales pipelines, ROI estimates and demographic data to adapt investments. Make decisions on decisions about decisions, sales and leasing with real time. '
    },
    {
      id: 3,
      para: "lorem",
      text: "lorem",
      designation: "lorem",
      title: ' Machinery & Manufacturing',
      subtitle: 'The performance of the monitoring tool, the production efficiency and the supply chain logistics with a real -time dashboard. Provision for maintenance needs and reduces shutdown using IoT-driven visual analysis. Improve quality control and operational workflows with date -driven insights.'
    },
    {
      id: 4,
      para: "lorem",
      text: "lorem",
      designation: "lorem",
      title: 'Finance',
      subtitle: 'Detect fraud, examine chance, and tune portfolio overall performance through superior financial dashboards and forecasting models. Visualize marketplace traits, customer behavior, and transaction patterns for smarter investments. Enhance compliance and reporting with clear, audit-equipped statistics visuals.'
    },
    {
      id: 5,
      para: "lorem",
      text: "lorem",
      designation: "lorem",
      title: 'E-Commerce',
      subtitle: 'Analyze customers journey, sales stretch and inventory with interactive visual reports. Customize prices, reproduction and UX using heat map and behavioral analysis. Promote the conversion by converting large data to action-rich retail strategies.'
    },
    {
      id: 6,
      para: "lorem",
      text: "lorem",
      designation: "lorem",
      title: ' Education',
      subtitle: 'Track students performance, registration trends and institutional efficiency in making data -dashboard attractive. Imagine learning results, resource allocation and demographic insights for better planning. Strengthen teachers and administrators with evidence -based decision equipment.'
    },
     {
      id: 7,
      para: "lorem",
      text: "lorem",
      designation: "lorem",
      title: 'Tourism & Hospitality',
      subtitle: 'Measure the trends for ordering, guest satisfaction and seasonal demand through intuitive travel analysis. Imagine coating rates, revenue streams and marketing of ROI for smart operations. Increase customer experiences with data -driven privatization.'
    },
     {
      id: 8,
      para: "lorem",
      text: "lorem",
      designation: "lorem",
      title: 'Retail',
      subtitle: 'Purchasing patterns, stock levels and customer demographics with dynamic retail. Customize store layouts, promotion and supply chains using visual trend analysis. Real time, sales and loyalty with data-driven strategies.'
    },
  ];
  return (
    <div className="container-ack">
      <div className="md:grid grid-cols-3 gap-8 px-8">
        {data.map((item, e) => (
          <div className="group pt-10 relative " key={e}>
            <div className="bg-[#F6F8F9] border-2 border-[#F6F8F9] text-left pt-12 pb-8 px-6 rounded-md hovertestimonial">
              <div className="h-60">
                <span className="rounded-full w-12 h-12 absolute top-4 text-white flex justify-center items-center bg-black left-[9rem]">
                  {item.id}
                </span>
                
                <h2 className="font-semibold text-black w-32 mb-3">
                 {item.title}

                </h2>{" "}
                <p className="text-gray-500 text-sm mb-3">
                 {item.subtitle}
                </p>
                {/* <Link
                  href="/industryDetailsPage"
                  className="text-black font-semibold hover:underline underline-offset-2 decoration-primary text-sm"
                >
                  Know More
                </Link> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
