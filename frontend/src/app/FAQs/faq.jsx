import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-white-900">{question}</span>
        {isOpen ? <FaChevronUp className="text-white-500" /> : <FaChevronDown className="text-white-500" />}
      </button>
      {isOpen && <p className="mt-2 text-white-600">{answer}</p>}
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "What services does your company offer?",
      answer: "Our company specializes in web development, mobile app development, and UI/UX design. We create custom solutions tailored to our clients' specific needs."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines can vary depending on the complexity and scope. A simple website might take 4-6 weeks, while a complex web application could take several months. We provide detailed timelines during our initial consultation."
    },
    {
      question: "Do you offer support after the project is completed?",
      answer: "Yes, we offer post-launch support and maintenance packages. Our team is always available to handle updates, bug fixes, and any other issues that may arise after your project goes live."
    },
    {
      question: "What technologies do you use?",
      answer: "We use a wide range of modern technologies including React, Next.js, Node.js, Python, and various cloud platforms. Our tech stack is always evolving to keep up with industry best practices."
    },
    {
      question: "How do you handle project communication?",
      answer: "We believe in transparent and frequent communication. We use project management tools like Jira or Trello, conduct regular video calls, and provide weekly progress reports to keep our clients updated throughout the development process."
    }
  ];

  return (
    <div className="bg-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-extrabold text-white-900 text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;