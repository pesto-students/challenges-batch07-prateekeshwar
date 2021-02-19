const deepCopyObject = (objToCopy) => {
  if (typeof (objToCopy) !== 'object' || objToCopy === null) { return objToCopy; }
  const deepObject = {};
  for (const key in objToCopy) {
    if (Object.prototype.hasOwnProperty.call(objToCopy, key)) {
      deepObject[key] = deepCopyObject(objToCopy[key]);
    }
  }
  return deepObject;
};

export { deepCopyObject };
