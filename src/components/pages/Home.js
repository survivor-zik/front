import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Home() {
  const [student, setStudent] = useState(null); // Initialize student state to null

  useEffect(() => {
    async function getsurvivor() {
      try {
        const res = await axios.get('/userdetails/survivor/');
        console.log(res.data);
        setStudent(res.data); 
      } catch (error) {
        console.error('Error fetching survivor data:',error);
        setStudent(null); // Set student data to null in case of an error
      }
    }

    getsurvivor(); 
  }, []); 

  return (
    <div>
      <h1>HomePage</h1>
      {student ? (
        <div>
          <h2>Welcome, {student.username}!</h2>
          <p>Status code: {student.status}</p>
        </div>
      ) : (
        <p>Error fetching survivor data</p>
      )}
    </div>
  );
}

export default Home;
