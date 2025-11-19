import { faGithub, faLinkedinIn, faXTwitter, faEthereum } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

export const pageData = {
    pageTitle: "Paul Geeser | Software Engineer",
    heading: "Hi, I'm Paul Geeser 👋",
    description:
        "Software Engineer focused on blockchain for 5 years, with more than 10 years of experience in electrical and mechanical engineering",
    links: [
        {
            href: "mailto:contact@pauldev.sh",
            username: "contact@pauldev.sh",
            label: "Email",
            icon: faEnvelope,
        },
        { href: "https://x.com/paul__dev", username: "paul__dev", label: "X", icon: faXTwitter },
        {
            href: "https://github.com/pauldev20",
            username: "pauldev20",
            label: "GitHub",
            icon: faGithub,
        },
        {
            href: "https://linkedin.com/in/paulgeeser",
            username: "paulgeeser",
            label: "LinkedIn",
            icon: faLinkedinIn,
        },
    ],
    about: "I started with a lot of technical interest in all kinds of hardware, especially guitar tube amps. Music pulled me into electronics, then into microcontrollers and IoT, and finally into software. After my first studies in “**Industrial Engineering**” in March 2022, I joined 42 Heilbronn (a project-based coding school) and finished the program plus an internship by December 2024. Software engineering, is not just a job for me, it is a passion. I enjoy reading and **reverse-engineering** code to keep learning and to find creative, fast, and elegant solutions.\n\nSince December 2024, I have been working as a “**Software Engineer & Head of IT**” at Arkadia Heilbronn gGmbH. Arkadia reimagines the education system with a focus on software engineering. I build and maintain our websites and internal tools. I designed and now maintain the on-site IT for the company and our coding school students, from networking and device management to CI/CD and observability. I like pragmatic, MVP-first iterations and refactoring toward good and clean code incorporating user feedback, with a focus on **full-stack engineering**.\n\nI am especially interested in Ethereum and privacy-preserving identity. Participating in **Ethereum hackathons** is one of my favorite things to do, prototyping ideas, learning from the community, and staying close to the ecosystem. When I am not coding or thinking about code, which is rare, you will find me tinkering with hardware, cars, or music gear.",
    workExperiences: [
        {
            company: "Arkadia Heilbronn gGmbH",
            companyUrl: "https://arkadia.hn",
            companyLogo: "/arkadia.png",
            position: "Software Engineer & Head of IT",
            startDate: new Date("2024-12-01"),
            endDate: null,
            description:
                "At Arkadia Heilbronn, a company that runs a coding school and community tech programs, I build and maintain the company’s **multiple websites** and **internal/developer tools**, designed and now operate the entire on-site **IT infrastructure** used by staﬀ and students daily.",
        },
        {
            company: "synthavo GmbH",
            companyUrl: "https://www.synthavo.de",
            companyLogo: "/synthavo.png",
            position: "Software Engineer Intern",
            startDate: new Date("2023-08-01"),
            endDate: new Date("2024-01-01"),
            description:
                "At synthavo, a company specializing in AI-powered replacement part recognition for industrial machinery, I developed several internal **workflow optimization tools**, enhanced the company’s **web app + backend**, and improved the **AI data pipeline** for better performance and eﬃciency.",
        },
        {
            company: "Paul Geeser - Self-Employed",
            companyLogo: "/me.jpg",
            position: "Software Engineer",
            startDate: new Date("2020-01-02"),
            endDate: null,
            description:
                "Working as a self-employed software engineer supporting clients with **full-stack solutions** across web, **mobile**, and **backend**. Delivered a large-scale study-execution platform used in school settings, featuring **offline functionality**, secure data storage, and full GDPR compliance. Built custom automation and **web-scraping** tools that helped clients save time and reduce manual work.",
        },
        {
            company: "Soundland GmbH",
            companyUrl: "https://www.soundland.de",
            companyLogo: "/soundland.png",
            position: "Specialist Retail Salesperson",
            startDate: new Date("2019-10-01"),
            endDate: new Date("2020-09-01"),
            description:
                "Worked as a **Specialist Retail Salesperson** focusing on guitars and related equipment. Supported customers with detailed product recommendations, guided purchase decisions, and demonstrated gear in-store. Additionally performed repairs and diagnostics on tube-amps and serviced a wide range of electronic music equipment.",
        },
    ],
    education: [
        {
            title: "42 Heilbronn",
            image: "/42hn.png",
            link: "https://42heilbronn.de",
            subtitle: "Software Engineering",
            startDate: new Date("2022-03-01"),
            endDate: new Date("2024-12-01"),
            description:
                "Completed a 2-year intensive software engineering program at 42 Heilbronn, focusing on practical, project-based learning in a collaborative environment. Gained hands-on experience in C and C++ and especially colaborative programming and teamwork.",
        },
        {
            title: "Kolping Gymnasium Fellbach",
            image: "/kolping.jpg",
            subtitle: "High School Diploma, Design and Media Technology",
            startDate: new Date("2017-09-01"),
            endDate: new Date("2024-07-01"),
        },
        {
            title: "Lise-Meitner-Gymnasium",
            image: "/lmg.png",
            subtitle: "General Education Degree",
            startDate: new Date("2012-09-01"),
            endDate: new Date("2024-07-01"),
        },
    ],
    skillsDescription:
        "From embedded systems to blockchain and everything in between, always learning and always curious...",
    skills: [
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "C",
        "C++",
        "Python",
        "Flutter",
        "Dart",
        "Docker",
        "Blockchain",
        "Electrical Engineering",
        "Embedded Systems",
        "Technical Writing",
        "Documentation Writing",
    ],
    hackathonsDescription:
        "Love to attend hackathons and build things with other people. Finished as a **finalist/1st place 5 times**. Which resulted in over 48k$ in prizes.",
    hackathons: [
        {
            title: "Slash Berlin",
            logo: "/hackathons/slashberlin.png",
            location: "Berlin, Germany",
			category: "Sustainability",
            locationPoint: [52.510885, 13.3989367],
            livingLocationPoint: [49.1427, 9.2109],
            startDate: new Date("2022-09-23"),
            endDate: new Date("2022-09-25"),
            description:
                "Built a mobile app similar to a Tamagotchi, which you can feed with the products you consume. Based on their impact on the environment, its healthy or not.",
			links: [
				{
					title: "GitHub",
					icon: faGithub,
					link: "https://github.com/tamabara"
				}
			]
		},
        {
            title: "ETHGlobal Lisbon",
            category: "Crypto/Blockchain",
            logo: "/hackathons/ethlisbon.png",
            location: "Lisbon, Portugal",
            locationPoint: [38.7077507, -9.1365919],
            livingLocationPoint: [49.1427, 9.2109],
            startDate: new Date("2023-05-12"),
            endDate: new Date("2023-05-14"),
			links: [
				{
					title: "GitHub",
					icon: faGithub,
					link: "https://github.com/minimalens"
				},
				{
					title: "ETHGlobal",
					icon: faEthereum,
					link: "https://ethglobal.com/showcase/minimalens-q4ivz"
				}
			]
        },
        {
            title: "ETHMunich",
            category: "Crypto/Blockchain",
            logo: "/hackathons/ethmunich.jpg",
            location: "Munich, Germany",
            locationPoint: [48.1371079, 11.5753822],
            livingLocationPoint: [49.1427, 9.2109],
            description:
                "Developed a platform connecting individuals selling advertising space to businesses looking to advertise ",
            startDate: new Date("2023-08-11"),
            endDate: new Date("2023-08-13"),
            prizes: [
                {
                    title: "🥇 Best real world use case - 1st place",
                },
            ],
			links: [
				{
					title: "GitHub",
					icon: faGithub,
					link: "https://github.com/pauldev20/block-board"
				},
				{
					title: "Showcase",
					icon: faGlobe,
					link: "https://devfolio.co/projects/blockboard-0366"
				}
			]
        },
        {
            title: "ETHGlobal New York",
            category: "Crypto/Blockchain",
            logo: "/hackathons/ethnewyork.png",
            location: "New York, USA",
            locationPoint: [40.7127281, -74.0060152],
            livingLocationPoint: [49.1427, 9.2109],
            description: "Built a platform for leveraged perpetual futures in a never-before-seen way.",
            startDate: new Date("2023-09-22"),
            endDate: new Date("2023-09-24"),
            prizes: [
                {
                    title: "🏆 UMA",
                },
                {
                    title: "🏆 NEAR Protocol",
                },
            ],
			links: [
				{
					title: "GitHub",
					icon: faGithub,
					link: "https://github.com/pauldev20/pepetuals"
				},
				{
					title: "ETHGlobal",
					icon: faEthereum,
					link: "https://ethglobal.com/showcase/pepetuals-kyyw9"
				}
			]
        },
        {
            title: "ETHGlobal Istanbul",
            category: "Crypto/Blockchain",
            logo: "/hackathons/ethistanbul.png",
            location: "Istanbul, Turkey",
            locationPoint: [41.006381, 28.9758715],
            livingLocationPoint: [49.1427, 9.2109],
            description:
                "Developed a fully functioning browser-based wallet that completely abstracts the different chains, so its easy to use for the user.",
            startDate: new Date("2023-11-17"),
            endDate: new Date("2023-11-19"),
            prizes: [
                {
                    title: "🥇 ETHGlobal Finalist",
                },
                {
                    title: "🥇 Best dApps on Celo Blockchain",
                },
                {
                    title: "🥈 Best Interchain Application",
                },
                {
                    title: "🥉 SAFE{CORE} ACCOUNT ABSTRACTION SDK",
                },
            ],
			links: [
				{
					title: "GitHub",
					icon: faGithub,
					link: "https://github.com/pauldev20/bridge-buddy"
				},
				{
					title: "ETHGlobal",
					icon: faEthereum,
					link: "https://ethglobal.com/showcase/bridgebuddy-36te1"
				}
			]
        },
        {
            title: "ETHGlobal London",
            category: "Crypto/Blockchain",
            logo: "/hackathons/ethlondon.png",
            location: "London, UK",
            locationPoint: [51.5074456, -0.1277653],
            livingLocationPoint: [49.1427, 9.2109],
            description:
                "Created a Farcaster Frame system for secure, anonymous polls using MACI and World ID. Reverse engineered the WorldID SDK to integrate it into a Farcaster Frame.",
            startDate: new Date("2024-03-15"),
            endDate: new Date("2024-03-17"),
            prizes: [
                {
                    title: "🏆 Best use of MACI",
                },
                {
                    title: "🥇 Best World ID Usage",
                },
            ],
			links: [
				{
					title: "GitHub",
					icon: faGithub,
					link: "https://github.com/pauldev20/votelik-pollerin"
				},
				{
					title: "ETHGlobal",
					icon: faEthereum,
					link: "https://ethglobal.com/showcase/votelik-pollerin-u0dcs"
				}
			]
        },
        {
            title: "ETHGlobal Brussels",
            category: "Crypto/Blockchain",
            logo: "/hackathons/ethbrussels.png",
            location: "Brussels, Belgium",
            locationPoint: [50.8465573, 4.351697],
            livingLocationPoint: [49.1427, 9.2109],
            description:
                "Built a betting platform designed for ETHGlobal attendees to predict hackathon finalists using showcase data, with seamless onboarding through NFC wristband sign-ins",
            startDate: new Date("2024-07-12"),
            endDate: new Date("2024-07-14"),
            prizes: [
                {
                    title: "🥇 ETHGlobal Finalist",
                },
                {
                    title: "🏆 Honorable Mention",
                },
            ],
			links: [
				{
					title: "GitHub",
					icon: faGithub,
					link: "https://github.com/pauldev20/bananabets"
				},
				{
					title: "ETHGlobal",
					icon: faEthereum,
					link: "https://ethglobal.com/showcase/bananabets-w0jbp"
				}
			]
        },
        {
            title: "ETHGlobal Singapore",
            category: "Crypto/Blockchain",
            logo: "/hackathons/ethsingapore.png",
            location: "Singapore, Singapore",
            locationPoint: [1.357107, 103.8194992],
            livingLocationPoint: [49.1427, 9.2109],
            description:
                "Developed a service which abstracts the need to manually transfer gas to each chain, this is done automatically by the service.",
            startDate: new Date("2024-09-20"),
            endDate: new Date("2024-09-22"),
            prizes: [
                {
                    title: "🥇 ETHGlobal Finalist",
                },
                {
                    title: "🏆 Reown - Best projects building with Reown's AppKit",
                },
                {
                    title: "🥇 NounsDAO - Expand Public Goods",
                },
            ],
			links: [
				{
					title: "GitHub",
					icon: faGithub,
					link: "https://github.com/pauldev20/fillmeup"
				},
				{
					title: "ETHGlobal",
					icon: faEthereum,
					link: "https://ethglobal.com/showcase/fill-me-up-9u13c"
				}
			]
        },
        {
            title: "ETHGlobal San Francisco",
            category: "Crypto/Blockchain",
            logo: "/hackathons/ethsanfrancisco.png",
            location: "San Francisco, USA",
            locationPoint: [37.7792588, -122.4193286],
            livingLocationPoint: [49.1427, 9.2109],
            description:
                "Created a platform for event organizers to let their customers trade beer. The more users purchase beer, the higher the prices rise.",
            startDate: new Date("2024-10-18"),
            endDate: new Date("2024-10-20"),
            prizes: [
                {
                    title: "🏆 ENS - Most creative use case",
                    link: "https://ens.domains",
                },
            ],
			links: [
				{
					title: "GitHub",
					icon: faGithub,
					link: "https://github.com/pauldev20/beertalik-brokerin"
				},
				{
					title: "ETHGlobal",
					icon: faEthereum,
					link: "https://ethglobal.com/showcase/beertalik-brokerin-57rkv"
				}
			]
        },
        {
            title: "ETHGlobal Bangkok",
            category: "Crypto/Blockchain",
            logo: "/hackathons/ethbangkok.png",
            location: "Bangkok, Thailand",
            locationPoint: [13.7524938, 100.4935089],
            livingLocationPoint: [49.1427, 9.2109],
            description:
                "Built a oracle platform similar to UMA, which utilizes WorldID to minimize the risk that the oracle is manipulated through stake-based governance.",
            startDate: new Date("2024-11-15"),
            endDate: new Date("2024-11-17"),
            prizes: [
                {
                    title: "🥇 World - Best Mini App",
                    link: "https://world.org",
                },
            ],
			links: [
				{
					title: "GitHub",
					icon: faGithub,
					link: "https://github.com/pauldev20/proofoftruth"
				},
				{
					title: "ETHGlobal",
					icon: faEthereum,
					link: "https://ethglobal.com/showcase/proofoftruth-g31wn"
				}
			]
        },
        {
            title: "ETHGlobal Trifecta",
            category: "Crypto/Blockchain",
            logo: "/hackathons/ethtrifecta.png",
            location: "Online",
            locationPoint: [49.1427, 9.2109],
            livingLocationPoint: [49.1427, 9.2109],
            description:
                "Developed a system that securly creates a verified assosiaction between passport data and a wallet, this is done by reading the passport datha through NFC (ICAO Doc 9303) and validating it inside a TEE, which then submits it onchain.",
            startDate: new Date("2025-03-20"),
            endDate: new Date("2025-03-26"),
            prizes: [
                {
                    title: "🥇 Trifecta TEE Track Winner",
                },
                {
                    title: "🏆 Best use of Marlin TEEs",
                },
            ],
			links: [
				{
					title: "GitHub",
					icon: faGithub,
					link: "https://github.com/pauldev20/pass-tee-port"
				},
				{
					title: "ETHGlobal",
					icon: faEthereum,
					link: "https://ethglobal.com/showcase/pass-tee-port-2qoc1"
				}
			]
        },
        {
            title: "ETHGlobal Taipei",
            category: "Crypto/Blockchain",
            logo: "/hackathons/ethtaipei.png",
            location: "Taipei, Taiwan",
            locationPoint: [25.0375198, 121.5636796],
            livingLocationPoint: [49.1427, 9.2109],
            description:
                "Built a service enabling organizations to reimburse real-world expenses for employees, students, and hackers",
            startDate: new Date("2025-04-04"),
            endDate: new Date("2025-04-06"),
			links: [
				{
					title: "GitHub",
					icon: faGithub,
					link: "https://github.com/pauldev20/touchgrass"
				},
				{
					title: "ETHGlobal",
					icon: faEthereum,
					link: "https://ethglobal.com/showcase/touch-grass-q4033"
				}
			]
        },
        {
            title: "ETHGlobal Cannes",
            category: "Crypto/Blockchain",
            logo: "/hackathons/ethcannes.png",
            location: "Cannes, France",
            locationPoint: [43.5515198, 7.0134418],
            livingLocationPoint: [49.1427, 9.2109],
            startDate: new Date("2025-07-04"),
            endDate: new Date("2025-07-06"),
            description:
                "Built an end-to-end encrypted, fully anonymous, censorship-resistant messenger that stores messages in Ethereum blob storage, ensuring invisibility, unlinkability, and complete decentralization. Developed a single frontend compatible with both browser-based wallet interactions and World Mini Apps, removing the need for separate codebases and deployments.",
            githubLink: "https://github.com/pauldev20/ethglobal-cannes-2025",
            prizes: [
                {
                    title: "🥇 ETHGlobal Finalist",
                },
            ],
			links: [
				{
					title: "GitHub",
					icon: faGithub,
					link: "https://github.com/pauldev20/onlydanks"
				},
				{
					title: "ETHGlobal",
					icon: faEthereum,
					link: "https://ethglobal.com/showcase/onlydanks-wi77b"
				}
			]
        },
    ],
    projectsDescription: "Some mentionable projects of mine",
    projects: [],
};
