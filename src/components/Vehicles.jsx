import React from 'react';
import { ArrowLeft, Car, Fuel, Zap } from 'lucide-react';

const VehiclesProfile = ({ item, game, onBack }) => {
  // Use 'item.type' to split the nation from the vehicle type if it follows the (Type) (Nation) format.
  // Example: "Main Battle Tank (MBT) (United States)"
  const [vehicleType, nation] = item.type ? item.type.split(/ \(([^)]+)\)/).filter(Boolean) : ['', 'Unknown'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-black text-white p-8">
      <div className="container mx-auto">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 mb-8 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
          <Car className="h-5 w-5" />
          <span>Back to Grid</span>
        </button>

        {/* Profile Container */}
        <div className="flex flex-col lg:flex-row glass-effect rounded-2xl p-6 lg:p-12 gap-8">
          
          {/* Left Side: Text Content */}
          <div className="flex-1 space-y-6">
            
            {/* Header / Nation */}
            <div className="flex items-center gap-4 text-emerald-400">
              <Fuel className="h-8 w-8" />
              <p className="text-xl font-medium uppercase tracking-wide">
                Origin: {nation || 'Multiple Nations'}
              </p>
            </div>
            
            {/* Title */}
            <h1 className="text-5xl lg:text-6xl font-extrabold mb-4 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              {item.name}
            </h1>
            
            {/* Vehicle Type */}
            <p className="text-lg text-slate-300">
              <span className="font-bold text-white">Class:</span> {vehicleType || item.type}
            </p>
            
            {/* Description */}
            <div className="text-base leading-relaxed space-y-4">
              <p className="font-semibold text-slate-100">{item.description}</p>
              {item.fullDescription && (
                <p className="font-light text-slate-400">{item.fullDescription}</p>
              )}
            </div>
            
            {/* Specs/Armament Section */}
            <div className="space-y-3">
              <h2 className="text-2xl font-bold mt-8 border-b-2 border-slate-700 pb-2 flex items-center gap-2">
                <Zap className="h-5 w-5 text-yellow-400" />
                Operational Specs & Armament
              </h2>
              
              {/* SPECS/Armament Chips */}
              <div className="flex flex-wrap gap-3">
                {(item.specs || []).map((spec, specIndex) => (
                  <span
                    key={specIndex}
                    className={`px-4 py-1.5 bg-gradient-to-r ${game?.gradient || 'from-green-500 to-teal-600'} text-white text-sm font-medium rounded-lg shadow-xl hover:scale-[1.02] transition-transform`}
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right Side: Large Image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            {/* Added a subtle border for image contrast */}
            <img
              src={item.image}
              alt={item.name}
              className="w-full max-w-lg lg:w-4/5 h-auto object-cover rounded-xl shadow-2xl border-2 border-slate-700/50"
              style={{ aspectRatio: '16/9' }} // Ensure a consistent aspect ratio for vehicles
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehiclesProfile;