function Pagination({ totalItems, itemsPerPage, currentPage, onPageChange }) {
	const pageNumbers = Math.ceil(totalItems / itemsPerPage);
  
	const handleClick = (pageNumber) => {
	  onPageChange(pageNumber);
	};
  
	return (
	  <div className="pagination">
		{Array.from({ length: pageNumbers }, (_, index) => index + 1).map((pageNumber) => (
		  <div key={pageNumber} className={pageNumber === currentPage ? 'active' : ''}>
			<button onClick={() => handleClick(pageNumber)}>{pageNumber}</button>
		  </div>
		))}
	  </div>
	);
  }
export default Pagination