import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CardSkeleton = () => {
	return (
		<div className="container bg-gray-100 flex items-center text-sm pr-8 rounded-lg my-8">
			<Skeleton
				baseColor={"#c0c0c0"}
				height={"172px"}
				width={"95px"}
				className={"m-4"}
			/>
			<div className="container flex flex-col w-fit min-w-[170px] m-0 ml-2 mt-2 ">
				<Skeleton
					baseColor={"#590d22a6"}
					className="text-2xl mb-4 font-semibold "
				/>
				<Skeleton baseColor={"#c0c0c0"} className="font-bold mb-4 text-sm " />
				<Skeleton baseColor={"#c0c0c0"} className=" " />
				<Skeleton baseColor={"#c0c0c0"} className=" " />
				<Skeleton baseColor={"#c0c0c0"} className=" mb-4" />
				<Skeleton baseColor={"#c0c0c0"} className=" text-sm font-black " />
			</div>
			<div className="container flex flex-col items-start mt-5 ml-7">
				<div className="container mb-6 font-bold">
					<Skeleton baseColor={"#590d22a6"} className=" h-5" />
				</div>
				<div className="container ">
					<Skeleton baseColor={"#c0c0c0"} className="mb-2 " />
				</div>
				<div className="container ">
					<Skeleton baseColor={"#c0c0c0"} className="mb-2 " />
				</div>
				<div className="container ">
					<Skeleton baseColor={"#c0c0c0"} className="mb-2 " />
				</div>
				<div className="container mb-3 ">
					<Skeleton baseColor={"#c0c0c0"} className="mb-2 " />
				</div>
				<div className="container">
					<Skeleton baseColor={"#c0c0c0"} className="mb-3 " />
				</div>
			</div>
		</div>
	);
};

export default CardSkeleton;
