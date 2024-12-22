"use client";

import { acceptFollowRequest, declineFollowRequest } from "@/lib/actions";
import { FollowRequest, User } from "@prisma/client";
import Image from "next/image";
import { useOptimistic, useState } from "react";

type RequestWithUser = FollowRequest & {
  sender: User;
};

const FriendRequestList = async ({
  requests,
}: {
  requests: RequestWithUser[];
}): Promise<JSX.Element> => {
  const [requestState, setRequestState] = useState<RequestWithUser[]>(requests);

  const accept = async (requestId: number, userId: string) => {
    removeOptimisticRequest(requestId);
    try {
      await acceptFollowRequest(userId);
      setRequestState((prev) =>
        prev.filter((request) => request.id !== requestId)
      );
    } catch (error) {
      console.log(error);
      throw new Error("Something went wrong");
    }
  };

  const decline = async (requestId: number, userId: string) => {
    removeOptimisticRequest(requestId);
    try {
      await declineFollowRequest(userId);
      setRequestState((prev) =>
        prev.filter((request) => request.id !== requestId)
      );
    } catch (error) {
      console.log(error);
      throw new Error("Something went wrong");
    }
  };

  const [optimisticRequest, removeOptimisticRequest] = useOptimistic(
    requestState,
    (state, value: number) => state.filter((request) => request.id !== value)
  );

  return (
    <div className="">
      {optimisticRequest.map((request) => {
        return (
          <div className="flex items-center justify-between" key={request.id}>
            <div className="flex items-center gap-4">
              <Image
                src={request.sender.avatar || "/noAvatar.png"}
                alt=""
                width={40}
                height={40}
                className="w-10 h-10 rounded-full object-cover"
              />
              <span className="font-semibold">
                {request.sender.name && request.sender.surname
                  ? request.sender.name + " " + request.sender.surname
                  : request.sender.username}
              </span>
            </div>
            <div className="flex justify-end gap-3">
              <form action={() => accept(request.id, request.sender.id!)}>
                <button>
                  <Image
                    src="/accept.png"
                    alt=""
                    width={20}
                    height={20}
                    className="cursor-pointer"
                  />
                </button>
              </form>
              <form action={() => decline(request.id, request.sender.id!)}>
                <button>
                  <Image
                    src="/reject.png"
                    alt=""
                    width={20}
                    height={20}
                    className="cursor-pointer"
                  />
                </button>
              </form>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FriendRequestList;
