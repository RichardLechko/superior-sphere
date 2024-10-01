import React from "react";

const YelpReview = ({ embedCode }) => {
  return (
    <li className="mb-6 w-full">
      <div dangerouslySetInnerHTML={{ __html: embedCode }} />
    </li>
  );
};

export default YelpReview;
