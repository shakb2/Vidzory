import React from 'react';
import { UserProfile } from '../types';

const exampleUser: UserProfile = {
  name: 'Shakib Khan',
  username: 'shakib_khan',
  bio: 'Vidzory CEO 👑',
  avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200&h=200',
  followers: 201000000,
  following: 12,
  likes: '950M',
  stars: 99999,
  earnings: 1000000,
  watchTime: 500000,
  dailyUsageSeconds: 3600,
  watchHistory: [],
  favoriteIds: [],
  followerList: [],
  followingList: [],
};

const AuthScreen: React.FC<{ onLogin: (u: UserProfile) => void; onGuestAccess: () => void }> = ({ onLogin, onGuestAccess }) => {
  return (
    <div className="w-full h-full flex items-center justify-center bg-black text-white">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Welcome to Vidzory</h1>
        <button className="px-4 py-2 bg-blue-600 rounded mr-2" onClick={() => onLogin(exampleUser)}>Login (mock)</button>
        <button className="px-4 py-2 bg-zinc-800 rounded" onClick={() => onGuestAccess()}>Continue as Guest</button>
      </div>
    </div>
  );
};

export default AuthScreen;
