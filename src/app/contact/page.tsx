'use client'

import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PhoneCall, MessageCircle } from "lucide-react";
import Navbar from "@/sections/navbar";
import { Toaster, toast } from "react-hot-toast";

const ContactPage: React.FC = () => {
  const phoneNumber = "918825125332";
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  const [formData, setFormData] = useState({
    subject: "",
    name: "",
    phone: "",
    email: "",
    zone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "service_88srkq2", // Replace with your EmailJS Service ID
        "template_beimrif", // Replace with your EmailJS Template ID
        {
          to_name: "Admin",
          from_name: formData.name,
          subject: formData.subject,
          message: formData.message,
          email: formData.email,
          phone: formData.phone,
          zone: formData.zone,
        },
        "Buw5IVo-CyvTBxW1D" // Replace with your EmailJS Public Key
      )
      .then(() => {
        toast.success("Message sent successfully!");
        setFormData({
          subject: "",
          name: "",
          phone: "",
          email: "",
          zone: "",
          message: "",
        });
      })
      .catch(() => toast.error("Failed to send message"));
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Navbar />
      <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100 p-6">
        <Card className="w-full lg:w-2/3 xl:w-1/2 shadow-2xl border border-gray-200 bg-white rounded-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-semibold text-center text-blue-700">Contact Us</CardTitle>
            <p className="text-gray-600 text-center">We will resolve your issues as soon as possible.</p>
          </CardHeader>
          <CardContent>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="block text-md font-semibold text-gray-700">Subject *</label>
                <Select onValueChange={(value) => handleSelectChange("subject", value)}>
                  <SelectTrigger className="border border-gray-300 rounded-md shadow-sm">
                    <SelectValue placeholder="Select a subject" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="support">Support</SelectItem>
                    <SelectItem value="billing">Billing</SelectItem>
                    <SelectItem value="general">General Inquiry</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-md font-semibold text-gray-700">Your Name *</label>
                <Input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="border border-gray-300 rounded-md shadow-sm"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-md font-semibold text-gray-700">Enter Your Mobile Number *</label>
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Enter your mobile number"
                  className="border border-gray-300 rounded-md shadow-sm"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-md font-semibold text-gray-700">Email-id (Optional)</label>
                <Input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="border border-gray-300 rounded-md shadow-sm"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-md font-semibold text-gray-700">Select Zone</label>
                <Select onValueChange={(value) => handleSelectChange("zone", value)}>
                  <SelectTrigger className="border border-gray-300 rounded-md shadow-sm">
                    <SelectValue placeholder="Select a zone" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="north">North</SelectItem>
                    <SelectItem value="south">South</SelectItem>
                    <SelectItem value="east">East</SelectItem>
                    <SelectItem value="west">West</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-md font-semibold text-gray-700">Enter Message *</label>
                <Textarea
                  name="message"
                  placeholder="Type your message..."
                  className="border border-gray-300 rounded-md shadow-sm"
                  required
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
              <Button type="submit" className="w-full bg-blue-600 text-white text-lg font-semibold py-2 rounded-md shadow-md hover:bg-blue-700 transition">
                Submit
              </Button>
            </form>
          </CardContent>
        </Card>
        <div className="mt-6 lg:mt-0 lg:ml-8 text-center lg:text-left">
          <Card className="shadow-2xl border border-gray-200 p-6 bg-white w-96 rounded-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-center font-semibold text-gray-800">For Inquiries</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-lg font-medium">Call or WhatsApp us at:</p>
              <div className="flex flex-col items-center mt-4">
                <p className="text-3xl font-bold text-blue-700">{phoneNumber}</p>
                <div className="flex space-x-6 mt-6">
                  <a href={`tel:${phoneNumber}`} className="flex items-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-lg text-lg font-medium shadow-lg hover:bg-green-700 transition">
                    <PhoneCall size={26} className="text-white" />
                    <span>Call</span>
                  </a>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 bg-green-500 text-white px-6 py-3 rounded-lg text-lg font-medium shadow-lg hover:bg-green-600 transition">
                    <MessageCircle size={26} className="text-white" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
