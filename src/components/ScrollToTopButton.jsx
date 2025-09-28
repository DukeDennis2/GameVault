import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  // State to track whether the button should be visible
  const [isVisible, setIsVisible] = useState(false);

  // Function to scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // For smooth scrolling animation
    });
  };

  // Effect to add and clean up the scroll listener
  useEffect(() => {
    const toggleVisibility = () => {
      // Show the button if the user has scrolled down a certain amount (e.g., 300px)
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Use a fixed position for the button and a little 'back to top' arrow icon
  return (
    <div className="scroll-to-top">
      {isVisible && (
        <button 
          onClick={scrollToTop} 
          className="scroll-button" 
          title="Go to top"
        >
          &uarr; {/* Up arrow unicode character */}
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;