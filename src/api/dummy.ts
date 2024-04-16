import { Movie } from "../constants/Types";

export const mockedMovies: Movie[] = [
    {
        title: 'The Night Agent',
        description: 'The Night Agent is an American action thriller television series created by Shawn Ryan based on the novel of the same name by Matthew Quirk.',
        poster: 'https://www.hollywoodreporter.com/wp-content/uploads/2023/03/TNA_103_Unit_00264RC-H-2023.jpg',
        mocked: true,
        id: 1,
        actors: "Jimmy Core, George Camp, Greyton Johnson",
        year: "2023",
        rank: 2637
    },
    {
        title: 'Sixty Minutes',
        description: `Desperate not to lose custody, a mixed martial arts fighter makes dangerous enemies when he ditches a matchup to race to his daughter's birthday party.`,
        poster: 'https://butwhytho.net/wp-content/uploads/2024/01/Sixty-Minutes-But-Why-Tho-1.jpg',
        mocked: true,
        id: 2,
        actors: "Random Actor 1, Random Actor 2",
        year: "2024",
        rank: Math.floor(Math.random() * 10000) + 1
    },
    {
        title: 'Heart of the Hunter',
        description: 'A retired assassin is pulled back into action when his friend uncovers a dangerous conspiracy at the heart of the South African government.',
        poster: 'https://occ-0-1722-1723.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABX-EPO6T4Hcl9wEFux4CmpsXd2svNKhFHbm5YEwETr8v-O0pq1IGMuiOukyRtIwFoQ-A01r9-YsJ8baujZl4CIh1ZeZ3aVNeMMA9qU-oJHWipZH-l3oeQOHl_0FqzritEdjAEps-6cGFDYbs4NjVEDiwYROK_IyZJEaqp78q8R6LrtUE5pvtbb_wJSk8h1v-okMuOuqp_xMj-LxV2hYvJzRFV3K7NWRB91owvHk0kuJkCC9Ev0MGBYkBVbnWb81_HMriUUEoTOi8AzNZnF7o9t5mEs4svolFdJ7b6aAql5Nhq-1NMDiQwpcbDA.jpg',
        mocked: true,
        id: 3,
        actors: "Random Actor 3, Random Actor 4",
        year: "2025",
        rank: 3
    },
    {
        title: 'The Shawshank Redemption',
        description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
        poster: 'https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg',
        mocked: true,
        id: 4,
        actors: "Random Actor 5, Random Actor 6",
        year: "1994",
        rank: Math.floor(Math.random() * 10000) + 1
    },
    {
        title: 'Interstellar',
        description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
        poster: 'https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg',
        mocked: true,
        id: 5,
        actors: "Random Actor 7, Random Actor 8",
        year: "2014",
        rank: Math.floor(Math.random() * 10000) + 1
    },
    {
        title: 'Pulp Fiction',
        description: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
        poster: 'https://upload.wikimedia.org/wikipedia/en/3/3b/Pulp_Fiction_%281994%29_poster.jpg',
        mocked: true,
        id: 6,
        actors: "Random Actor 9, Random Actor 10",
        year: "1994",
        rank: Math.floor(Math.random() * 10000) + 1
    },
    {
        title: 'The Matrix',
        description: 'A computer hacker learns about the true nature of reality and his role in the war against its controllers.',
        poster: 'https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg',
        mocked: true,
        id: 7,
        actors: "Random Actor 11, Random Actor 12",
        year: "1999",
        rank: Math.floor(Math.random() * 10000) + 1
    },
    {
        title: 'Forrest Gump',
        description: 'The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.',
        poster: 'https://upload.wikimedia.org/wikipedia/en/6/67/Forrest_Gump_poster.jpg',
        mocked: true,
        id: 8,
        actors: "Random Actor 13, Random Actor 14",
        year: "1994",
        rank: Math.floor(Math.random() * 10000) + 1
    },
];
