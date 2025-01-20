"use client";

import React, { useEffect } from "react";

function VideoBackground({ videoId }) {
  useEffect(() => {
    // Load YouTube API
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // Initialize player when API is ready
    window.onYouTubeIframeAPIReady = () => {
      new window.YT.Player("youtube-player", {
        videoId,
        playerVars: {
          autoplay: 1,
          controls: 0,
          disablekb: 1,
          enablejsapi: 1,
          loop: 1,
          mute: 1,
          playlist: videoId, // Required for looping
          playsinline: 1,
        },
        events: {
          onReady: (event) => {
            event.target.playVideo();
          },
        },
      });
    };
  }, [videoId]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="relative w-full h-full">
        <div
          id="youtube-player"
          className="absolute w-[300%] h-[300%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-[100%] min-h-[100%]"
        />
        <div className="absolute inset-0 bg-primary-red/50" /> {/* Overlay */}
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center text-center text-white">
      <VideoBackground videoId="eEGeot1GHVU" />
      <div className="container relative px-4 py-20 mx-auto">
        <h1 className="mb-6 text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
          Build True Brotherhood.
        </h1>
        <p className="mb-12 text-xl italic sm:text-2xl md:text-3xl text-white/90">
          Discover your purpose and grow into the man God designed you to be.
        </p>
        <button className="inline-flex flex-col items-center gap-2 transition-transform group hover:-translate-y-1">
          <span className="text-lg font-medium">Take the Step</span>
          <span className="animate-bounce">↓</span>
        </button>
      </div>
    </section>
  );
}
