import { useState } from 'react'
import './App.css'

// Component for the Falling Hearts effect
const HeartRain = () => {
  const hearts = Array.from({ length: 30 }); 
  return (
    <div className="heart-rain-container">
      {hearts.map((_, i) => (
        <div 
          key={i} 
          className="heart" 
          style={{ 
            left: `${Math.random() * 100}vw`, 
            animationDuration: `${Math.random() * 2 + 3}s`, 
            animationDelay: `${Math.random() * 2}s`,
            fontSize: `${Math.random() * 20 + 20}px`
          }}
        >
          ❤️
        </div>
      ))}
    </div>
  );
};

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);

  const sadGifs = [
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbzYwYzg0dnlocDA3NWR5OWg2cHBhYTA2amZmb25pYTY0a2hnMjhmeCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/sas7MKMlWoxEkMvAfL/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbzYwYzg0dnlocDA3NWR5OWg2cHBhYTA2amZmb25pYTY0a2hnMjhmeCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/MTp7DtQJxkXKziaBEZ/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbzYwYzg0dnlocDA3NWR5OWg2cHBhYTA2amZmb25pYTY0a2hnMjhmeCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/rScYNt7cl8I4lKSQVW/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbzYwYzg0dnlocDA3NWR5OWg2cHBhYTA2amZmb25pYTY0a2hnMjhmeCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/bh7tDYWM860joCp6M5/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbzYwYzg0dnlocDA3NWR5OWg2cHBhYTA2amZmb25pYTY0a2hnMjhmeCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Jn6mSUY6zFjrg7zBdR/giphy.gif",
    "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExeGM4aDQ0b3U4ZW1sa21hZXB0cW0zeGE0YTNqczE2bzE1dW84ZjZldyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Jy8LT2ryo6rI6iDewc/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3am41aG9tenFieTFtcXhnMjl4c3VxZ29mem40djk2MTNnem51d2hleSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Hg0d4DorPEO24Dd5wQ/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3am41aG9tenFieTFtcXhnMjl4c3VxZ29mem40djk2MTNnem51d2hleSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Cb8wF3DA3jMd93AUhW/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3am41aG9tenFieTFtcXhnMjl4c3VxZ29mem40djk2MTNnem51d2hleSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/yzDNdo4s1oGw7jEu24/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3NTBpdHBuamRlcGM0cDJidWFpMjdxMGFoc2VlaXJ2azE3bmFxdG5qaCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/p9LZ5WL8OBsqpX72ek/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3NTBpdHBuamRlcGM0cDJidWFpMjdxMGFoc2VlaXJ2azE3bmFxdG5qaCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/50dsL7TuCbvAVoDoOy/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3am41aG9tenFieTFtcXhnMjl4c3VxZ29mem40djk2MTNnem51d2hleSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/anfGMYUSxYts3qTvFj/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3am41aG9tenFieTFtcXhnMjl4c3VxZ29mem40djk2MTNnem51d2hleSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/mciTLjSs7L9sdTDwk2/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3aGM3cTQzOGJpcW93aThvcTdmaHgzNnYyb29rbGk3Mm56dHdrYWRuMSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Pq2dBua4P8KaMRtkRj/giphy.gif",
  ];

  const successGif = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcmxtY2Zrc3ZzNzN4ZHFibzQydGgzdDBhcTVvMzBzdHdkMmppeXE5ZiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/nNfRs2Unc5VxI3VnQB/giphy.gif";

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No", "Are you sure?", "Really sure?", "Think again!", 
      "Last chance!", "Surely not?", "You might regret this!", 
      "Give it another thought!", "Are you absolutely sure?", 
      "This could be a mistake!", "Have a heart!", "Don't be so cold!", 
      "Change of heart?", "Wouldn't you reconsider?", 
      "Is that your final answer?", "You're breaking my heart ;("
    ];
    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="valentine-container">
      {yesPressed ? (
        <>
          <HeartRain />
          <img src={successGif} alt="Success" className="main-gif" />
          <div className="text-header">Hehehe, pta tha! ❤️</div>
          <p className="sub-text">I Love You So Much, Bbu! 😘🥰🤤</p>
        </>
      ) : (
        <>
          <img 
            className="main-gif" 
            src={noCount === 0 ? "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExc2w4dmEyb3VjbTZuMGJocWlqbGgwMGhmbGZtcWZjMGMzMmcxYnFtaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/sj93cJMsnoQJkqdgYD/giphy.gif" : sadGifs[Math.min(noCount - 1, sadGifs.length - 1)]} 
            alt="Asking gif" 
          />
          <h1 className="text-header">Will you be my Valentine Nandini? ❤️</h1>
          <div className="button-group">
            <button
              className="yes-button"
              style={{ fontSize: `${noCount * 20 + 16}px` }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button 
              onClick={handleNoClick} 
              className="no-button"
              style={noCount > 0 ? {
                position: 'fixed',
                top: `${Math.floor(Math.random() * 60) + 20}%`,
                left: `${Math.floor(Math.random() * 60) + 20}%`,
              } : {}}
            >
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;