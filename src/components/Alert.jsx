/* eslint-disable no-unused-vars */


import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AlertComponent = () => {
  const [showAlert, setShowAlert] = useState(true);
  const navigate = useNavigate();

  const [urls, setUrls] = useState([]);
  const [loading, setLoading] = useState(true);

  const getUrlsFromApiAsync = () => {
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson)
        return responseJson;
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setLoading(true); // Set loading to true before fetching new data
      getUrlsFromApiAsync().then((urls) => {
        setUrls(urls);  // Update state with the new movies
        setLoading(false);   // Set loading to false after the data is fetched
      });
    }, 5000); // 5 seconds interval

    return () => clearInterval(intervalId);
  }, []); 

  const handleRedirect = (url) => {
    navigate(url);
  };

  return (
    <div>

      {showAlert && (
        <div style={alertStyles} role="alert">
            <h3>Message from telephony agent!</h3>
          <button onClick={() => handleRedirect('/account')}>Go to account</button>
          {/* <ul>
            {urls.map((urls, index) => (
                <li key={index}>{urls}</li>
            ))}
        </ul> */}
        </div>
      )}
    </div>
  );
};

// Basic styles for the alert box
const alertStyles = {
  padding: '20px',
  backgroundColor: '#00B6FF',
  color: 'white',
  borderRadius: '5px',
  marginTop: '10px',
  textAlign: 'center',
  width: '250px',
  margin: '0 auto',
};

export default AlertComponent;