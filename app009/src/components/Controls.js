import { useBearStore } from "../zustand";

export function Controls() {
  const increasePopulation = useBearStore((state) => state.increasePopulation);
  const increasePopulationBy = useBearStore(
    (state) => state.increasePopulationBy
  );
  const removeAllBears = useBearStore((state) => state.removeAllBears);
  return (
    <div>
      <button onClick={increasePopulation}>one up</button>
      <button onClick={() => increasePopulationBy(2)}>two up</button>
      <button onClick={removeAllBears}>remove all</button>
    </div>
  );
}
