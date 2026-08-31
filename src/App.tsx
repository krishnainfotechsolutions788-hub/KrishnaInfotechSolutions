import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  Clock3,
  Globe2,
  Headphones,
  Laptop,
  Menu,
  Network,
  PackageCheck,
  Send,
  ShieldCheck,
  X,
} from 'lucide-react';

const services = [
  {
    number: '01',
    icon: Clock3,
    title: 'Laptop\nRentals',
    description: 'Flexible, ready-to-work laptops for projects, events, new teams, and every important deadline.',
    tone: 'orange',
    link: 'Explore rentals',
  },
  {
    number: '02',
    icon: Laptop,
    title: 'Laptop &\nDesktop Sales',
    description: 'Business-ready devices from trusted brands, selected around your team, budget, and workload.',
    tone: 'teal',
    link: 'Find your hardware',
  },
  {
    number: '03',
    icon: PackageCheck,
    title: 'Hardware\nSupply',
    description: 'Monitors, accessories, printers, and complete technology setups supplied without the guesswork.',
    tone: 'burgundy',
    link: 'Source your setup',
  },
  {
    number: '04',
    icon: Globe2,
    title: 'Web\nDevelopment',
    description: 'Professional websites and custom digital solutions designed to help your business stand out online.',
    tone: 'cream',
    link: 'Explore web development',
  },
];

const products = [
  { number: '01', image: '/product-laptop.png', title: 'Laptops & desktops', description: 'Reliable business devices for teams, individual workstations, and complete rollouts.', items: ['Business laptops', 'Desktop PCs', 'Workstations'] },
  { number: '02', image: '/product-monitor.png', title: 'Monitors & displays', description: 'The right screen setup for productive desks, meeting rooms, and focused work.', items: ['Business monitors', 'Dual-display setups', 'Presentation displays'] },
  { number: '03', image: '/product-accessories.png', title: 'Accessories & peripherals', description: 'The essentials that make every setup complete, comfortable, and ready to use.', items: ['Keyboards & mice', 'Docking stations', 'Printers & UPS'] },
  { number: '04', image: '/product-networking.png', title: 'Networking & IT hardware', description: 'Practical infrastructure for connected, dependable workplaces.', items: ['Routers & switches', 'Wi-Fi equipment', 'Cabling & installation'] },
];

const benefits = ['One accountable technology partner', '20+ years of dependable service', 'Fast, human support for every order'];
const whatsappNumber = '918582937283';
const address = 'Entrance from, 1st floor, 1 Acharya Jagadish Chandra Bose Road, Lord Sinha Road, Kolkata, West Bengal 700020';

const whatsappLink = (message: string) => `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

function MyntraMark() {
  return (
    <svg className="brand-logo myntra-logo" viewBox="0 0 72 40" role="img" aria-label="Myntra">
      <path d="M7 31 18 9l12 22L41 9l12 22L64 9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8" />
    </svg>
  );
}

function FlipkartMark() {
  return (
    <svg className="brand-logo flipkart-logo" viewBox="0 0 48 48" role="img" aria-label="Flipkart">
      <path d="M10 16.5h28v23H10z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="4" />
      <path d="M16 16.5c0-6 3.3-9.5 8-9.5s8 3.5 8 9.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="4" />
      <path d="M25.7 18.8h5.1v4.4h-4.2v2.6h4v4.2h-4V35h-5v-9.2c0-4.6 2.2-7 6.4-7Z" fill="currentColor" />
    </svg>
  );
}

const faqs = [
  { question: 'What laptop brands and models do you supply?', answer: 'We source business-ready laptops and desktops from trusted brands based on your workload, budget, and preferred specifications. Our team can help you compare the right options before you buy.' },
  { question: 'Can I rent laptops for a short-term project or event?', answer: 'Yes. Our laptop rental service is designed for projects, training programs, events, temporary teams, and urgent requirements. Tell us your quantity, dates, and specifications and we will recommend a practical setup.' },
  { question: 'Do you supply hardware for complete office setups?', answer: 'Yes. Along with laptops and desktops, KIS can supply monitors, accessories, printers, networking equipment, and other essentials for a coordinated business setup.' },
  { question: 'Do you provide support after the purchase or rental?', answer: 'We do. Our team stays available for practical support, setup guidance, and help with your technology requirements beyond the initial order.' },
  { question: 'What can Klarone help me choose?', answer: 'Klarone is a child company of Krishna Infotech Solutions focused on individual buyers. We help you choose laptops, accessories, and everyday technology with clear advice based on your needs, budget, and how you will use it.' },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get('name') || '');
    const phone = String(form.get('phone') || '');
    const service = String(form.get('service') || '');
    const details = String(form.get('details') || '');
    window.open(whatsappLink(`Hi, I visited the KIS website. My name is ${name}. I have a query related to ${service}. Phone: ${phone}. ${details}`), '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="kis-brand" href="#top" aria-label="Krishna Infotech Solutions home">
          <img className="kis-logo" src="/icon2.png" alt="" />
          <span className="kis-wordmark"><strong>KRISHNA</strong><span>INFOTECH SOLUTIONS</span></span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'}>
          <a href="#services" onClick={() => setMenuOpen(false)}>Solutions</a>
          <a href="#products" onClick={() => setMenuOpen(false)}>Products</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About KIS</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          <a className="nav-cta" href={whatsappLink('Hi, I visited the KIS website and would like to request a quote.')} target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)}>Request a quote <ArrowUpRight size={16} /></a>
        </nav>
      </header>

      <main id="top">
        <motion.section className="hero-section" initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}>
          <motion.div className="hero-copy" variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } }}>
            <div className="eyebrow"><span className="eyebrow-line" /> Krishna Infotech Solutions · Est. 2021</div>
            <h1>Technology<br /><em>that works</em><br />for your<br /><span>business.</span></h1>
            <p className="hero-intro">From laptop rentals that keep a project moving to complete workplace setups, KIS is the dependable technology partner behind your next step.</p>
            <div className="hero-actions">
              <a className="button button-orange" href={whatsappLink('Hi, I visited the KIS website and would like to discuss my technology needs.')} target="_blank" rel="noreferrer">Tell us what you need <ArrowUpRight size={18} /></a>
              <a className="text-link" href="#services">View our solutions <span>↓</span></a>
            </div>
          </motion.div>
          <motion.div className="hero-visual" aria-label="Laptop rental and business hardware solutions" variants={{ hidden: { opacity: 0, scale: .96 }, visible: { opacity: 1, scale: 1, transition: { duration: .9 } } }}>
            <div className="visual-grid" />
            <div className="hero-image-frame">
              <img className="hero-image" src="/hero2.jpg" alt="Business technology workspace" />
              <div className="hero-image-wash" />
              <div className="hero-service-callout">
                <span className="hero-callout-kicker">Business technology / on demand</span>
                <strong>Ready for<br />what&apos;s next.</strong>
                <div className="hero-callout-services"><span>01 / Rentals</span><span>02 / Hardware</span><span>03 / IT setups</span></div>
              </div>
              <div className="hero-image-caption"><span>Since</span><strong>2021</strong></div>
            </div>
            <div className="visual-orbit orbit-one" />
            <div className="visual-orbit orbit-two" />
            <div className="visual-panel panel-orange"><span>01 / MOST REQUESTED</span><Clock3 size={62} strokeWidth={1.2} /><strong>LAPTOP<br />RENTALS</strong></div>
            <div className="visual-panel panel-cream"><span>02 / BUSINESS READY</span><Laptop size={62} strokeWidth={1.2} /><strong>HARDWARE<br />SUPPLY</strong></div>
            <div className="visual-panel panel-burgundy"><span>03 / BUILT TO LAST</span><Network size={62} strokeWidth={1.2} /><strong>IT &<br />NETWORKING</strong></div>
            <div className="visual-sticker"><ShieldCheck size={17} /><span>Trusted technology.<br />Straightforward service.</span></div>
          </motion.div>
          <div className="hero-footer"><span>A trusted technology partner since 2021</span><span className="scroll-note">Scroll to discover <span>↓</span></span><span>Serving businesses across India</span></div>
        </motion.section>

        <div className="trusted-strip" aria-label="Companies we work with">
          <span>Trusted by teams at</span>
          <MyntraMark />
          <FlipkartMark />
          <img className="brand-logo hdfc-logo" src="https://cdn.simpleicons.org/hdfcbank/123f46" alt="HDFC Bank" />
          <img className="brand-logo phonepe-logo" src="https://cdn.simpleicons.org/phonepe/123f46" alt="PhonePe" />
          <img className="brand-logo tcs-logo" src="https://cdn.simpleicons.org/tcs/123f46" alt="Tata Consultancy Services" />
        </div>

        <motion.section className="statement-section" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }}>
          <div className="section-kicker">01 / The KIS difference</div>
          <div className="statement-content">
            <h2>Good technology<br /><span>should make work</span><br />feel <em>simple.</em></h2>
            <div className="statement-side">
              <p>For more than two decades, KIS has helped businesses make confident technology decisions—with the right products, practical advice, and support that does not disappear after the sale.</p>
              <a className="arrow-link" href="#about">Why businesses choose KIS <span><ArrowUpRight size={16} /></span></a>
            </div>
          </div>
        </motion.section>

        <motion.section className="services-section" id="services" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .12 }}>
          <div className="section-heading">
            <div><div className="section-kicker">02 / Core solutions</div><h2>Built around<br />your <em>business.</em></h2></div>
            <p>Our strongest work is hands-on: the devices, hardware, rentals, and support your people rely on every day.</p>
          </div>
          <div className="service-grid">
            {services.map(({ number, icon: Icon, title, description, tone, link }) => (
              <motion.article className={`service-card ${tone}`} key={number} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .45, delay: Number(number) * .05 }} viewport={{ once: true, amount: .15 }}>
                <div className="card-top"><span>{number}</span><Icon size={28} strokeWidth={1.5} /></div>
                <h3>{title.split('\n').map((line) => <span key={line}>{line}<br /></span>)}</h3>
                <p>{description}</p>
                <a href={whatsappLink(`Hi, I visited the KIS website. I want to have a query related to ${link.toLowerCase()}.`)} target="_blank" rel="noreferrer">{link} <ArrowUpRight size={16} /></a>
              </motion.article>
            ))}
          </div>
          <div className="klarone-note"><div className="klarone-mark"><Laptop size={21} /></div><div><span className="section-kicker">A KIS company / B2C</span><h3>Meet Klarone</h3><p>Klarone helps you buy the right laptop and technology for your needs. Get clear, personal advice and buy with confidence—without the confusion.</p></div><a href="https://klarone.in" target="_blank" rel="noreferrer">Explore Klarone <ArrowUpRight size={16} /></a></div>
        </motion.section>

        <motion.section className="products-section" id="products" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .12 }}>
          <div className="products-heading"><div><div className="section-kicker">03 / Products</div><h2>Everything your<br /><em>workplace needs.</em></h2></div><div><p>We help you source the business technology that fits how your team works—without the uncertainty of buying it alone.</p><a className="arrow-link" href={whatsappLink('Hi, I visited the KIS website and would like to receive your product list.')} target="_blank" rel="noreferrer">Request our product list <span><ArrowUpRight size={16} /></span></a></div></div>
          <div className="product-grid">{products.map(({ number, image, title, description, items }) => <article className="product-card" key={number}><div className="product-image-wrap"><img src={image} alt="" /></div><div className="product-card-body"><h3>{title}</h3><p>{description}</p><ul>{items.map((item) => <li key={item}>{item}</li>)}</ul><a href={whatsappLink(`Hi, I visited the KIS website. I would like to enquire about ${title.toLowerCase()}.`)} target="_blank" rel="noreferrer">Enquire now <ArrowUpRight size={15} /></a></div></article>)}</div>
        </motion.section>

        <motion.section className="about-section" id="about" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .15 }}>
          <div className="about-graphic"><img className="kis-logo" src="/icon1.png" alt="" /><div className="graphic-label">Krishna Infotech Solutions /<br />A trusted name since 2021</div><div className="graphic-dot" /></div>
          <div className="about-copy"><div className="section-kicker">03 / About KIS</div><h2>Experience you<br />can <em>count on.</em></h2><p>What started as a technology company built on trust has grown into a reliable B2B partner for organizations across India. We keep things clear, responsive, and focused on what helps your business perform.</p><div className="benefit-list">{benefits.map((benefit) => <div key={benefit}><span><Check size={14} /></span>{benefit}</div>)}</div><a className="button button-dark" href={whatsappLink('Hi, I visited the KIS website and would like to work with your team.')} target="_blank" rel="noreferrer">Work with KIS <ArrowUpRight size={18} /></a></div>
        </motion.section>

        <motion.section className="faq-section" id="faq" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .15 }}>
          <div className="faq-heading"><div className="section-kicker">04 / Common questions</div><h2>Clear answers<br />before you <em>start.</em></h2><p>Everything you need to know about working with Krishna Infotech Solutions.</p></div>
          <div className="faq-list">{faqs.map((faq, index) => <div className={openFaq === index ? 'faq-item is-open' : 'faq-item'} key={faq.question}><button className="faq-question" onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index}><span><small>0{index + 1}</small>{faq.question}</span><ChevronDown size={18} /></button><div className="faq-answer"><p>{faq.answer}</p></div></div>)}</div>
        </motion.section>

        <motion.section className="contact-section" id="contact" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .15 }}>
          <div className="contact-intro"><div className="section-kicker">05 / Let’s get started</div><h2>Need the<br /><span>right technology</span><br /><em>partner?</em></h2><p>Tell us what your business needs. Whether it is one laptop or a complete rollout, our team will help you find a practical way forward.</p><div className="contact-details"><a href="tel:+918582937283"><Headphones size={20} /><span>Speak with our team<br /><strong>+91 85829 37283</strong></span></a><div><PackageCheck size={20} /><span>Visit our office<br /><strong>Kolkata, West Bengal</strong></span></div></div></div>
          <div className="contact-form-wrap">{submitted ? <div className="success-message"><span><Check size={22} /></span><h3>Thanks for reaching out.</h3><p>Your enquiry is in good hands. A KIS team member will be in touch shortly.</p><button className="text-link" onClick={() => setSubmitted(false)}>Send another enquiry <ArrowUpRight size={16} /></button></div> : <form onSubmit={handleSubmit}><div className="form-row"><label>Your name<input name="name" type="text" required placeholder="How should we call you?" /></label><label>Phone number<input name="phone" type="tel" required placeholder="+91 00000 00000" /></label></div><label>What do you need?<select name="service" defaultValue=""><option value="" disabled>Select a solution</option><option>Laptop rentals</option><option>Laptop or desktop sales</option><option>Hardware supply</option><option>Web development</option><option>Klarone technology guidance</option></select></label><label>A little more detail<textarea name="details" required rows={4} placeholder="Tell us what your business needs..." /></label><button className="button button-orange" type="submit">Send enquiry <Send size={17} /></button></form>}</div>
        </motion.section>
      </main>

      <footer className="site-footer"><div className="footer-brand-block"><a className="kis-brand footer-brand" href="#top"><img className="kis-logo" src="/icon1.png" alt="" /><span className="kis-wordmark"><strong>KRISHNA</strong><span>INFOTECH SOLUTIONS</span></span></a><p>Dependable technology<br />for the way you work.</p></div><div className="footer-address"><span className="footer-label">Visit us</span><p>{address}</p></div><div className="footer-contact"><span className="footer-label">Start a conversation</span><a href="tel:+918582937283">+91 85829 37283</a><a href={whatsappLink('Hi, I visited the KIS website and would like to speak with your team.')} target="_blank" rel="noreferrer">WhatsApp our team <ArrowUpRight size={15} /></a></div><div className="footer-links"><span className="footer-label">Explore</span><a href="#services">Solutions</a><a href="#about">About KIS</a><a href="#faq">FAQs</a><a href="https://klarone.in" target="_blank" rel="noreferrer">Klarone</a></div><span className="copyright">© 2025 Krishna Infotech Solutions. All rights reserved.</span></footer>
    </div>
  );
}

export default App;
