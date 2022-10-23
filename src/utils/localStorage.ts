export function getLocalStorage(key: string) {
  if (key === null) {
    return null;
  } else {
    return JSON.parse(localStorage.getItem(key)!);
  }
}

export function saveToLocalStorage(key: string, value: any): void {
  localStorage.setItem(key, JSON.stringify(value));
}
