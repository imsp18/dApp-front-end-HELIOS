import React,{useState} from 'react';
import "./dashboard.css";
import DappImage from "./image/Dappimage.png"
const DashBoard=()=>{
    const[show,setShow]=useState(false);
    function toggleShow() {
        setShow(!show);
    }
    return(
        <div className="dashboard">
            <link rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css"></link>
            <div className="sidebar close" style={{width: show ? '260px' : '78px',
          }}>
    <div className="logo-details">
      <i className='bx bx-menu' onClick={toggleShow}></i>
      <span className="logo_name">HELIOS</span>
    </div>
    <ul className="nav-links">
      <li>
        <a href="#">
          <i className='bx bx-grid-alt' ></i>
          <span className="link_name" style={{opacity: show ? '1' : '',
          }}>Dashboard</span>
        </a>
       
      </li>
      <li>
        <a href="#">
          <i className='bx bx-file-blank'></i>
          <span className="link_name" style={{opacity: show ? '1' : '',
          }}>Files</span>
        </a>
        
      </li>
      <li>
        <a href="#">
          <i className='bx bx-cog' ></i>
          <span className="link_name" style={{opacity: show ? '1' : '',
          }}>Settings</span>
        </a>
        
      </li>
      <li>
    <div className="profile-details" >
      <div className="profile-content">
      <i className='bx bx-log-out' ></i>
      <span className="link_name" style={{opacity: show ? '1' : '0'
          }}>Logout</span>
      </div>
      
    </div>
  </li>
</ul>
  </div>
  <section className="home-section">
    <div className="home-content">
      <span className="text" style={{marginLeft: show ? '190px' : '0px'}} >HELIOS</span>
      <div className="home-button"><button type="button">Connect to wallet</button></div>
    </div>
    <div className="about-helios">
      <img src={DappImage} alt="DappImg"/>
      <h2>What is HELIOS?</h2>
      <p>HELIOS stores data on decentralized networks to ensure security and prevent alteration by a single entity using IPFS in order to ensure that the data is secure and cannot be altered by a single entity.</p>
    </div>
    
  </section>
        </div>
    );
}

export default DashBoard;