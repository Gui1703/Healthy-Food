import React from "react";

import "./styles.scss";

function Join() {
  return (
    <>
      <form className="container-join" id="join">
        <h1>Join our membership to get special offer</h1>
        <div className="div-input-button">
          <input type="email" placeholder="Enter your email address" />
          <button type="submit">Join</button>
        </div>
      </form>
      <footer>
        <p>© Copyrights 2019 Stack. All Rights Reserved</p>
        <div>
          <p>Privacy Policy</p>
          <p>Terms and Conditions</p>
        </div>
      </footer>
    </>
  );
}

export default Join;
