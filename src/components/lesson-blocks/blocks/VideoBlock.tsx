"use client";

import { useRef, useEffect } from "react";
import type { VideoBlock as VideoBlockType } from "@/types/lesson-blocks";

function isYouTubeUrl(url: string) {
  return url.includes("youtube.com") || url.includes("youtu.be");
}

function getYouTubeEmbedUrl(url: string) {
  const match = url.match(/(?:v=|youtu\.be\/)([\w-]+)/);
  return match ? `https://www.youtube.com/embed/${match[1]}` : url;
}

export default function VideoBlock({ block }: { block: VideoBlockType }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(() => {});
    }
  }, []);

  if (isYouTubeUrl(block.src)) {
    return (
      <div className="rounded-2xl overflow-hidden my-8 border border-gray-200 aspect-video">
        <iframe
          src={getYouTubeEmbedUrl(block.src)}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Video"
        />
      </div>
    );
  }

  return (
    <div className="rounded-2xl overflow-hidden my-8 border border-gray-200 bg-black">
      <video
        ref={videoRef}
        src={block.src}
        poster={block.poster}
        controls
        playsInline
        className="w-full h-auto"
      />
    </div>
  );
}
