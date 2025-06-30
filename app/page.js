'use client';
import { useState } from 'react';

export default function Home() {
  const [url, setUrl] = useState('');
  const [videoData, setVideoData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleDownload = async () => {
    if (!url.trim()) return;

    setLoading(true);
    setError('');
    setVideoData(null);

    try {
      const res = await fetch('/fetch-video', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      });

      const data = await res.json();

      if (!res.ok || data.error || data.code !== 0) {
        throw new Error(data.error || 'Failed to fetch video. Try again.');
      }

      setVideoData(data.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white shadow-xl rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">TikTok Video Downloader</h1>

        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Paste TikTok video URL here"
          className="w-full border border-gray-300 rounded px-3 py-2 mb-4 focus:outline-none focus:ring focus:border-blue-500"
        />

        <button
          onClick={handleDownload}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200"
          disabled={loading}
        >
          {loading ? 'Fetching...' : 'Download'}
        </button>

        {error && (
          <p className="text-red-500 mt-4 text-center">{error}</p>
        )}

        {videoData && (
          <div className="mt-6 space-y-4">
            <video
              controls
              className="w-full rounded"
              src={videoData.play}
            ></video>
            <a
              href={videoData.play}
              download
              className="block text-center bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Download Video (No Watermark)
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
