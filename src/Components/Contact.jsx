import { Mail, Github, Linkedin, Send, CheckCircle } from "lucide-react";
import { useState } from "react";
import * as emailjs from "@emailjs/browser";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const templateParams = {
        name: formData.name,
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: "sharansc482@gmail.com",
      };

      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      console.log("Email sent:", result);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-400 leading-relaxed">
            Have a project in mind? I'd love to hear about it and discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <a
            href="mailto:sharansc482@gmail.com"
            className="flex items-center gap-3 px-6 py-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-cyan-500/50 rounded-xl shadow-lg hover:shadow-cyan-500/20 transform hover:scale-105 transition-all duration-300"
          >
            <Mail className="text-cyan-400" size={20} />
            <span className="text-gray-300">sharansc482@gmail.com</span>
          </a>

          <a
            href="https://github.com/Sharan-0-dot"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-cyan-500/50 rounded-xl shadow-lg hover:shadow-cyan-500/20 transform hover:scale-110 transition-all duration-300"
          >
            <Github className="text-gray-300 hover:text-cyan-400" size={24} />
          </a>

          <a
            href="https://www.linkedin.com/in/sharan-sc-4b475b2b7/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-cyan-500/50 rounded-xl shadow-lg hover:shadow-cyan-500/20 transform hover:scale-110 transition-all duration-300"
          >
            <Linkedin className="text-blue-400 hover:text-cyan-400" size={24} />
          </a>

          <a
            href="https://leetcode.com/u/sharansc482/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-cyan-500/50 rounded-xl shadow-lg hover:shadow-cyan-500/20 transform hover:scale-110 transition-all duration-300"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-orange-400 hover:text-cyan-400">
              <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.036l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835 0 1.498.513 2.895 1.494 3.875l4.347 4.361c.981.979 2.337 1.452 3.834 1.452s2.853-.512 3.835-1.494l2.609-2.637c.514-.514.496-1.365-.039-1.9s-1.386-.553-1.899-.039z" />
            </svg>
          </a>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
          {submitStatus === "success" && (
            <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 text-green-400 rounded-lg flex items-center gap-2">
              <CheckCircle size={20} />
              <span>Message sent successfully! I'll get back to you soon.</span>
            </div>
          )}

          {submitStatus === "error" && (
            <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 text-red-400 rounded-lg">
              Something went wrong. Please try again or email me directly.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-700 text-gray-300 placeholder-gray-500 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-700 text-gray-300 placeholder-gray-500 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all"
              />
            </div>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              placeholder="Tell me about your project..."
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-700 text-gray-300 placeholder-gray-500 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all resize-none"
            ></textarea>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 justify-center"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  Sending...
                </>
              ) : (
                <>
                  <Send size={18} />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;