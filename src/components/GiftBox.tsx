import { Gift } from 'lucide-react';

interface GiftBoxProps {
  isOpened: boolean;
  onOpen: () => void;
}

function GiftBox({ isOpened, onOpen }: GiftBoxProps) {
  return (
    <div className="text-center">
      <button
        onClick={onOpen}
        disabled={isOpened}
        className={`gift-box-container ${isOpened ? 'opened' : ''}`}
        aria-label="Open the birthday card for Yafa"
      >
        <div className="gift-box">
          <div className="gift-lid">
            <div className="ribbon-horizontal"></div>
          </div>
          <div className="gift-body">
            <div className="ribbon-vertical"></div>
          </div>
          <div className="gift-glow"></div>
        </div>
      </button>

      {!isOpened && (
        <div className="mt-8 animate-pulse-gentle">
          <p className="text-white text-2xl font-medium tracking-wide drop-shadow-lg">
            Tap to open, Yafa
          </p>
          <div className="flex justify-center mt-2">
            <div className="text-4xl animate-heartbeat">&#x1F499;</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default GiftBox;
