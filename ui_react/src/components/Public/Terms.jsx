import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/core.css';

const TermsAndConditions = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="terms-container">
      <h2>Terms and Conditions</h2>
      <p>Welcome to Hash It Out!</p>
      <p>
        These terms and conditions outline the rules and regulations for the use of Hash It Out's Website, located at
        www.hashitout.com.
      </p>
      <p>
        By accessing this website we assume you accept these terms and conditions. Do not continue to use Hash It Out if
        you do not agree to take all of the terms and conditions stated on this page.
      </p>
      <p>
        The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all
        Agreements: "Client", "You" and "Your" refers to you, the person log on this website and compliant to the
        Company’s terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company.
      </p>
      

      <div className="checkbox-container">
        <input
          type="checkbox"
          id="agreeCheckbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="agreeCheckbox">I agree to the Terms and Conditions</label>
      </div>

      <Link to="/home" className={`button ${isChecked ? '' : 'disabled'}`}>
        OK
      </Link>
    </div>
  );
};

export default TermsAndConditions;
