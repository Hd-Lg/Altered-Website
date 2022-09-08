import React from "react";
import ProjectDetails from "./ProjectDetails";

export default function Projects() {
	return (
		<section className="mx-8 pt-6 text-left mb-10 md:h-screen lg:md-1">
			{/* Basic Setup of what I want to see on the screen. Will have to use Router to change the content of the page without reload */}
			<div>
				<div className="grid grid-cols-2 text-center mx-auto">
					<div className="border-2 border-b-0 border-gray-300 rounded-tl-md p-3 hover:bg-blue-400 cursor-pointer">
						<button type="button">Project 1</button>
					</div>
					<div className="border-2 border-l-0 border-b-0 border-gray-300 rounded-tr-md  p-3 hover:bg-blue-400 cursor-pointer ">
						<button type="button">Project 2</button>
					</div>
					<div className="border-2 border-gray-300 rounded-bl-md p-3 hover:bg-blue-400 cursor-pointer">
						<button type="button">Project 3</button>
					</div>
					<div className="border-2 border-l-0 border-gray-300 rounded-br-md p-3 hover:bg-blue-400 cursor-pointer">
						<button type="button">Project 4</button>
					</div>
				</div>
			</div>
			{/* Separation */}
			<div className="border-b-2 my-7"></div>
			{/* Project Details */}
			{/* TODO: Pass the value selected above to the element as props and render accordingly. */}
			<ProjectDetails />
		</section>
	);
}
