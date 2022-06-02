import { isArray } from "lodash";

export const dataFormatToArray = (data) => {
  if (isArray(data)) {
    return data;
  }

  const _arr = data?.split(",") || [];
  const _numArr = _arr?.map((item) => Number(item, 10));
  return _numArr || [];
};
