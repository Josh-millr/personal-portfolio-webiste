import { ProjectCard } from "../ProjectCard";
import { SectionTitle } from "../SectionTitle";

import data from "@/data/portfolio.json";

const { projects } = data;

export function WorkDone() {
	return (
		<section>
			<SectionTitle id="work" className="mb-10">
				works.
			</SectionTitle>

			<div className="container">
				{projects.map(
					({ id, title, description, embededURL, url, imagePreview }) => (
						<ProjectCard
							key={id}
							title={title}
							descr={description}
							image={imagePreview}
							embed={url}
						/>
					)
				)}
			</div>
		</section>
	);
}
