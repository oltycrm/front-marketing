import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
// import invariant from "tiny-invariant";
// import { marked } from "marked";
// import type { Post } from "~/models/post.server";

import { Container } from "~/components/container";
import PostCard from "~/components/post_card";
import PostCardHero from "~/components/post_card_hero";

// import { useLoaderData } from "@remix-run/react";
// import { json } from "@remix-run/node";
import { GraphQLClient, gql } from "graphql-request";
import PostBody, { MarkdownRenderer } from "~/components/post_body";

// import { getPost } from "~/models/post.server";

const GetPostSlug = gql`
  query postQuery($slug: String!) {
    posts(filters: { slug: { eq: $slug } }) {
      data {
        id
        attributes {
          slug
          title
          excerpt
          publishedAt
          content
        }
      }
    }
  }
`;

export let loader = async ({ params }) => {
  const { slug } = params;

  const client = new GraphQLClient("http://127.0.0.1:1337/graphql");

  const {
    posts: { data },
  } = await client.request(GetPostSlug, {
    slug,
  });

  //   return json({ post });

  //   const post: Post = {
  //     attributes: {
  //       title: `Some Title ${slug}`,
  //       slug: "more",
  //       excerpt: "string",
  //     },
  //   };
  return json({ data });
};

type Post = {
  attributes: {
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    publishedAt: string;
  };
};

// type LoaderData = { post: Post; html: string };

// export const loader = async ({ params }) => {
//   invariant(params.slug, `params.slug is required`);

//   const post = await getPost(params.slug);
//   invariant(post, `Post not found: ${params.slug}`);

//   const html = marked(post.markdown);
//   return json<LoaderData>({ post, html });
// };

export default function PostSlug() {
  let post: Post = useLoaderData().data[0];

  console.log(post);

  //   const { post, html } = useLoaderData() as LoaderData;
  return (
    <article className="mx-auto max-w-6xl px-4 py-6 sm:py-8 lg:py-24 ">
      <div className="mx-auto mb-10 w-full text-left md:w-3/4 lg:w-3/5">
        <div className=" mb-6 ">
          <h1
            className="mb-3 text-4xl font-normal text-gray-900 md:text-5xl md:leading-tight"
            title="Rise of Tailwind - A Utility First CSS Framework"
          >
            {post.attributes.title}
          </h1>
          {/* <p className="text-xl text-gray-600">
            Written by{" "}
            <Link href={post.author.url}>
            <a className='text-blue-600 hover:text-blue-700'>
              {post.author.name}
            </a>
          </Link>
          </p> */}
          {/* <p className="text-xl text-gray-600">
            Published: {post.attributes.publishedAt}
          </p> */}
        </div>

        {/* <Image
        src='/images/kitten.jpg'
        height='500'
        width='900'
        className='object-cover w-full h-full bg-center rounded-xl'
      /> */}
      </div>

      <div className="markdown prose mx-auto w-full space-y-4 md:w-3/4 lg:w-3/5">
        <PostBody content={post.attributes.content} />
        {/* <MarkdownRenderer body={post.attributes.content} /> */}
      </div>
    </article>
  );
}
