import React from "react";
import ReactPaginate from "react-paginate";
import styles from "./Pogination.module.scss";

function Pagination({ onChangePage }) {
  return (
    <div>
      <ReactPaginate
        className={styles.root}
        breakLabel="..."
        nextLabel=">"
        onPageChange={(event) => onChangePage(event.selected + 1)}
        pageRangeDisplayed={5}
        pageCount={3}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </div>
  );
}

export default Pagination;
