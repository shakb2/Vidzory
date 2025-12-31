import React from 'react';
import { VideoData } from '../types';

interface Props {
  video: VideoData;
  isActive?: boolean;
  isFollowing?: boolean;
  isFavorited?: boolean;
  userStars?: number;
  onFollowToggle?: () => void;
  onFavoriteToggle?: () => void;
  onGiftStars?: () => boolean;
  onWatchTick?: () => void;
  onProfileClick?: () => void;
}

const VideoCard: React.FC<Props> = ({ video, onProfileClick }) => {
  return (
    <div className="snap-start w-full h-[100dvh] relative flex items-end bg-black">
      <video src={video.url} className="w-full h-full object-cover" playsInline loop muted />
      <div className="absolute left-4 bottom-6 z-20 text-sm">
        <div className="font-bold">@{video.author}</div>
        <div className="text-xs text-zinc-200 mt-1">{video.description}</div>
      </div>
      <div className="absolute right-4 bottom-14 z-20 flex flex-col items-center gap-4 text-white text-xs">
        <div>{video.likes}</div>
        <div>{video.comments}</div>
      </div>
    </div>
  );
};

export default VideoCard;
