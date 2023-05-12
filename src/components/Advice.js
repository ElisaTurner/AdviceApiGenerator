import React, { useState, useEffect } from 'react';

 
function Advice() {
    const [advice, setAdvice] = useState('');
    const [adviceNumber, setAdviceNumber] =  useState(Math.floor(Math.random() * 217) + 1);

    useEffect(() => {
        fetch("https://api.adviceslip.com/advice")
          .then((response) => response.json())
          .then((data) => setAdvice(data.slip.advice))
          .catch((error) => console.log(error));
      }, []);
    
      function handleClick() {
        const randomNumber = Math.floor(Math.random() * 217) + 1; // Generates a random advice number between 1 and 217
        setAdviceNumber(randomNumber);
        fetch(`https://api.adviceslip.com/advice/${randomNumber}`)
          .then((response) => response.json())
          .then((data) => setAdvice(data.slip.advice))
          .catch((error) => console.log(error));
      }
    
    return (
        <div class = "contents">
        {advice && (
          <div class = "adviceNumber"> 

            <h2 className="headingText">Advice #{adviceNumber}  </h2>
            
            <div class = 'adviceText'> 

            <p>"{advice}"</p>    </div>
          </div>
        )}
        <button  onClick={handleClick} class="myButton">Let's have another!</button>
        

        
      </div>
    );
  }
export default Advice;




