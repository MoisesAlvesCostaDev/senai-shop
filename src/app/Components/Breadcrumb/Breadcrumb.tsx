import React from "react";

const Breadcrumb = ({ title }: IBreadcrumb) => {
  return (
    <div className="flex items-center font-sans mb-6">
      <a href="/" className="flex items-center text-black no-underline">
        <img
          src="/assets/list/HouseLine.png"
          alt="Home"
          className="w-5 h-5 mr-2"
        />
      </a>
      <img
        src="/assets/list/CaretRight.png"
        alt="Caret Right"
        className="w-3 h-3 mx-2"
      />
      <span className="text-base-subtitle font-bold ">{title}</span>
    </div>
  );
};

export default Breadcrumb;
