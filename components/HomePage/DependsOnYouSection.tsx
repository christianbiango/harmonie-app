import { Cards } from "./Cards";

export const DependsOnYouSection = () => {
  return (
    <div className="p-4 relative">
      
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">En fonction de vous &gt;</h2>
        </div>
      </div>

      <Cards />

      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Coup de coeur Nephos</h2>
        </div>
      </div>

      <Cards />
    </div>
  );
};
