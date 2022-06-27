export function getStore(key) {
    const data = localStorage.getItem(key);

    return data ? JSON.parse(data) : undefined;
}

export function setStore(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}
