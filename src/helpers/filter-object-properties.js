export const filterObjectProperties = (object = {}, properties = []) => {
  return Object.values(object).map((item) => {
    let newObject = {};
    properties.forEach((property) => newObject = {...newObject, [property]: item[property]})
    return newObject;
  });
}
