import React, { useState } from 'react';
import Button from '../components/Button';
import { 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaClock, 
  FaPaperPlane, 
  FaCheckCircle, 
  FaQuestionCircle,
  FaChevronDown
} from 'react-icons/fa';

const faqs = [
  {
    q: "Do you offer 100% eggless cakes and pastries?",
    a: "Yes! Over 60% of our catalog (including our Chocolate Truffle Cake and Danish Butter Cookies) are available in 100% eggless preparations without compromising moisture or texture."
  },
  {
    q: "What is your daily delivery cut-off time for same-day delivery?",
    a: "For same-day cake and pastry deliveries, please place your order before 2:00 PM. Bread orders placed in the morning are dispatched fresh around 11:30 AM."
  },
  {
    q: "Can I place custom or bulk orders for weddings and events?",
    a: "Absolutely! We craft bespoke tiered wedding cakes, corporate gift hampers, and custom macaron towers. Reach out to us through this contact form with at least 48 hours notice."
  },
  {
    q: "How should I store Crème & Crust artisanal cakes?",
    a: "Our mousse and truffle cakes should be refrigerated at 4°C–6°C and brought to room temperature 15 minutes before serving for maximum flavor. Sourdough bread should be stored at room temperature in a paper bag."
  }
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Your name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    const cleanPhone = formData.phone.replace(/[\s-+]/g, '');
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Mobile number is required';
    } else if (!phoneRegex.test(cleanPhone)) {
      newErrors.phone = 'Enter a valid 10-digit Indian mobile number';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide a message or inquiry';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Send inquiry via EmailJS
    await sendContactInquiryEmail(formData);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', phone: '', message: '' });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs uppercase tracking-widest font-bold text-bakery-accent">
          We'd Love to Hear from You
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-bakery-primary">
          Contact Our Bakehouse
        </h1>
        <p className="text-bakery-muted text-sm sm:text-base">
          Have an inquiry regarding custom celebratory cakes, dietary options, or corporate orders? Send us a message and our team will get back to you promptly.
        </p>
      </div>

      {/* Main Grid: Contact Info & Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        
        {/* Left Column: Bakery Info Cards */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-bakery-surface border border-bakery-border rounded-3xl p-6 sm:p-8 shadow-card space-y-6">
            <h2 className="font-serif text-2xl font-bold text-bakery-primary border-b border-bakery-border pb-4">
              Visit or Call Us
            </h2>

            <div className="space-y-5 text-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-bakery-accent/15 flex items-center justify-center text-bakery-accent shrink-0">
                  <FaMapMarkerAlt className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-bakery-primary">Flagship Bakehouse</h4>
                  <p className="text-bakery-muted mt-0.5 leading-relaxed">
                    42 Heritage Promenade, 100 Feet Road, Indiranagar, Bengaluru, KA 560038
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-bakery-accent/15 flex items-center justify-center text-bakery-accent shrink-0">
                  <FaPhoneAlt className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-bakery-primary">Direct Hotline</h4>
                  <p className="text-bakery-muted mt-0.5">
                    <a href="tel:+919876543210" className="hover:text-bakery-accent transition-colors font-medium">
                      +91 (080) 4123-8899 / +91 98765 43210
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-bakery-accent/15 flex items-center justify-center text-bakery-accent shrink-0">
                  <FaEnvelope className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-bakery-primary">Email Desk</h4>
                  <p className="text-bakery-muted mt-0.5">
                    <a href="mailto:hello@cremeandcrust.com" className="hover:text-bakery-accent transition-colors font-medium">
                      hello@cremeandcrust.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-bakery-accent/15 flex items-center justify-center text-bakery-accent shrink-0">
                  <FaClock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-bakery-primary">Oven & Service Hours</h4>
                  <p className="text-bakery-muted mt-0.5">
                    Monday – Sunday: <strong>7:00 AM – 10:00 PM</strong>
                  </p>
                  <p className="text-[11px] text-bakery-accent mt-0.5">
                    Fresh morning croissants available from 7:30 AM
                  </p>
                </div>
              </div>
            </div>

            {/* Map Placeholder Card */}
            <div className="rounded-2xl bg-amber-50/70 border border-bakery-border p-5 text-center space-y-2">
              <span className="text-2xl">📍</span>
              <p className="font-serif font-bold text-bakery-primary text-sm">
                Central Bengaluru Kitchen
              </p>
              <p className="text-xs text-bakery-muted">
                Valet parking available • Outdoor café seating
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Contact Form or Success State */}
        <div className="lg:col-span-7 bg-bakery-surface border border-bakery-border rounded-3xl p-6 sm:p-10 shadow-card">
          {isSubmitted ? (
            <div className="text-center py-12 space-y-5 animate-fade-in">
              <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-4xl shadow-soft">
                <FaCheckCircle />
              </div>
              <h2 className="font-serif text-3xl font-bold text-bakery-primary">
                Message Sent Successfully!
              </h2>
              <p className="text-bakery-muted text-sm sm:text-base max-w-md mx-auto leading-relaxed">
                Thank you for reaching out, <strong className="text-bakery-primary">{formData.name}</strong>. Our chef and concierge have received your note and will get back to you at <strong className="text-bakery-primary">{formData.email}</strong> within 24 hours.
              </p>
              <div className="pt-4">
                <Button variant="outline" size="md" onClick={handleReset}>
                  Send Another Inquiry
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              <div>
                <h2 className="font-serif text-2xl font-bold text-bakery-primary">
                  Send a Message
                </h2>
                <p className="text-xs text-bakery-muted mt-1">
                  Fill in your details below and we will respond promptly.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div className="sm:col-span-2 space-y-1.5">
                  <label htmlFor="contact-name" className="text-xs font-bold uppercase tracking-wider text-bakery-primary">
                    Your Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Maya Iyer"
                    className={`w-full px-4 py-2.5 rounded-xl bg-bakery-bg border text-sm text-bakery-primary focus:outline-none focus:ring-2 focus:ring-bakery-accent ${
                      errors.name ? 'border-rose-500 bg-rose-50/20' : 'border-bakery-border'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-xs text-rose-600 font-medium">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-email" className="text-xs font-bold uppercase tracking-wider text-bakery-primary">
                    Email Address <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="maya@example.com"
                    className={`w-full px-4 py-2.5 rounded-xl bg-bakery-bg border text-sm text-bakery-primary focus:outline-none focus:ring-2 focus:ring-bakery-accent ${
                      errors.email ? 'border-rose-500 bg-rose-50/20' : 'border-bakery-border'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-xs text-rose-600 font-medium">{errors.email}</p>
                  )}
                </div>

                {/* Phone */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-phone" className="text-xs font-bold uppercase tracking-wider text-bakery-primary">
                    Phone Number <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-bakery-muted font-bold">
                      +91
                    </span>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="9876543210"
                      maxLength={10}
                      className={`w-full pl-11 pr-4 py-2.5 rounded-xl bg-bakery-bg border text-sm text-bakery-primary focus:outline-none focus:ring-2 focus:ring-bakery-accent ${
                        errors.phone ? 'border-rose-500 bg-rose-50/20' : 'border-bakery-border'
                      }`}
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-xs text-rose-600 font-medium">{errors.phone}</p>
                  )}
                </div>

                {/* Message */}
                <div className="sm:col-span-2 space-y-1.5">
                  <label htmlFor="contact-message" className="text-xs font-bold uppercase tracking-wider text-bakery-primary">
                    Message or Special Request <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can our patisserie assist you today?"
                    className={`w-full px-4 py-2.5 rounded-xl bg-bakery-bg border text-sm text-bakery-primary focus:outline-none focus:ring-2 focus:ring-bakery-accent ${
                      errors.message ? 'border-rose-500 bg-rose-50/20' : 'border-bakery-border'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-xs text-rose-600 font-medium">{errors.message}</p>
                  )}
                </div>
              </div>

              <div>
                <Button
                  type="submit"
                  size="lg"
                  variant="primary"
                  icon={FaPaperPlane}
                  fullWidth
                  className="shadow-warm"
                >
                  Send Inquiry
                </Button>
              </div>
            </form>
          )}
        </div>

      </div>

      {/* FREQUENTLY ASKED QUESTIONS ACCORDION */}
      <div className="pt-10 border-t border-bakery-border space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs uppercase tracking-widest font-bold text-bakery-accent">
            Got Questions?
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-bakery-primary flex items-center justify-center gap-2">
            <FaQuestionCircle className="text-bakery-accent w-6 h-6" />
            <span>Frequently Asked Questions</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-bakery-surface border border-bakery-border rounded-2xl overflow-hidden transition-all shadow-xs"
            >
              <button
                type="button"
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-bakery-primary hover:text-bakery-accent transition-colors"
                aria-expanded={activeFaq === idx}
              >
                <span>{faq.q}</span>
                <FaChevronDown
                  className={`w-3.5 h-3.5 text-bakery-muted transition-transform duration-200 shrink-0 ${
                    activeFaq === idx ? 'rotate-180 text-bakery-accent' : ''
                  }`}
                />
              </button>
              {activeFaq === idx && (
                <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-bakery-muted leading-relaxed border-t border-bakery-border/50 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Contact;
