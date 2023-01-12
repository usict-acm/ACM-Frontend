import wrapPromise from "../api/wrapPromise";
const backendUrl = "http://localhost:3000"

export async function getData(url) {
    let data = await fetch(`${backendUrl}${url}`);
    return await data.json();
}

export async function postData(url, body) {
    let data = await fetch(`${backendUrl}${url}`, { method: 'POST', body: JSON.stringify(body) });
    return await data.json();
}

export function fetchData(url) {
    return wrapPromise(getData(url));
}
