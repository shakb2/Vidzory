#!/usr/bin/env bash
set -e

# Ensure directories
mkdir -p components
mkdir -p .github/workflows

cat > components/TopTabs.tsx <<'EOF'
import React from 'react';

const TopTabs: React.FC<{ activeTab?: string; onTabChange?: (t: string) => void }> = ({ activeTab = 'foryou', onTabChange }) => {
  return (
    <div className="h-12 w-full flex items-center justify-center gap-4 border-b border-white/10 bg-black sticky top-0 z-20">
      <button className={`px-4 py-2 ${activeTab === 'foryou' ? 'font-bold' : 'text-zinc-400'}`} onClick={() => onTabChange?.('foryou')}>For you</button>
      <button className={`px-4 py-2 ${activeTab === 'following' ? 'font-bold' : 'text-zinc-400'}`} onClick={() => onTabChange?.('following')}>Following</button>
      <button className={`px-4 py-2 ${activeTab === 'live' ? 'font-bold' : 'text-zinc-400'}`} onClick={() => onTabChange?.('live')}>Live</button>
    </div>
  );
};

export default TopTabs;
EOF

cat > components/AIStudio.tsx <<'EOF'
import React from 'react';

const AIStudio: React.FC<{
  onPost?: () => void;
  userAvatar?: string;
  username?: string;
  playlists?: { id: string; name: string }[];
  onCreatePlaylist?: () => { id: string; name: string };
}> = ({ onPost, userAvatar, username }) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-black text-white p-4">
      <div className="mb-4 text-xl font-bold">AI Studio (placeholder)</div>
      <img src={userAvatar} alt="avatar" className="w-16 h-16 rounded-full mb-2" />
      <div className="mb-4">@{username}</div>
      <button className="px-4 py-2 bg-blue-600 rounded" onClick={() => onPost?.()}>Post (mock)</button>
    </div>
  );
};

export default AIStudio;
EOF

cat > components/Discover.tsx <<'EOF'
import React from 'react';

const Discover: React.FC<{ onTagClick?: (tag: string) => void }> = ({ onTagClick }) => {
  const tags = ['music', 'dance', 'coding', 'ai', 'neon'];
  return (
    <div className="w-full h-full p-4 bg-black text-white overflow-auto">
      <h2 className="text-lg font-bold mb-4">Discover</h2>
      <div className="flex flex-wrap gap-3">
        {tags.map((t) => (
          <button key={t} className="px-3 py-2 bg-zinc-800 rounded" onClick={() => onTagClick?.(t)}>
            #{t}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Discover;
EOF

cat > components/EditProfileModal.tsx <<'EOF'
import React from 'react';

const EditProfileModal: React.FC<{ onClose?: () => void }> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60">
      <div className="bg-zinc-900 p-6 rounded w-80 text-white">
        <h3 className="font-bold mb-2">Edit Profile (placeholder)</h3>
        <p className="text-sm text-zinc-400 mb-4">Form goes here.</p>
        <div className="flex justify-end gap-2">
          <button className="px-3 py-1 bg-zinc-700 rounded" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default EditProfileModal;
EOF

cat > components/Dashboard.tsx <<'EOF'
import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <div className="w-full h-full p-4 bg-black text-white">
      <h2 className="text-xl font-bold mb-2">Dashboard (placeholder)</h2>
      <p className="text-sm text-zinc-400">Analytics and stats will appear here.</p>
    </div>
  );
};

export default Dashboard;
EOF

cat > components/SidebarMenu.tsx <<'EOF'
import React from 'react';

const SidebarMenu: React.FC<{ onClose?: () => void }> = ({ onClose }) => {
  return (
    <div className="w-64 p-4 bg-zinc-900 text-white h-full">
      <button className="mb-4 px-2 py-1 bg-zinc-800 rounded" onClick={onClose}>Close</button>
      <ul className="space-y-2 text-sm">
        <li>Profile</li>
        <li>Settings</li>
        <li>Monetization</li>
      </ul>
    </div>
  );
};

export default SidebarMenu;
EOF

cat > components/BalanceModal.tsx <<'EOF'
import React from 'react';

const BalanceModal: React.FC<{ onClose?: () => void }> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60">
      <div className="bg-zinc-900 p-6 rounded w-80 text-white">
        <h3 className="font-bold mb-2">Balance</h3>
        <p className="text-sm text-zinc-400">Stars and earnings summary.</p>
        <div className="flex justify-end mt-4">
          <button className="px-3 py-1 bg-zinc-700 rounded" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default BalanceModal;
EOF

cat > components/ActivityCentre.tsx <<'EOF'
import React from 'react';

const ActivityCentre: React.FC = () => {
  return (
    <div className="w-full h-full p-4 bg-black text-white">
      <h2 className="text-lg font-bold">Activity Centre</h2>
      <p className="text-sm text-zinc-400">Notifications and activity feed (placeholder)</p>
    </div>
  );
};

export default ActivityCentre;
EOF

cat > components/OfflineVideos.tsx <<'EOF'
import React from 'react';

const OfflineVideos: React.FC = () => {
  return (
    <div className="w-full h-full p-4 bg-black text-white">
      <h2 className="text-lg font-bold">Offline Videos</h2>
      <p className="text-sm text-zinc-400">Downloaded videos appear here.</p>
    </div>
  );
};

export default OfflineVideos;
EOF

cat > components/CareCodeModal.tsx <<'EOF'
import React from 'react';

const CareCodeModal: React.FC<{ onClose?: () => void }> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60">
      <div className="bg-zinc-900 p-6 rounded w-80 text-white">
        <h3 className="font-bold mb-2">Care Code</h3>
        <p className="text-sm text-zinc-400">Care code information (placeholder).</p>
        <div className="flex justify-end mt-4">
          <button className="px-3 py-1 bg-zinc-700 rounded" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default CareCodeModal;
EOF

cat > components/SettingsPrivacyModal.tsx <<'EOF'
import React from 'react';

const SettingsPrivacyModal: React.FC<{ onClose?: () => void }> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60">
      <div className="bg-zinc-900 p-6 rounded w-80 text-white">
        <h3 className="font-bold mb-2">Settings & Privacy</h3>
        <p className="text-sm text-zinc-400">Toggle settings here (placeholder).</p>
        <div className="flex justify-end mt-4">
          <button className="px-3 py-1 bg-zinc-700 rounded" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPrivacyModal;
EOF

cat > components/ChatInterface.tsx <<'EOF'
import React from 'react';

const ChatInterface: React.FC = () => {
  return (
    <div className="w-full h-full p-4 bg-black text-white">
      <h2 className="font-bold mb-2">Chat (placeholder)</h2>
      <p className="text-sm text-zinc-400">Direct messages or support chat UI.</p>
    </div>
  );
};

export default ChatInterface;
EOF

cat > components/CallOverlay.tsx <<'EOF'
import React from 'react';

const CallOverlay: React.FC<{ onClose?: () => void }> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70">
      <div className="bg-zinc-900 p-6 rounded w-80 text-white">
        <h3 className="font-bold mb-2">Call Overlay</h3>
        <p className="text-sm text-zinc-400">Active call UI placeholder.</p>
        <div className="flex justify-end mt-4">
          <button className="px-3 py-1 bg-red-600 rounded" onClick={onClose}>End</button>
        </div>
      </div>
    </div>
  );
};

export default CallOverlay;
EOF

cat > components/AdminPanel.tsx <<'EOF'
import React from 'react';

const AdminPanel: React.FC = () => {
  return (
    <div className="w-full h-full p-4 bg-black text-white">
      <h2 className="text-lg font-bold">Admin Panel (placeholder)</h2>
      <p className="text-sm text-zinc-400">User management and moderation tools.</p>
    </div>
  );
};

export default AdminPanel;
EOF

cat > components/FollowListModal.tsx <<'EOF'
import React from 'react';

const FollowListModal: React.FC<{ title?: string; onClose?: () => void }> = ({ title = 'Followers', onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60">
      <div className="bg-zinc-900 p-4 rounded w-80 text-white">
        <h3 className="font-bold mb-2">{title}</h3>
        <p className="text-sm text-zinc-400">List of followers/following (placeholder).</p>
        <div className="flex justify-end mt-4">
          <button className="px-3 py-1 bg-zinc-700 rounded" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default FollowListModal;
EOF

cat > .github/workflows/ci.yml <<'EOF'
name: CI

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4
      - name: Use Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 18
      - name: Install dependencies
        run: npm ci
      - name: Build
        env:
          CI: true
        run: npm run build
EOF

cat > .gitignore <<'EOF'
# Node
node_modules/
npm-debug.log*
yarn-error.log
pnpm-debug.log

# Build
dist/
build/
out/

# Env
.env
.env.local
.env.*.local

# Vite
.vite/
.vscode/

# System
.DS_Store
Thumbs.db

# Logs
logs/
*.log
EOF

cat > LICENSE <<'EOF'
MIT License

Copyright (c) 2025 shakb2

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
EOF

echo "All placeholder files and config created."
