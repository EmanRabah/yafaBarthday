function FloatingElements() {
  const balloons = [
    { delay: 0, left: '10%', duration: 8 },
    { delay: 2, left: '25%', duration: 10 },
    { delay: 1, left: '75%', duration: 9 },
    { delay: 3, left: '85%', duration: 11 },
    { delay: 1.5, left: '50%', duration: 7 }
  ];

  return (
    <div className="floating-elements">
      {balloons.map((balloon, index) => (
        <div
          key={index}
          className="balloon"
          style={{
            left: balloon.left,
            animationDelay: `${balloon.delay}s`,
            animationDuration: `${balloon.duration}s`
          }}
        >
          <div className="balloon-body"></div>
          <div className="balloon-string"></div>
        </div>
      ))}
    </div>
  );
}

export default FloatingElements;
