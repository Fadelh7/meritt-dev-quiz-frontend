'use client';

import React, { useState } from 'react';
import { useCreateContactUsMutation } from '@/graphql/generated/graphql'; // Correct hook name
import { Button } from '@/components/ui/button';

const Index = () => {
  const [formData, setFormData] = useState({
    full_name: '',
    phone_number: '',
    subject: '',
    body: '',
  });

  const [errors, setErrors] = useState({
    full_name: '',
    phone_number: '',
    subject: '',
    body: '',
  });

  const [createContactUs, { data, loading, error }] = useCreateContactUsMutation(); // Correct hook usage

  const validateForm = () => {
    const newErrors = {
      full_name: '',
      phone_number: '',
      subject: '',
      body: '',
    };
    let isValid = true;

    // Full name validation
    if (!formData.full_name.trim()) {
      newErrors.full_name = 'Full Name is required.';
      isValid = false;
    } else if (formData.full_name.length < 3) {
      newErrors.full_name = 'Full Name must be at least 3 characters.';
      isValid = false;
    }

    // Phone number validation
    if (!formData.phone_number.trim()) {
      newErrors.phone_number = 'Phone Number is required.';
      isValid = false;
    } else if (!/^\d{8}$/.test(formData.phone_number)) {
      newErrors.phone_number = 'Phone Number must be 8 digits.';
      isValid = false;
    }

    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required.';
      isValid = false;
    }

    // Body validation
    if (!formData.body.trim()) {
      newErrors.body = 'Message is required.';
      isValid = false;
    } else if (formData.body.length < 5) {
      newErrors.body = 'Message must be at least 10 characters.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      await createContactUs({
        variables: {
          input: formData,
        },
      });
      alert('Contact submitted successfully!');
      setFormData({
        full_name: '',
        phone_number: '',
        subject: '',
        body: '',
      }); // Reset the form
      setErrors({
        full_name: '',
        phone_number: '',
        subject: '',
        body: '',
      }); // Clear errors
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="max-w-lg mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Full Name */}
        <div>
          <input
            type="text"
            name="full_name"
            placeholder="Full Name"
            value={formData.full_name}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          {errors.full_name && <p className="text-red-500 text-sm">{errors.full_name}</p>}
        </div>

        {/* Phone Number */}
        <div>
          <input
            type="tel"
            name="phone_number"
            placeholder="Phone Number"
            value={formData.phone_number}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          {errors.phone_number && <p className="text-red-500 text-sm">{errors.phone_number}</p>}
        </div>

        {/* Subject */}
        <div>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          {errors.subject && <p className="text-red-500 text-sm">{errors.subject}</p>}
        </div>

        {/* Message */}
        <div>
          <textarea
            name="body"
            placeholder="Message"
            value={formData.body}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          {errors.body && <p className="text-red-500 text-sm">{errors.body}</p>}
        </div>

        {/* Submit Button */}
        <Button type="submit" disabled={loading}>
          {loading ? 'Submitting...' : 'Submit'}
        </Button>
      </form>
      {data && (
        <p className="text-green-500 mt-2">
          Success! Your contact has been submitted.
        </p>
      )}
      {error && <p className="text-red-500 mt-2">Error: {error.message}</p>}
    </div>
  );
};

export default Index;
