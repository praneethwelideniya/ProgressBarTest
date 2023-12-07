import { useState } from "react";
import ProgressBar from "@/Components/ProgressBar";
import Button from "@/Components/Button";

const ProgressBarGroup = () => {
  const [progresArray, setProgresArray] = useState<number[]>([0, 0, 0]);

  const progressChanges = [-25, -10, 10, 25];

  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const addProgressBar = () => {
    setProgresArray((prevArray) => [...prevArray, 0]);
  };

  const changeProgress = (changeValue: number) => {
    setProgresArray((prevArray) => {
      return prevArray.map((value, index) =>
        index === selectedIndex ? Math.max(value + changeValue, 0) : value
      );
    });
  };

  return (
    <div className=" mt-10">
      {progresArray.map((proBar, index) => (
        <ProgressBar key={index} progress={proBar} />
      ))}

      <div className=" flex flex-row justify-between mt-4">
        <Button title="Add New" onClick={addProgressBar} />
        {progresArray?.length > 0 && (
          <>
            <select
              className="border-2 p-2"
              onChange={(e) => setSelectedIndex(Number(e.target.value))}
              value={selectedIndex}
            >
              {progresArray.map((_, index) => (
                <option key={index} value={index}>{`#${
                  index + 1
                } Progress`}</option>
              ))}
            </select>
            {progressChanges.map((change) => (
              <Button
                title={change.toString()}
                onClick={() => {
                  changeProgress(change);
                }}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default ProgressBarGroup;
