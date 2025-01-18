import React, { useEffect, useState } from "react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    id: "",
    nmail: "",
    mame: "",
    eessage: "",
  });

  const [records, setRecords] = useState([]); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    console.log("Form Data:", formData);

    try {
      const response = await fetch("http://localhost:3000/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Response:", data);
        alert("Your message has been sent successfully!");
       
        fetchRecords();
      } else {
        const error = await response.json();
        console.error("Error:", error);
        alert(`Failed to send the message: ${error.message}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  const fetchRecords = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/users");
      if (response.ok) {
        const data = await response.json();
        setRecords(data);
      } else {
        console.error("Failed to fetch records");
      }
    } catch (error) {
      console.error("Error fetching records:", error);
    }
  };

  useEffect(() => {
    fetchRecords();
  }, []);

  return (
    <section className="section-contact">
      <h2 className="container-title">Contact Us</h2>
      <div className="contact-wrapper container">
        <form onSubmit={handleFormSubmit}>
          <input
            type="number"
            className="form-control"
            required
            placeholder="Enter user ID"
            name="id"
            value={formData.id}
            onChange={handleChange}
          />
          <input
            type="text"
            className="form-control"
            required
            placeholder="Enter your name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            className="form-control"
            required
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            className="form-control"
            required
            rows="10"
            placeholder="Enter your message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button type="submit" className="btn-submit">
            Send
          </button>
        </form>
      </div>

      <div>
        <ul>
          {records.map((list, index) => (
            <li key={index}>
              {list.id}, {list.name}, {list.email}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
