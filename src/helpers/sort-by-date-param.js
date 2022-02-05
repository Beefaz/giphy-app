export const sortByDateParam = (object = {}, param = '') => {
  return object.sort(
    (item1, item2) => new Date(item1[param]).getTime() - new Date(item2[param]).getTime()
  );
}
