import React from "react";

const YelpReview = ({ embedCode }) => {
  return (
    <li className="min-w-full bg-white dark:bg-gray-800 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg">
      <div
        className="text-gray-800 dark:text-gray-200"
        dangerouslySetInnerHTML={{ __html: embedCode }}
      />
    </li>
  );
};

export default YelpReview;
