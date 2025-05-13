import React, { useState } from "react";

const styles = {
  faqSection: {
    padding: "80px 0",
    backgroundColor: "#f5f5f5",
    width: "100%",
    display: "block",
    position: "relative",
  },
  heading: {
    textAlign: "center",
    marginBottom: "50px",
    fontSize: "2.5rem",
    color: "#333",
    fontWeight: "600",
  },
  faqContainer: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px",
  },
  faqItem: {
    marginBottom: "16px",
    background: "#fff",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  questionButton: {
    width: "100%",
    padding: "20px",
    textAlign: "left",
    background: "#fff",
    border: "none",
    outline: "none",
    cursor: "pointer",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    transition: "all 0.3s ease",
  },
  questionText: {
    fontSize: "1.1rem",
    fontWeight: "500",
    color: "#333",
    margin: 0,
  },
  icon: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginLeft: "10px",
  },
  answer: {
    overflow: "hidden",
    transition: "all 0.3s ease",
  },
  answerText: {
    margin: "0",
    lineHeight: "1.6",
    color: "#666",
    whiteSpace: "pre-wrap",
  },
};

const Faq = ({faqData}) => {
  const [activeIndex, setActiveIndex] = useState(null);

 

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section style={styles.faqSection}>
      <h2 style={styles.heading}>Frequently Asked Questions</h2>
      <div style={styles.faqContainer}>
        {faqData.map((faq, index) => (
          <div key={index} style={styles.faqItem}>
            <button
              style={{
                ...styles.questionButton,
                background: activeIndex === index ? "#f8f8f8" : "#fff",
              }}
              onClick={() => toggleAccordion(index)}
            >
              <h3 style={styles.questionText}>{faq.question}</h3>
              <span style={styles.icon}>
                {activeIndex === index ? "-" : "+"}
              </span>
            </button>
            <div
              style={{
                ...styles.answer,
                maxHeight: activeIndex === index ? "1000px" : "0",
                padding: activeIndex === index ? "20px" : "0 20px",
                opacity: activeIndex === index ? "1" : "0",
                transition: "all 0.3s ease-in-out",
              }}
            >
              <p style={styles.answerText}>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
