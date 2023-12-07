import { useEffect, useState } from "react";

type colors = "red" | "blue";

const ProgressBar = ({ progress }: { progress: number }) => {
  const [color, setColor] = useState<colors>("blue");

  const colorVariants = {
    blue: "bg-blue-200",
    red: "bg-red-600",
  };

  useEffect(() => {
    if (progress > 100 && color == "blue") {
      setColor("red");
    } else if (progress <= 100 && color == "red") {
      setColor("blue");
    }
  }, [progress]);

  return (
    <div className=" w-[100%] bg-white border-gray-600 border-[1px] h-10 overflow-hidden mb-2 relative">
      <span className=" absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2  font-bold z-10">
        {`${progress}%`}
      </span>
      <div
        className={`h-[100%] ${colorVariants[color]} transition delay-300 ease-in-out relative`}
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
