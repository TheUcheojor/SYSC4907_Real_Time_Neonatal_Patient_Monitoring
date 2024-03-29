import { ColorEnum } from "constants/ColorEnum";
import React, { useCallback } from "react";

const DOTS = "...";

function range(start, end) {
  let length = end - start + 1;
  /*
        Create an array of certain length and set the elements within it from
      start value to end value.
    */
  return Array.from({ length }, (_, idx) => idx + start);
}

interface paginationProps {
  totalSize: number;
  pageSize: number;
  siblingIndexSize?: number;
  currentPage: number;
  onPageChange: (number) => void;
}

function Pagination({
  totalSize,
  pageSize,
  siblingIndexSize = 1,
  currentPage,
  onPageChange,
}: paginationProps) {
  const calcPageRange = useCallback(() => {
    const totalPageCount = Math.ceil(totalSize / pageSize);

    // Pages count is determined as siblingCount + firstPage + lastPage + currentPage + 2*DOTS
    const totalPageNumbers = siblingIndexSize + 5;

    /*
      Case 1:
      If the number of pages is less than the page numbers we want to show in our
      paginationComponent, we return the range [1..totalPageCount]
    */
    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount);
    }

    /*
        Calculate left and right sibling index and make sure they are within range 1 and totalPageCount
    */
    const leftSiblingIndex = Math.max(currentPage - siblingIndexSize, 1);
    const rightSiblingIndex = Math.min(
      currentPage + siblingIndexSize,
      totalPageCount
    );

    /*
      We do not show dots when there is just one page number to be inserted between the extremes of sibling and the page limits i.e 1 and totalPageCount. Hence we are using leftSiblingIndex > 2 and rightSiblingIndex < totalPageCount - 2
    */
    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

    const firstPageIndex = 1;
    const lastPageIndex = totalPageCount;

    /*
        Case 2: No left dots to show, but rights dots to be shown
    */
    if (!shouldShowLeftDots && shouldShowRightDots) {
      let leftItemCount = 3 + 2 * siblingIndexSize;
      let leftRange = range(1, leftItemCount);

      return [...leftRange, DOTS, totalPageCount];
    }

    /*
        Case 3: No right dots to show, but left dots to be shown
    */
    if (shouldShowLeftDots && !shouldShowRightDots) {
      let rightItemCount = 3 + 2 * siblingIndexSize;
      let rightRange = range(
        totalPageCount - rightItemCount + 1,
        totalPageCount
      );
      return [firstPageIndex, DOTS, ...rightRange];
    }

    /*
        Case 4: Both left and right dots to be shown
    */
    if (shouldShowLeftDots && shouldShowRightDots) {
      let middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
    }
  }, [totalSize, pageSize, siblingIndexSize, currentPage]);

  let paginationRange = calcPageRange();

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  return (
    <ul style={{ paddingLeft: 0 }}>
      {paginationRange.map((pageIndex, i) => {
        return pageIndex === DOTS ? (
          <span
            style={{
              color: ColorEnum.Grey,
              paddingLeft: "6px",
              paddingRight: "6px",
              borderRight:
                pageIndex !== Math.ceil(totalSize / pageSize)
                  ? `1px solid ${ColorEnum.Grey}`
                  : undefined,
            }}
          >
            {pageIndex}
          </span>
        ) : (
          <span
            style={{
              color: pageIndex === currentPage ? "#000" : ColorEnum.Grey,
              paddingLeft: "6px",
              paddingRight: "6px",
              cursor: "pointer",
              borderRight:
                pageIndex !== Math.ceil(totalSize / pageSize)
                  ? `1px solid ${ColorEnum.Grey}`
                  : undefined,
            }}
            onClick={() => onPageChange(pageIndex)}
          >
            {pageIndex}
          </span>
        );
      })}
    </ul>
  );
}

export default Pagination;
