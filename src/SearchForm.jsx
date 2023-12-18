import { useGlobalContext } from "./context";

const SearchForm = () => {
  const { setSearchText } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    setSearchText(searchValue);
  };
  return (
    <div className="text-center">
      <h1 className="text-6xl text-blue-700 mb-5">Unsplash Images</h1>
      <form className="flex w-2/3 mx-auto " onSubmit={handleSubmit}>
        <input
          className="flex-1 px-3 focus-within:outline-0 bg-inherit border-4 border-gray-300 placeholder:text-inherit"
          type="text"
          name="search"
          placeholder="cat"
        />
        <button className="bg-blue-700 py-2 px-4 text-white">Search</button>
      </form>
    </div>
  );
};
export default SearchForm;
