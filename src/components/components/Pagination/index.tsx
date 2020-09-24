import * as React from "react";
import { PaginationProps } from "./paginationPropsInterface";

const PaginationComponent = (props: PaginationProps) => {
  console.log(props);

  const buttonClass =
    "-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150";

  const spanClass =
    "-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700";

  const handlePrevious = (): void => {
    if (props.paginationData.currentPage > 1) {
      props.handlePageChangeCallback(props.paginationData.currentPage - 1);
    }
  };

  const handleNext = (): void => {
    if (props.paginationData.currentPage < props.paginationData.totalPages) {
      props.handlePageChangeCallback(props.paginationData.currentPage + 1);
    }
  };

  const handlePageButtonClick = (pageNo: number): void => {
    props.handlePageChangeCallback(pageNo);
  };

  const renderStartingButtons = (
    endLimit: number
  ): Array<HTMLButtonElement> => {
    const items: Array<any> = [];
    for (let i = 0; i < endLimit; i++) {
      items.push(
        <button
          className={
            i + 1 === props.paginationData.currentPage
              ? `active-btn ${buttonClass}`
              : `${buttonClass}`
          }
          onClick={() => handlePageButtonClick(i + 1)}
          key={`start${i}`}
        >
          {i + 1}
        </button>
      );
    }
    return items;
  };

  const renderEndingButtons = (
    startLimit: number
  ): Array<HTMLButtonElement> => {
    const items: Array<any> = [];
    for (let i = startLimit; i < props.paginationData.totalPages; i++) {
      items.push(
        <button
          className={
            i + 1 === props.paginationData.currentPage
              ? `active-btn ${buttonClass}`
              : `${buttonClass}`
          }
          onClick={() => handlePageButtonClick(i + 1)}
          key={`end${i}`}
        >
          {i + 1}
        </button>
      );
    }
    return items;
  };

  const renderMiddleButtons = (
    currentPage: number
  ): Array<HTMLButtonElement> => {
    const items: Array<any> = [];
    items.push(
      <button
        className={buttonClass}
        onClick={() => handlePageButtonClick(currentPage - 1)}
      >
        {currentPage - 1}
      </button>
    );

    items.push(
      <button
        className={`active-btn ${buttonClass}`}
        onClick={() => handlePageButtonClick(currentPage)}
      >
        {currentPage}
      </button>
    );

    items.push(
      <button
        className={buttonClass}
        onClick={() => handlePageButtonClick(currentPage + 1)}
      >
        {currentPage + 1}
      </button>
    );

    return items;
  };

  return (
    <div>
      <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
        <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
          <div>
            <p className="text-sm leading-5 text-gray-700">
              Total{" "}
              <span className="font-medium">
                {props.paginationData.currentPage}
              </span>{" "}
              of{" "}
              <span className="font-medium">
                {props.paginationData.totalPages}
              </span>{" "}
              pages
            </p>
          </div>
          <div>
            <nav className="relative z-0 inline-flex shadow-sm">
              <button
                onClick={handlePrevious}
                className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150"
                aria-label="Previous"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {/* current page <= 5 */}
              {props.paginationData.currentPage <= 5 && (
                <>
                  {renderStartingButtons(5)}
                  <span className={spanClass}>...</span>
                  <button
                    className={buttonClass}
                    onClick={() =>
                      handlePageButtonClick(props.paginationData.totalPages)
                    }
                  >
                    {props.paginationData.totalPages}
                  </button>
                </>
              )}

              {/* end current page <= 5 */}

              {/* current page >= last page - 5 */}
              {props.paginationData.currentPage >
                props.paginationData.totalPages - 5 && (
                <>
                  <button
                    className={buttonClass}
                    onClick={() => handlePageButtonClick(1)}
                  >
                    1
                  </button>
                  <span className={spanClass}>...</span>
                  {renderEndingButtons(props.paginationData.totalPages - 5)}
                </>
              )}
              {/* end current page >= last page - 5 */}

              {/* Current page in between */}
              {5 < props.paginationData.currentPage &&
                props.paginationData.currentPage <
                  props.paginationData.totalPages - 4 && (
                  <>
                    {renderStartingButtons(3)}

                    <span className={spanClass}>...</span>

                    {renderMiddleButtons(props.paginationData.currentPage)}

                    <span className={spanClass}>...</span>

                    {renderEndingButtons(props.paginationData.totalPages - 3)}
                  </>
                )}
              {/* end Current page in between */}

              <button
                onClick={handleNext}
                className="-ml-px relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150"
                aria-label="Next"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaginationComponent;
