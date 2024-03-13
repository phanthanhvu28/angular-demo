export class TariffHelper {
    /**
     * Removes elements from an array and, if necessary, inserts new elements in their place, returning the new elements with inserted item.
     * @param items The root elements want to splice and insert.
     * @param start The zero-based location in the array from which to start removing elements.
     * @param deleteCount The number of elements to remove.
     * @param insertItems Elements to insert into the array in place of the deleted elements.
     * @returns An array containing the elements that were deleted.
     */
    static spliceAndInsert<T>(
      items: Array<T>,
      start: number,
      deleteCount: number,
      ...insertItems: Array<T>
    ): Array<T> {
      const newArr = structuredClone(items);
      newArr.splice(start, deleteCount, ...structuredClone(insertItems));
  
      return newArr;
    }
  }
  