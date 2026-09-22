let START_DATE = new Date("2026-09-22");
const dateElement = document.getElementById("dateInput");

let items = [
    { name: "Matthias Rodriguez", points: 88538, dailyGrowth:  32 },
    { name: "Jane Anderson", points: 77820, dailyGrowth: 2 },
    { name: "Jude Parker", points: 75923, dailyGrowth: 29 },
    { name: "Eli Bailey", points: 75071, dailyGrowth: 28 },
    { name: "Noah Cordova", points: 69727, dailyGrowth: 24 },
    { name: "LIlianna Pena", points: 68267, dailyGrowth: 29 },
    { name: "Faith Lazaneo", points: 68065, dailyGrowth: 28 },
    { name: "Jorge Gasca", points: 64385, dailyGrowth: 20 },
    { name: "Isabella Gasca", points: 64337, dailyGrowth: 26 },
    { name: "Jerry Parker", points: 62492, dailyGrowth: 20 },
    { name: "Josiah Parker", points: 62192, dailyGrowth: 25 },
    { name: "Josiah Lazaneo", points: 61795, dailyGrowth: 25 },
    { name: "Ryan Brandt", points: 59617, dailyGrowth: 18 },
    { name: "Nicholas Rodriguez", points: 58791, dailyGrowth: 20 },
    { name: "Jonah Parker", points: 58202, dailyGrowth: 15 },
    { name: "Maddy", points: 55037, dailyGrowth: 24 },
    { name: "Sofy Russell", points: 53698, dailyGrowth: 22 },
    { name: "Judah Anderson", points: 51715, dailyGrowth: 20 },
    { name: "Alyssa Chaparro", points: 47696, dailyGrowth: 13 },
    { name: "Evalyn Allardyce", points: 45029, dailyGrowth: 14 },
    { name: "Nico Chaparro", points: 39904, dailyGrowth: 14 },
    { name: "Noah Farrell", points: 35019, dailyGrowth: -2 },
    { name: "Elijah Vasquez", points: 35060, dailyGrowth: 2 },
    { name: "Elena Vega", points: 34823, dailyGrowth: 4 },
    { name: "Max Miller", points: 9819, dailyGrowth: 1 },
    { name: "Aston Neufeld", points: 9652, dailyGrowth: 2 },
    { name: "Savi Francisco", points: 10617, dailyGrowth: 14 },
    { name: "Patricia Fraley", points: 8644, dailyGrowth: -1 },
    { name: "Lizzie Anderson", points: 8876, dailyGrowth: 3 },
    { name: "Elizabeth Wade", points: 7974, dailyGrowth: 4 },
    { name: "Jeremiah Davis", points: 7351, dailyGrowth: 1 },
    { name: "Haddon Mollenkopf", points: 7187, dailyGrowth: 1 },
    { name: "Derrick Thames", points: 6084, dailyGrowth: -5 },
    { name: "Roldan Emmons", points: 6725, dailyGrowth: 2 },
    { name: "Lynne Rojas", points: 6284, dailyGrowth: 0 },
    { name: "Elijah Emmons", points: 5646, dailyGrowth: -1 },
    { name: "Josiah S.", points: 5576, dailyGrowth: 1 },
    { name: "Collette", points: 5335, dailyGrowth: -1 },
    { name: "Noelia Sapper", points: 5348, dailyGrowth: 1 },
    { name: "Noah Schmidt", points: 5519, dailyGrowth: 4 },
    { name: "Dexter", points: 4328, dailyGrowth: 3 },
    { name: "Addilyn Beard", points: 4605, dailyGrowth: 1 },
    { name: "Javeth Centeno", points: 4589, dailyGrowth: 2 },
    { name: "Paul Ridings", points: 3924, dailyGrowth: 3 },
    { name: "Molly Grace", points: 3854, dailyGrowth: 4 },
    { name: "Ezekiel Brister", points: 3257, dailyGrowth: 0 },
    { name: "Nolan Bouche", points: 2817, dailyGrowth: 2 },
    { name: "Ann Mirarchi", points: 2339, dailyGrowth: -2 },
    { name: "Noah Payne", points: 2576, dailyGrowth: 1 },
    { name: "Spencer Franke", points: 2354, dailyGrowth: -1 },
    { name: "evaademan11", points: 2389, dailyGrowth: 0 },
    { name: "Someone random", points: 2342, dailyGrowth: 0 },
    { name: "izakdg3", points: 2155, dailyGrowth: -1 },
    { name: "2011njruiz", points: 2379, dailyGrowth: 2 },
    { name: "Naomi Simmons", points: 120, dailyGrowth: 0 },
    { name: "Lilliana", points: 1231, dailyGrowth: -2 },
    { name: "Anderson Franke", points: 1032, dailyGrowth: 0 },
    { name: "Esther", points: 832, dailyGrowth: 0 },
    { name: "Josiah Foyd", points: -924, dailyGrowth: -4 },
    { name: "Luke Rodriguez", points: -1906, dailyGrowth: -7 },
    { name: "Sam Perry", points: -3264, dailyGrowth: -25 },
    { name: "Daniel Voeller", points: -54223, dailyGrowth: -30 }
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
            <span>${item.dailyGrowth} Daily Gain - ${item.points} pts</span>
        `;
        listElement.appendChild(li);
    });
}
function calculatething() {
    START_DATE = new Date(dateElement.value);
    renderLeaderboard();
}

renderLeaderboard();
