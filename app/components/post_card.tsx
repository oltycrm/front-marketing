// import NcImage from 'components/NcImage/NcImage';
// import PostCardMeta from 'components/PostCardMeta/PostCardMeta';
// import PostCardSaveAction from 'components/PostCardSaveAction/PostCardSaveAction';
// import { PostDataType } from 'data/types';
// import { Link } from 'react-router-dom';
// import PostCardLikeAndComment from 'components/PostCardLikeAndComment/PostCardLikeAndComment';
// import CategoryBadgeList from 'components/CategoryBadgeList/CategoryBadgeList';
// import PostTypeFeaturedIcon from 'components/PostTypeFeaturedIcon/PostTypeFeaturedIcon';
import { Link } from "@remix-run/react";

// import type { PostProps } from "./post_card_hero";

// export interface PostProps {
//   post: {
//     id: number;
//     attributes: {
//       title: string;
//       content: string;
//       slug: string;
//     };
//   };
// }

export default function PostCard({ post }) {
  // const {
  //   title,
  //   href,
  //   readingTime,
  //   featuredImage,
  //   desc,
  //   categories,
  //   postType,
  // } = post;

  //   return <div>{post.title}</div>;

  return (
    <div>
      <Link to={post.slug}>
        <a className="flex flex-col-reverse sm:flex-row sm:items-center group max-w-4xl mx-auto my-16 p-4">
          <div className="flex flex-col flex-grow md:p-4">
            <div className="space-y-3.5 mb-4">
              {/* <CategoryBadgeList categories={categories} /> */}
              <div>
                <h2 className="block font-semibold text-neutral-900 dark:text-neutral-100 text-4xl">
                  {post.title}
                </h2>
                <div className=" sm:block sm:mt-2">
                  <span className="text-neutral-500 dark:text-neutral-400 text-xl line-clamp-1">
                    {post.excerpt}
                  </span>
                </div>
              </div>

              {/* <PostCardMeta meta={{ ...post }} /> */}
            </div>
            <div className="flex items-center flex-wrap justify-between mt-auto">
              {/* <PostCardLikeAndComment postData={post} /> */}
              {/* <PostCardSaveAction postData={post} readingTime={readingTime} /> */}
            </div>
          </div>
          {/* 
        <div className='hidden sm:block flex-shrink-0 sm:w-48 sm:h-48 md:w-64 sm:h-64 lg:w-80 lg:h-80 sm:ml-6 overflow-hidden mb-5 sm:mb-0'>
          <Image
            src='/images/shit.jpg'
            alt='Picture of the author'
            className='rounded-lg  w-full aspect-h-9 aspect-w-16'
            width={550}
            height={550}
          />
        </div> */}
        </a>
      </Link>
    </div>
  );
}
