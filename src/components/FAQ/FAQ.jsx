import React, { useState } from "react";
import "./FAQ.css";

const faqs = [
  {
    id: 1,
    question: "What types of care do you provide?",
    answer:
      "We offer in-home nursing, personal care, post-op recovery, chronic illness management, and more.",
  },
  {
    id: 2,
    question: "Are services available 24/7?",
    answer:
      "Yes, our team is available 24/7 for scheduled and emergency care needs.",
  },
  {
    id: 3,
    question: "How do I begin services?",
    answer:
      "Start by contacting us for a free care consultation. We'll guide you every step of the way.",
  },
  {
    id: 4,
    question: "Do you accept government-funded programs like NDIS or My Aged Care?",
    answer:
      "Yes, we support clients on NDIS, My Aged Care, and private funding. Contact us to discuss eligibility.",
  },
  {
    id: 5,
    question: "Can I customize the care plan to suit my needs?",
    answer:
      "Absolutely. Every care plan is tailored based on individual needs, preferences, and medical conditions.",
  },
  {
    id: 6,
    question: "Is your staff qualified and background checked?",
    answer:
      "Yes, all staff are trained, certified, insured, and police-checked before working with clients.",
  },
];

const FAQ = () => {
  const [activeId, setActiveId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const toggle = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  const filteredFaqs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="faq py-5 bg-white">
      <div className="container">
        <h2 className="text-center text-primary mt-5 mb-4">Frequently Asked Questions</h2>

        {/* Search bar */}
        <div className="mb-4 text-center">
          <input
            type="text"
            placeholder="Search questions..."
            className="form-control mx-auto"
            style={{ maxWidth: "400px" }}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="accordion" id="faqAccordion">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => (
              <div className="accordion-item" key={faq.id}>
                <h2 className="accordion-header" id={`faq${faq.id}`}>
                  <button
                    className={`accordion-button ${activeId === faq.id ? "" : "collapsed"}`}
                    type="button"
                    onClick={() => toggle(faq.id)}
                    aria-expanded={activeId === faq.id}
                    aria-controls={`collapse${faq.id}`}
                  >
                    {faq.question}
                    <span className="icon ms-auto">
                      {activeId === faq.id ? "−" : "+"}
                    </span>
                  </button>
                </h2>
                <div
                  id={`collapse${faq.id}`}
                  className={`accordion-collapse collapse ${activeId === faq.id ? "show" : ""}`}
                  aria-labelledby={`faq${faq.id}`}
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">{faq.answer}</div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">No matching FAQs found.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
