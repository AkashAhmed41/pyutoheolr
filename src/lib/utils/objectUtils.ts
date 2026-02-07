export const isNullOrUndefined = (value: any): boolean => {
  return (
    value === null ||
    value === undefined ||
    value === "null" ||
    value === "undefined"
  );
};

export const isEmptyArray = (arr: any): boolean => {
  return !arr || !Array.isArray(arr) || arr.length === 0;
};

export const isEmptyObj = (obj: any): boolean => {
  return !obj || Object.keys(obj).length === 0;
};
