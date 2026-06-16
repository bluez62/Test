const START_DATE = new Date("2022-06-15"); 

let items = [
    { name: "Matthias Rodriguez", points: 85402, dailyGrowth:  32 },
    { name: "Jane Anderson", points: 75727, dailyGrowth: 26 },
    { name: "Jude Parker", points: 74978, dailyGrowth: 29 },
    { name: "Eli Bailey", points: 72327, dailyGrowth: 28 },
    { name: "Noah Cordova", points: 67375, dailyGrowth: 24 },
    { name: "LIlianna Pena", points: ​65425, dailyGrowth: 29 },
    { name: "Faith Lazaneo", points: 65321, dailyGrowth: 28 },
    { name: "Jorge Gasca", points: 62425, dailyGrowth: 20 },
    { name: "Isabella Gasca", points: 61789, dailyGrowth: 26 },
    { name: "Jerry Parker", points: 60532, dailyGrowth: 20 },
    { name: "Josiah Parker", points: ​59742, dailyGrowth: 25 },
    { name: "Josiah Lazaneo", points: 59345, dailyGrowth: 257 },
    { name: "Ryan Brandt", points: 57853, dailyGrowth: 18 },
    { name: "Nicholas Rodriguez", points: 56831, dailyGrowth: 20 },
    { name: "Jonah Parker", points: 56732, dailyGrowth: 15 },
    { name: "Maddy", points: 52685, dailyGrowth: 24 },
    { name: "Sofy Russell", points: 51542, dailyGrowth: 22 },
    { name: "Judah Anderson", points: 49755, dailyGrowth: 20 },
    { name: "Alyssa Chaparro", points: 46422, dailyGrowth: 13 },
    { name: "Evalyn Allardyce", points: 43657, dailyGrowth: 14 },
    { name: "Nico Chaparro", points: 38532, dailyGrowth: 14 },
    { name: "Noah Farrell", points: 35215, dailyGrowth: -2 },
    { name: "Elijah Vasquez", points: 34864, dailyGrowth: 2 },
    { name: "Elena Vega", points: 34431, dailyGrowth: 4 },
    { name: "Max Miller", points: 9721, dailyGrowth: 1 },
    { name: "Aston Neufeld", points: 9456, dailyGrowth: 2 },
    { name: "Savi Francisco", points: 9245, dailyGrowth: 14 },
    { name: "Patricia Fraley", points: 8742, dailyGrowth: -1 },
    { name: "Lizzie Anderson", points: 8582, dailyGrowth: 3 },
    { name: "Elizabeth Wade", points: 7582, dailyGrowth: 4 },
    { name: "Jeremiah Davis", points: 7253, dailyGrowth: 1 },
    { name: "Haddon Mollenkopf", points: 7089, dailyGrowth: 1 },
    { name: "Derrick Thames", points: 6574, dailyGrowth: -5 },
    { name: "Roldan Emmons", points: 6529, dailyGrowth: 2 },
    { name: "Lynne Rojas", points: 6284, dailyGrowth: 0 },
    { name: "Elijah Emmons", points: 5744, dailyGrowth: -1 },
    { name: "Josiah S.", points: 5478, dailyGrowth: 1 },
    { name: "Collette", points: 5433, dailyGrowth: -1 },
    { name: "Noelia Sapper", points: 5250, dailyGrowth: 1 },
    { name: "Noah Schmidt", points: 5127, dailyGrowth: 4 },
    { name: "Dexter", points: 4034, dailyGrowth: 3 },
    { name: "Addilyn Beard", points: 4507, dailyGrowth: 1 },
    { name: "Javeth Centeno", points: 4393, dailyGrowth: 2 },
    { name: "Paul Ridings", points: 3630, dailyGrowth: 3 },
    { name: "Molly Grace", points: 3462, dailyGrowth: 4 },
    { name: "Ezekiel Brister", points: 3257, dailyGrowth: 0 },
    { name: "Nolan Bouche", points: 2621, dailyGrowth: 2 },
    { name: "Ann Mirarchi", points: 2535, dailyGrowth: -2 },
    { name: "Noah Payne", points: 2478, dailyGrowth: 1 },
    { name: "Spencer Franke", points: 2452, dailyGrowth: -1 },
    { name: "evaademan11", points: 2389, dailyGrowth: 0 },
    { name: "Someone random", points: 2342, dailyGrowth: 0 },
    { name: "izakdg3", points: 2253, dailyGrowth: -1 },
    { name: "2011njruiz", points: 2183, dailyGrowth: 2 },
    { name: "Naomi Simmons", points: 120, dailyGrowth: 0 },
    { name: "Lilliana", points: 1427, dailyGrowth: -2 },
    { name: "Anderson Franke", points: 1032, dailyGrowth: 0 },
    { name: "Esther", points: 832, dailyGrowth: 0 },
    { name: "Josiah Foyd", points: -532, dailyGrowth: -4 },
    { name: "Luke Rodriguez", points: -1220, dailyGrowth: -7 },
    { name: "Sam Perry", points: -1304, dailyGrowth: -20 },
    { name: "Daniel Voeller", points: -51283, dailyGrowth: -30 }
];

function getDaysPassed() {
    const today = new Date();
    
    const differenceInTime = today.getTime() - START_DATE.getTime();
    
    const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));
    
    return differenceInDays > 0 ? differenceInDays : 0;
}

function renderLeaderboard() {
    const daysPassed = getDaysPassed();

    const updatedItems = items.map(item => {
        return {
            ...item,
            points: item.points + (item.dailyGrowth * daysPassed)
        };
    });

    updatedItems.sort((a, b) => b.points - a.points);
    
    const listElement = document.getElementById('leaderboard');
    listElement.innerHTML = '';

    updatedItems.forEach((item, index) => {
        const rank = index + 1;
        
        const li = document.createElement('li');
        li.innerHTML = `
            <div>
                <span class="rank-number">#${rank}</span>
                <strong>${item.name}</strong>
            </div>
            <span>${item.points} pts</span>
        `;
        listElement.appendChild(li);
    });
}

renderLeaderboard();
