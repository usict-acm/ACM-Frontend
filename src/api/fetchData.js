import wrapPromise from "../api/wrapPromise";
const backendUrl = "http://localhost:3000"
let cache = new Map();

async function getData(url) {
    let data = await fetch(`${backendUrl}${url}`);
    return await data.json();
}
export function fetchData(url) {
    if (!cache.has(url)) {
        cache.set(url, getData(url));
    }
    return wrapPromise(cache.get(url));
}
