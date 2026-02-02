import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/lib/supabase";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    inquiry: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address (e.g., name@example.com)";
    }

    if (!formData.inquiry) {
      newErrors.inquiry = "Please select an inquiry type";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            company: formData.company,
            inquiry_type: formData.inquiry,
            message: formData.message,
          },
        ]);

      if (error) throw error;

      toast({
        title: "Inquiry Received",
        description: "Thank you! We have safely stored your message.",
      });

      setFormData({
        name: "",
        email: "",
        company: "",
        inquiry: "",
        message: "",
      });
      setErrors({});
    } catch (error: any) {
      console.error('Error sending data:', error);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      value: "aurexartisan@gmail.com",
      link: "mailto:aurexartisan@gmail.com",
    },
    {
      icon: Phone,
      title: "Call Us",
      value: "+91 8224940822",
      link: "tel:+918224940822",
    },
    {
      icon: MapPin,
      title: "Workshop",
      value: "Madhya Pradesh Jabalpur, India",
    },
  ];

  return (
    <section id="contact" className="section-padding bg-background" ref={ref}>
      <div className="container-luxury">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-eyebrow mb-4 block">Get In Touch</span>
            <h2 className="heading-section text-foreground mb-6">
              Let's Create
              <br />
              <span className="text-gold">Something Extraordinary</span>
            </h2>
            <p className="text-body mb-10 max-w-md">
              Whether you're an interior designer, luxury retailer, or brand seeking
              private-label partnerships, we'd love to hear from you.
            </p>

            <div className="space-y-6">
              {contactInfo.map((item) => (
                <div key={item.title} className="flex items-center gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-muted">
                    <item.icon className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                      {item.title}
                    </div>
                    <div className="font-medium text-foreground">
                      {item.link ? (
                        <a
                          href={item.link}
                          className="hover:text-gold transition-colors duration-300"
                        >
                          {item.value}
                        </a>
                      ) : (
                        item.value
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: "" });
                    }}
                    className={`w-full px-4 py-3 bg-muted border ${errors.name ? 'border-red-500' : 'border-border'} focus:border-gold focus:outline-none transition-colors`}
                    placeholder="Enter your name"
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: "" });
                    }}
                    className={`w-full px-4 py-3 bg-muted border ${errors.email ? 'border-red-500' : 'border-border'} focus:border-gold focus:outline-none transition-colors`}
                    placeholder="Enter your email"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Company / Brand
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-3 bg-muted border border-border focus:border-gold focus:outline-none transition-colors"
                  placeholder="Your Company Name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Inquiry Type <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.inquiry}
                  onChange={(e) => {
                    setFormData({ ...formData, inquiry: e.target.value });
                    if (errors.inquiry) setErrors({ ...errors, inquiry: "" });
                  }}
                  className={`w-full px-4 py-3 bg-muted border ${errors.inquiry ? 'border-red-500' : 'border-border'} focus:border-gold focus:outline-none transition-colors appearance-none cursor-pointer`}
                >
                  <option value="">Select Inquiry Type</option>
                  <option value="private-label">Private Label Partnership</option>
                  <option value="wholesale">Wholesale / Bulk Order</option>
                  <option value="custom">Custom Design Request</option>
                  <option value="hospitality">Hospitality Project</option>
                  <option value="other">Other Inquiry</option>
                </select>
                {errors.inquiry && <p className="text-red-500 text-xs mt-1">{errors.inquiry}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                    if (errors.message) setErrors({ ...errors, message: "" });
                  }}
                  className={`w-full px-4 py-3 bg-muted border ${errors.message ? 'border-red-500' : 'border-border'} focus:border-gold focus:outline-none transition-colors resize-none`}
                  placeholder="Tell us about your project or requirements..."
                />
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium tracking-wide hover:bg-gold-dark transition-all duration-300 hover:shadow-gold-glow"
              >
                Send Inquiry
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
