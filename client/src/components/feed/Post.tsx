import Image from "next/image";
import Comments from "./Comments";

const Post = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* USER */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/29448941/pexels-photo-29448941/free-photo-of-misty-view-of-palace-of-culture-and-science-in-warsaw.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            width={40}
            height={40}
            className="w-10 h-10 rounded-full"
          />
          <span className="font-medium">Jack McBride</span>
        </div>
        <Image src="/more.png" alt="" width={16} height={16} />
      </div>
      {/* DESC */}
      <div className="flex flex-col gap-4">
        <div className="w-full min-h-96 relative">
          <Image
            src="https://images.pexels.com/photos/29469534/pexels-photo-29469534/free-photo-of-sulphur-crested-cockatoo-on-tree-stump.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
          cupiditate quia, sapiente vitae placeat perferendis eius, dicta qui
          dolore nemo ad cumque tempora autem, quae eos? Alias fugiat earum
          libero velit dolores dolore quam quibusdam, provident, expedita, eaque
          dolor rem excepturi fuga debitis corporis pariatur accusamus
          laudantium incidunt accusantium aspernatur.
        </p>
      </div>
      {/* INTERACTION */}
      <div className="flex items-center justify-between text-sm my-4">
        <div className="flex gap-8">
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <Image
              src="/like.png"
              alt=""
              width={16}
              height={16}
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              123<span className="hidden md:inline"> Likes</span>
            </span>
          </div>
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <Image
              src="/comment.png"
              alt=""
              width={16}
              height={16}
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              123<span className="hidden md:inline"> Comments</span>
            </span>
          </div>
        </div>
        <div className="">
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <Image
              src="/share.png"
              alt=""
              width={16}
              height={16}
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              123<span className="hidden md:inline"> Shares</span>
            </span>
          </div>
        </div>
      </div>
      <Comments />
    </div>
  );
};

export default Post;
