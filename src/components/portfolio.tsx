function Portfolio({page} : any) {
	const box : string = "bg-white w-full h-40 font-bold rounded-lg flex items-center justify-center m-2 text-xl cursor-pointer shadow-md";
	return (
		<div className="flex flex-col space-y-2">
			<h1 className="text-6xl text-white font-bold text-center">
				Portfolio
			</h1>	
			<div className="w-full h-full flex flex-row flex-wrap items-center justify-around sm:flex-row">
				<div className={box}>
					ft_transcendance
				</div>
				<div className={box}>
					ProfileFinder	
				</div>
				<div className={box}>
					LeadMojo
				</div>
				<div className={box}>
					Project #4
				</div>
				<div className={box}>
					Project #5
				</div>
			</div>
		</div>
	);
}

export default Portfolio;
