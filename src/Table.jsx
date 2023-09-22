import React, { useState } from "react";

export default function Table({ columns, rows, pagination }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = pagination || 2;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = rows.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > Math.ceil(rows.length / itemsPerPage)) {
      return;
    }
    setCurrentPage(pageNumber);
  };
  return (
    <>
      <div className="relative overflow-x-auto w-full h-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm  text-gray-500 ">
          <thead className="text-xs text-white uppercase  w-full  border-[1px] border-[#3C4048] bg-[#3C4048] ">
            <tr>
              {columns.map((column, index) => (
                <>{column.name}</>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y border-x border-[1px] border-[#EAECF0] divide-gray-200">
            {currentItems.map((row, index) => (
              <tr key={index}>
                {columns.map((column) => (
                  <td
                    key={column.name}
                    className=" text-[#393e46]  text-center w-auto  font-medium text-sm font-roboto"
                  >
                    {column.cell(row)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex items-center  justify-center  px-8  rounded-b-lg border-[2px] border-[#EAECF0] bg-white  py-4   w-full">
          <div className="w-full flex justify-start items-center ">
            <button
              href="#"
              className="flex items-center justify-center  px-4 h-8 ml-0 leading-tight  bg-white  rounded-md   hover:bg-gray-100 text-gray-700  border-[1px] border-[#EAECF0]   dark:text-gray-700 dark:hover:bg-gray-700 dark:hover:text-white"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              attribute="Previous Page"
            >
              Previous
            </button>
          </div>
          <div className="text-sm  flex justify-center items-center gap-2  w-full font-normal text-gray-900 ">
            Page{" "}
            <span className="font-semibold text-gray-900 ">{currentPage}</span>{" "}
            of{" "}
            <span className="font-semibold text-gray-900 ">
              {Math.ceil(rows.length / itemsPerPage)}{" "}
            </span>
          </div>

          <div className="  w-full flex justify-end items-center  -space-x-px text-sm h-8">
            <button
              href="#"
              className="flex items-center justify-center px-4 h-8 py-2  text-sm leading-tight  bg-white  rounded-md hover:bg-gray-100 hover:text-gray-700  border-[1px] border-[#EAECF0] dark:text-gray-700 dark:hover:bg-gray-700 dark:hover:text-white"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === Math.ceil(rows.length / itemsPerPage)}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
