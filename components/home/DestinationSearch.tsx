import { Search } from "lucide-react";

const DestinationSearch = () => {
  return (
    <div className="p-4">

    <div className="relative mb-6 max-w-[600px] mx-auto">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-gray-400" />
      </div>
      <input
        type="text"
        className="block w-full pl-10 pr-3 py-3 lg:py-5 border border-gray-300 rounded-[10px] bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        placeholder="Rechercher une destination"
      />
    </div>
    </div>
  );
};

export default DestinationSearch;
