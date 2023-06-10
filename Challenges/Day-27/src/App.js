import "./App.css";

import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";

function App() {
  const [currentCard, setCurrentCard] = useState([]);
  const [pageCount, setPageCount] = useState(0); // number of pages
  const [itemOffset, setItemOffset] = useState(0); // offset for the current page
  const itemsPerPage = 20;

  useEffect(() => {
    fetch(`https://akabab.github.io/superhero-api/api/all.json`)
      .then((response) => response.json())
      .then((data) => {
        setCurrentCard(data.slice(itemOffset, itemOffset + itemsPerPage));
        setPageCount(Math.ceil(data.length / itemsPerPage));
      });
  }, [itemOffset]);

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setItemOffset(selectedPage * itemsPerPage);

    // scroll to the top
    window.scrollTo(0, 0);
  };

  return (
    <div className="App">
      <h1>Superheros</h1>
      <div className="container">
        {currentCard.map((item) => (
          <div className="card" key={item.id}>
            <div class="card__content">
              <img src={item.images.sm} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.work.occupation}</p>
            </div>
          </div>
        ))}
      </div>
      <ReactPaginate
        previousLabel={"← Previous"}
        nextLabel={"Next →"}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        pageClassName={"pagination__link"}
        previousLinkClassName={"pagination__link"}
        nextLinkClassName={"pagination__link"}
        disabledClassName={"pagination__link--disabled"}
        activeClassName={"pagination__link--active"}
      />
    </div>
  );
}

export default App;
