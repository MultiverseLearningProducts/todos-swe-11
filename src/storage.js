const storageKey = "todos-react";

export function getStorage() {
  const data = localStorage.getItem(storageKey);
  return data ? JSON.parse(data) : [];
}

export function setStorage(data) {
  localStorage.setItem(storageKey, JSON.stringify(data));
}
