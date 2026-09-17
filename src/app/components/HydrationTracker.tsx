import React, { useState, useEffect } from 'react';

export default function HydrationTracker() {
  // Load state values from localStorage or set defaults
  const [dosha, setDosha] = useState(() => localStorage.getItem('hyd_dosha') || 'Vata');
  const [season, setSeason] = useState(() => localStorage.getItem('hyd_season') || 'Winter');
  const [waterConsumed, setWaterConsumed] = useState(() => {
    const savedDate = localStorage.getItem('hyd_date');
    const today = new Date().toDateString();
    
    // Auto-reset if it's a new day
    if (savedDate !== today) {
      return 0;
    }
    return Number(localStorage.getItem('hyd_consumed')) || 0;
  });

  // Calculate dynamic target: Base (2000) + Dosha Modifier + Seasonal Shift
  let baseVolume = 2000;
  let doshaModifier = dosha === 'Pitta' ? 500 : dosha === 'Kapha' ? -200 : 200;
  let seasonalShift = season === 'Summer' ? 400 : season === 'Winter' ? -200 : 0;
  const dailyGoal = baseVolume + doshaModifier + seasonalShift;

  // Cache variables whenever they change
  useEffect(() => {
    localStorage.setItem('hyd_dosha', dosha);
    localStorage.setItem('hyd_season', season);
    localStorage.setItem('hyd_consumed', waterConsumed.toString());
    localStorage.setItem('hyd_date', new Date().toDateString());
  }, [dosha, season, waterConsumed]);

  // Dynamic Recipe mapping based on profile selector options
  const getRecommendation = () => {
    if (dosha === 'Pitta' && season === 'Summer') return "Recommended Today: Cooling Water infused with fresh Mint and Fennel.";
    if (dosha === 'Vata' && season === 'Winter') return "Recommended Today: Lukewarm Ginger and Cinnamon Water.";
    if (dosha === 'Kapha') return "Recommended Today: Warm Honey-Lemon Water (avoid ice cold).";
    return "Recommended Today: Room temperature water with a slice of fresh Lime.";
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '12px', maxWidth: '450px', margin: '20px auto', fontFamily: 'sans-serif', backgroundColor: '#f9f9f9' }}>
      <h2 style={{ display: 'flex', alignItems: 'center', gap: '8px', margin: '0 0 15px 0' }}>💧 Ayurvedic Hydration Tracker</h2>
      
      {/* Target Adjuster Selectors */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
        <label style={{ flex: 1 }}>
          Dosha:
          <select value={dosha} onChange={(e) => setDosha(e.target.value)} style={{ display: 'block', width: '100%', marginTop: '5px', padding: '6px' }}>
            <option value="Vata">Vata 🌀</option>
            <option value="Pitta">Pitta 🔥</option>
            <option value="Kapha">Kapha 🌊</option>
          </select>
        </label>
        
        <label style={{ flex: 1 }}>
          Season:
          <select value={season} onChange={(e) => setSeason(e.target.value)} style={{ display: 'block', width: '100%', marginTop: '5px', padding: '6px' }}>
            <option value="Summer">Summer ☀️</option>
            <option value="Winter">Winter ❄️</option>
            <option value="Monsoon">Monsoon 🌧️</option>
          </select>
        </label>
      </div>

      {/* Progress Metric Bars */}
      <div style={{ backgroundColor: '#fff', padding: '15px', borderRadius: '8px', border: '1px solid #eee', marginBottom: '15px' }}>
        <div><strong>Daily Goal:</strong> {dailyGoal} ml</div>
        <div style={{ margin: '8px 0' }}><strong>Progress:</strong> {waterConsumed} ml / {dailyGoal} ml</div>
        <div style={{ width: '100%', backgroundColor: '#e0e0e0', borderRadius: '6px', height: '12px', overflow: 'hidden' }}>
          <div style={{ width: `${Math.min((waterConsumed / dailyGoal) * 100, 100)}%`, backgroundColor: '#4caf50', height: '100%', transition: 'width 0.3s ease' }}></div>
        </div>
      </div>

      {/* Incremental Counters */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <button onClick={() => setWaterConsumed(prev => prev + 250)} style={{ flex: 1, padding: '10px', cursor: 'pointer', backgroundColor: '#2196f3', color: '#fff', border: 'none', borderRadius: '6px' }}>+ 250ml</button>
        <button onClick={() => setWaterConsumed(prev => prev + 500)} style={{ flex: 1, padding: '10px', cursor: 'pointer', backgroundColor: '#0b7dda', color: '#fff', border: 'none', borderRadius: '6px' }}>+ 500ml</button>
        <button onClick={() => setWaterConsumed(0)} style={{ flex: 1, padding: '10px', cursor: 'pointer', backgroundColor: '#e74c3c', color: '#fff', border: 'none', borderRadius: '6px' }}>Reset</button>
      </div>

      {/* Dynamic Recommendation Block Card */}
      <div style={{ backgroundColor: '#eef9ff', borderLeft: '4px solid #2196f3', padding: '12px', borderRadius: '0 8px 8px 0', fontSize: '14px', color: '#333' }}>
        💡 <strong>Ayurvedic Recommendation:</strong>
        <p style={{ margin: '5px 0 0 0', fontStyle: 'italic' }}>{getRecommendation()}</p>
      </div>
    </div>
  );
}
