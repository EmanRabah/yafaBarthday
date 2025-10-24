import { useState, useEffect } from 'react';
import { Sparkles, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';
import GiftBox from './components/GiftBox';
import GreetingCard from './components/GreetingCard';
import FloatingElements from './components/FloatingElements';

function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [showCard, setShowCard] = useState(false);

  const handleOpen = () => {
    setIsOpened(true);

    // Trigger blue confetti burst
    const duration = 3000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#6EC1E4', '#A7C7E7', '#D4F1F9', '#B8D8E8', '#87CEEB']
      });

      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#6EC1E4', '#A7C7E7', '#D4F1F9', '#B8D8E8', '#87CEEB']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };

    frame();

    // Show card after animation
    setTimeout(() => {
      setShowCard(true);
    }, 800);
  };

  const handleReopen = () => {
    setShowCard(false);
    setIsOpened(false);
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#A7C7E7] via-[#6EC1E4] to-[#D4F1F9]">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="clouds-container">
          <div className="cloud cloud-1"></div>
          <div className="cloud cloud-2"></div>
          <div className="cloud cloud-3"></div>
        </div>

        {/* Twinkling stars */}
        <div className="stars-container">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="star"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            >
              <Sparkles className="w-3 h-3 text-white/60" />
            </div>
          ))}
        </div>
      </div>

      {/* Floating elements */}
      <FloatingElements />

      {/* Main content */}
      <main className="relative z-10 min-h-screen flex items-center justify-center">
        {!showCard ? (
          <GiftBox isOpened={isOpened} onOpen={handleOpen} />
        ) : (
          <GreetingCard onReopen={handleReopen} />
        )}
      </main>
    </div>
  );
}

export default App;
