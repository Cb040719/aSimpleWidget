import { useState, useEffect } from "react";
import CommentSection from "./CommentSection";

const Card = ({ wine }) => {
	const [isOpen, SetIsOpen] = useState(false);

	const {
		name,
		location,
		image,
		fizz,
		type,
		aroma,
		price,
		smell,
		colour,
		effervescence,
		experience,
		final_score,
		comments,
	} = wine;

	const openCommentSection = () => {
		SetIsOpen(!isOpen);
		console.log(isOpen);
	};

	return (
		<div>
			<svg className="hidden max-w-none !important">
				<symbol
					id="star"
					width="32"
					height="30"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M31.77 11.857H19.74L15.99.5l-3.782 11.357H0l9.885 6.903-3.692 11.21 9.736-7.05 9.796 6.962-3.722-11.18 9.766-6.845z"
						fill="currentColor"
					/>
				</symbol>
			</svg>
			<div className="container bg-gray-100 flex items-center text-gray-700 text-sm pr-8 rounded-t-lg mt-8">
				<img className="container h-56 w-fit m-0 " src={image} alt="wine_img" />
				<div className="container flex flex-col w-fit min-w-[170px] m-0 mt-2 ">
					<h1 className="text-2xl text-[#590d22] m-0 font-semibold ">{name}</h1>
					<h1 className="font-bold mb-4 text-sm ">{location}</h1>
					<p className="m-0 ">{type}</p>
					<p className="m-0 ">{fizz}</p>
					<p className="m-0 ">{aroma}</p>
					<h2 className="mb-4 text-sm font-black ">Prezzo medio: {price}</h2>
					<button
						className="text-sm flex justify-start font-bold underline"
						onClick={openCommentSection}
					>
						Recensioni
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-5 h-5"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
					</button>
				</div>
				<div className="container flex flex-col items-start ml-10">
					<h3 className="m-0 text-[#590d22] font-bold ">VALUTAZIONI</h3>
					<div className="container flex justify-between ">
						<p className="m-0 ">Olfatto</p>
						<p className="m-0 ">{smell}</p>
					</div>
					<div className="container flex justify-between ">
						<p className="m-0 ">Colore</p>
						<p className="m-0 ">{colour}</p>
					</div>
					<div className="container flex justify-between ">
						<p className="m-0 ">Effervescenza</p>
						<p className="m-0 ">{effervescence}</p>
					</div>
					<div className="container flex justify-between mb-4 ">
						<p className="m-0 ">Qualità/prezzo</p>
						<p className="m-0 ">{experience}</p>
					</div>
					<div className="container flex justify-between">
						<p className="text-sm m-0 ">Valutazione finale</p>
						<p className="text-sm m-0 ">{final_score}</p>
					</div>
					<div className="relative inline-block">
						<div className="text-gray-200 inline-flex space-x-1">
							<svg viewBox="0 0 32 30" className="w-6 h-6 max-w-none">
								<use xlinkHref="#star"></use>
							</svg>
							<svg viewBox="0 0 32 30" className="w-6 h-6 max-w-none">
								<use xlinkHref="#star"></use>
							</svg>
							<svg viewBox="0 0 32 30" className="w-6 h-6 max-w-none">
								<use xlinkHref="#star"></use>
							</svg>
							<svg viewBox="0 0 32 30" className="w-6 h-6 max-w-none">
								<use xlinkHref="#star"></use>
							</svg>
							<svg viewBox="0 0 32 30" className="w-6 h-6 max-w-none">
								<use xlinkHref="#star"></use>
							</svg>
						</div>
						<div
							className="overflow-hidden absolute left-0 top-0 text-yellow-500 flex space-x-1"
							style={{ width: final_score }}
						>
							<svg
								viewBox="0 0 32 30"
								className="w-6 h-6 flex-shrink-0 max-w-none"
							>
								<use xlinkHref="#star"></use>
							</svg>
							<svg
								viewBox="0 0 32 30"
								className="w-6 h-6 flex-shrink-0 max-w-none"
							>
								<use xlinkHref="#star"></use>
							</svg>
							<svg
								viewBox="0 0 32 30"
								className="w-6 h-6 flex-shrink-0 max-w-none"
							>
								<use xlinkHref="#star"></use>
							</svg>
							<svg
								viewBox="0 0 32 30"
								className="w-6 h-6 flex-shrink-0 max-w-none"
							>
								<use xlinkHref="#star"></use>
							</svg>
							<svg
								viewBox="0 0 32 30"
								className="w-6 h-6 flex-shrink-0 max-w-none"
							>
								<use xlinkHref="#star"></use>
							</svg>
						</div>
					</div>
				</div>
			</div>
			<CommentSection open={isOpen} comments={comments} />
		</div>
	);
};

export default Card;

// container p-2 w-fit bg-[#610707] hover:bg-[#913b3b] active:shadow-inner text-gray-200 text-xs rounded-md shadow shadow-[rgba(0,0,0,0.5)]
// container flex bg-gray-300 h-88 w-fit p-4 border-2 rounded-lg shadow-xl shadow-[rgba(0,0,0,0.3)] hover:scale-[1.03] duration-700"
