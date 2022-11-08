import React, { useState, useEffect } from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import Login from './components/Login';
import { getAccessToken } from './api/SpotifyAPI';

function App() {
  const [accessToken, setAccessToken] = useState<string | null>();

  useEffect(() => {
    setAccessToken(getAccessToken());
  }, []);

  return (
    <>
      { accessToken ? <Layout /> : <Login /> }
    </>
  );
}

export default App;
