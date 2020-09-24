import { PaginationData } from "./paginationDataInterface";

export interface PaginationProps {
  paginationData: PaginationData;
  handlePageChangeCallback: (pageNo: number) => void;
}
