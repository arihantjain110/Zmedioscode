import React from "react";

const Cards = ({ card }) => {
  const introCard = card.find((item) => item.id === 1);
  const otherCards = card.filter((item) => item.id !== 1);

  return (
    <div className="container-ack md:px-0 px-5">
      {/* Intro Section */}
      {introCard && (
        <div className="w-full pt-10 pb-0"> {/* top padding only */}
          <div className={`${introCard.bgcolor} px-3 pb-5 rounded-2xl shadow-box max-w-4xl mx-auto`}>
            {introCard.subtitle && (
              <h2 className="text-2xl font-bold mb-2 text-center text-secondary">
                {introCard.subtitle}
              </h2>
            )}
            <p className={`${introCard.textcolor} text-center leading-relaxed text-sm`}>
              {introCard.para}
            </p>
          </div>
        </div>
      )}

      {/* Desktop View */}
      <div className="md:grid lg:grid-cols-4 md:grid-cols-2 px-5 md:py-10 py-10 gap-8 hidden">
        {otherCards.map((item, index) => (
          <div className={`${item.cols}`} key={index}>
            <div className={`${item.bgcolor} px-3 pb-5 h-full rounded-2xl shadow-box`}>
              <div className={item.display}>{item.icon}</div>
              <div className="relative">
                {item.maintitle && (
                  <div className="text-orange-400 tracking-wider text-left font-bold text-5xl mb-2">
                    {item.maintitle}
                  </div>
                )}
                {item.subtitle && (
                  <h2 className="text-2xl font-bold mb-2 text-left">
                    {item.subtitle}
                  </h2>
                )}
                {item.subsubtitle && (
                  <h3 className="text-lg font-medium text-gray-500 mb-4 text-left">
                    {item.subsubtitle}
                  </h3>
                )}
                <div className="load-wrapp mb-4">
                  <div className="load flex space-x-1">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                  </div>
                </div>
              </div>
              <p className={`${item.textcolor} text-justify leading-relaxed text-sm`}>
                {item.para}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile View */}
      <div className="md:hidden block">
        {otherCards.map((item, index) => (
          <div className={`${item.cols}`} key={index}>
            <div className={`${item.bgcolor} px-3 pb-5 rounded-2xl shadow-box my-10`}>
              <div className={item.display}>{item.icon}</div>
              <div className="relative">
                {item.maintitle && (
                  <div className="text-4xl text-orange-400 text-center font-bold mb-3">
                    {item.maintitle}
                  </div>
                )}
                {item.subtitle && (
                  <h2 className="text-xl font-bold mb-2 text-left">
                    {item.subtitle}
                  </h2>
                )}
                {item.subsubtitle && (
                  <h3 className="text-base font-medium text-gray-500 mb-4 text-left">
                    {item.subsubtitle}
                  </h3>
                )}
                <div className="load-wrapp mb-4">
                  <div className="load flex space-x-1">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                  </div>
                </div>
              </div>
              <p className={`${item.textcolor} text-justify leading-relaxed text-sm`}>
                {item.para}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
