import wrapPromise from "../api/wrapPromise";
import { EncodeResult } from "../Components/Login";
const backendUrl = import.meta.env.VITE_BACKEND_URL

let x = localStorage.getItem('session');
let session: EncodeResult | null = x && x != "undefined" ? JSON.parse(x!) : null;

export function setSession(newSession: EncodeResult) {
    session = newSession;
}

export function getSession() {
    return session;
}

function reviveDate(key: any, value: any) {
    // Matches strings like "2022-08-25T09:39:19.288Z"
    const isoDateRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/
    return typeof value === 'string' && isoDateRegex.test(value)
        ? new Date(value)
        : value
}

export async function doFetch(url: string, method: string, body?: any) {
    let data = await fetch(`${backendUrl}${url}`,
        {
            method: method,
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json",
                "X-JWT-TOKEN": session ? session!.token : "",
            }
        });
    return JSON.parse(await data.text(), reviveDate);
}

export function fetchData<T>(url: string, method: string, body?: any): { read(): T } {
    return wrapPromise(doFetch(url, method, body));
}
