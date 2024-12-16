import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
function App() {
  return (
    <div style={{backgroundColor:"",minHeight:'100vh',width:'100hw'}} className='mb-4'>
      <div className='container-fluid px-0'>
        <div style={{backgroundColor:'lightblue'}} className='header'>
          <div className='row'>
            <div className=' col-md-12 col-sm-6 mt-5 mb-4' style={{display:'flex',justifyContent:'space-between'}}>
            <div className='head' style={{display:"flex",flexDirection:"row",columnGap:'15px',fontSize:'10px'}}>  
              <h4>CyberSecOp</h4>
              <h5>SERVICES</h5>
              <h5>SECURITY PROGRAM</h5>
              <h5>CONSULTING BY INDUSTRY</h5>
              <h5>CHANNEL PARTNER</h5>
              <h5>CONTACT US</h5>
              <h5>COMPANY</h5>
            </div>
            <div>
              <button className='btn border-black btn-warning px-5 py-4 rounded-pill'>866-973-2677</button>
            </div>
            </div>
          </div>
        </div>
        <div className='content'>
          <div className='text-center mt-5'>
            <h2>SECURITY AUDIT CONSULTING SERVICE</h2>
          </div>
          <div style={{display:'flex',alignItems:'center',justifyContent:'center',marginTop:'20px',flexDirection:'column'}}>
            <h4 style={{width:'850px',lineHeight:'40px'}} className='text-center'> We have 40 years of auditing experience with ISO 2700, NIST, SEC, PCI DSS, GLBA, FERPA, HIPAA, etc. Our experienced security consultants provide Cybersecurity Audit, IT Audit, IT Security Audit, and Network Security</h4>
            <h4>Audit Services.</h4>
            <div className='mt-4'>
              <button style={{fontSize:'18px',fontWeight:'bold'}} className='btn px-5 py-3 btn-info rounded-pill'>SPEAK WITH AN EXPERT</button>
            </div>
          </div>
        </div>
        <div style={{marginTop:'250px'}}>
          <div className='text-center'>
            <h2 style={{color:'blue'}}>IT Security, Cybersecurity & Network Security Audit</h2>
          </div>
          <div style={{display:'flex',alignItems:'center',justifyContent:'center',marginTop:'20px',flexDirection:'column'}}>
            <h5 style={{width:'1200px',lineHeight:'30px'}}>Our security audit experts will perform a complete Cyber Security Audit, Compliance Audit, and Data Security Audit to uncover where weaknesses and security gaps exist throughout your organization and what issues drive non-compliance. Our GRC team will use the finding from the assessment to establish an effective security program.</h5>

            <h5 style={{width:'1200px',lineHeight:'30px',marginTop:'20px'}}>Our security audits can also play an important role in internal investigations when anomalies are discovered or wrongdoing is suspected. You can use our findings for any potential litigation/legal proceedings and strengthen your internal controls to mitigate future problems.</h5>

            <div>
              <button className='btn px-5 py-3 btn-warning rounded-pill'>REQUEST A CONSULTATION</button>
            </div>
          </div>
        </div>
        <div style={{marginLeft:'150px'}}>
          <div className='mt-5'>
              <h4 style={{color:'green'}}>Security Review & Gap Analysis (Security Audits)</h4>
              <h5 style={{lineHeight:'30px',marginTop:'20px'}}>The most important part of security assessments is the security review & gap analysis. It is the glue that ties the entire security risk assessment solution together.  As with security audits, there must be a process for assessing a company’s risk profile.  We review your key assets, current security strategy, controls, and IT infrastructure in a security review and prioritize your top vulnerabilities, risks, and recommended security control solutions. The resulting report is suitable for defining your future security strategy, defining budgets, and the order to implementing security risk mitigation solutions.</h5>
          </div>
          <div>
            <h3 className='blue'>Cyber Security Audits</h3>
            <div style={{lineHeight:'40px',marginTop:'20px'}}>
              <ul style={{fontSize:'18px',fontWeight:'bold'}}>
                <li>Cyber security audit, penetration testing</li>
                <li>Website security testing, web application security</li>
                <li>Mobile application <span style={{textDecoration:'underline',color:'blue'}}>security audit</span></li>
                <li><span style={{textDecoration:'underline',color:'blue'}}>Security Advisory</span></li>             
              </ul>
            </div>
          </div>
           <div>
            <h3 className='green'>IT audit & Network Security audit</h3>
            <div style={{lineHeight:'40px',marginTop:'20px'}}>
              <ul style={{fontSize:'18px',fontWeight:'bold'}}>
                <li><span style={{textDecoration:'underline',color:'blue'}}>IT audit and network security audit</span></li>
                <li>Protect systems and data</li>
                <li>Risk management program</li>
                <li><span style={{textDecoration:'underline',color:'blue'}}>Firewall Audit</span></li>             
              </ul>
            </div>
          </div>
          <div>
            <h3 className='green'>Compliance audits</h3>
            <div style={{lineHeight:'40px',marginTop:'20px'}}>
              <ul style={{fontSize:'18px',fontWeight:'bold'}}>
                <li>Meet regulatory requirements</li>
                <li>Risk assessments</li>
                <li>Social engineering</li>             
              </ul>
            </div>
          </div>
          <div>
            <h2>EXPLORE SECURITY SOLUTIONS AND SERVICES</h2>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
