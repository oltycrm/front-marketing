import * as React from "react";

// import PostCard from "@/components/postCards/postCard";
// import PostCardBig from "@/components/postCards/postCardBig";
import { Container } from "~/components.tsx/container";
import PostCard from "~/components.tsx/post_card";
import PostCardHero from "~/components.tsx/post_card_hero";

export default function Blog() {
  const postShit = {
    title: "Some title shit",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it",
    slug: "/blog/url_shit",
  };

  const posts = [postShit, postShit];
  return (
    <div className="StripeWrapper relative">
      <Container className="">
        {/* <Seo /> */}
        <div className="relative h-full">
          {/* <BgGlassmorphism /> */}
          <section className="pt-32 pb-48">
            <PostCardHero post={postShit} />
          </section>
          {posts.map((post) => (
            <PostCard post={post} />
          ))}
        </div>
      </Container>
      {/* <StripeBG /> */}
    </div>
  );
}

// export const getStaticProps: GetStaticProps = async () => {
//   const query = "posts?populate[author][populate][0]=avatar";
//   const res = await fetch(`http://127.0.0.1:1337/api/${query}`);
//   const data = await res.json();
//   console.log(data.data);
//   const [, ...posts] = data.data;
//   return {
//     // because this data is slightly more dynamic, update it every hour
//     revalidate: 60 * 60,
//     props: {
//       // @ts-ignore
//       pinnedPost: data.data[0],
//       posts: posts,
//       meta: data.meta,
//     },
//   };
// };
