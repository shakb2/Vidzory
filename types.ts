export interface WatermarkSettings {
  text: string;
  opacity: number;
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

export interface VideoData {
  id: string;
  url: string;
  author: string;
  authorAvatar: string;
  description: string;
  tags: string[];
  likes: number;
  comments: number;
  shares: number;
  views: string; // Added views count
  musicName: string;
  playlistId?: string;
  watermark?: WatermarkSettings;
  isPrivate?: boolean;
}

export interface Playlist {
  id: string;
  name: string;
}

export enum AppView {
  HOME = 'home',
  DISCOVER = 'discover',
  CREATE = 'create',
  INBOX = 'inbox',
  PROFILE = 'profile',
  DASHBOARD = 'dashboard',
  OFFLINE = 'offline'
}

export interface UserSummary {
  username: string;
  name: string;
  avatar: string;
  isFollowing: boolean;
}

export interface UserProfile {
  name: string;
  username: string;
  bio: string;
  email?: string; // Added for password management
  website?: string;
  avatar: string;
  followers: number;
  following: number;
  likes: string;
  stars: number;
  earnings: number;
  watchTime: number; // cumulative minutes
  dailyUsageSeconds: number; // actual app usage today in seconds
  watchHistory: VideoData[]; // List of recently viewed videos
  isMonetized?: boolean;
  favoriteIds: string[];
  followerList: UserSummary[];
  followingList: UserSummary[];
}

export interface AnalyticsData {
  reach: string;
  engagement: string;
  avgWatchTime: string;
  income: number;
}
