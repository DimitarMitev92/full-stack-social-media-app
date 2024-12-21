import Birthdays from "./Birthdays";
import FriendRequests from "./FriendRequests";
import Ad from "../Ad";
import UserInfoCard from "./UserInfoCard";
import UserMediaCard from "./UserMediaCard";
import { User } from "@prisma/client";
import { Suspense } from "react";

const RightMenu = ({ user }: { user?: User }) => {
  return (
    <div className="flex flex-col gap-6">
      {user ? (
        <>
          <Suspense fallback={<div>Loading...</div>}>
            <UserInfoCard user={user} />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <UserMediaCard user={user} />
          </Suspense>
        </>
      ) : null}
      <FriendRequests />
      <Birthdays />
      <Ad size="md" />
    </div>
  );
};

export default RightMenu;
