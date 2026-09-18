import { useState } from 'react'
import './App.css'

const features = [
  { icon: '▣', title: 'Online Ordering', text: 'Let customers order direct from your own website.' },
  { icon: '⌗', title: 'QR Menu', text: 'Customers access your menu instantly, anywhere.' },
  { icon: '➤', title: 'Pickup & Delivery', text: 'Support convenient pickup and delivery ordering.' },
  { icon: '✦', title: 'Promotions', text: 'Create offers that bring customers back.' },
  { icon: '▥', title: 'Business Growth', text: 'Tools to manage and grow your restaurant.' },
  { icon: '◎', title: 'Restaurant Website', text: 'Give your restaurant a professional online presence.' },
]

const comparison = [
  ['Online Ordering', false, true],
  ['QR Menu', false, true],
  ['Pickup & Delivery', true, true],
  ['Restaurant Website', false, true],
  ['Promotions', false, true],
  ['Business Growth Tools', false, true],
]

function App() {
  const [activeFeature, setActiveFeature] = useState(0)
  const [isDemoOpen, setIsDemoOpen] = useState(false)

  return (
    <main className="page-shell">
      <header className="site-header">
        <a className="logo" href="#top" aria-label="Sharaly home"><img className="real-logo" src="/sharaly-logo.png" alt="Sharaly" /></a>
        <nav><a href="#top">Home</a><a href="#features">Features</a><a href="#compare">Pricing</a><a href="#stories">About</a><a href="#contact">Contact</a></nav>
        <button className="header-cta" type="button" onClick={() => setIsDemoOpen(true)}>Get Started <span>→</span></button>
      </header>

      <section className="hero-section" id="top"><div className="hero-content"><span className="pill">GloriaFood is ending</span><h1>Looking for an alternative to <em>GloriaFood?</em></h1><p>Meet <strong>Sharaly</strong> — your modern restaurant ordering solution. Everything you need to take orders, delight customers, and grow your business.</p><div className="hero-points"><span>◉ Online Ordering</span><span>▣ QR Menu</span><span>➤ Pickup & Delivery</span><span>▥ Promotions & Growth</span></div><button className="orange-button" type="button" onClick={() => setIsDemoOpen(true)}>Switch to Sharaly <span>→</span></button></div><div className="hero-visual"><div className="hero-glow" /><div className="laptop"><div className="laptop-screen"><div className="screen-top"><b><i>S</i> sharaly</b><span>Home &nbsp; Menu &nbsp; Order online <strong>Get Started</strong></span></div><div className="screen-copy"><small>DELIVERED WITH CARE</small><h2>Delicious<br /><em>food, anytime.</em></h2><p>Order online for pickup or delivery</p><b>Order Now</b></div><div className="screen-food" /></div><div className="laptop-base" /></div><div className="phone"><div className="phone-notch" /><div className="phone-logo"><i>S</i> sharaly</div><div className="phone-action orange">▣ <span>Order Online</span> ›</div><div className="phone-action">➤ <span>Pickup & Delivery</span> ›</div><div className="phone-action">⌗ <span>QR Menu</span> ›</div><div className="phone-action green">▥ <span>Grow Your Business</span> ›</div></div></div></section>

      <section className="switch-section"><p className="eyebrow">THE SMART MOVE FOR YOUR RESTAURANT</p><h2>Your restaurant's next step <em>starts here</em></h2><p className="section-subtitle">GloriaFood's service is ending. It's time to move forward with Sharaly.</p><div className="switch-grid"><div className="service-card ending"><div className="service-logo gray">ORACLE <b>GloriaFood</b></div><ul><li>Service discontinuation</li><li>Limited features</li><li>Time to find an alternative</li></ul></div><div className="switch-arrow">SWITCH TO<br /><b>SHARALY</b><span>→</span></div><div className="service-card starting"><div className="service-logo"><i>S</i> sharaly</div><ul><li>Online Ordering</li><li>QR Menu</li><li>Pickup & Delivery</li><li>Restaurant Promotions</li><li>Business Growth Tools</li></ul></div></div></section>

      <section className="features-section" id="features"><p className="eyebrow">ONE PLATFORM. EVERYTHING YOU NEED.</p><h2>Everything you need to <em>manage your restaurant online</em></h2><p className="section-subtitle">Powerful features designed to help you serve better, operate smarter and grow faster.</p><div className="feature-grid">{features.map((feature, index) => <button type="button" className={`feature-card ${activeFeature === index ? 'active' : ''}`} onClick={() => setActiveFeature(index)} key={feature.title}><span className={`feature-icon feature-${index}`}>{feature.icon}</span><strong>{feature.title}</strong><small>{feature.text}</small></button>)}</div></section>

      <section className="showcase-section" id="showcase"><div className="showcase-heading"><div><p className="eyebrow">BUILT FOR BUSY RESTAURANTS</p><h2>See Sharaly<br /><em>in action</em></h2></div><p>Everything you need, in one powerful platform.</p></div><div className="product-grid"><article className="product-card dashboard-card"><div className="product-window"><div className="window-bar"><b>sharaly</b><span>Overview &nbsp; Orders &nbsp; Customers</span><i>●</i></div><div className="dash-content"><small>GOOD MORNING, MAMA ROSA</small><h3>Restaurant overview</h3><div className="dash-stats"><b>1,248 <small>Orders this month</small></b><b>$18,420 <small>Total revenue</small></b></div><div className="chart"><span style={{ height: '38%' }} /><span style={{ height: '54%' }} /><span style={{ height: '44%' }} /><span style={{ height: '72%' }} /><span style={{ height: '63%' }} /><span style={{ height: '92%' }} /><span style={{ height: '76%' }} /></div></div></div><h3>Restaurant Dashboard</h3><p>Manage orders, menu, and customers easily.</p></article><article className="product-card website-card"><div className="product-window"><div className="mini-site-top"><b><i>S</i> sharaly</b><span>Menu &nbsp; About &nbsp; <strong>Order online</strong></span></div><div className="mini-site-image"><small>YOUR LOCAL FAVOURITE</small><h3>Delicious<br /><em>food, anytime.</em></h3><button type="button">Order now</button></div></div><h3>Restaurant Website</h3><p>Showcase your menu and attract more customers.</p></article><article className="product-card mobile-card"><div className="mobile-preview"><b><i>S</i> sharaly</b><h4>What are you<br />in the mood for?</h4><div className="mobile-food-row"><span>Popular</span><span>Starters</span><span>Pizza</span></div><div className="mobile-item"><i /> <span>Margherita Pizza<br /><small>$18.00</small></span><b>+</b></div><div className="mobile-item"><i /> <span>Rosa Burger<br /><small>$19.00</small></span><b>+</b></div></div><h3>Mobile Ordering</h3><p>Let customers order on the go.</p></article><article className="product-card qr-card"><div className="qr-preview"><div className="qr-code">▦</div><b>Scan to View Menu</b><small>Point your camera here</small></div><h3>QR Menu</h3><p>Quick, contactless and easy.</p></article></div></section>

      <section className="proof-section" id="compare"><div className="table-wrap"><p className="eyebrow">MAKE THE SWITCH</p><h2>A more complete<br /><em>restaurant solution</em></h2><p>See how Sharaly gives you more value than GloriaFood.</p><table><thead><tr><th>Feature</th><th>GloriaFood</th><th>Sharaly</th></tr></thead><tbody>{comparison.map(([name, gloria, sharaly]) => <tr key={name}><td>{name}</td><td>{gloria ? '✓' : '×'}</td><td>{sharaly ? '✓' : '×'}</td></tr>)}</tbody></table></div><div className="testimonial" id="stories"><span className="quote">“</span><p>Switching to Sharaly was the best decision for our restaurant. The online ordering and QR menu helped us reach more customers and increase our sales.</p><div className="person"><span className="person-avatar">K</span><b>Kavitha Silva<small>Restaurant Owner</small></b><span className="stars">★★★★★</span></div><div className="dots">● ○ ○</div></div><div className="side-cta"><span>♨</span><h3>Don't let your online orders stop.</h3><p>Your current restaurant ordering solution is changing. Your customers still want a simple way to order.</p><b>Get started with Sharaly →</b></div></section>

      <section className="final-cta" id="contact"><div className="cta-food" /><div><h2>Ready to move your restaurant to <em>Sharaly?</em></h2><p>Give your customers a better way to discover, order and connect with your restaurant.</p><button className="orange-button" type="button" onClick={() => setIsDemoOpen(true)}>Switch to Sharaly <span>→</span></button><button className="outline-button" type="button" onClick={() => setIsDemoOpen(true)}>Book a demo</button><button className="outline-button" type="button" onClick={() => setIsDemoOpen(true)}>Contact us</button></div></section>
      <footer><a className="logo footer-logo" href="#top"><img className="real-logo" src="/sharaly-logo.png" alt="Sharaly" /></a><div className="footer-nav"><a href="#features">Features</a><a href="#compare">Why Sharaly</a><a href="#showcase">Solutions</a><a href="#stories">About</a><a href="#contact">Contact</a></div><div className="socials"><span>f</span><span>◎</span><span>▶</span></div></footer>
      {isDemoOpen && <div className="modal-backdrop" role="presentation" onClick={(event) => event.target === event.currentTarget && setIsDemoOpen(false)}><div className="demo-modal"><button type="button" aria-label="Close" onClick={() => setIsDemoOpen(false)}>×</button><span className="pill">LET'S TALK</span><h2>Grow with <em>Sharaly.</em></h2><p>Tell us where to send your demo details and our team will be in touch.</p><input aria-label="Your email" placeholder="Your email address" type="email" /><button className="orange-button" type="button" onClick={() => setIsDemoOpen(false)}>Request a demo <span>→</span></button></div></div>}
    </main>
  )
}

export default App
