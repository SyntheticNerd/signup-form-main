import React from "react";

export default function SignUpForm() {
  return (
    <form>
      <input type='text' name='fName' placeholder="First Name" required />
      <input type='text' name='lName' placeholder="Last Name" required />
      <input type='email' name='email' placeholder="Email" required />
      <input type='password' name='passWord' placeholder="Password" autocomplete="false" required />
      <input type='submit' name='submitBtn' value='Claim your free trial' disabled/>
      <p>By clicking the button, you are agreeing to our <b>Terms and Services</b></p>
    </form>
  );
}
