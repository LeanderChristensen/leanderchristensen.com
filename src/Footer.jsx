import { useState } from 'react';

const Footer = () => {
  const [showEmail, setShowEmail] = useState(false);
  const email = 'email@leanderchristensen.com';

  const handleClick = () => {
    setShowEmail(true);
  };
  const handleClick2 = () => {
    navigator.clipboard.writeText(email);
    alert('Email copied to clipboard!');
  };

  return (
    <div id="footer">
      {showEmail ? (
        <p id="email" ><a onClick={handleClick2}>{email}</a></p>
      ) : (
        <p>
          © Leander -{' '}
          <a style={{"cursor": "pointer"}} onClick={handleClick}>
            Contact Me
          </a>
        </p>
      )}
    </div>
  );
};

export default Footer;
