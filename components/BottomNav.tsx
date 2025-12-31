import React from 'react';
import { AppView } from '../types';

const BottomNav: React.FC<{ currentView: AppView; setView: (v: AppView) => void }> = ({ currentView, setView }) => {
  return (
    <div className="h-14 w-full absolute bottom-0 left-0 bg-black/80 border-t border-white/10 flex items-center justify-around">
      <button onClick={() => setView(AppView.HOME)} className="text-xs">Home</button>
      <button onClick={() => setView(AppView.DISCOVER)} className="text-xs">Discover</button>
      <button onClick={() => setView(AppView.CREATE)} className="text-xs">Create</button>
      <button onClick={() => setView(AppView.INBOX)} className="text-xs">Inbox</button>
      <button onClick={() => setView(AppView.PROFILE)} className="text-xs">Profile</button>
    </div>
  );
};

export default BottomNav;
