import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { useGlobalContext } from "./context";

const Theme = () => {
  const { handleTheme, darkTheme } = useGlobalContext();

  return (
    <div className="flex h-6 mb-12">
      <button className="ml-auto" onClick={handleTheme}>
        {darkTheme ? (
          <BsFillSunFill className=" text-3xl" />
        ) : (
          <BsFillMoonFill className=" text-3xl" />
        )}
      </button>
    </div>
  );
};
export default Theme;
