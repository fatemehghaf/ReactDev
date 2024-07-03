import { useEffect, useState } from "react";
import SearchBar from "./Components/SearchBar";
import Characters from "./Components/Characters";
import PageBtn from "./Components/PageBtn";

export default function App() {
  const [users, setUsers] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage]=useState(1);

  const searchIcon = <>&#128269;</>


  useEffect(() => {
    fetch(
      `https://rickandmortyapi.com/api/character?name=${searchText}&page=${currentPage}`
        
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setUsers(res.results);
      });
  }, [searchText, currentPage]);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
     <SearchBar
        searchText={searchText}
        setSearchText={setSearchText}
        searchIcon={searchIcon}
      />
      <hr/>
      <PageBtn currentPage={currentPage}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}/>

      <Characters users={users} />


      {!users && <div>No Other Match</div>}
    </>
  );
}
