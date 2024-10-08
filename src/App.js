import './App.css';
// App.js or your main component file
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Auth from './components/Auth'; // Adjust the path as necessary
import MessageScreen from './components/MessageScreen';
import AuthRequired from './components/AuthRequired';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route element={<AuthRequired/>}>
        <Route path="/messages" element={<MessageScreen />}></Route>
        </Route>
        
      </Routes>
    </Router>
    // </AuthProvider>

  );
}

export default App;

