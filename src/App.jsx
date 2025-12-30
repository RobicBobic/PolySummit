import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFAQ, setActiveFAQ] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', content: '' });
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openModal = (title, content) => {
    setModalContent({ title, content });
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.includes('@')) {
      openModal(
        'Welcome to Poly Summit!',
        'Thank you for subscribing! You\'ll receive exclusive updates about new markets, trading strategies, and platform features.'
      );
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const markets = [
    {
      title: '2024 Presidential Election',
      category: 'Politics',
      yesPrice: '58¢',
      noPrice: '42¢',
      yesPercent: 58,
      change: '+12%',
      volume: '$45.2M',
      trending: true
    },
    {
      title: 'Bitcoin to $100K by EOY',
      category: 'Crypto',
      yesPrice: '52¢',
      noPrice: '48¢',
      yesPercent: 52,
      change: '+8%',
      volume: '$28.8M',
      trending: true
    },
    {
      title: 'Fed Rate Cut in March',
      category: 'Finance',
      yesPrice: '71¢',
      noPrice: '29¢',
      yesPercent: 71,
      change: '+4%',
      volume: '$18.4M',
      trending: false
    },
    {
      title: 'Lakers Win NBA Championship',
      category: 'Sports',
      yesPrice: '34¢',
      noPrice: '66¢',
      yesPercent: 34,
      change: '-3%',
      volume: '$12.1M',
      trending: false
    },
    {
      title: 'Ethereum ETF Approval 2025',
      category: 'Crypto',
      yesPrice: '67¢',
      noPrice: '33¢',
      yesPercent: 67,
      change: '+15%',
      volume: '$22.3M',
      trending: false
    },
    {
      title: 'Supreme Court Ruling',
      category: 'Politics',
      yesPrice: '45¢',
      noPrice: '55¢',
      yesPercent: 45,
      change: '+2%',
      volume: '$16.7M',
      trending: false
    },
    {
      title: 'Tech Stock Rally Continues',
      category: 'Finance',
      yesPrice: '62¢',
      noPrice: '38¢',
      yesPercent: 62,
      change: '+9%',
      volume: '$25.9M',
      trending: true
    },
    {
      title: 'AI Breakthrough by EOY',
      category: 'Science',
      yesPrice: '73¢',
      noPrice: '27¢',
      yesPercent: 73,
      change: '+11%',
      volume: '$14.2M',
      trending: false
    },
    {
      title: 'Oscar Best Picture Winner',
      category: 'Entertainment',
      yesPrice: '41¢',
      noPrice: '59¢',
      yesPercent: 41,
      change: '+6%',
      volume: '$8.5M',
      trending: false
    }
  ];

  // Features array removed - not used in current design

  const pricingPlans = [
    {
      name: 'Standard',
      price: 'FREE',
      period: 'Forever',
      features: [
        'Trade on all markets',
        'Real-time market data',
        'Mobile & web access',
        'Basic analytics',
        'Email support',
        '$10 welcome bonus',
        'Instant withdrawals',
        'Community forums'
      ],
      cta: 'Get Started Free',
      popular: false
    },
    {
      name: 'Pro',
      price: '$49',
      period: 'per month',
      features: [
        'Everything in Standard',
        'Advanced analytics dashboard',
        'API access for algo trading',
        'Priority support (24/7)',
        'Reduced minimum positions',
        'Custom alerts & notifications',
        'Historical data exports',
        'Strategy backtesting tools'
      ],
      cta: 'Start Pro Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'Contact us',
      features: [
        'Everything in Pro',
        'Dedicated account manager',
        'Custom market creation',
        'White-label solutions',
        'On-premise deployment',
        'Custom integrations',
        'SLA guarantees',
        'Institutional-grade security'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const faqs = [
    {
      question: 'What is Poly Summit and how does it work?',
      answer: 'Poly Summit is a CFTC-regulated prediction market where you can trade on the outcomes of real-world events. You buy shares in outcomes you think will happen—if you\'re right, you profit. Think of it like a stock market, but instead of trading companies, you\'re trading events. Our automated market maker ensures instant liquidity and fair pricing based on collective intelligence.'
    },
    {
      question: 'How accurate are prediction markets compared to other forecasting methods?',
      answer: 'Prediction markets consistently outperform polls, expert predictions, and statistical models. Academic research shows prediction markets are 20-30% more accurate than traditional polling in elections. Our markets correctly predicted 98.3% of outcomes in 2023, compared to 87.4% for polls and 91.2% for expert forecasts. The wisdom of crowds, combined with financial incentives, creates remarkably accurate predictions.'
    },
    {
      question: 'Is this legal and regulated?',
      answer: 'Yes. Poly Summit operates as a Designated Contract Market (DCM) registered with the Commodity Futures Trading Commission (CFTC). We comply with all federal regulations governing derivatives exchanges. User funds are held in segregated FDIC-insured accounts and protected by SIPC insurance up to $500,000. We maintain SOC 2 Type II certification and undergo regular third-party security audits.'
    },
    {
      question: 'How do you ensure market integrity and prevent manipulation?',
      answer: 'We employ multiple safeguards: automated surveillance systems monitor for suspicious trading patterns, position limits prevent any single trader from dominating a market, sophisticated algorithms detect wash trading and collusion, and our compliance team investigates anomalies. Markets with evidence of manipulation are voided, and violators face permanent bans and legal action. We maintain a public transparency report of all enforcement actions.'
    },
    {
      question: 'What happens if there is a dispute about how a market should resolve?',
      answer: 'Each market has clearly defined resolution criteria established before trading begins. We use multiple verified sources (AP, Reuters, official government data, etc.) to determine outcomes. If ambiguity arises, our Resolution Committee—consisting of independent experts—reviews the evidence. Users can submit appeals within 48 hours of resolution. In rare cases of genuine ambiguity, markets are resolved as "invalid" and all funds are returned.'
    },
    {
      question: 'How does the automated market maker work?',
      answer: 'Our AMM uses a logarithmic market scoring rule (LMSR) to provide continuous liquidity. Unlike traditional order books, you can always buy or sell at the displayed price. The AMM automatically adjusts prices based on trading volume to maintain balance. This ensures tight spreads (typically 1-2 cents) and instant execution even in less popular markets. The system is seeded with initial liquidity and rebalanced using trading fees collected from the spread.'
    },
    {
      question: 'Can I withdraw my money at any time?',
      answer: 'Yes. You can withdraw available funds (not tied up in open positions) at any time with zero fees. Withdrawals to bank accounts typically process within 1-2 business days. You can also close open positions by selling your shares back to the market at the current price. There are no lock-up periods, minimum withdrawal amounts, or withdrawal limits.'
    },
    {
      question: 'Do you offer API access for algorithmic trading?',
      answer: 'Yes. Pro and Enterprise users have full API access with REST endpoints and WebSocket streams for real-time data. Our API supports order management, portfolio tracking, market data retrieval, and historical analytics. Rate limits are generous (1000 requests/minute for Pro, unlimited for Enterprise). We provide SDKs for Python, JavaScript, and Java, along with comprehensive documentation and sample code.'
    }
  ];

  return (
    <div className="App">
      {/* Animated Background */}
      <div className="bg-animation">
        <div className="bg-grid"></div>
        <div className="bg-orb orb-1"></div>
        <div className="bg-orb orb-2"></div>
        <div className="bg-orb orb-3"></div>
      </div>

      {/* Navigation */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <div className="logo">
            <img src="/logo.png" alt="Poly Summit Logo" className="logo-image" />
            <span className="logo-text">Poly Summit</span>
          </div>
          
          <button 
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>

          <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
            <a href="#markets" onClick={() => scrollToSection('markets')}>Markets</a>
            <a href="#how-it-works" onClick={() => scrollToSection('how-it-works')}>How It Works</a>
            <a href="#features" onClick={() => scrollToSection('features')}>Features</a>
            <a href="#pricing" onClick={() => scrollToSection('pricing')}>Pricing</a>
            <a href="#faq" onClick={() => scrollToSection('faq')}>FAQ</a>
            <button 
              className="btn-primary"
              onClick={() => openModal(
                'Create Your Account',
                <div>
                  <p><strong>Join 150,000+ traders on Poly Summit</strong></p>
                  <ol style={{textAlign: 'left', marginTop: '1rem'}}>
                    <li>Sign up with email (takes 30 seconds)</li>
                    <li>Get $10 welcome bonus instantly</li>
                    <li>Start trading immediately</li>
                  </ol>
                  <p style={{marginTop: '1rem'}}>Ready to start?</p>
                  <p><strong>→ polysummit.com/signup</strong></p>
                </div>
              )}
            >
              Sign Up
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="hero">
        <div className="container hero-content">
          <div className="hero-left">
            <div className="live-badge">
              <span className="live-dot"></span>
              LIVE NOW: 5,247 Active Markets
            </div>
            
            <h1 className="hero-title">
              Trade on What<br />
              <span className="gradient-text">You Believe</span>
            </h1>
            
            <p className="hero-subtitle">
              The world's most advanced prediction market. Real money.<br />
              Real predictions. From elections to crypto, sports to science -<br />
              profit from being right.
            </p>
            
            <div className="hero-cta">
              <button 
                className="btn-primary btn-large"
                onClick={() => openModal(
                  'Start Trading Free',
                  <div>
                    <p><strong>Get started in 3 simple steps:</strong></p>
                    <ol style={{textAlign: 'left', marginTop: '1rem'}}>
                      <li><strong>Create Account</strong> - Sign up with email, takes 30 seconds</li>
                      <li><strong>Deposit Funds</strong> - Minimum $10, multiple payment methods</li>
                      <li><strong>Start Trading</strong> - Browse markets and make your first trade</li>
                    </ol>
                  </div>
                )}
              >
                Start Trading Free →
              </button>
              <button 
                className="btn-secondary btn-large"
                onClick={() => scrollToSection('markets')}
              >
                View Markets
              </button>
            </div>
            
            <div className="hero-stats">
              <div className="stat">
                <div className="stat-value">$2.5B+</div>
                <div className="stat-label">TRADING VOLUME</div>
              </div>
              <div className="stat">
                <div className="stat-value">150K+</div>
                <div className="stat-label">ACTIVE TRADERS</div>
              </div>
              <div className="stat">
                <div className="stat-value">5,000+</div>
                <div className="stat-label">LIVE MARKETS</div>
              </div>
            </div>
          </div>
          
          <div className="hero-right">
            <div className="hero-market-card">
              <div className="hero-card-header">
                <span className="hero-card-category">Politics</span>
                <span className="hero-card-volume">$45.2M</span>
              </div>
              <h3 className="hero-card-title">2024 Presidential Election</h3>
              <div className="hero-card-prices">
                <div className="hero-card-price-item">
                  <span className="hero-card-label">YES</span>
                  <span className="hero-card-value yes">58¢</span>
                </div>
                <div className="hero-card-price-item">
                  <span className="hero-card-label">NO</span>
                  <span className="hero-card-value no">42¢</span>
                </div>
              </div>
              <div className="hero-card-bars">
                <div className="hero-bar"></div>
                <div className="hero-bar"></div>
                <div className="hero-bar"></div>
                <div className="hero-bar"></div>
                <div className="hero-bar"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Markets Section */}
      <section className="markets" id="markets">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Trending Markets</h2>
            <a href="#markets" className="view-all-link" onClick={() => scrollToSection('markets')}>View All Markets →</a>
          </div>
          
          <div className="markets-grid">
            {markets.map((market, index) => (
              <div key={index} className="market-card">
                <div className="market-header">
                  <div className="market-category">{market.category}</div>
                  <div className={`market-change ${market.change.startsWith('+') ? 'positive' : 'negative'}`}>
                    {market.change}
                  </div>
                </div>
                <h3 className="market-title">{market.title}</h3>
                <div className="market-volume">Volume: {market.volume}</div>
                
                <div className="progress-bar">
                  <div className="progress-fill" style={{width: `${market.yesPercent}%`}}></div>
                </div>
                
                <div className="market-prices">
                  <div className="price-item">
                    <span className="price-label">YES</span>
                    <span className="price-value yes">{market.yesPrice}</span>
                  </div>
                  <div className="price-item">
                    <span className="price-label">NO</span>
                    <span className="price-value no">{market.noPrice}</span>
                  </div>
                </div>
                
                <button 
                  className="btn-trade"
                  onClick={() => openModal(
                    `Trade: ${market.title}`,
                    <div>
                      <p><strong>Market Details</strong></p>
                      <p style={{marginTop: '1rem'}}>Category: {market.category}</p>
                      <p>YES Price: {market.yesPrice}</p>
                      <p>NO Price: {market.noPrice}</p>
                      <p>Total Volume: {market.volume}</p>
                      <p>24h Change: {market.change}</p>
                      <p style={{marginTop: '1.5rem', color: '#5ce1a5'}}><strong>Ready to trade?</strong></p>
                      <p>Create an account to start trading this market.</p>
                    </div>
                  )}
                >
                  Trade Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="why-choose">
        <div className="container">
          <h2 className="section-title">Why Choose Poly Summit</h2>
          <p className="section-subtitle">The most advanced platform for prediction markets</p>
          
          <div className="why-grid">
            <div className="why-card">
              <div className="why-label">INSTANT</div>
              <h3 className="why-title">Instant Settlement</h3>
              <p className="why-description">Get paid immediately when markets resolve. Automatic payouts to your wallet the moment outcomes are confirmed.</p>
              <button className="btn-outline" onClick={() => openModal('Instant Settlement', 'Markets resolve within minutes of outcomes. Automatic payouts.')}>View Payout Speed →</button>
            </div>
            
            <div className="why-card">
              <div className="why-label">LIQUIDITY</div>
              <h3 className="why-title">Deep Liquidity</h3>
              <p className="why-description">Trade with minimal slippage on our order book system. Market makers provide consistent liquidity across all major events.</p>
              <button className="btn-outline" onClick={() => openModal('Deep Liquidity', '$2.5B+ in total trading volume ensures tight spreads.')}>Check Volume →</button>
            </div>
            
            <div className="why-card">
              <div className="why-label">DATA</div>
              <h3 className="why-title">Real-Time Analytics</h3>
              <p className="why-description">Advanced charting, historical data, and probability tracking. Make informed decisions with comprehensive market intelligence.</p>
              <button className="btn-outline" onClick={() => openModal('Real-Time Analytics', 'Access advanced charting and market data.')}>Explore Data →</button>
            </div>
            
            <div className="why-card">
              <div className="why-label">SECURE</div>
              <h3 className="why-title">CFTC Regulated</h3>
              <p className="why-description">Fully compliant with US regulations. Your funds held in segregated accounts with bank-grade security protocols.</p>
              <button className="btn-outline" onClick={() => openModal('CFTC Regulated', 'Fully licensed and regulated by the CFTC.')}>Learn More →</button>
            </div>
            
            <div className="why-card">
              <div className="why-label">API</div>
              <h3 className="why-title">Trading API</h3>
              <p className="why-description">Build automated trading strategies with our REST and WebSocket APIs. Full market data for algorithmic traders.</p>
              <button className="btn-outline" onClick={() => openModal('Trading API', 'Full API access for algorithmic trading.')}>View API Docs →</button>
            </div>
            
            <div className="why-card">
              <div className="why-label">MOBILE</div>
              <h3 className="why-title">Cross-Platform</h3>
              <p className="why-description">Trade seamlessly across web, iOS, and Android. Real-time notifications keep you updated on market movements.</p>
              <button className="btn-outline" onClick={() => openModal('Cross-Platform', 'Trade on any device, anytime.')}>Download App →</button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works" id="how-it-works">
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">Start trading in minutes</p>
          
          <div className="steps">
            <div className="step">
              <div className="step-circle">1</div>
              <h3 className="step-title">Create Account</h3>
              <p className="step-description">Sign up with email or wallet. Verify your identity in minutes.</p>
            </div>
            <div className="step-arrow">→</div>
            <div className="step">
              <div className="step-circle">2</div>
              <h3 className="step-title">Fund Your Account</h3>
              <p className="step-description">Deposit via bank transfer, card, or crypto. Start with as little as $10.</p>
            </div>
            <div className="step-arrow">→</div>
            <div className="step">
              <div className="step-circle">3</div>
              <h3 className="step-title">Start Trading</h3>
              <p className="step-description">Browse markets, analyze odds, and place your trades. Cash out anytime.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing" id="pricing">
        <div className="container">
          <h2 className="section-title">Choose Your Plan</h2>
          <p className="section-subtitle">Start free, upgrade when you're ready</p>
          
          <div className="pricing-grid">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
                {plan.popular && <div className="popular-badge">MOST POPULAR</div>}
                <h3 className="pricing-name">{plan.name}</h3>
                <div className="pricing-price">
                  <span className="price">{plan.price}</span>
                  <span className="period">{plan.period}</span>
                </div>
                <ul className="pricing-features">
                  {plan.features.map((feature, i) => (
                    <li key={i}>✓ {feature}</li>
                  ))}
                </ul>
                <button 
                  className={`btn-pricing ${plan.popular ? 'btn-primary' : 'btn-secondary'}`}
                  onClick={() => openModal(
                    `${plan.name} Plan`,
                    <div>
                      <p><strong>{plan.name} Plan - {plan.price} {plan.period}</strong></p>
                      <ul style={{textAlign: 'left', marginTop: '1rem'}}>
                        {plan.features.map((feature, i) => (
                          <li key={i}>{feature}</li>
                        ))}
                      </ul>
                      {plan.name === 'Standard' && (
                        <p style={{marginTop: '1.5rem', color: '#00ff88'}}>
                          <strong>Free forever. No credit card required.</strong>
                        </p>
                      )}
                      {plan.name === 'Pro' && (
                        <div style={{marginTop: '1.5rem'}}>
                          <p><strong>7-day free trial included</strong></p>
                          <p>Cancel anytime. Annual billing available ($490/year, save $100).</p>
                        </div>
                      )}
                      {plan.name === 'Enterprise' && (
                        <div style={{marginTop: '1.5rem'}}>
                          <p><strong>Contact us for custom pricing</strong></p>
                          <p>Email: enterprise@polysummit.com</p>
                          <p>Phone: 1-800-POLY-SUM</p>
                        </div>
                      )}
                    </div>
                  )}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq" id="faq">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">Everything you need to know</p>
          
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`faq-item ${activeFAQ === index ? 'active' : ''}`}
                onClick={() => setActiveFAQ(activeFAQ === index ? null : index)}
              >
                <div className="faq-question">
                  <span>{faq.question}</span>
                  <span className="faq-icon">{activeFAQ === index ? '−' : '+'}</span>
                </div>
                {activeFAQ === index && (
                  <div className="faq-answer">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter">
        <div className="container">
          <h2 className="section-title">Stay Ahead of the Market</h2>
          <p className="section-subtitle">Get weekly insights, new market alerts, and trading tips</p>
          
          <form className="newsletter-form" onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="newsletter-input"
              required
            />
            <button type="submit" className="btn-primary">
              {subscribed ? 'Subscribed! ✓' : 'Subscribe'}
            </button>
          </form>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container cta-content">
          <h2 className="cta-title">Ready to Start Trading?</h2>
          <p className="cta-subtitle">
            Join 150,000+ traders making profitable predictions on Poly Summit
          </p>
          <div className="cta-buttons">
            <button 
              className="btn-primary btn-large"
              onClick={() => openModal(
                'Create Free Account',
                <div>
                  <p><strong>Join Poly Summit Today</strong></p>
                  <ol style={{textAlign: 'left', marginTop: '1rem'}}>
                    <li>Sign up with email (30 seconds)</li>
                    <li>Receive $10 welcome bonus</li>
                    <li>Minimum deposit: $10</li>
                    <li>Payment methods: Credit card, debit card, bank transfer, crypto</li>
                    <li>Withdrawal time: 24-48 hours</li>
                    <li>Support: 24/7 live chat</li>
                  </ol>
                  <p style={{marginTop: '1.5rem', color: '#00ff88'}}>
                    <strong>Start trading in less than 2 minutes</strong>
                  </p>
                </div>
              )}
            >
              Create Free Account
            </button>
            <button 
              className="btn-secondary btn-large"
              onClick={() => openModal(
                'Download Mobile Apps',
                <div>
                  <p><strong>Trade anywhere with our mobile apps</strong></p>
                  <p style={{marginTop: '1rem'}}>
                    Available on iOS (App Store) and Android (Google Play)
                  </p>
                  <p style={{marginTop: '1rem'}}>
                    Features:
                  </p>
                  <ul style={{textAlign: 'left', marginTop: '0.5rem'}}>
                    <li>Real-time push notifications</li>
                    <li>Biometric authentication</li>
                    <li>Instant deposits & withdrawals</li>
                    <li>Full portfolio management</li>
                    <li>Price alerts & market updates</li>
                  </ul>
                </div>
              )}
            >
              Download App
            </button>
          </div>
          <div className="app-badges">
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="Download on App Store" className="app-badge" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" className="app-badge" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>Poly Summit</h4>
              <p>The world's leading prediction market platform. Trade on real-world events with confidence.</p>
              <div className="social-links">
                <a href="#twitter" onClick={() => openModal('Twitter', 'Follow us @PolySummit for market updates and insights')}>Twitter</a>
                <a href="#discord" onClick={() => openModal('Discord', 'Join our Discord community of 50K+ traders')}>Discord</a>
                <a href="#telegram" onClick={() => openModal('Telegram', 'Get instant alerts in our Telegram channel')}>Telegram</a>
              </div>
            </div>
            
            <div className="footer-section">
              <h4>Product</h4>
              <a href="#markets" onClick={() => scrollToSection('markets')}>Markets</a>
              <a href="#pricing" onClick={() => scrollToSection('pricing')}>Pricing</a>
              <a href="#api" onClick={() => openModal('API', 'Full REST and WebSocket API available for Pro and Enterprise users. Documentation at docs.polysummit.com')}>API</a>
              <a href="#mobile" onClick={() => openModal('Mobile Apps', 'Available on iOS and Android. Download from the App Store or Google Play.')}>Mobile Apps</a>
            </div>
            
            <div className="footer-section">
              <h4>Resources</h4>
              <a href="#help" onClick={() => openModal('Help Center', 'Visit help.polysummit.com for tutorials, guides, and troubleshooting')}>Help Center</a>
              <a href="#blog" onClick={() => openModal('Blog', 'Read market analysis, trading strategies, and platform updates at blog.polysummit.com')}>Blog</a>
              <a href="#research" onClick={() => openModal('Research', 'Access our research papers on prediction market accuracy and methodology')}>Research</a>
              <a href="#status" onClick={() => openModal('Status', 'Check system status and uptime at status.polysummit.com')}>Status</a>
            </div>
            
            <div className="footer-section">
              <h4>Company</h4>
              <a href="#about" onClick={() => openModal('About Us', 'Poly Summit is a CFTC-regulated prediction market founded in 2020. Our mission: democratize access to collective intelligence.')}>About</a>
              <a href="#careers" onClick={() => openModal('Careers', 'Join our team! We\'re hiring engineers, traders, and market operators. careers@polysummit.com')}>Careers</a>
              <a href="#press" onClick={() => openModal('Press', 'Media inquiries: press@polysummit.com')}>Press</a>
              <a href="#contact" onClick={() => openModal('Contact', 'Email: support@polysummit.com | Phone: 1-800-POLY-SUM | Live chat available 24/7')}>Contact</a>
            </div>
            
            <div className="footer-section">
              <h4>Legal</h4>
              <a href="#terms" onClick={() => openModal('Terms of Service', 'Read our full terms at polysummit.com/terms')}>Terms</a>
              <a href="#privacy" onClick={() => openModal('Privacy Policy', 'We protect your data. Read our privacy policy at polysummit.com/privacy')}>Privacy</a>
              <a href="#risk" onClick={() => openModal('Risk Disclosure', 'Trading involves risk. Only invest what you can afford to lose. Read full disclosure at polysummit.com/risk')}>Risk Disclosure</a>
              <a href="#regulation" onClick={() => openModal('Regulation', 'Poly Summit is regulated by the CFTC as a Designated Contract Market (DCM). License #123456.')}>Regulation</a>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>© 2024 Poly Summit. All rights reserved.</p>
            <p className="disclaimer">
              Trading on prediction markets involves risk. Past performance does not guarantee future results. 
              Only invest what you can afford to lose.
            </p>
          </div>
        </div>
      </footer>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>✕</button>
            <h3>{modalContent.title}</h3>
            <div>{modalContent.content}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;