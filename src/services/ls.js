import localforage from "localforage";
let preferenceStore = localforage.createInstance({
  driver: localforage.INDEXEDDB,
  name: "devreads",
  version: 1.0,
  storeName: "preference",
  description: "Local database for Dev Reads"
});
export default preferenceStore;
