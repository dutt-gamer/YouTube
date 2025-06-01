import React from "react";

const commentsData = [
  {
    name: "Arijit Dutt",
    text: "Lorem Ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Arijit Dutt",
    text: "Lorem Ipsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "Arijit Dutt",
        text: "Lorem Ipsum dolor sit amet, consectetur adip",
        replies: [
          {
            name: "Arijit Dutt",
            text: "Lorem Ipsum dolor sit amet, consectetur adip",
            replies: [],
          },
          {
            name: "Arijit Dutt",
            text: "Lorem Ipsum dolor sit amet, consectetur adip",
            replies: [
              {
                name: "Arijit Dutt",
                text: "Lorem Ipsum dolor sit amet, consectetur adip",
                replies: [],
              },
            ],
          },
        ],
      },
      {
        name: "Arijit Dutt",
        text: "Lorem Ipsum dolor sit amet, consectetur adip",
        replies: [],
      },
    ],
  },
  {
    name: "Arijit Dutt",
    text: "Lorem Ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Arijit Dutt",
    text: "Lorem Ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="my-2 p-2 flex items-center bg-gray-100 shadow-sm rounded-md">
      <img
        className="w-10 h-10"
        alt="user"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div>
      <Comment key={index} data={comment} />
      <div className="pl-5 ml-5 border border-l-black">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-3 p-2">
      <h1 className="text-2xl font-bold">Comments</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
