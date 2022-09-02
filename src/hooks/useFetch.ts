import { useState, useEffect, ErrorInfo, useCallback } from "react";
import { ResponseApiProduct } from "../types/types";

export default function useFetch(url: string, method?: "GET" | "POST" | "PUT" | "DELETE", headers?: HeadersInit_) {
	const [data, setData] = useState<any | any[]>(null);
	const [error, setError] = useState<any>(null);
	const [isLoading, setIsLoading] = useState<boolean>(null);
	const getData = () => {
		setIsLoading(true);
		const header = new Headers(headers);
		fetch(url, { method, headers: header })
			.then((res) => res.json())
			.then((res) => {
				setData(res)
			})
			.finally(() => setIsLoading(false))
			.catch((err: Error) => {
				console.log("error", url, err.message);
				setError(err);
			});
	};
	
	const refreshData = useCallback(() => {
		getData()
	}, [])

	useEffect(() => {
		getData()
	}, [url]);

	return { data, error, isLoading, refreshData };
}
