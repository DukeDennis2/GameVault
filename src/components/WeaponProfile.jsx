import React, { useState, useEffect } from 'react';
import { ArrowLeft, Zap, Gavel, Crosshair, Target, Gauge, Star,ArrowBigUp } from 'lucide-react';
import scrollTop from './ScrollToTopButton';


const RatingStars = ({ value, max = 5, label, icon: Icon }) => {
  // Clamp value between 0 and max
  const clampedValue = Math.min(Math.max(0, value), max);
  const filledStars = clampedValue;
  const emptyStars = max - clampedValue;

  return (
    <div className="flex flex-col space-y-1">
      {/* Label and Icon */}
      <div className="flex items-center gap-2 text-sm font-semibold uppercase text-slate-300">
        <Icon className="h-4 w-4 text-yellow-400" />
        <span>{label}</span>
      </div>

      {/* Stars */}
      <div className="flex items-center gap-1">
        {/* Filled Stars */}
        {[...Array(filledStars)].map((_, i) => (
          <Star key={`filled-${i}`} className="h-5 w-5 fill-yellow-500 text-yellow-500" />
        ))}
        {/* Empty Stars */}
        {[...Array(emptyStars)].map((_, i) => (
          <Star key={`empty-${i}`} className="h-5 w-5 text-slate-500" />
        ))}
      </div>
    </div>
  );
};

// --- START: ScrollToTopButton Functionality ---

const ScrollTop = () => {
    // State to track whether the button should be visible
    const [isVisible, setIsVisible] = useState(false);

    // Function to scroll the window to the top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    // Effect to add and clean up the scroll listener
    useEffect(() => {
        const toggleVisibility = () => {
            // Show the button if the user has scrolled down past 400 pixels
            if (window.scrollY > 400) {
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

    // Tailwind CSS classes for positioning and styling the fixed button
    return (
        <div className="fixed bottom-6 right-6 z-50">
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="flex items-center justify-center h-12 w-12 bg-yellow-500 text-neutral-900 rounded-full shadow-lg hover:bg-yellow-400 transition-all duration-300"
                    title="Go to top"
                >
                    <ArrowBigUp className="h-6 w-6" /> {/* Using a different icon for 'Up' */}
                </button>
            )}
        </div>
    );
};
// --- END: ScrollToTopButton Functionality ---

// Using ArrowUp icon from lucide-react (need to import it)

const WeaponProfile = ({ item, onBack }) => {
  // Ensure we have a default structure for ratings to prevent errors
  const ratings = item.ratings || {
    damage: 0,
    accuracy: 0,
    range: 0,
    fireRate: 0,
    mobility: 0,
  };
  
  
  return (
    // Outer background set to a very dark grey/black
    <div className="min-h-screen bg-black-500/50 text-white p-8">
      <div className="container mx-auto max-w-5xl">
        {/* Back Button - Adjusted bg colors for dark theme */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 mb-8 px-4 py-2 bg-neutral-800/80 rounded-full hover:bg-neutral-700/90 transition-colors shadow-lg"
        >
          <ArrowLeft className="h-5 w-5" />
          <span className="font-semibold tracking-wider">EXIT DATABASE</span>
        </button>

        
        
          <div className="bg-neutral-800/90 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border border-neutral-700/50">
            {/* Your WeaponProfile content goes here */}
          </div>          
          {/* Main Card */}
          <div className="bg-neutral-800/90 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border border-neutral-700/50">
          {/* Header Section (Red Accent) - Adjusted bg color to match card theme */}
          <div className="bg-neutral-700 p-4">
            <h2 className="text-xl font-bold uppercase tracking-widest">
              {/* Using item.type for "type of gun" */}
              {item.type || 'Weapon Class'}
            </h2>
          </div>

          <div className="p-8 flex flex-col lg:flex-row gap-8">
            
            {/* Left Side: Image and Name */}
            <div className="flex flex-col items-center lg:items-start lg:w-1/2 space-y-6">
              
              {/* Weapon Name */}
              <h1 className="text-6xl font-extrabold text-center lg:text-left tracking-tight">
                {item.name || 'Weapon Name'}
              </h1>

              {/* Weapon Image - Adjusted bg color to match card theme */}
              <div className="w-full bg-neutral-700/50 p-1 ">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full object-contain max-h-72" // Keeps image responsive
                />
              </div>
              
              {/* Ammunition / Caliber (Text only - NO ICON) */}
              <p className="text-sm text-slate-400">
                <span className="font-semibold text-white">Shoots:</span> {item.ammo || 'Unknown Caliber'}
              </p>
            </div>
            
            {/* Right Side: Description and Stats */}
            <div className="lg:w-1/2 space-y-8">
              
              {/* Brief Explanation */}
              <div className="space-y-3 border-l-4 border-neutral-600 pl-4">
                <h2 className="text-2xl font-bold text-neutral-400">Explanation</h2>
                {/* Using item.description for "brief explanation" */}
                <p className="text-slate-300 leading-relaxed">
                  {item.description || 'A brief explanation of the weapon and its role in combat.'}
                </p>
              </div>

              {/* Star Ratings Section */}
              <div className="space-y-4 pt-4 border-t border-neutral-700">
                <h2 className="text-2xl font-bold text-neutral-400">Performance Ratings</h2>
                
                <div className="grid grid-cols-2 gap-y-6 gap-x-4">
                  
                  {/* Damage */}
                  <RatingStars value={ratings.damage} label="Damage" icon={Gavel} />
                  
                  {/* Accuracy */}
                  <RatingStars value={ratings.accuracy} label="Accuracy" icon={Crosshair} />
                  
                  {/* Range */}
                  <RatingStars value={ratings.range} label="Range" icon={Target} />
                  
                  {/* Fire Rate */}
                  <RatingStars value={ratings.fireRate} label="Fire Rate" icon={Gauge} />
                  
                  {/* Mobility */}
                  <RatingStars value={ratings.mobility} label="Mobility" icon={Zap} />

                  {/* Add an empty space for balance */}
                  <div></div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    
      {/* Scroll to Top Button */}  
      


    </div>
  );
};

export default WeaponProfile;