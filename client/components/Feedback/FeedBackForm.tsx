import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import type { FormData } from "@/types";

export default function FeedbackForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false); // Loading state

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid.";
    }
    if (!formData.subject) newErrors.subject = "Subject is required.";
    if (!formData.message) newErrors.message = "Message is required.";

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return; // Stop submission if there are validation errors
    }

    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({ name: "", email: "", subject: "", message: "" });
        setSuccess(true); // Set success state
        setErrors({}); // Clear any existing errors
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error(error);
      setErrors({ submit: "Failed to send message." }); // Set submit error
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form
        id="formContact"
        onSubmit={handleSubmit}
        className="space-y-6 text-gray-700 dark:text-gray-200"
      >
        {/* Name Input */}
        <div className="flex flex-col">
          <label htmlFor="name" className="text-base font-semibold mb-2">
            Name
          </label>
          <Input
            type="text"
            id="name"
            placeholder="Enter your name"
            className={`p-4 bg-gray-50 dark:bg-gray-800 border ${
              errors.name ? "border-red-500" : "border-gray-300"
            } dark:border-gray-600 focus:ring-2 focus:ring-blue-500 transition duration-200 rounded-lg`}
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
          {errors.name && (
            <span className="text-red-500 text-sm">{errors.name}</span>
          )}
        </div>

        {/* Email Input */}
        <div className="flex flex-col">
          <label htmlFor="email" className="text-base font-semibold mb-2">
            Email
          </label>
          <Input
            type="email"
            id="email"
            placeholder="Enter your email"
            className={`p-4 bg-gray-50 dark:bg-gray-800 border ${
              errors.email ? "border-red-500" : "border-gray-300"
            } dark:border-gray-600 focus:ring-2 focus:ring-blue-500 transition duration-200 rounded-lg`}
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email}</span>
          )}
        </div>

        {/* Subject Input */}
        <div className="flex flex-col">
          <label htmlFor="subject" className="text-base font-semibold mb-2">
            Subject
          </label>
          <Input
            type="text"
            id="subject"
            placeholder="Enter the subject"
            className={`p-4 bg-gray-50 dark:bg-gray-800 border ${
              errors.subject ? "border-red-500" : "border-gray-300"
            } dark:border-gray-600 focus:ring-2 focus:ring-blue-500 transition duration-200 rounded-lg`}
            value={formData.subject}
            onChange={(e) =>
              setFormData({ ...formData, subject: e.target.value })
            }
            required
          />
          {errors.subject && (
            <span className="text-red-500 text-sm">{errors.subject}</span>
          )}
        </div>

        {/* Message Textarea and Submit Button */}
        <div className="flex flex-col">
          <label htmlFor="message" className="text-base font-semibold mb-2">
            Message
          </label>
          <Textarea
            id="message"
            placeholder="Write your message here..."
            className="p-4 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 h-30 focus:ring-2 focus:ring-blue-500 transition duration-200 rounded-lg"
            required
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
          />
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Accept terms and conditions
          </label>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg shadow-md hover:from-blue-700 hover:to-purple-700 transition duration-300"
          >
            {loading ? "Sending..." : "Send Message"}
          </Button>
        </div>

        {success && (
          <div className="text-green-500 text-center">
            Message sent successfully!
          </div>
        )}
        {errors.submit && (
          <div className="text-red-500 text-center">{errors.submit}</div>
        )}
      </form>
    </>
  );
}
