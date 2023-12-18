import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useGlobalContext } from "./context";

const url = "https://api.unsplash.com/search/photos?";

const Gallery = () => {
  const { searchText } = useGlobalContext();
  const { isError, isLoading, data } = useQuery({
    queryKey: ["image", searchText],
    queryFn: async () => {
      const data = await axios.get(
        `${url}client_id=${import.meta.env.VITE_KEY_ACSESS}&query=${searchText}`
      );
      return data;
    },
  });
  if (isLoading) return <h1>LOADING.....</h1>;
  if (isError) return <h1>There was an Error.....</h1>;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 mt-10 gap-5">
      {data.data.results.map((item) => {
        return (
          <img
            className="object-cover h-52 w-full"
            key={item.id}
            src={item.urls.regular}
            alt={item.description}
          />
        );
      })}
    </div>
  );
};
export default Gallery;
