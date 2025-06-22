import { MapPin, Building, Users } from "lucide-react";

export const WhatIfSection = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Et si les soignants pouvaient exercer autrement ?
      </h2>

      <div className="space-y-4">
        <div className="flex items-center bg-transparent pr-4 rounded-lg border border-nephos-primary">
          <div className="bg-blue-800 p-3 rounded-lg mr-4">
            <MapPin className="text-white" />
          </div>
          <span className="text-gray-700">Je choisis un lieu de mission</span>
        </div>

        <div className="flex items-center bg-transparent pr-4 rounded-lg border border-nephos-primary">
          <div className="bg-blue-800 p-3 rounded-lg mr-4">
            <Building className="text-white" />
          </div>
          <span className="text-gray-700">Je suis logé·e et accompagné·e</span>
        </div>

        <div className="flex items-center bg-transparent pr-4 rounded-lg border border-nephos-primary">
          <div className="bg-blue-800 p-3 rounded-lg mr-4">
            <Users className="text-white" />
          </div>
          <span className="text-gray-700">
            Je découvre, je soigne, je respire
          </span>
        </div>
      </div>
    </div>
  );
};
