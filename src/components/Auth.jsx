import { useState } from "react";
import '../styles/Auth.css';

export default function Auth() {
  const [uname, setUname] = useState('username');
  const [pword, setPword] = useState('password');
  const [pending, setPending] = useState(false);
  const [serverMessage, setServerMessage] = useState('');
  const [isLogin, setIsLogin] = useState(true); // Track whether to show login or signup

  async function handleSignup(e) {
    e.preventDefault();
    setPending(true);
    
    const formData = { username: uname, password: pword };
    console.log("Signup Attempt:", formData); // Log form data

    try {
      const response = await fetch('http://localhost:8080/chatv1/user/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      const responseData = await response.json();
      console.log("Signup Response:", responseData); // Log server response
      setServerMessage(responseData.success ? `Success: ${responseData.message}` : `Error: ${responseData.message}`);
    } catch (error) {
      console.error("Signup Error:", error); // Log any errors that occur
      setServerMessage(`Signup Failed: ${error.message}`);
    } finally {
      setPending(false);
    }
  }

  async function handleLogin(e) {
    e.preventDefault();
    setPending(true);
    
    const formData = { username: uname, password: pword };
    console.log("Login Attempt:", formData); // Log form data

    try {
      const response = await fetch('http://localhost:8080/chatv1/user/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      const responseData = await response.json();
      console.log("Login Response:", responseData); // Log server response
      setServerMessage(responseData.success ? `Success: ${responseData.message}` : `Error: ${responseData.message}`);
    } catch (error) {
      console.error("Login Error:", error); // Log any errors that occur
      setServerMessage(`Login Failed: ${error.message}`);
    } finally {
      setPending(false);
    }
  }

  return (
    <div className="container">
      {isLogin ? (
        <div>
          <h2>Login</h2>
          <form method="post" onSubmit={handleLogin}>
            <label>
              Username: 
              <input 
                type="text" 
                name="username" 
                value={uname} 
                onChange={e => setUname(e.target.value)} 
              />
            </label>
            <label htmlFor="password">Password:</label>
            <input 
              type="password" 
              name="password" 
              id="password" 
              value={pword} 
              onChange={e => setPword(e.target.value)} 
            />
            <button type="submit" disabled={pending}>
              {pending ? "Submitting..." : "Submit"}
            </button>
          </form>
          <div className="switch">
            <button onClick={() => setIsLogin(false)}>Don't have an account? Signup</button>
          </div>
        </div>
      ) : (
        <div>
          <h2>Signup</h2>
          <form method="post" onSubmit={handleSignup}>
            <label>
              Username: 
              <input 
                type="text" 
                name="username" 
                value={uname} 
                onChange={e => setUname(e.target.value)} 
              />
            </label>
            <label htmlFor="password">Password:</label>
            <input 
              type="password" 
              name="password" 
              id="password" 
              value={pword} 
              onChange={e => setPword(e.target.value)} 
            />
            <button type="submit" disabled={pending}>
              {pending ? "Submitting..." : "Submit"}
            </button>
          </form>
          <div className="switch">
            <button onClick={() => setIsLogin(true)}>Already have an account? Login</button>
          </div>
        </div>
      )}
      {serverMessage && <p className={serverMessage.startsWith('Success') ? 'success' : 'error'}>{serverMessage}</p>}
    </div>
  );
}
