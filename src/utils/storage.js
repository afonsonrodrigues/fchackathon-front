export const getItem = (key) => {
    localStorage.getItem(key);
}

export const setItem = (key, value) => {
    localStorage.setItem(key, value);
}

export const remobeItem = (key) => {
    localStorage.setItem(key, value);
}

export const clearStorage = () => {
    localStorage.clear();
}