import React from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
  const data = useLoaderData();

  if (!data) {
    return (
      <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
        No profile data available.
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-black p-4">
      <div className="bg-gray-900 border-4 border-blue-500 rounded-xl p-8 shadow-2xl animate-pulse-neon">
        <div className="flex flex-col items-center">
          <img
            src={data.avatar_url}
            alt="Git avatar"
            className="w-32 h-32 rounded-full border-4 border-blue-500 mb-4"
          />
          <h1 className="text-3xl font-bold text-blue-400 neon-text">
            {data.name || data.login}
          </h1>
          <p className="text-xl text-blue-300">@{data.login}</p>
          <p className="text-lg mt-2">ID: {data.id}</p>
          {data.bio && (
            <p className="text-sm text-gray-400 mt-2 text-center">{data.bio}</p>
          )}
        </div>
        <div className="mt-6 flex justify-around w-full text-blue-200">
          <div className="text-center">
            <p className="font-bold">{data.public_repos}</p>
            <p>Repos</p>
          </div>
          <div className="text-center">
            <p className="font-bold">{data.followers}</p>
            <p>Followers</p>
          </div>
          <div className="text-center">
            <p className="font-bold">{data.following}</p>
            <p>Following</p>
          </div>
        </div>
      </div>
      {/* Inline styles for neon effect */}
      <style jsx>{`
        .neon-text {
          text-shadow: 0 0 5px #00f, 0 0 10px #00f, 0 0 20px #00f, 0 0 40px #00f;
        }
        .animate-pulse-neon {
          animation: neonPulse 1.5s infinite alternate;
        }
        @keyframes neonPulse {
          from {
            box-shadow: 0 0 10px #00f, 0 0 20px #00f, 0 0 30px #00f;
          }
          to {
            box-shadow: 0 0 20px #00f, 0 0 40px #00f, 0 0 60px #00f;
          }
        }
      `}</style>
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/anantacoder');
  if (!response.ok) {
    throw new Response("Failed to fetch profile data", { status: response.status });
  }
  return response.json();
};
