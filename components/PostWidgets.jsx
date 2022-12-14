import React from "react";
import moment from "moment";
import Link from "next/link";
import { useState, useEffect } from "react";
import { getRecentPosts, getSimilarPosts } from "../services";

const PostWidgets = ({ categories, slug }) => {
  const [relatedPosts, setrelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) =>
        setrelatedPosts(result)
      );
    } else {
      getRecentPosts().then((result) => setrelatedPosts(result));
    }
  }, [slug]);

  return (
    <div className="bg-black shadow-lg rounded -lg p-8 mb-8">
      <h3 className="text-xl text-white mb-8 font-semibold border-b pb-4">
        {slug ? "Related Posts" : "Recent Posts"}
      </h3>

      {relatedPosts.map((post) => (
        <div key={post.title} className="flex item-center w-full mb-4">
          <div className="w-16 flex-none">
            <img
              className="align-middle rounded-4 "
              src={post.featuredImage.url}
              alt={post.title}
              height="60px"
              width="60px"
            />
          </div>

          <div className="flex-grow ml-4">
            <p className="text-gray-500 font-xs">
              {moment(post.createdAt).format("MMM DD, YYYY")}
            </p>
            <Link
              href={`/post/${post.slug}`}
              key={post.title}
              className="text-md text-white"
            >
              {post.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidgets;
