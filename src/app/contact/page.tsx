'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import emailjs from '@emailjs/browser'

// EmailJS configuration constants
// You'll need to replace these with your actual values from EmailJS dashboard
const SERVICE_ID = 'service_vilkz95';  // Create a service in EmailJS dashboard and put ID here
const TEMPLATE_ID = 'template_ypwur3g'; // Create an email template in EmailJS and put ID here
const PUBLIC_KEY = 'dnfJa295jQBzpmt9H';   // Your EmailJS public key

export default function Contact() {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  })
  const [status, setStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(PUBLIC_KEY);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // This is crucial to prevent normal form submission
    
    try {
      setIsSubmitting(true);
      setStatus({ submitted: false, success: false, message: '' });
      
      console.log("Sending email with data:", formData);
      
      // Send email using EmailJS
      const result = await emailjs.send(
        SERVICE_ID, 
        TEMPLATE_ID, 
        {
          user_name: formData.user_name,
          user_email: formData.user_email,
          message: formData.message
        }
      );
      
      console.log('Email sent successfully:', result.text);
      
      setStatus({
        submitted: true,
        success: true,
        message: 'Thank you! Your message has been sent successfully.'
      });
      
      // Reset form after submission
      setFormData({
        user_name: '',
        user_email: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus({
        submitted: true,
        success: false,
        message: 'Oops! Something went wrong. Please try again later or contact us directly.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="min-h-screen bg-brand-cream py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-cormorant font-bold mb-6 text-brand-black">Contact Us</h1>
          <p className="text-xl text-brand-black font-montserrat">
            Get Started
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-brand-cream p-8 rounded-lg shadow-md border-t-4 border-brand-gold">
            {status.submitted && (
              <div className={`mb-6 p-4 rounded-md ${status.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                {status.message}
              </div>
            )}
            
            <form 
              ref={formRef} 
              onSubmit={handleSubmit} 
              className="space-y-6" 
              method="post" 
              action="#" // Prevent default form action
            >
              <div>
                <label htmlFor="user_name" className="block text-sm font-medium text-brand-black font-montserrat">
                  Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  id="user_name"
                  value={formData.user_name}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-gold focus:ring-brand-gold font-montserrat bg-brand-cream text-brand-black"
                  required
                />
              </div>
              <div>
                <label htmlFor="user_email" className="block text-sm font-medium text-brand-black font-montserrat">
                  Email*
                </label>
                <input
                  type="email"
                  name="user_email"
                  id="user_email"
                  value={formData.user_email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-gold focus:ring-brand-gold font-montserrat bg-brand-cream text-brand-black"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-brand-black font-montserrat">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-gold focus:ring-brand-gold font-montserrat bg-brand-cream text-brand-black"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-brand-gold text-white py-2 px-4 rounded-md font-semibold hover:bg-brand-black hover:text-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-offset-2 font-montserrat transition-colors ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Sending...' : 'Send'}
              </button>
              <p className="text-xs text-gray-500 font-montserrat mt-4">
                This site is protected by reCAPTCHA and the Google 
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-brand-gold hover:text-brand-black"> Privacy Policy </a> 
                and 
                <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="text-brand-gold hover:text-brand-black"> Terms of Service </a> 
                apply.
              </p>
            </form>
          </div>

          {/* Contact Information */}
          <div className="bg-brand-cream p-8 rounded-lg shadow-md border-t-4 border-brand-gold">
            <h2 className="text-2xl font-cormorant font-bold mb-6 text-brand-black">Better yet, see us in person!</h2>
            <p className="text-brand-black font-montserrat mb-6">
              We love our customers, so feel free to set up an appointment to get in touch!
            </p>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-cormorant font-semibold mb-2 text-brand-black">Passat Hospitality</h3>
                <p className="text-brand-black font-montserrat">
                  4839 Columbus Dr Burlington ON L7M 0H3
                </p>
              </div>
              <div>
                <h3 className="text-lg font-cormorant font-semibold mb-2 text-brand-black">Contact</h3>
                <p className="text-brand-black font-montserrat">(416) 312-8902</p>
              </div>
              <div>
                <h3 className="text-lg font-cormorant font-semibold mb-2 text-brand-black">Hours</h3>
                <p className="text-brand-black font-montserrat">Open today</p>
                <p className="text-brand-black font-montserrat">09:00 a.m. – 05:00 p.m.</p>
              </div>
              
              {/* Image instead of map placeholder */}
              <div className="relative h-64 rounded-lg overflow-hidden mt-6">
                <Image 
                  src="/images/photos/check in.jpg"
                  alt="Our reception area"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 