import { useState, useEffect, useCallback } from "react";
import { resources } from "../i18n/fr";

export default function useFetch(url: string, method?: "GET" | "POST" | "PUT" | "DELETE", headers?: HeadersInit_) {
	const [data, setData] = useState<any | any[]>(null);
	const [error, setError] = useState<any>(null);
	const [isLoading, setIsLoading] = useState<boolean>(null);

	const getData = () => {
		setIsLoading(true);
		const header = new Headers(headers);
		fetch(url, { method, headers: header })
			.then((res) => res.json())
			.then((data) => setData(data))
			.finally(() => setIsLoading(false))
			.catch((err) => {
				setError(err);
				if (method === "GET") {
					throw new Error(resources.Error.getError);
				} else if (method === "POST") {
					throw new Error(resources.Error.postError);
				} else if (method === "PUT") {
					throw new Error(resources.Error.putError);
				} else if (method === "DELETE") {
					throw new Error(resources.Error.deleteError);
				}
			});
	};

	const refreshData = useCallback(() => {
		getData();
	}, []);

	useEffect(() => {
		getData();
	}, [url]);

	return { data, error, isLoading, refreshData };
}
