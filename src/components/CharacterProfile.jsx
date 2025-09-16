import React from 'react';
import { ArrowLeft, Home, User } from 'lucide-react';

// 'selectedCategory' is now received as a prop
const CharacterProfile = ({ item, game, onBack, selectedCategory }) => {
  const isCharacter = selectedCategory === 'characters';

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-black text-white p-8">
      <div className="container mx-auto">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 mb-8 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
          <Home className="h-5 w-5" />
          <span>Back to Grid</span>
        </button>


        {/* Profile Container */}
        <div className="flex flex-col lg:flex-row glass-effect rounded-2xl p-6 lg:p-12 gap-8">
          {/* Left Side: Text Content */}
          <div className="flex-1 space-y-6">
            <div className="flex items-center gap-4 text-blue-400">
              <User className="h-8 w-8" />
              <p className="text-xl font-medium uppercase tracking-wide">
                Database: {item.name} (Identity)
              </p>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              {item.name}
            </h1>
            
            <p className="text-lg text-slate-300">
              <span className="font-bold text-white">Role:</span> {item.role}
            </p>
            
            <div className="text-base leading-relaxed space-y-4">
              <p className="font-semibold text-slate-100">{item.description}</p>
              <p className="font-light text-slate-400">{item.fullDescription}</p>
            </div>
            
            
            <div className="space-y-3">
              <h2 className="text-2xl font-bold mt-8 border-b-2 border-slate-700 pb-2">
                Traits
              </h2>
              
              {/* TRAITS/Specs */}
              {/* This section now correctly uses the 'isCharacter' variable */}
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-slate-200 uppercase tracking-wide">
                  {isCharacter ? 'Key Abilities' : 'Specifications'}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {(item.traits || item.specs || []).map((spec, specIndex) => (
                    <span
                      key={specIndex}
                      className={`px-3 py-1 bg-gradient-to-r ${game?.gradient} text-white text-xs rounded-full shadow-md`}
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Side: Large Image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <img
              src={item.image}
              alt={item.name}
              className="w-full lg:w-8/10 object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterProfile;