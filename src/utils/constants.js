const GOOGLE_API_KEY = "AIzaSyD-Fb-Sj5Y1c_nuHNoKHxMoByRPw4BuT2o";

export const LIVE_CHAT_COUNT = 15;

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_SEARCH_RESULTS_API =
  "https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=20&key=" + GOOGLE_API_KEY;

