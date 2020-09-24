import React, { forwardRef } from "react";
import { FormattedMessage } from "react-intl";
import TextFilter from "./TextFilter";
import SelectFilter from "./SelectFilter";

const Filter = forwardRef(function Filter({ item, applyFilter }, ref) {
  const filterable = item.filterable;
  return (
    <td className="pl-6 py-1">
      {filterable && filterable.type === "text" && (
        <TextFilter
          onChange={(e) => {
            applyFilter(e);
          }}
        />
      )}
      {filterable && filterable.type === "checkbox" && (
        <SelectFilter
          options={filterable.options}
          onChange={(e) => {
            applyFilter(e);
          }}
        />
      )}
      {filterable && filterable.type === "clear" && (
        <div className="text-right pr-6">
          <span
            className="cursor-pointer text-gray-500 hover:text-gray-700 text-xs text-right capitalize"
            onClick={() => {
              applyFilter("clear");
            }}
          >
            <FormattedMessage id="ACTIONS.CLEAR_FILTERS" />
          </span>
        </div>
      )}
    </td>
  );
});

Filter.defaultProps = {};

export default Filter;
