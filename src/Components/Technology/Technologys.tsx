
import { use, useState } from "react";

import TechnologyCard from "../Technology/TecnoCard";
import YourStack from "../Technology/YourStack";
import type { ITechnology } from "../Types/Type";

interface TechnologySectionProps {
  technologyPromise: Promise<ITechnology[]>;
}

const TechnologySection = ({
  technologyPromise,
}: TechnologySectionProps) => {
  const technologies = use(technologyPromise);

  const [stack, setStack] = useState<ITechnology[]>([]);

  // Add to Stack
  const handleAddToStack = (technology: ITechnology) => {
    // Duplicate check
    const alreadyAdded = stack.some(
      (item) => item.id === technology.id
    );

    if (alreadyAdded) {
      alert(`${technology.name} is already in your stack!`);
      return;
    }

    setStack((previousStack) => [
      ...previousStack,
      technology,
    ]);
  };

  // Remove single technology
  const handleRemove = (id: string) => {
    setStack((previousStack) =>
      previousStack.filter((item) => item.id !== id)
    );
  };

  // Remove all
  const handleRemoveAll = () => {
    setStack([]);
  };

  return (
    <section className="container mx-auto px-4 py-10 sm:px-6 lg:px-8">
      
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
        
        {/* Technology Grid */}
        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {technologies.map((technology) => {
              const isAdded = stack.some(
                (item) => item.id === technology.id
              );

              return (
                <TechnologyCard
                  key={technology.id}
                  technology={technology}
                  isAdded={isAdded}
                  onAdd={handleAddToStack}
                />
              );
            })}
          </div>
        </div>

        {/* Your Stack Sidebar */}
        <div className="lg:col-span-1">
          <YourStack
            stack={stack}
            onRemove={handleRemove}
            onRemoveAll={handleRemoveAll}
          />
        </div>

      </div>
    </section>
  );
};

export default TechnologySection;
