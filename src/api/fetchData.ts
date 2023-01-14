import wrapPromise from "../api/wrapPromise";
const backendUrl = "http://localhost:3000"

export async function doFetch(url: string, method: string, body?: any) {
    let data = await fetch(`${backendUrl}${url}`,
        {
            method: method,
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json"
            }
        });
    return await data.json();
}

export function fetchData<T>(url: string, method: string, body?: any): { read(): T } {
    return wrapPromise(doFetch(url, method, body));
}
