import { Navigate } from "react-router";
import wrapPromise from "../api/wrapPromise";
import { EncodeResult } from "../Components/Login";
const backendUrl = "http://localhost:3000"
let session : EncodeResult | null = null;

function reviveDate(key : any, value : any) {
    // Matches strings like "2022-08-25T09:39:19.288Z"
    const isoDateRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/
    return typeof value === 'string' && isoDateRegex.test(value)
        ? new Date(value)
        : value
}

export async function doFetch(url: string, method: string, body?: any) {
    if(!session) {
        const str = localStorage.getItem("session");
        if(!str) {
            Navigate({ to : "/login"});
            return;
        }
        session = JSON.parse(str);
        if(typeof(session?.token) === "string") {
            Navigate({ to : "/login"});
            return;
        }
    }
    let data = await fetch(`${backendUrl}${url}`,
        {
            method: method,
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json",
                "X-JWT-TOKEN" : session!.token,
            }
        });
    return JSON.parse(await data.text(), reviveDate);
}

export function fetchData<T>(url: string, method: string, body?: any): { read(): T } {
    return wrapPromise(doFetch(url, method, body));
}
