import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Transfer from './pages/transfer';
import Account from './pages/AccountPage'

function Header() {
  const navigate = useNavigate();

  return (
    <header style={{
      display: 'flex',
      justifyContent: 'center',
      gap: '10px',
      padding: '10px 0',
      background: '#1d5a3c',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' 
    }}>
      <button 
        onClick={() => navigate('/')} 
        style={{
          padding: '10px 20px',
          background: '#2b7f54', 
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          transition: 'background 0.3s'
        }}
        onMouseEnter={(e) => e.target.style.background = '#3f9f73'} 
        onMouseLeave={(e) => e.target.style.background = '#2b7f54'}
      >
        Home
      </button>
      {/* <button 
        // onClick={() => navigate('/about')} 
        style={{
          // padding: '10px 20px',
          // background: '#2b7f54',
          // color: 'white',
          // border: 'none',
          // borderRadius: '5px',
          // cursor: 'pointer',
          // transition: 'background 0.3s'
        }}
        onMouseEnter={(e) => e.target.style.background = '#3f9f73'}
        onMouseLeave={(e) => e.target.style.background = '#2b7f54'}
      >
        About
      </button> */}
      <button 
        onClick={() => navigate('/transfer')} 
        style={{
          padding: '10px 20px',
          background: '#2b7f54',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          transition: 'background 0.3s'
        }}
        onMouseEnter={(e) => e.target.style.background = '#3f9f73'}
        onMouseLeave={(e) => e.target.style.background = '#2b7f54'}
      >
        Transfer
      </button>
      <button 
        onClick={() => navigate('/account')} 
        style={{
          padding: '10px 20px',
          background: '#2b7f54',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          transition: 'background 0.3s'
        }}
        onMouseEnter={(e) => e.target.style.background = '#3f9f73'}
        onMouseLeave={(e) => e.target.style.background = '#2b7f54'}
      >
        Account
      </button>
    </header>
  );
}


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/transfer" element={<Transfer />} />
          <Route path="/account" element={<Account/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
