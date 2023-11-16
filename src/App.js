import React from 'react';
import './App.css';
import FoundForm from './components/FoundForm';

function App() {
  return (
    <div style={{
      backgroundImage: `url("${process.env.PUBLIC_URL + '/assets/images/foundimg2.jpg' }")`, backgroundSize: 'cover' , height: '100%', style:'background: linear-gradient(rgba(219, 185, 163, 0.296), rgba(241, 152, 107, 0.603))'
    }}>
      <div class="form-container">
        <FoundForm />
      </div>
    </div>

  );
}

export default App;