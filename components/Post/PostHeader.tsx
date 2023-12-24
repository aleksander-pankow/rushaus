import React from "react";

const PostHeader = ({title}) => {
  return (
      <section className="uppercase text-[65px] font-gilbold p-5 border border-black border-t-0 mt-10">
          <h1>{title}</h1>
      </section>
  )
}

export default PostHeader