// import { useState } from "react";
// import '../styles/LoginSignup.css'

// export default function Signup() {
//     const [uname, setUname] = useState('username');
//     const [pword, setPword] = useState('password');
//     const [pending, setPending] = useState(false); // Replacing useFormStatus
//     const [serverMessage, setServerMessage] = useState('');

//     async function handleSignup(e) {
//         e.preventDefault();

//         // Set pending to true when form submission starts
//         setPending(true);

//         const form = e.target;
//         const formData = new FormData(form);
//         const formJson = Object.fromEntries(formData.entries());
//         console.log(formJson);

//         try {
//             const response = await fetch('http://localhost:8080/chatv1/user/signup', {
//                 method: form.method,
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify(formJson)
//             });

//             console.log(response);
//             // Handle response as needed
//             const responseData = await response.json();
//             console.log(responseData);

//             if (responseData.success) {
//                 setServerMessage(`Success : ${responseData.message}`);
//             } else {
//                 setServerMessage(`Error : ${responseData.message}`);
//             }

//         } catch (error) {
//             console.error("Signup failed:", error);
//             setServerMessage(`Signup Failed : ${error.message}`);
//         } finally {
//             // Set pending to false after form submission is complete
//             setPending(false);
//         }
//     }

//     return (
//         <>
//             <div>
//                 <h2>Signup</h2>
//             </div>
//             <div className="container">
//                 <form method="post" onSubmit={handleSignup}>
//                     <label>
//                         Username: <input type="text" name="username" defaultValue="username" onChange={e => setUname(e.target.value)} />
//                     </label>

//                     <label htmlFor="password">Password: </label>
//                     <input type="password" name="password" id="password" defaultValue="password" onChange={e => setPword(e.target.value)} />

//                     <button type="submit" disabled={pending}>
//                         {pending ? "Submitting..." : "Submit"}
//                     </button>

//                 </form>
//                 <div className="switch">
//                 <button onClick={handleSwitchToLogin}>Already have an account? Login</button>
//                 </div>
//                 {/* {uname && <p>Your username is {uname}.</p>} */}
//                 {serverMessage && <p>{serverMessage}</p>}
//             </div>
//         </>
//     );
// }
