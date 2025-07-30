import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // In future, use fetch() or axios.post() to send this data to a server.
  };

  return (
    <div className="flex justify-center items-center px-4 md:px-0 py-10 md:py-0 md:pb-10">
      <form onSubmit={handleSubmit} className="w-full max-w-2xl space-y-4">
        <div className="flex gap-4">
          <input
            type="text"
            name="firstName"
            placeholder="Enter Your"
            value={formData.firstName}
            onChange={handleChange}
            className="w-1/2 p-3 border rounded"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Enter Your"
            value={formData.lastName}
            onChange={handleChange}
            className="w-1/2 p-3 border rounded"
          />
        </div>
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-3 border rounded"
        />
        <textarea
          name="message"
          placeholder="Massage"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="w-full p-3 border rounded"
        />
        <div className="flex justify-center">
          <button type="submit" className="bg-[var(--color-primary)] border-2 border-[var(--color-primary)] text-white rounded-full px-6 py-1 cursor-pointer hover:bg-white hover:text-[var(--color-primary)] transition-colors duration-300">SUBMIT</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
