import React from "react";

type Props = {};

export default function GogobeansCard({}: Props) {
  return (
    <article className=" flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#2F2F2F] p-10 hover:opacity-100 opacity-20 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <img
        className=" rounded-full w-32 h-32 xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="https://pbs.twimg.com/profile_images/1300072790/Gogobeans_icon_512_400x400.jpg"
        alt=""
      />
      <div className=" px-10 md:px-10">
        <h4 className=" text-4xl font-light">Gogobeans</h4>
        <p className=" font-semibold text-2xl mt-1">CEO</p>
        <p className=" text-gray-300 uppercase py-5">started 2007 ended 2011</p>
        <ul className=" list-disc space-y-4 text-lg">
          <li>Summary</li>
          <li>Summary</li>
          <li>Summary</li>
          <li>Summary</li>
          <li>Summary</li>
        </ul>
      </div>
    </article>
  );
}
