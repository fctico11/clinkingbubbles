import React, { useState } from "react";
import axios from "axios";

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [success, setSuccess] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("/api/sendEmail", formData);
            setSuccess("Your message has been sent!");
        } catch (error) {
            setSuccess("Failed to send message.");
        }
    };

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold">Contact Us</h2>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                <input className="border p-2" type="text" name="name" placeholder="Name" onChange={handleChange} required />
                <input className="border p-2" type="email" name="email" placeholder="Email" onChange={handleChange} required />
                <textarea className="border p-2" name="message" placeholder="Message" onChange={handleChange} required></textarea>
                <button className="bg-orange-500 text-white px-4 py-2 rounded">Submit</button>
                {success && <p className="text-green-500">{success}</p>}
            </form>
        </div>
    );
};

export default ContactForm;
