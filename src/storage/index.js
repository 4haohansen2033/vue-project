const storage = window.sessionStorage;

export const read = key => {
  return (key && storage.getItem(key)) || "";
};
export const readMany = keys => {
  return keys.length > 0 ? keys.map(key => read(key)) : [];
};

export const remove = key => {
  key && storage.removeItem(key);
};
export const removeMany = (keys, all = false) => {
  if (all) {
    return storage.clear();
  }
  keys && keys.forEach(key => remove(key));
};

export const write = (key, value) => {
  key && value && storage.setItem(key, value);
};

export const writeMany = (keys, values) => {
  if (keys.length === values.length) {
    keys.forEach((key, index) => {
      write(key, values[index]);
    });
  }
};

export const writeObject = object => {
  for (const key of Object.keys(object)) {
    write(key, object[key]);
  }
};
