'use client';
import { useState } from 'react';

export default function Home() {
  const [url, setUrl] = useState('');
  const [videoData, setVideoData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    if (!url) return;
    setLoading(true);
    const res = await fetch(`/api/fetch-video?url=${encodeURIComponent(url)}`);
    const data = await res.json();
    setVideoData(data);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white shadow-xl rounded-lg p-6">
        <h1 className="text-xl font-bold mb-4">TikTok Video Downloader</h1>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Paste TikTok video URL"
          className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
        />
        <button
          onClick={handleDownload}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          {loading ? 'Fetching...' : 'Download'}
        </button>

        {videoData && videoData.success && (
          <div className="mt-6">
            <video
              controls
              className="w-full rounded"
              src={videoData.data.play}
            ></video>
            <a
              href={videoData.data.play}
              download
              className="mt-4 inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Download Video (No Watermark)
            </a>
          </div>
        )}

        {videoData && !videoData.success && (
          <p className="text-red-500 mt-4">Failed to fetch video. Try again.</p>
        )}
      </div>
    </div>
  );
}
