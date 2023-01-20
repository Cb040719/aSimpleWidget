import * as React from "react";
import { useGetWinesByNameQuery, BASE_URL, BASE_QUERY } from "./services/wines";
import Card from "./Card";
import CardSkeleton from "./CardSkeleton/CardSkeleton";

export default function App() {
	const { data, error, isLoading } = useGetWinesByNameQuery("");

	console.log(data?.comments);

	return (
		<div id="wineCard">
			<div>
				{error ? (
					<h4 className="text-2xl text-center">
						Unable to fetch {BASE_URL + BASE_QUERY}
					</h4>
				) : isLoading ? (
					<CardSkeleton />
				) : (
					<Card wine={data} />
				)}
			</div>
		</div>
	);
}
