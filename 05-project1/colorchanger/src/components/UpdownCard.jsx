import React, { useState } from "react";
import { ArrowUp, ArrowDown } from 'lucide-react';

const aspects = [
  { id: 1, title: "Readability", upVotes: 0, downVotes: 0 },
  { id: 2, title: "Performance", upVotes: 0, downVotes: 0 },
  { id: 3, title: "Security", upVotes: 0, downVotes: 0 },
  { id: 4, title: "Documentation", upVotes: 0, downVotes: 0 },
  { id: 5, title: "Testing", upVotes: 0, downVotes: 0 },
];

export default function UpdownCard() {
  const [data, setData] = useState(aspects);

  const handleVote = (id, type) => {
    const updatedData = data.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          upVotes: type === "up" ? item.upVotes + 1 : item.upVotes,
          downVotes: type === "down" ? item.downVotes + 1 : item.downVotes,
        };
      }
      return item;
    });
    setData(updatedData);
  };

  return (
    <div className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen">
      <div className="max-w-2xl mx-auto">
        {data.map((item, index) => (
          <div
            key={item.id}
            className="mb-6 p-6 backdrop-blur-md bg-white/30 rounded-xl shadow-lg border border-white/40 transition-all hover:shadow-xl"
          >
            <h1 className="text-xl font-medium text-gray-800 mb-4">
              {item.title}
            </h1>
            <div className="flex items-center space-x-6">
              <button
                onClick={() => handleVote(item.id, "up")}
                data-testid={`upvote-btn-${index}`}
                className="flex items-center space-x-1 cursor-pointer px-4 py-2 rounded-full bg-white/50 border border-white/60 text-emerald-600 hover:bg-emerald-50 transition-all"
              >
                <ArrowUp size={16} />
                <span>Upvote</span>
              </button>

              <button
                onClick={() => handleVote(item.id, "down")}
                data-testid={`downvote-btn-${index}`}
                className="flex items-center space-x-1 cursor-pointer px-4 py-2 rounded-full bg-white/50 border border-white/60 text-rose-600 hover:bg-rose-50 transition-all"
              >
                <ArrowDown size={16} />
                <span>Downvote</span>
              </button>

              <div className="flex items-center space-x-4 ml-2">
                <span className="flex items-center bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">
                  <ArrowUp size={14} className="mr-1" /> {item.upVotes}
                </span>

                <span className="flex items-center bg-rose-50 text-rose-700 px-3 py-1 rounded-full text-sm font-medium">
                  <ArrowDown size={14} className="mr-1" /> {item.downVotes}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
