import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Avatar, Typography } from "@mui/material";

interface PostCardProps {
  description: string;
  author: string;
  userAvatarUrl: string;
  postImageUrl?: string;
  postId: string;
  userId: string;
}

const PostCard: FC<PostCardProps> = ({
  description,
  author,
  userAvatarUrl,
  postImageUrl,
  postId,
  userId,
}) => {
  const navigate = useNavigate();

  const handleNavigatePost = () => {
    navigate(`/post?postId=${postId}`);
  };

  const handleNavigateProfile = (event: React.MouseEvent) => {
    event.stopPropagation();
    navigate(`/profile?user=${userId}`);
  };

  const backgroundImage =
    postImageUrl || userAvatarUrl || "https://via.placeholder.com/150";

  const truncatedDescription = description.split(" ")[0] + "...";

  return (
    <div
      onClick={handleNavigatePost}
      className="post-card bg-secondary-900 rounded-xl p-4 shadow-lg relative overflow-hidden w-full md:w-80/2 h-36 cursor-pointer"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20 rounded-xl"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>

      <div className="hidden md:flex items-start space-x-4 h-full">
        <Avatar
          src={userAvatarUrl}
          alt="User Avatar"
          className="w-10 h-10 cursor-pointer"
          onClick={handleNavigateProfile}
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              "https://via.placeholder.com/150";
          }}
        />

        <div className="flex flex-col space-y-1">
          <Typography className="text-white font-bold text-base leading-4 truncate">
            {author}
          </Typography>

          <Typography className="text-gray-300 font-bold text-sm leading-4 line-clamp-2">
            {description}
          </Typography>
        </div>
      </div>

      <div className="md:hidden flex flex-col items-center h-full justify-center">
        <Avatar
          src={userAvatarUrl}
          alt="User Avatar"
          className="w-12 h-12 cursor-pointer"
          onClick={handleNavigateProfile}
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              "https://via.placeholder.com/150";
          }}
        />

        <Typography className="mt-2 text-white font-bold text-sm text-center">
          {author}
        </Typography>

        <Typography className="mt-2 text-gray-300 font-bold text-sm text-center overflow-hidden text-ellipsis whitespace-nowrap">
          {truncatedDescription}
        </Typography>
      </div>
    </div>
  );
};

export default PostCard;
