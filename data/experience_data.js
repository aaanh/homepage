function createExperience({
	key = 0,
	organization = "",
	team = "",
	role = "",
	type = "",
	location = "",
	start_month = 0,
	start_year = 0,
	end_month = 0,
	end_year = 0,
	description = [""],
	link_ref = "",
} = {}) {
	return {
		key,
		organization,
		team,
		role,
		type,
		location,
		start_month,
		start_year,
		end_month,
		end_year,
		description,
		link_ref,
	};
}

const month = {
	1: "January",
	2: "February",
	3: "March",
	4: "April",
	5: "May",
	6: "June",
	7: "July",
	8: "August",
	9: "September",
	10: "October",
	11: "November",
	12: "December",
};

export const experienceData = [
	createExperience({
		organization: "Genetec Inc.",
		link_ref: "https://genetec.com",
		role: "Software Developer",
		team: "Software Configuration Management",
		type: "Internship, Full-time",
		location: "Montreal, Quebec, Canada",
		start_month: month[5],
		start_year: 2022,
		end_month: month[8],
		end_year: 2022,
		description: [
			"Extensive use of Azure DevOps (ADO) platform to create, maintain, and troubleshoot builds and releases of software products",
			"Utilize knowledge of the Windows environment (services, registry base, etc.) during development process.",
			"Author, test, and configure Docker containers.",
			"Maintain and update compilation scripts for the compilation servers.",
			"Utilize C++, C#, and scripting languages (Bash script, JavaScript, PS1, etc.) to create custom build solutions and automated toolings for release pipelines.",
		],
	}),
	createExperience({
		organization: "Concordia University",
		link_ref: "https://users.encs.concordia.ca/~sac",
		role: "Undergraduate Research Assistant",
		type: "Part-time",
		location: "Montreal, Quebec, Canada",
		start_month: month[1],
		start_year: 2020,
		end_month: 0,
		end_year: 0,
		description: [
			"My research activities are performed under the advisory and supervision of Professor Liu with focus on machine learning platforms, processes, and services. My goal is to evaluate and benchmark these systems so as to assist platform users in deciding their AI/ML pipelines and stacks. My research focus complements my professional development in DevOps and systems design/architecture.",
			"I also develop, deploy, and maintain the research group website (nextjs, tailwind, firestore).",
		],
	}),
	createExperience({
		organization: "AITS @Concordia University",
		link_ref: "https://www.concordia.ca/ginacody/aits.html",
		role: "IT Technician L2",
		type: "Part-time",
		location: "Montreal, Quebec, Canada",
		start_month: month[3],
		start_year: 2020,
		end_month: 0,
		end_year: 0,
		description: [
			"Offering frontline support to the customers in terms of utilizing the IT infrastructures, services, and resources at Concordia.",
			"Regularly checking the teaching lab peripherals (i.e., computers, monitors, projectors), and troubleshooting the found issues.",
			"I extensively use Linux CLI tools and bash scripting to query information and troubleshoot application, system, network, and user account issues on the engineering school distributed Linux (SL and CentOS) servers.",
			"I efficiently communicate and relay crucial information for senior analysts to assist in reaching the best resolutions compliant with our system policies and satisfactory for end-users.",
			"Training new staff and suggest workflow improvements.",
			"I have successfully offered numerous in-depth analyses and solutions on complex issues regarding end-user networking and operating system nuances.",
			"Maintain internal technical wiki. I was also responsible for migrating the wiki to a better platform.",
		],
	}),
	createExperience({
		organization: "Genetec Inc.",
		link_ref: "https://genetec.com",
		role: "IT Support Specialist",
		type: "Part-time",
		location: "Montreal, Quebec, Canada",
		start_month: month[8],
		start_year: 2021,
		end_month: month[12],
		end_year: 2021,
		description: [
			"Provide technical assistance and troubleshooting for users",
			"Deploy IT assets: hardware and software",
			"Manage cloud VMs and KVM/Hyper-V",
			"Utilize PowerShell and bash scripting",
			"Work encompasses OSI layers 5 to 7",
			"Manage access request according to InfoSec policies",
			"Manage hybrid AD and Endpoint, account credentials and permission groups",
		],
	}),
	createExperience({
		organization: "Inertial Sensing Lab",
		link_ref: "https://islab.ca",
		role: "Full-Stack Web Developer, Systems Administrator",
		type: "Contract, On-call",
		location: "Montreal, Quebec, Canada",
		start_month: month[10],
		start_year: 2020,
		end_month: month[5],
		end_year: 2021,
		description: [
			"Responsible for building and maintaining the project website. The website is a hub for both internal and public communications. I decide and implement from the tech stacks and the UI/UX design to the web hosting, networking, and security. The site functions as a knowledge base, blog, archive, and file repository.",
		],
	}),
	createExperience({
		organization: "Inertial Sensing Lab",
		link_ref:
			"https://islab.ca/student-reports/nguyen_1700362_written_research_rep_submitted_on_2020-05-28_23h03m46s.pdf",
		role: "Student Researcher",
		type: "On-call",
		location: "Saint-Anne-de-Bellevue, Quebec, Canada",
		start_month: month[11],
		start_year: 2019,
		end_month: month[10],
		end_year: 2020,
		description: [
			"One semester working with inertia sensing devices. Worked on the software architect of the project. Project used Python for data processing and analysis with Tensorflow v1 for data inference and tkinter for building UI.",
		],
	}),
	createExperience({
		organization: "Mai Boat Service",
		link_ref: "https://maiboatservice.us",
		role: "Full-Stack Web Developer",
		type: "Contract",
		location: "Orlando, Florida, United States",
		start_month: month[5],
		start_year: 2017,
		end_month: month[5],
		end_year: 2021,
		description: [
			"The website is built using Nextjs. styled with Tailwindcss, hosted on Vercel, and DNS routed through Cloudflare with DDoS and bot protections.",
		],
	}),
	createExperience({
		organization: "John Abbott College",
		link_ref: "https://johnabbott.qc.ca",
		role: "Tutor",
		type: "Volunteer",
		location: "Saint-Anne-de-Bellevue, Quebec, Canada",
		start_month: month[1],
		start_year: 2017,
		end_month: month[5],
		end_year: 2017,
		description: [
			"Tutored Macroeconomics.",
			"My pedagogy approach was to have the students try problems first, then pointed out the errors, and guided their path to the final solution.",
			"I facilitated multiple students achieve at least 70% on their midterms and finals. Among those, 2 went from below passing to passing the course.",
		],
	}),
];