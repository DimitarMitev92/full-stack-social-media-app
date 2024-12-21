"use client";

const UserInfoCardInteraction = ({
  userId,
  currentUserId,
  isUserBlocked,
  isFollowing,
  isFollowingSend,
}: {
  userId: string;
  currentUserId: string;
  isUserBlocked: boolean;
  isFollowing: boolean;
  isFollowingSend: boolean;
}) => {
  return (
    <>
      <form action="">
        <button className="w-full bg-blue-500 text-white text-sm rounded-md p-2">
          {isFollowing
            ? "Following"
            : isFollowingSend
            ? "Friend Request Sent"
            : "Follow"}
        </button>
      </form>
      <form action="" className="self-end">
        <span className="text-red-400 text-xs cursor-pointer">
          {isUserBlocked ? "Unblock user" : "Block user"}
        </span>
      </form>
    </>
  );
};

export default UserInfoCardInteraction;
