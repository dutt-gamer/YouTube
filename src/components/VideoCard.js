import React from "react";

const VideoCard = ({ info }) => {
  // if (!info || !info.snippet || !info.statistics) {
  //   return null; // or return a loading/error placeholder
  // }
  const { snippet, statistics } = info;
  const { channelTitle, thumbnails, title, publishedAt } = snippet;

  const formattedDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(new Date(publishedAt));

  let viewCountText = "No views";

  if (statistics?.viewCount) {
    const count = statistics.viewCount;

    if (count >= 1000000) {
      viewCountText = (count / 1000000).toFixed(1) + "M views";
    } else if (count >= 1000) {
      viewCountText = (count / 1000).toFixed(1) + "K views";
    } else {
      viewCountText = count + " views";
    }
  }

  return (
    <div className="m-2 p-2 w-60 min-h-80 rounded-xl hover:bg-slate-200 transition-colors duration-300 ease-in-out">
      <img
        className="rounded-xl cursor-pointer"
        alt="thumbnail"
        src={thumbnails.medium.url}
      />
      <ul className="m-1 p-1 cursor-pointer">
        <li className="font-medium">{title}</li>
        <li className="text-sm text-slate-700 pt-1">{channelTitle}</li>
        <li className="text-sm text-slate-700">{viewCountText}</li>
        <li className="text-sm text-slate-700">{formattedDate}</li>
      </ul>
    </div>
  );
};

// export const RedBorderVideoCard = ({ info }) => {
//   return (
//     <div className="m-1 p-1 border border-red-900">
//       <VideoCard info={info} />
//     </div>
//   );
// };

export default VideoCard;
