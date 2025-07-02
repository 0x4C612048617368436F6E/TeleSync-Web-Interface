import React, { FC } from "react";
import Link from "next/link";
const button = () => {
  return (
    <div className="flex items-center space-x-4">
      <a href="#" className="text-gray-700 hover:text-gray-900">
        Log in
      </a>
      <a
        href="#"
        className="px-4 py-2 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition"
      >
        Get started
      </a>
    </div>
  );
};

export default button;
