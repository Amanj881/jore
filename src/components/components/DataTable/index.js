import React, { useState, useEffect, useImperativeHandle } from "react";
import PropTypes from "prop-types";
import { axiosObj } from "../../utils/ajax";
import Skeleton from "react-loading-skeleton";
import Header from "./Header";
import Row from "./Row";
import Filter from "./Filter";
import isEqual from "lodash/isEqual";
import eventBus from "../../utils/eventBus";
import Paginator from "../Pagination/Paginator";

const Table = React.forwardRef(function Table(
  { config, defaultSortColumn, baseUrl, perPage, params },
  ref
) {
  const [orderBy, setOrderBy] = useState({
    sortOrder: "asc",
    sortColumn: config[defaultSortColumn]["identifier"],
  });

  const [refresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalRecords, setTotalRecords] = useState(1);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    if (refresh === true) {
      if (currentPage !== 1) {
        setCurrentPage(1);
      } else {
        fetchData();
      }
    }
  }, [refresh]);

  useEffect(() => {
    fetchData();
  }, [orderBy, filters, currentPage]);

  const applyFilter = (column, value) => {
    let prepareFilters = Object.assign({}, filters);
    if (column.filterable) {
      switch (column.filterable.type) {
        case "text":
          if (value) {
            prepareFilters[column.identifier] = value;
          } else {
            delete prepareFilters[column.identifier];
          }
          break;

        case "checkbox":
          if (value.length) {
            prepareFilters[column.identifier] = value;
          } else {
            delete prepareFilters[column.identifier];
          }
          break;

        case "clear":
          eventBus.dispatch("clear");
          prepareFilters = {};
          break;

        default:
          break;
      }
    }

    if (!isEqual(prepareFilters, filters)) {
      setFilters(prepareFilters);
    }
  };

  const fetchData = () => {
    axiosObj
      .get(baseUrl, {
        params: {
          per_page: perPage,
          page: currentPage,
          sort_column: orderBy.sortColumn,
          sort_order: orderBy.sortOrder,
          filters: filters,
          ...params,
        },
      })
      .then((r) => {
        setRefresh(false);
        console.log("total", r.data.total);
        setTotalRecords(r.data.total);
        setData(r.data.data);
        setLoading(false);
      })
      .catch((e) => {
        setRefresh(false);
        setLoading(false);
      });
  };

  useImperativeHandle(ref, () => {
    return {
      refresh: () => {
        setRefresh(true);
      },
    };
  });

  return (
    <>
      {loading && <Skeleton count={10} />}
      {!loading && (
        <div className="flex flex-col">
          <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
            <div
              className="align-middle inline-block w-full overflow-auto sm:rounded-t-lg"
              style={{ minHeight: "400px" }}
            >
              <table className="min-w-full">
                <thead>
                  <tr>
                    {config.map((row, i) => (
                      <Header
                        label={row.label}
                        identifier={row.identifier}
                        sortable={row.sortable}
                        key={`th${i}`}
                        orderBy={orderBy}
                        setOrderBy={setOrderBy}
                      />
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-gray-200">
                    {config.map((row, i) => (
                      <Filter
                        filters={filters}
                        item={row}
                        key={`filter${i}`}
                        applyFilter={(v) => {
                          applyFilter(row, v);
                        }}
                      />
                    ))}
                  </tr>
                  {data.length ? (
                    data.map((item, i) => (
                      <Row item={item} i={i} config={config} key={`row${i}`} />
                    ))
                  ) : (
                    <tr className="bg-white text-center">
                      <td colSpan="6" className="py-6 font-medium text-2xl">
                        No Data
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          <Paginator
            totalRecords={totalRecords}
            pageLimit={perPage}
            pageNeighbours={1}
            onPageChanged={(data) => {
              setCurrentPage(data.currentPage);
            }}
          />
        </div>
      )}
    </>
  );
});

Table.propTypes = {
  config: PropTypes.array.isRequired,
};

Table.defaultProps = {
  config: [],
  perPage: 8,
};

const titleCase = (phrase) => {
  return phrase
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export { Table, titleCase };
