const START_DATE = new Date("2026-06-15"); 

let items = [
    { name: "Item A", points: 150, dailyGrowth: 300 },
    { name: "Item B", points: 340, dailyGrowth: 0 },
    { name: "Item C", points: 20, dailyGrowth: 0 },
    { name: "Item D", points: 85, dailyGrowth: 0 },
    { name: "Item E", points: 120, dailyGrowth: 0 }
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
