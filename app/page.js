'use client';
import { useState } from 'react';
import Link from 'next/link';

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
    <div className="min-h-screen bg-gray-100 flex flex-col justify-between ">
      {/* Main container */}
      <main className="flex flex-col items-center justify-center p-4 my-30">
        <div className="max-w-md w-full bg-white shadow-xl rounded-lg p-6">
          <h1 className="text-2xl font-bold mb-4 text-center text-blue-700">Zippy</h1>
          <p className="text-sm text-gray-600 mb-4 text-center">
            Paste any TikTok video URL below to download it without watermark. 100% free and fast.
          </p>

          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Paste TikTok video URL"
            className="w-full border border-gray-300 rounded px-3 py-2 mb-4 text-black"
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
            <p className="text-red-500 mt-4">Failed to fetch video. Please check the URL and try again.</p>
          )}
        </div>

        {/* AdSense-friendly section */}
        <div className="max-w-md text-sm text-gray-700 mt-6 text-center px-2">
          <h2 className="font-semibold mb-2">About This Tool</h2>
          <p>
            FIXORO's TikTok Downloader is a simple web tool that allows users to save their favorite videos for personal use. We do not host any content on our servers. All rights belong to their respective owners.
          </p>
          <p className="mt-2">
            This tool is provided for educational and personal purposes only. Please respect TikTok's terms of service.
          </p>
        </div>
      </main>

      {/* Footer with brand */}
      <footer className="bg-white shadow-inner text-center py-4 mt-6">
  <p className="text-sm text-gray-500">
    &copy; {new Date().getFullYear()} <strong className="text-blue-700">FIXORO</strong>. All rights reserved.
  </p>
  <div className="mt-2 flex justify-center gap-4 text-sm text-blue-600">
    <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
    <Link href="/terms" className="hover:underline">Terms</Link>
    <Link href="/contact" className="hover:underline">Contact</Link>
  </div>
</footer>
    </div>
  );
}
