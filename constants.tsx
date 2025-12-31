import { VideoData } from './types';

export const MOCK_VIDEOS: VideoData[] = [
  {
    id: '1',
    url: 'https://assets.mixkit.co/videos/preview/mixkit-girl-in-neon-light-398-large.mp4',
    author: 'neon_vibes',
    authorAvatar: 'https://picsum.photos/seed/1/100/100',
    description: 'Living in the future ✨ #neon #cyberpunk #vibes #vidzory',
    tags: ['neon', 'cyberpunk', 'vibes'],
    likes: 12400,
    comments: 450,
    shares: 1200,
    views: '1.2M',
    musicName: 'Midnight City - M83',
    isPrivate: false
  },
  {
    id: '2',
    url: 'https://assets.mixkit.co/videos/preview/mixkit-mysterious-pale-looking-fashion-model-with-neon-lights-34421-large.mp4',
    author: 'city_explorer',
    authorAvatar: 'https://picsum.photos/seed/2/100/100',
    description: 'City lights and late nights. 🏙️ #city #nightlife #vidzory',
    tags: ['city', 'nightlife'],
    likes: 8900,
    comments: 210,
    shares: 400,
    views: '85.4K',
    musicName: 'After Dark - Mr.Kitty',
    isPrivate: false
  },
  {
    id: '3',
    url: 'https://assets.mixkit.co/videos/preview/mixkit-winter-fashion-shoot-in-a-snowy-forest-34448-large.mp4',
    author: 'shakib_khan',
    authorAvatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200&h=200',
    description: 'Bugs are just features in progress. 💻 #coding #developer #vidzoryCEO',
    tags: ['coding', 'developer'],
    likes: 25600,
    comments: 1150,
    shares: 880,
    views: '2.5M',
    musicName: 'Lofi Girl - Study Session',
    isPrivate: false
  },
  {
    id: '4',
    url: 'https://assets.mixkit.co/videos/preview/mixkit-young-woman-with-neon-makeup-looking-at-the-camera-34431-large.mp4',
    author: 'ai_art_master',
    authorAvatar: 'https://picsum.photos/seed/4/100/100',
    description: 'Generated this look with Vidzory AI! 🎨 #ai #art #makeup',
    tags: ['ai', 'art', 'makeup'],
    likes: 45200,
    comments: 980,
    shares: 2100,
    views: '4.1M',
    musicName: 'Cyber Ambient - Vol 1',
    isPrivate: false
  },
  {
    id: '5',
    url: 'https://assets.mixkit.co/videos/preview/mixkit-man-dancing-under-changing-lights-1240-large.mp4',
    author: 'shakib_khan',
    authorAvatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200&h=200',
    description: 'My secret dance moves... keeping this private for now! 🤫',
    tags: ['dance', 'private'],
    likes: 120,
    comments: 5,
    shares: 0,
    views: '500',
    musicName: 'Secret Song',
    isPrivate: true 
  }
];
