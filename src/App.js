import React from 'react';
import logo from './Images/logo.svg';
import baby from './Images/img.png';
import men from './Images/men.jpg';
import run from './Images/running.png';
import price from './Images/pricing.png';
import customize from './Images/customize.png';
import rose from './Images/rose.jpg';
import value from './Images/value.png';
import pear from './Images/pearson.jpg';
import brew from './Images/brewdog.jpg';
import travix from './Images/Travix.jpg';
import bridge from './Images/bridgestone.jpg';
import face from './Images/fbicon.png';
import twitt from './Images/twitt.png';
import you from './Images/youtube.png';
import link from './Images/linked.png';
import glass from './Images/glassdoor.png';
import klarna from './Images/klarna.jpg';
import vice from './Images/vice.jpg';
import diech from './Images/diechman.jpg';
import water from './Images/waterstons.jpg';
import fiverr from './Images/fiverr.jpg';
import man from './Images/man.jpg';
import lady from './Images/lady.jpg';
import people from './Images/people.jpg';
import person from './Images/person.png'
import exa from './Images/exabytes.jpg';
import shoe from './Images/shoeller.jpg';
import multi from './Images/multichoice.jpg';
import blue from './Images/bluenile.jpg';
import train from './Images/trainline.jpg';
import engel from './Images/engel.jpg';
import itv from './Images/itv.jpg';
import deliver from './Images/Delivery.jpg';
import katz from './Images/katz.jpg';
import quote from './Images/quote.png';
import cquote from './Images/cquote.png';
import './App.css';
import { Button } from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return(
    <div className="Container">
    <div className="Header">
      <div className="HeaderWrapper">
        <div><img src={logo} className="Logo"/></div>
        <div className="Nav">
          
          <p>Products</p>
          <p>Plaform</p>
          <p>Company</p>
          <p>Resources</p>
          <p>Customers</p>
          <p>Support</p>

        </div>
      </div>
    </div>


    <div className="HeroHolder">
      <div className="HeroWrapper">
        <div className="Left">
       <h1 className="Heads">Delight made <br/>easy </h1>
       
        <p className="PMan">We make it fast and easy for your business to
          delight customers and employees
        </p>
        <div className="but">
        <button className='but1'>Free Trials</button>
        <button className='but2'>Contact Sales</button>
        </div>

        </div>
        <div>
          <img src={baby} className="Baby"/>
        </div>
      </div>
    </div>
    <div className='hero2'>
      <div className='hero2wrap'>
      <div className='left1'>
        <div><img src={men} alt="" className='men'/></div>
      </div>
      <div className='right2'>
        <h2 className='h-text'>Try the business software used by over <br/>
           50,000 companies across the globe to <br/>
           exceed customer and employee expectations.</h2>
             
             <Row className="">
            <Col>
            <Button id="btn-text1">Customer Service</Button>
            </Col>
            <Col>
            <Button id="btn-text2">IT Service Management</Button>
            </Col>
          </Row>
          <Row>
          <Col>
            <Button id="btn-text3">HR Management</Button>
            </Col>
            <Col>
            <Button id="btn-text4">Sales Automation</Button>
            </Col>
          </Row>
             
          <Row className="">
          <Col>
            <Button id="btn-text5">Marketing Automation</Button>
            </Col>
            <Col>
            <Button id="btn-text6">All Products and Trials</Button>
            </Col>
          </Row>
             
      </div>
      </div>
    </div>
    <div className="sec-3">
    <div className="hero-3">
    <div className="hero-3-text">
      <h2>Frictionless, simple, easy</h2>
      <p>Freshworks makes it fast and easy for businesses to delight their customers and employees. <br/>
We take a fresh approach to how businesses discover, engage with, and realize value from software throughout 
their journey.</p>
    </div>
    <div className="hero-content">
    <Row>
      <Col>
      <img src={run} alt="" className='run'/>
      <h3>Get up and running with no barriers</h3>
      <p>Try or purchase our software directly from our website,<br/>
         and onboard in a matter of days, not months.</p>
         <p className='textlink'>Start free trial</p>
      </Col>
      <Col>
      <img src={price} alt="" className='price'/>
      <h3>Choose your pricing plan</h3>
      <p>Our pricing plans are designed for modern business use <br/>
         cases and affordable for organizations of all sizes.</p>
         <p className='textlink'>See pricing</p>
      </Col>
    </Row>
    <Row>
      <Col>
      <img src={customize} alt="" className='custom'/>
      <h3>Build and customize as you go</h3>
      <p>Extend and tailor experiences to meet your unique <br/>
        business needs, with low-code development and over 1,100 <br/>
         custom apps made available on our marketplace.</p>
         <p className='textlink'>Visit marketplace</p>
      </Col>
      <Col>
      <img src={value} alt="" className='value'/>
      <h3>Create value, fast</h3>
      <p>Accelerate your team’s productivity and efficiency with <br/>
         modern automation and collaboration tools, to get tangible <br/>
          results in no time.</p>
         <p className='textlink'>Learn how</p>
      </Col>
    </Row>
    </div>
    </div>
    </div>
    <div className='sec-4'>
      <div className='hero-4'>
        <div className='hero4content'>
        <h2>Trusted by 50K+ customers big and small</h2>
        <p>We are a leading provider of modern SaaS solutions that solve multiple, complex business problems to 
          companies of all sizes. Businesses from <br/> more than 120 countries around the world use Freshworks’ products
           to delight their customers and employees every day. </p>
        </div>
        <div className='heroimg'>
        <Row>
          <Col><img src={pear} alt="" className='com-img'/></Col>
          <Col><img src={brew} alt="" className='com-img'/></Col>
          <Col><img src={bridge} alt="" className='com-img'/></Col>
          <Col><img src={travix} alt="" className='com-img'/></Col>
          <Col><img src={klarna} alt="" className='com-img'/></Col>
          <Col><img src={vice} alt="" className='com-img'/></Col>
        </Row>
        <Row>
          <Col><img src={diech} alt="" className='com-img'/></Col>
          <Col><img src={water} alt="" className='com-img' /></Col>
          <Col><img src={fiverr} alt="" className='com-img'/></Col>
          <Col><img src={exa} alt="" className='com-img'/></Col>
          <Col><img src={shoe} alt="" className='com-img'/></Col>
          <Col><img src={multi} alt=""className='com-img' /></Col>
        </Row>
        <Row>
          <Col><img src={blue} alt="" className='com-img' /></Col>
          <Col><img src={train} alt="" className='com-img' /></Col>
          <Col><img src={engel} alt="" className='com-img'/></Col>
          <Col><img src={itv} alt="" className='com-img' /></Col>
          <Col><img src={deliver} alt=""className='com-img' /></Col>
          <Col><img src={katz} alt="" className='com-img'/></Col>
        </Row>
        </div>
      </div>
  </div>
    <div className="sec-5">
      <div className='sec-5-img'>
    {/* <div><img src={quote} alt="" /> */}
    {/* <div><img src={water} alt="" className='wats' />  */}
      <h1 className='sec-5-texts'>  w@terstons </h1>
      {/* <div><img src={cquote} alt="" /> */}
      {/* </div> */}
      </div>
      {/* </div> */}
      {/* </div> */}
     
      <p className='sec-5-texta'>“The Freshworks team was a great asset during implementation and continue to be a key partner <br/>
       for Waterstons as we look to further mature and improve our services to customers, tailored to <br/>
       their specific needs.”</p>
       <h3 className='sec-5-text'>Alex Bookless, Head of Managed Services, Waterstons</h3>
    </div>
    <div className='sec-6'>
      <h2 className='sec6-text'>We aspire to be one of the most loved companies in the world</h2>
      <Row>
        <Col>
        <div><img src={man} alt="" className='sec-6-img'/></div>
        <h3>Culture</h3>
        <p>A culture that supports high- <br/>
        quality work, joy and pride in that <br/>
        work, speed to execution, and <br/>intense customer focus.</p>
        </Col>
        <Col>
        <div><img src={person} alt="" className='sec-6-img'/></div>
        <h3>Diversity</h3>
        <p>Full-spectrum diversity, equity, <br/>
        and inclusion are key priorities for <br/>
        us .</p>
        </Col>
        <Col>
        <div><img src={lady} alt="" className='sec-6-img'/></div>
        <h3>Experience</h3>
        <p>Focus on enhancing the team<br/>
        experience by strengthening our <br/>
        managers’ leadership capabilities.</p>
        </Col>
        <Col>
        <div><img src={people} alt="" className='sec-6-img'/></div>
        <h3>Team</h3>
        <p>4,000 employees and growing in<br/>
        offices across India, US, Europe,<br/>
        nd Australia.</p>
        </Col>
      </Row>
      <button className='btn3'>SEE LIFE AT FRESHWORKS</button>
    </div>
     <div className='sec-7'>
       <div className='sec-7-text'>
         <h2>Ready to get started?</h2>
         <p>Join our community of 50,000+ companies of all sizes who use Freshworks’ modern SaaS products to 
           make it fast and easy to <br/>delight their customers and employees.</p>
           <button className='btn4'>CONTACT SALES</button>
       </div>
     </div>
     <div className='footer1'>
      <div className='foot'>
      <Row className='foot-row'>
        <Col>
        <div><img src={logo} className="Logo"/>
        <p>Freshworks</p>
        </div>
        <p>
        Freshdesk <br/>
        Freshsales <br/>
        Freshmarketer <br/>
        Freshservice<br/>
        Freshteam
        </p>
        </Col>
        <Col>
        <h5>COMPANY</h5>
        <p>
          About <br/>
          Leadership <br/>
          Board of Directors <br/>
          Investors <br/>
          Customers <br/>
          Affiliates <br/>
          Partners <br/>
          Philanthropy <br/>
          Careers <br/>
          News room <br/>
          GDPR <br/>
          Tax FAQs <br/>
          Contact us <br/>
        </p>
        </Col>
        <Col>
        <h6 className='handle'>CONNECT WITH US</h6>
        <Row>
        <Col><div><img src={face} alt="" className='socialmedia'/></div></Col>
        <Col><div><img src={twitt} alt="" className='socialmedia'/></div></Col>
        <Col><div><img src={you} alt="" className='socialmedia'/></div></Col>
        </Row>
        <Row>
        <Col><div><img src={link} alt="" className='socialmedia'/></div></Col>
        <Col><div><img src={glass} alt="" className='socialmedia'/></div></Col>
        </Row>
        </Col>
      </Row>
      </div>
     </div>
     
     
     </div>
       
  )
}

export default App;
