import React, { useState, useEffect } from 'react';
import { AppView, VideoData, UserProfile } from './types';
import { MOCK_VIDEOS } from './constants';
import BottomNav from './components/BottomNav';
import VideoCard from './components/VideoCard';
import TopTabs from './components/TopTabs';
import AIStudio from './components/AIStudio';
import Discover from './components/Discover';
import EditProfileModal from './components/EditProfileModal';
import Dashboard from './components/Dashboard';
import SidebarMenu from './components/SidebarMenu';
import BalanceModal from './components/BalanceModal';
import ActivityCentre from './components/ActivityCentre';
import OfflineVideos from './components/OfflineVideos';
import CareCodeModal from './components/CareCodeModal';
import SettingsPrivacyModal from './components/SettingsPrivacyModal';
import ChatInterface from './components/ChatInterface';
import CallOverlay from './components/CallOverlay';
import AuthScreen from './components/AuthScreen';
import AdminPanel from './components/AdminPanel';
import FollowListModal from './components/FollowListModal';

const App: React.FC = () => {
  // --- MOCK DATA ---
  const [currentUser, setCurrentUser] = useState<UserProfile>({
    name: 'Shakib Khan',
    username: 'shakib_khan',
    email: 'admin@vidzory.com',
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
  });

  const [currentView, setCurrentView] = useState<AppView>(AppView.HOME);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // Initialize Icons
  useEffect(() => {
    if ((window as any).lucide) (window as any).lucide.createIcons();
  }, [currentView, isAuthenticated, activeIndex]);

  if (!isAuthenticated) {
    return <AuthScreen onLogin={(u) => { setCurrentUser(u); setIsAuthenticated(true); }} onGuestAccess={() => setIsAuthenticated(true)} />;
  }

  // Handle Scroll for Snap Logic
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, clientHeight } = e.currentTarget;
    const newIndex = Math.round(scrollTop / clientHeight);
    if (newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  };

  return (
    <div className="w-full h-full bg-black relative font-sans text-white overflow-hidden">
      {/* Main Content Area */}
      {/* Logic: If Home, allow full height (bottom-0). If other page, subtract nav height (bottom-[60px]) */}
      <div className={`absolute inset-0 ${currentView === AppView.HOME ? 'bottom-0' : 'bottom-[60px]'}`}>
        
        {/* HOME VIEW: Full Screen Feed */}
        {currentView === AppView.HOME && (
          <>
            <TopTabs activeTab="foryou" onTabChange={() => {}} />
            <div className="video-scroll-container" onScroll={handleScroll}>
              {MOCK_VIDEOS.map((video, index) => (
                <VideoCard 
                  key={video.id}
                  video={video}
                  isActive={activeIndex === index}
                  isFollowing={false}
                  isFavorited={false}
                  userStars={currentUser.stars}
                  onFollowToggle={() => {}}
                  onFavoriteToggle={() => {}}
                  onGiftStars={() => true}
                  onWatchTick={() => {}}
                  onProfileClick={() => setCurrentView(AppView.PROFILE)}
                />
              ))}
            </div>
          </>
        )}

        {/* OTHER VIEWS */}
        {currentView === AppView.DISCOVER && <Discover onTagClick={() => setCurrentView(AppView.HOME)} />}
        
        {currentView === AppView.CREATE && (
           <AIStudio 
             onPost={() => setCurrentView(AppView.HOME)} 
             userAvatar={currentUser.avatar} 
             username={currentUser.username} 
             playlists={[]} 
             onCreatePlaylist={() => ({id:'1', name:'New'})} 
           />
        )}
        
        {currentView === AppView.INBOX && (
           <div className="flex flex-col items-center justify-center h-full text-zinc-500">
              <i data-lucide="message-square" className="w-16 h-16 mb-4 opacity-50" />
              <p className="font-bold">No new messages</p>
           </div>
        )}
        
        {currentView === AppView.PROFILE && (
           <div className="flex flex-col h-full overflow-y-auto pb-20 bg-black">
              <div className="h-14 flex justify-between items-center px-4 border-b border-white/10 sticky top-0 bg-black z-10">
                 <div />
                 <span className="font-bold">{currentUser.name}</span>
                 <i data-lucide="menu" className="w-6 h-6" />
              </div>
              <div className="flex flex-col items-center pt-8 px-4">
                 <div className="relative">
                   <img src={currentUser.avatar} className="w-24 h-24 rounded-full border-2 border-white mb-2 object-cover" />
                   <div className="absolute bottom-2 right-0 bg-blue-500 rounded-full p-1 border-2 border-black">
                      <i data-lucide="badge-check" className="w-4 h-4 text-white fill-current" />
                   </div>
                 </div>
                 <h2 className="text-xl font-black">@{currentUser.username}</h2>
                 <p className="text-sm text-zinc-400 mt-2 text-center">{currentUser.bio}</p>
                 
                 <div className="flex gap-8 mt-6 text-center w-full justify-center border-y border-white/5 py-4">
                    <div><span className="font-black block text-lg">{currentUser.following}</span><span className="text-xs text-zinc-500 uppercase tracking-wide font-bold">Following</span></div>
                    <div><span className="font-black block text-lg">201M</span><span className="text-xs text-zinc-500 uppercase tracking-wide font-bold">Followers</span></div>
                    <div><span className="font-black block text-lg">{currentUser.likes}</span><span className="text-xs text-zinc-500 uppercase tracking-wide font-bold">Likes</span></div>
                 </div>
                 
                 <div className="flex gap-2 mt-6 w-full max-w-sm">
                    <button className="flex-1 py-3 bg-zinc-800 rounded-lg font-bold text-sm">Edit Profile</button>
                    <button className="px-4 py-3 bg-zinc-800 rounded-lg"><i data-lucide="share" className="w-5 h-5" /></button>
                 </div>
              </div>

              {/* Video Grid Placeholder */}
              <div className="grid grid-cols-3 gap-0.5 mt-8 border-t border-white/10">
                 {MOCK_VIDEOS.map((v, i) => (
                    <div key={i} className="aspect-[3/4] bg-zinc-900 relative">
                       <video src={v.url} className="w-full h-full object-cover opacity-50" />
                       <div className="absolute bottom-1 left-1 flex items-center gap-1 text-white text-[10px] font-bold">
                          <i data-lucide="play" className="w-3 h-3" /> {v.views}
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        )}
      </div>

      {/* Navigation Bar */}
      <BottomNav currentView={currentView} setView={setCurrentView} />
    </div>
  );
};

export default App;
