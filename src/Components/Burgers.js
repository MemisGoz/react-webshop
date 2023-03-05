import React, { useState, useEffect } from "react";

function Burgers() {

  const [burgers, setBurgers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = burgers.slice(indexOfFirstItem, indexOfLastItem);
    
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
    
    useEffect(() => {
      fetch("https://free-food-menus-api-production.up.railway.app/burgers")
        .then((response) => response.json())
        .then((data) => setBurgers(data));
    }, []);

  return (
   <div id="burgers">

    <div className="grid grid-cols-4 gap-4 px-28">
    {currentItems.map((burger) => (
<div key={burger.id} class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="p-8 rounded-t-lg" src={burger.img} alt="product image" />
    </a>
    <div class="px-5 pb-5">
        <a href="#">
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{burger.name}</h5>
        </a>
       <div>
        <p>{burger.dsc}</p>
       </div>
        <div class="flex items-center justify-between">
            <span class="text-3xl font-bold text-gray-900 dark:text-white">{burger.price}.- DKK</span>
            <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
        </div>
    </div>
</div>
))}
    </div>
        
    <div class="flex flex-col items-center">
        <span class="text-sm text-gray-700 dark:text-gray-400">
        Showing{" "}
         <span class="font-semibold text-gray-900 dark:text-white">{indexOfFirstItem + 1}</span>{" "}
         to{" "} <span class="font-semibold text-gray-900 dark:text-white">{Math.min(indexOfLastItem, burgers.length)}</span>{" "}
         of{" "} <span class="font-semibold text-gray-900 dark:text-white">{burgers.length}</span>{" "}
          Entries
        </span>
        <div class="inline-flex mt-2 xs:mt-0">
   
             <button class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"  disabled={currentPage === 1} onClick={() => paginate(currentPage - 1)}>
                <svg aria-hidden="true" class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path></svg>
                 Prev
            </button>
            <button class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-800 border-0 border-l border-gray-700 rounded-r hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" disabled={currentPage === Math.ceil(burgers.length / itemsPerPage)} onClick={() => paginate(currentPage + 1)}>
              Next
              <svg aria-hidden="true" class="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
        </div>
    </div>

  </div>
  )
}

export default Burgers