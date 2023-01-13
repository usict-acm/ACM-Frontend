import wrapPromise from "../api/wrapPromise";
const backendUrl = "http://localhost:3000"

export async function doFetch(url: string, method: string, body? : any) {
    let data = await fetch(`${backendUrl}${url}`, { method: method, body: JSON.stringify(body) });
    return await data.json();
}

export function fetchData(url: string, method: string, body?: any) {
    return wrapPromise(doFetch(url, method, body));
}