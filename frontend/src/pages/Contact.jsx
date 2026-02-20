// import { useState } from "react";
// import "./Contact.css";

// const ContactPage = () => {
//     const [formData, setFormData] = useState({
//         firstName: "",
//         lastName: "",
//         email: "",
//         phone: "",
//         message: "",
//     });

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = () => {
//         alert("Form submitted! We'll get back to you shortly.");
//         setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
//     };

//     const infoCards = [
//         {
//             icon: (
//                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="26" height="26">
//                     <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.77a16 16 0 006.29 6.29l1.13-1.34a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
//                 </svg>
//             ),
//             title: "Contact Us",
//             lines: ["+(123) 456-789", "+(798) 765-878"],
//         },
//         {
//             icon: (
//                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="26" height="26">
//                     <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
//                     <circle cx="12" cy="10" r="3" />
//                 </svg>
//             ),
//             title: "Address",
//             lines: ["2118 Thornridge Cir. Syracuse,", "Connecticut 35624"],
//         },
//         {
//             icon: (
//                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="26" height="26">
//                     <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
//                     <polyline points="22,6 12,13 2,6" />
//                 </svg>
//             ),
//             title: "Email Us",
//             lines: ["info@domainname.com", "support@domainname.com"],
//         },
//         {
//             icon: (
//                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="26" height="26">
//                     <circle cx="12" cy="12" r="10" />
//                     <polyline points="12,6 12,12 16,14" />
//                 </svg>
//             ),
//             title: "Working Hours",
//             lines: ["Monday – Friday: 10AM – 5:00PM", "Saturday: 11AM – 2:00PM"],
//         },
//     ];

//     return (
//         <div className="cp-root">
//             {/* Info Cards */}
//             <div className="cp-cards">
//                 {infoCards.map((card, i) => (
//                     <div className="cp-card" key={i}>
//                         <div className="cp-card-icon">{card.icon}</div>
//                         <h3>{card.title}</h3>
//                         <p>
//                             {card.lines.map((line, j) => (
//                                 <span key={j}>
//                                     {line}
//                                     {j < card.lines.length - 1 && <br />}
//                                 </span>
//                             ))}
//                         </p>
//                     </div>
//                 ))}
//             </div>

//             {/* Bottom Section */}
//             <div className="cp-bottom">
//                 {/* Left – Map */}
//                 <div className="cp-left">
//                     <div className="cp-badge">Get In Touch</div>
//                     <h2 className="cp-heading">
//                         Contact us <strong>today!</strong>
//                     </h2>
//                     <p className="cp-subtext">
//                         Have questions or need expert cybersecurity support? Our team is ready
//                         to guide you with tailored solutions.
//                     </p>
//                     <iframe
//                         className="cp-map"
//                         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976397304603!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1698000000000!5m2!1sen!2s"
//                         allowFullScreen=""
//                         loading="lazy"
//                         title="Location Map"
//                     />
//                 </div>

//                 {/* Right – Form */}
//                 <div className="cp-form-box">
//                     <h2 className="cp-form-title">
//                         Fill up the <strong>form</strong>
//                     </h2>
//                     <p className="cp-form-desc">
//                         Simply fill out the form below with your details and requirements,
//                         and our team will get back to you promptly with the right solutions
//                         for your needs.
//                     </p>

//                     <div className="cp-row">
//                         <div className="cp-field">
//                             <label>First Name <span>*</span></label>
//                             <input
//                                 name="firstName"
//                                 value={formData.firstName}
//                                 onChange={handleChange}
//                                 placeholder="Your First Name"
//                             />
//                         </div>
//                         <div className="cp-field">
//                             <label>Last Name <span>*</span></label>
//                             <input
//                                 name="lastName"
//                                 value={formData.lastName}
//                                 onChange={handleChange}
//                                 placeholder="Your Last Name"
//                             />
//                         </div>
//                     </div>

//                     <div className="cp-row">
//                         <div className="cp-field">
//                             <label>Email Address <span>*</span></label>
//                             <input
//                                 type="email"
//                                 name="email"
//                                 value={formData.email}
//                                 onChange={handleChange}
//                                 placeholder="Your Email Address"
//                             />
//                         </div>
//                         <div className="cp-field">
//                             <label>Phone Number <span>*</span></label>
//                             <input
//                                 type="tel"
//                                 name="phone"
//                                 value={formData.phone}
//                                 onChange={handleChange}
//                                 placeholder="Your Phone Number"
//                             />
//                         </div>
//                     </div>

//                     <div className="cp-field">
//                         <label>Message</label>
//                         <textarea
//                             name="message"
//                             value={formData.message}
//                             onChange={handleChange}
//                             placeholder="Any Message..."
//                         />
//                     </div>

//                     <button className="cp-submit" onClick={handleSubmit}>
//                         Submit Form
//                         <svg
//                             viewBox="0 0 24 24"
//                             fill="none"
//                             stroke="currentColor"
//                             strokeWidth="2.5"
//                             width="16"
//                             height="16"
//                         >
//                             <line x1="7" y1="17" x2="17" y2="7" />
//                             <polyline points="7,7 17,7 17,17" />
//                         </svg>
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ContactPage;


import { useState } from "react";

const ContactPage = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        alert("Form submitted! We'll get back to you shortly.");
        setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
    };

    const infoCards = [
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="26" height="26">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.77a16 16 0 006.29 6.29l1.13-1.34a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
            ),
            title: "Contact Us",
            lines: ["+(123) 456-789", "+(798) 765-878"],
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="26" height="26">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
            ),
            title: "Address",
            lines: ["2118 Thornridge Cir. Syracuse,", "Connecticut 35624"],
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="26" height="26">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                </svg>
            ),
            title: "Email Us",
            lines: ["info@domainname.com", "support@domainname.com"],
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="26" height="26">
                    <circle cx="12" cy="12" r="10" /><polyline points="12,6 12,12 16,14" />
                </svg>
            ),
            title: "Working Hours",
            lines: ["Monday – Friday: 10AM – 5:00PM", "Saturday: 11AM – 2:00PM"],
        },
    ];

    return (
        <>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,400&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .cp-root {
          font-family: 'DM Sans', sans-serif;
          background: #f4f6fb;
          min-height: 100vh;
          padding: 48px 24px 80px;
          color: #1a2238;
        }

        /* ── info cards ── */
        .cp-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 20px;
          max-width: 2000px;
          margin: 0 auto 60px;
        }

        .cp-card {
          background: #fff;
          border-radius: 16px;
          padding: 36px 24px;
          text-align: center;
          box-shadow: 0 2px 12px rgba(0,0,0,.06);
          transition: transform .22s ease, box-shadow .22s ease;
        }
        .cp-card:hover { transform: translateY(-4px); box-shadow: 0 8px 28px rgba(0,0,0,.1); }

        .cp-card-icon {
          width: 58px; height: 58px;
          background: #1a2e6e;
          border-radius: 14px;
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 18px;
          color: #fff;
        }

        .cp-card h3 {
          font-family: 'Sora', sans-serif;
          font-size: 1rem;
          font-weight: 600;
          color: #1a2238;
          margin-bottom: 10px;
        }

        .cp-card p {
          font-size: .88rem;
          color: #6b7a99;
          line-height: 1.7;
        }

        /* ── bottom section ── */
        .cp-bottom {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          max-width: 2000px;
          margin: 0 auto;
          align-items: start;
        }

        @media (max-width: 768px) {
          .cp-bottom { grid-template-columns: 1fr; }
        }

        /* left */
        .cp-left {}

        .cp-badge {
          display: inline-flex; align-items: center; gap: 8px;
          background: #fff;
          border: 1px solid #e0e5f2;
          border-radius: 999px;
          padding: 6px 16px;
          font-size: .8rem;
          font-weight: 500;
          color: #1a2e6e;
          margin-bottom: 22px;
        }
        .cp-badge::before {
          content: '';
          width: 7px; height: 7px;
          border-radius: 50%;
          background: #1a2e6e;
        }

        .cp-heading {
          font-family: 'Sora', sans-serif;
          font-size: clamp(2rem, 4vw, 2.8rem);
          font-weight: 300;
          line-height: 1.2;
          margin-bottom: 18px;
          color: #1a2238;
        }
        .cp-heading strong { font-weight: 700; color: #1a2238; }

        .cp-subtext {
          font-size: .95rem;
          color: #6b7a99;
          line-height: 1.7;
          max-width: 460px;
          margin-bottom: 32px;
        }

        .cp-map {
          width: 100%;
          height: 400px;
          border-radius: 18px;
          overflow: hidden;
          border: none;
          box-shadow: 0 4px 20px rgba(0,0,0,.08);
        }

        /* right – form */
        .cp-form-box {
          background: #f0f3fb;
          border-radius: 20px;
          padding: 40px 36px;
        }

        .cp-form-title {
          font-family: 'Sora', sans-serif;
          font-size: 1.7rem;
          font-weight: 400;
          margin-bottom: 10px;
          color: #1a2238;
        }
        .cp-form-title strong { font-weight: 700; }

        .cp-form-desc {
          font-size: .88rem;
          color: #6b7a99;
          line-height: 1.7;
          margin-bottom: 28px;
        }

        .cp-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-bottom: 16px;
        }

        @media (max-width: 500px) {
          .cp-row { grid-template-columns: 1fr; }
          .cp-form-box { padding: 28px 20px; }
        }

        .cp-field { margin-bottom: 16px; }

        .cp-field label {
          display: block;
          font-size: .82rem;
          font-weight: 500;
          margin-bottom: 6px;
          color: #1a2238;
        }
        .cp-field label span { color: #e05c5c; }

        .cp-field input,
        .cp-field textarea {
          width: 100%;
          background: #fff;
          border: 1.5px solid #e0e5f2;
          border-radius: 10px;
          padding: 12px 14px;
          font-family: 'DM Sans', sans-serif;
          font-size: .9rem;
          color: #1a2238;
          outline: none;
          transition: border-color .2s;
          resize: vertical;
        }
        .cp-field input::placeholder,
        .cp-field textarea::placeholder { color: #b0bace; }
        .cp-field input:focus,
        .cp-field textarea:focus { border-color: #1a2e6e; }

        .cp-field textarea { min-height: 120px; }

        .cp-submit {
          display: inline-flex; align-items: center; gap: 10px;
          background: #1a2e6e;
          color: #fff;
          border: none;
          border-radius: 10px;
          padding: 14px 28px;
          font-family: 'Sora', sans-serif;
          font-size: .95rem;
          font-weight: 600;
          cursor: pointer;
          transition: background .2s, transform .15s;
          margin-top: 8px;
        }
        .cp-submit:hover { background: #243a8a; transform: translateY(-1px); }
        .cp-submit svg { transition: transform .2s; }
        .cp-submit:hover svg { transform: translate(2px, -2px); }
      `}</style>

            <div className="cp-root">
                {/* info cards */}
                <div className="cp-cards">
                    {infoCards.map((card, i) => (
                        <div className="cp-card" key={i}>
                            <div className="cp-card-icon">{card.icon}</div>
                            <h3>{card.title}</h3>
                            <p>{card.lines.map((l, j) => <span key={j}>{l}{j < card.lines.length - 1 && <br />}</span>)}</p>
                        </div>
                    ))}
                </div>

                {/* bottom section */}
                <div className="cp-bottom">
                    {/* left */}
                    <div className="cp-left">
                        <div className="cp-badge">Get In Touch</div>
                        <h2 className="cp-heading">Contact us <strong>today!</strong></h2>
                        <p className="cp-subtext">
                            Have questions or need expert cybersecurity support? Our team is ready to guide you with tailored solutions.
                        </p>
                        <iframe
                            className="cp-map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976397304603!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1698000000000!5m2!1sen!2s"
                            allowFullScreen=""
                            loading="lazy"
                            title="Location Map"
                        />
                    </div>

                    {/* right – form */}
                    <div className="cp-form-box">
                        <h2 className="cp-form-title">Fill up the <strong>form</strong></h2>
                        <p className="cp-form-desc">
                            Simply fill out the form below with your details and requirements, and our team will get back to you promptly with the right solutions for your needs.
                        </p>

                        <div className="cp-row">
                            <div className="cp-field">
                                <label>First Name <span>*</span></label>
                                <input name="firstName" value={formData.firstName} onChange={handleChange} placeholder="Your First Name" />
                            </div>
                            <div className="cp-field">
                                <label>Last Name <span>*</span></label>
                                <input name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Your Last Name" />
                            </div>
                        </div>

                        <div className="cp-row">
                            <div className="cp-field">
                                <label>Email Address <span>*</span></label>
                                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email Address" />
                            </div>
                            <div className="cp-field">
                                <label>Phone Number <span>*</span></label>
                                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Your Phone Number" />
                            </div>
                        </div>

                        <div className="cp-field">
                            <label>Message</label>
                            <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Any Message..." />
                        </div>

                        <button className="cp-submit" onClick={handleSubmit}>
                            Submit Form
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="16" height="16">
                                <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7,7 17,7 17,17" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactPage;