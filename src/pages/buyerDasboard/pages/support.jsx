import React, { useState } from 'react';

const faqs = [
  { question: "How can I reset my password?", answer: "You can reset your password by clicking on the 'Forgot Password' link on the login page." },
  { question: "How can I update my profile?", answer: "Go to your profile settings and click on 'Edit Profile' to update your information." },
  { question: "How can I contact customer support?", answer: "You can use the contact form below to reach out to our support team." },
];

const Support = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setFormStatus('Thank you for reaching out! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg ml-8">
      <h2 className="text-2xl text-primary font-bold mb-4">Support</h2>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Frequently Asked Questions</h3>
        <ul className="list-disc pl-5 space-y-4">
          {faqs.map((faq, index) => (
            <li key={index}>
              <p className="font-bold">{faq.question}</p>
              <p className="text-gray-600">{faq.answer}</p>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Message:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              rows="4"
              required
            />
          </div>
          <button type="submit" className="mt-4 p-2 bg-primary text-white rounded-lg">
            Send Message
          </button>
        </form>
        {formStatus && <p className="mt-4 text-green-500">{formStatus}</p>}
      </div>
    </div>
  );
};

export default Support;
