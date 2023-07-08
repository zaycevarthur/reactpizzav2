import React from "react";
import ReactPaginate from "react-paginate";
import styles from "./Pogination.module.scss";

type PaginationType = {
  currentPage: number;
  onChangePage: any;
};

const Pagination: React.FC<PaginationType> = ({
  currentPage,
  onChangePage,
}) => {
  return (
    <div>
      <ReactPaginate
        className={styles.root}
        breakLabel="..."
        nextLabel=">"
        onPageChange={(event) => onChangePage(event.selected + 1)}
        pageRangeDisplayed={5}
        pageCount={3}
        forcePage={currentPage - 1}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default Pagination;
