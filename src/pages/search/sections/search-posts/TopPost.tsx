import { FC } from "react";
import { useNavigate } from "react-router-dom";

interface TopPostProps {
  description: string;
  author: string;
  email: string;
  userAvatarUrl: string;
  backgroundImageUrl?: string; 
  postId: string; 
  userId: string; 
}

const TopPost: FC<TopPostProps> = ({
  description,
  author,
  email,
  userAvatarUrl,
  backgroundImageUrl,
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

  const finalBackgroundImage = backgroundImageUrl || userAvatarUrl || "https://via.placeholder.com/150";

  return (
    <div
      onClick={handleNavigatePost}
      className="top-post-card bg-primary-800 rounded-xl p-6 shadow-lg relative overflow-hidden col-span-1 row-span-2 cursor-pointer"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25 rounded-xl"
        style={{ backgroundImage: `url(${finalBackgroundImage})` }}
      ></div>

      <div className="relative flex flex-col items-center text-center h-full justify-center">
        <img
          src={userAvatarUrl}
          alt="User Avatar"
          className="w-12 h-12 rounded-full cursor-pointer"
          onClick={handleNavigateProfile} 
          onError={(e) => {
            (e.target as HTMLImageElement).src = "https://via.placeholder.com/150";
          }}
        />
        <h3 className="text-white font-extrabold text-lg">{author}</h3>
        <p className="text-primary-300 font-medium text-sm mb-4">{email}</p>
        <h4 className="text-white font-extrabold text-base uppercase tracking-wide mb-2">
          Top Post
        </h4>
        <p className="text-gray-300 font-bold text-sm leading-snug line-clamp-3">
          {description}
        </p>
      </div>
    </div>
  );
};

export default TopPost;
