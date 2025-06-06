import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { YOUTUBE_VIDEOS_API, YOUTUBE_SEARCH_RESULTS_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const location = useLocation();

  // Extract ?search_query= from the URL
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("search_query");

  useEffect(() => {
    if (searchQuery) {
      searchVideos(searchQuery);
    } else {
      getTrendingVideos();
    }
  }, [searchQuery]);

  const getTrendingVideos = async () => {
    try {
      const data = await fetch(YOUTUBE_VIDEOS_API);
      const json = await data.json();
      setVideos(json.items);
    } catch (err) {
      console.error("Failed to fetch trending videos:", err);
    }
  };

  const searchVideos = async (query) => {
    try {
      const response = await fetch(`${YOUTUBE_SEARCH_RESULTS_API}&q=${encodeURIComponent(query)}`);
      const json = await response.json();
      setVideos(json.items);
    } catch (err) {
      console.error("Failed to fetch search results:", err);
    }
  };

  return (
    <div className="flex flex-wrap">
      {videos.map((video) => {
        const videoId = video.id.videoId || video.id; // search results use `id.videoId`
        return (
          <Link key={videoId} to={`/watch?v=${videoId}`}>
            <VideoCard info={video} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
