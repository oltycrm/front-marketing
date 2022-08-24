// import Image from "next/image";
// import NcImage from 'components/NcImage/NcImage';
// import PostCardMeta from 'components/PostCardMeta/PostCardMeta';
// import PostCardSaveAction from 'components/PostCardSaveAction/PostCardSaveAction';
// import { PostDataType } from 'data/types';
// import { Link } from 'react-router-dom';
// import PostCardLikeAndComment from 'components/PostCardLikeAndComment/PostCardLikeAndComment';
// import CategoryBadgeList from 'components/CategoryBadgeList/CategoryBadgeList';
// import PostTypeFeaturedIcon from 'components/PostTypeFeaturedIcon/PostTypeFeaturedIcon';
// import Link from "next/link";

import { Link } from "@remix-run/react";

// export type PostProps = {
//   post: {
//     id: number;
//     attributes: {
//       title: string;
//       excerpt: string;
//       content: string;
//       slug: string;
//       category: string;
//       author: {
//         data: {
//           id: number;
//           attributes: {
//             name: string;
//             telegram: string;
//             avatar: {
//               data: {
//                 attributes: {
//                   formats: {
//                     small: {
//                       url: string;
//                     };
//                   };
//                 };
//               };
//             };
//           };
//         };
//       };
//     };
//   };
// };

export default function PostCardHero({ post }: any) {
  return (
    <div>
      <Link to={`${post.slug}`}>
        <a className="bg-white  flex flex-col md:flex-row sm:items-center rounded-lg  p-3.5  max-w-5xl mx-auto bg-slate-40  ring-offset-4 hover:ring-2 ring-blue-500">
          <div className="flex-shrink-1 flex flex-col flex-grow my-4 sm:my-2 md:px-4 ">
            <div>
              <h3 className="font-medium text-xl  text-blue-600">Category</h3>
              <div className="mt-2">
                <h2 className="block font-medium text-neutral-900 dark:text-neutral-100 text-5xl">
                  {post.title}
                </h2>
                <div className="mb-6 mt-2 flex items-center">
                  <div className="flex-shrink-0">
                    <span>
                      <span className="sr-only">Some Shit</span>
                      <img
                        className="h-10 w-10 rounded-full"
                        src="https://www.scoro.com/wp-content/uploads/2020/09/Dashboard.png"
                        alt="image"
                      />
                    </span>
                  </div>
                  <div className="ml-3">
                    <p className="text-lg font-medium text-gray-900">
                      <span>More Shit</span>
                    </p>
                    {/* <div className='flex space-x-1 text-base text-gray-500'>
                    <time dateTime='2020-03-16'> Mar 16, 2020 </time>
                    <span aria-hidden='true'> &middot; </span>
                    <span> 6 min read </span>
                  </div> */}
                  </div>
                </div>

                <div className=" sm:block sm:mt-2">
                  <span className="text-neutral-500 dark:text-neutral-400 text-xl">
                    {post.content}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center flex-wrap justify-between mt-auto"></div>
          </div>

          <div className="flex-shrink-0 block md:w-72 m-0 p-0 md:ml-6 overflow-hidden md:h-72 lg:w-112 lg:h-112">
            <img
              src="https://www.scoro.com/wp-content/uploads/2020/09/Dashboard.png"
              className="rounded-md w-full  aspect-h-16 aspect-w-16"
              width={850}
              alt="image"
              height={850}
            />
          </div>
        </a>
      </Link>
    </div>
  );
}
