import { Container } from "~/components/container";
import PostCard from "~/components/post_card";
import PostCardHero from "~/components/post_card_hero";

import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
import { GraphQLClient, gql } from "graphql-request";

const GetPostsQuery = gql`
  {
    posts(sort: "updatedAt:desc") {
      data {
        attributes {
          slug
          title
          excerpt
        }
      }
    }
  }
`;

export let loader = async () => {
  const client = new GraphQLClient("http://127.0.0.1:1337/graphql");

  const { posts } = await client.request(GetPostsQuery);

  return json({ posts });
};

type Post = {
  attributes: {
    title: string;
    slug: string;
    excerpt: string;
  };
};

export default function Blog() {
  let data = useLoaderData();
  const firstPost: Post = data.posts.data[0];
  const [, ...postsRest]: Post[] = data.posts.data;

  return (
    <div className="StripeWrapper relative">
      <Container className="">
        <div className="relative h-full">
          <section className="pt-32 pb-48">
            <PostCardHero
              post={{
                title: firstPost.attributes.title,
                excerpt: firstPost.attributes.excerpt,
                slug: firstPost.attributes.slug,
              }}
            />
          </section>
        </div>
      </Container>
      {postsRest.map((item) => (
        <PostCard
          post={{
            title: item.attributes.title,
            excerpt: item.attributes.excerpt,
            slug: item.attributes.slug,
          }}
        />
      ))}
    </div>
  );
}
