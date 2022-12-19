import React, { useContext } from "react";
import Link from "next/link";

const categories = [
  { name: "Red body", slug: "react" },
  { name: "Web Dev", slug: "web-dev" },
];

const Header = () => {
  return (
    <div className="container mx-aut0 px-10 mb-8">
      <div className="border-b w-full inline-block border-gray-400 py-8">
        <div className="md:float-left block">
          <Link href="/">
            <span className="cursoer-poiner font-bold text-4xl text-white"></span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <span className="md:float-right mt-2 align-middle text-black ml-4 font-semiblod cursor pointer">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
