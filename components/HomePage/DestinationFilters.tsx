import React from "react";

export const DestinationFilters = () => {
  return (
    <div  className="p-4">

    <div className="flex space-x-2 mb-6 overflow-x-auto pb-2 -mx-4 px-4">
      <button className="px-4 py-2 bg-blue-900 text-white rounded-sm whitespace-nowrap">
        En forêt
      </button>
      <button className="px-4 py-2 border border-gray-300 rounded-sm whitespace-nowrap">
        À la plage
      </button>
      <button className="px-4 py-2 border border-gray-300 rounded-sm whitespace-nowrap">
        Piscines
      </button>
      <button className="px-4 py-2 border border-gray-300 rounded-sm whitespace-nowrap">
        Montagne
      </button>
    </div>
    </div>
  );
};
