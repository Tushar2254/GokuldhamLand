import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

// ─── EmailJS config ───────────────────────────────────────────────
// 1. Sign up free at https://www.emailjs.com
// 2. Add a Gmail service → copy the Service ID below
// 3. Create an Email Template → copy the Template ID below
//    Template variables used: {{from_name}}, {{from_phone}}, {{from_email}}, {{message}}
// 4. Go to Account → API Keys → copy your Public Key below
const EMAILJS_SERVICE_ID  = 'service_q21ktyq';
const EMAILJS_TEMPLATE_ID = 'template_k7m65k1';
const EMAILJS_PUBLIC_KEY  = '0USL84BZtOBIjWWBu';
// ─────────────────────────────────────────────────────────────────

const Contact = () => {
  const formRef = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setError('');

    emailjs
      .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, EMAILJS_PUBLIC_KEY)
      .then(() => {
        setIsSending(false);
        setIsSubmitted(true);
      })
      .catch((err) => {
        setIsSending(false);
        setError('Something went wrong. Please try again or call us directly.');
        console.error('EmailJS error:', err);
      });
  };

  const handleCloseAndRefresh = () => {
    setIsSubmitted(false);
    window.location.reload();
  };

  // Official Location Links for Gokuldhaam - Setu Developers
  const mapsUrl = "https://www.google.com/maps/search/?api=1&query=Gokuldhaam+-+Setu+Developers+Kondhapuri";
  const embedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.203144883445!2d74.19565527598168!3d18.726441882411656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2d7e586f01ec9%3A0xd3206e88385622d6!2sGokuldhaam%20-%20Setu%20Developers!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin";

  return (
    <section id="contact" className="py-20 bg-white px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-4xl font-bold text-gd-blue mb-6">CONTACT US</h2>
            <p className="text-gray-600 mb-8 text-lg">
              Visit our site at Kondhapuri and experience the peace yourself.
            </p>

            <div className="space-y-8">
              {/* Site Address - Redirects to Site Location */}
              <a 
                href={mapsUrl}
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-start gap-6 group cursor-pointer"
              >
                <div className="relative">
                  <div className="bg-white p-5 rounded-2xl text-2xl shadow-[0_10px_20px_rgba(0,0,0,0.1),_inset_0_-4px_0_rgba(34,197,94,0.2)] 
                                  border border-gray-100 flex items-center justify-center
                                  transition-all duration-300 transform group-hover:-translate-y-2 group-hover:rotate-6 group-hover:shadow-2xl">
                    <span className="drop-shadow-md">📍</span>
                  </div>
                  <div className="absolute inset-0 bg-gd-green/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>

                <div>
                  <p className="font-bold text-gray-800 text-lg group-hover:text-gd-blue transition-colors">Site Address</p>
                  <p className="text-gray-600 leading-relaxed">
                    Gat No. 638, Kondhapuri, Pune-Nagar Road,<br/>
                    Tal. Shirur, Dist. Pune - 412209
                  </p>
                </div>
              </a>

              {/* Direct Inquiry - Opens Dialer */}
              <a 
                href="tel:+919766663277" 
                className="flex items-center gap-6 group cursor-pointer"
              >
                <div className="relative">
                  <div className="bg-white p-5 rounded-2xl text-2xl shadow-[0_10px_20px_rgba(0,0,0,0.1),_inset_0_-4px_0_rgba(34,197,94,0.2)] 
                                  border border-gray-100 flex items-center justify-center
                                  transition-all duration-300 transform group-hover:-translate-y-2 group-hover:-rotate-6 group-hover:shadow-2xl">
                    <span className="drop-shadow-md">📞</span>
                  </div>
                  <div className="absolute inset-0 bg-gd-green/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>

                <div>
                  <p className="font-bold text-gray-800 text-lg group-hover:text-gd-blue transition-colors">Direct Inquiry</p>
                  <p className="text-gray-600 text-xl font-medium tracking-tight group-hover:text-gd-blue transition-colors">+91 9766663277</p>
                </div>
              </a>
              <div><br></br>
              <div className="flex items-center justify-center md:justify-start gap-4 ml-0 md:ml-14">
              <img 
                src="/logo4st.png"
                alt="Gokuldham Logo"
                className="h-20 md:h-36 w-auto object-contain transition-transform duration-300 hover:scale-110"
              />
              <img 
                src="/logo5st.png"
                alt="Second Logo"
                className="h-20 md:h-36 w-auto object-contain transition-transform duration-300 hover:scale-110"
              />
            </div>
            </div>
          </div>

          {/* Contact Form */}
          <form ref={formRef} onSubmit={handleSubmit} className="bg-gray-50 p-10 rounded-[2rem] shadow-xl border border-gray-100">
            <div className="space-y-4">
              <input required name="from_name" type="text" placeholder="Full Name" className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-gd-blue outline-none transition-all" />
              <input required name="from_phone" type="tel" placeholder="Contact Number" className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-gd-blue outline-none transition-all" />
              <input required name="from_email" type="email" placeholder="Email Address" className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-gd-blue outline-none transition-all" />
              <textarea name="message" placeholder="Your Message" className="w-full p-4 rounded-xl border border-gray-200 h-32 focus:ring-2 focus:ring-gd-blue outline-none transition-all resize-none"></textarea>
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <button
                type="submit"
                disabled={isSending}
                className="w-full bg-gd-blue text-white font-bold py-5 rounded-xl hover:bg-gd-green shadow-lg hover:shadow-gd-green/20 transition-all transform hover:-translate-y-1 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                {isSending ? 'Sending...' : 'Send Inquiry'}
                
              </button>
            </div>

            
          </form>
        </div>

        {/* SUCCESS POPUP */}
        {isSubmitted && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-md"></div>
            <div className="relative bg-white p-10 rounded-[2.5rem] shadow-2xl max-w-sm w-full text-center animate-in zoom-in duration-300">
              <div className="w-24 h-24 bg-green-50 text-green-500 rounded-full flex items-center justify-center text-5xl mx-auto mb-6 shadow-inner">✓</div>
              <h3 className="text-3xl font-bold text-gray-900 mb-3">Thank You!</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Your inquiry has been sent successfully. Our team will contact you shortly.
              </p>
              <button 
                onClick={handleCloseAndRefresh}
                className="w-full bg-gd-blue text-white font-bold py-4 rounded-2xl hover:bg-gd-green transition-colors shadow-lg active:scale-95"
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* Interactive Satellite Map Section */}
        <div className="relative group">
          <a 
            href={mapsUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="block relative cursor-pointer"
          >
            <div className="absolute -top-6 left-10 z-10 bg-white px-6 py-3 rounded-full shadow-lg border border-gray-100 flex items-center gap-2 ">
              <span className="animate-pulse w-3 h-3 bg-red-500 rounded-full"></span>
              <span className="text-sm font-bold text-gray-700 uppercase tracking-wider">Tap for Site Location</span>
            </div>
            
            <div className="w-full h-[350px] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white transition-all duration-500 group-hover:border-gd-green/30 group-hover:scale-[1.01]">
              <div className="absolute inset-0 z-0 pointer-events-none">
                  <iframe
                      title="Gokuldhaam Satellite View"
                      src={embedUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0, filter: 'contrast(1.1) brightness(0.9)' }}
                      allowFullScreen=""
                      loading="lazy"
                  ></iframe>
              </div>
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 bg-white/90 backdrop-blur-sm px-6 py-2 rounded-full font-bold text-gd-blue shadow-xl transition-opacity">
                      Open in Maps ↗
                  </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
    
  );
};

export default Contact;
