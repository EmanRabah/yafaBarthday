import { useState, useEffect } from 'react';
import { RotateCcw, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

interface GreetingCardProps {
  onReopen: () => void;
}

function GreetingCard({ onReopen }: GreetingCardProps) {
  const [showMessage, setShowMessage] = useState(false);
  const [starsCollected, setStarsCollected] = useState(0);
  const [showSecret, setShowSecret] = useState(false);
  const [starPositions] = useState([
    { top: '15%', left: '10%' },
    { top: '20%', right: '15%' },
    { bottom: '25%', left: '12%' }
  ]);

  useEffect(() => {
    setTimeout(() => setShowMessage(true), 300);
  }, []);

  const handleStarClick = (index: number) => {
    const newCount = starsCollected + 1;
    setStarsCollected(newCount);

    confetti({
      particleCount: 15,
      spread: 60,
      origin: { x: 0.5, y: 0.5 },
      colors: ['#6EC1E4', '#FFD700', '#FFFFFF']
    });

    if (newCount === 3) {
      setTimeout(() => {
        setShowSecret(true);
        confetti({
          particleCount: 100,
          spread: 100,
          origin: { y: 0.6 },
          colors: ['#6EC1E4', '#FFD700', '#FF69B4']
        });
      }, 500);
    }
  };

  return (
    <div className="greeting-card-modal">
      <div className="greeting-card">
        <div className={`card-content ${showMessage ? 'show' : ''}`}>
          <div className="name-container">
            <div className="name-glow">
              <span className="name-text">Yafa</span>
            </div>
            <div className="heart-container">
              <span className="heart-pulse">&#x1F499;</span>
            </div>
          </div>

          <div className="message-container">
            <h2 className="message-title">Happy 14th Birthday!</h2>

            <div className="message-body">
              <p className="message-line">
                You are a beautiful soul — bright, kind, and full of dreams.
              </p>
              <p className="message-line">
                May your year be filled with adventures, laughter, and shining blue skies.
              </p>
              <p className="message-line">
                Keep believing in your magic, because the world needs your light.
              </p>
            </div>

            <div className="poetic-message">
              <p className="italic text-blue-100">
                The sky is painted in your favorite shades of blue today,
              </p>
              <p className="italic text-blue-100">
                Because it's your day — a day to dream, to laugh, to shine.
              </p>
            </div>
          </div>

          <div className="action-buttons">
            <button onClick={onReopen} className="btn-primary">
              <RotateCcw className="w-5 h-5" />
              Watch again
            </button>
          </div>
        </div>

        {!showSecret && starsCollected < 3 && (
          <div className="floating-stars">
            {starPositions.map((pos, index) => (
              index >= starsCollected && (
                <button
                  key={index}
                  onClick={() => handleStarClick(index)}
                  className="star-collectible"
                  style={pos}
                  aria-label={`Collect star ${index + 1}`}
                >
                  <Sparkles className="w-6 h-6 text-yellow-300" />
                </button>
              )
            ))}
          </div>
        )}

        {showSecret && (
          <div className="secret-message">
            <div className="secret-heart">&#x1F499;</div>
            <p className="secret-text">
              The world is brighter because of you, Yafa.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default GreetingCard;
