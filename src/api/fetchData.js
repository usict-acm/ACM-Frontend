import wrapPromise from "../api/wrapPromise";
const backendUrl = "http://localhost:3000"

async function getData(url) {
    let data = await fetch(`${backendUrl}${url}`);
    return await data.json();
}
export function fetchData(url) {
    return wrapPromise(getData(url));
}
