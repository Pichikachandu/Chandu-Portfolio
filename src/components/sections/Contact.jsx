import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        toast.success("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() =>
        toast.error("❌ Something went wrong. Please try again.")
      );
  };

  const inputClasses = "w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent";

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20 bg-black"
    >
      <RevealOnScroll>
        <div className="w-full max-w-md mx-4 p-8 bg-gray-900 rounded-xl shadow-2xl">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Get In Touch
          </h2>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <input
              type="hidden"
              name="time"
              value={new Date().toLocaleString()}
            />

            <div className="space-y-2">
              <label htmlFor="name" className="text-gray-300 text-sm font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                className={inputClasses}
                placeholder="Your name"
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-gray-300 text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                className={inputClasses}
                placeholder="your.email@example.com"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-gray-300 text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                className={inputClasses}
                placeholder="Your message..."
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/20 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              Send Message
            </button>
          </form>
        </div>
        <ToastContainer position="top-right" autoClose={5000} />
      </RevealOnScroll>
    </section>
  );
};
