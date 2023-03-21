import React, {useState} from "react";
import { Parallax } from "react-parallax";
function Portfolio() {
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  //const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'userName') {
      setUserName(inputValue);
    } else {
      setPassword(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    // if (!validateEmail(email) || !userName) {
    //   setErrorMessage('Email or username is invalid');
    //   // We want to exit out of this code block if something is wrong so that the user can correct it
    //   return;
    //   // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    // }
    // if (!checkPassword(password)) {
    //   setErrorMessage(
    //     `Choose a more secure password for the account: ${userName}`
    //   );
    //   return;
    // }
    alert(`Hello ${userName}`);

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setUserName('');
    setPassword('');
    setEmail('');
  };

  return (
    <div>
      <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={"https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmVhdXRpZnVsJTIwbGFuZHNjYXBlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"}
        bgImageAlt="the dog"
        strength={-200}>
       <p>Hello {userName}</p>
      <form className="form">
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
        <input
          value={userName}
          name="userName"
          onChange={handleInputChange}
          type="text"
          placeholder="username"
        />
        <input
          value={password}
          name="password"
          onChange={handleInputChange}
          type="password"
          placeholder="Password"
        />
        <button type="button" onClick={handleFormSubmit}>Submit</button>
      </form>
  
        <div style={{ height: '600px' }} />
    </Parallax>
    </div>
  );
}

export default Portfolio;