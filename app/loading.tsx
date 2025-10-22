import React from "react";

const Loading = () => {
  return (
    <main className="flex items-center justify-center min-h-screen flex-col space-y-4">
      <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      <h1 className="text-3xl font-semibold text-blue-600">Loading...</h1>
    </main>
  );
};

export default Loading;
