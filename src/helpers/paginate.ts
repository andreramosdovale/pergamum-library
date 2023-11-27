import { bookResponse } from "../types/response";

class Pagination {
  private pageEleArr: bookResponse[];
  private numOfEleToDisplayPerPage: number;
  private numOfPages: number;

  constructor(pageEleArr: bookResponse[], numOfEleToDisplayPerPage: number) {
    this.pageEleArr = pageEleArr;
    this.numOfEleToDisplayPerPage = numOfEleToDisplayPerPage;
    this.numOfPages = Math.ceil(pageEleArr.length / numOfEleToDisplayPerPage);
  }

  private getPageElements(pageNo: number): bookResponse[] {
    const startIndex = (pageNo - 1) * this.numOfEleToDisplayPerPage;
    return this.pageEleArr.slice(
      startIndex,
      startIndex + this.numOfEleToDisplayPerPage
    );
  }

  public display(pageNo: number): bookResponse[] {
    if (pageNo > this.numOfPages || pageNo <= 0) {
      return [];
    } else {
      return this.getPageElements(pageNo);
    }
  }
}

export { Pagination };
