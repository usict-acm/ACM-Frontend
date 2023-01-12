import wrapPromise from "../api/wrapPromise";
const backendUrl = "http://localhost:3000"

export async function doFetch(url, method, body) {
    let data = await fetch(`${backendUrl}${url}`, { method: method, body: JSON.stringify(body) });
    return await data.json();
}

export function fetchData(url, method, body) {
    return wrapPromise(doFetch(url, method, body));
}
