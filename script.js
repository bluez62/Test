let items = [
    { name: "Item Alpha", points: 150 },
    { name: "Item Beta", points: 340 },
    { name: "Item Gamma", points: 20 },
    { name: "Item Delta", points: 85 },
    { name: "Item Epsilon", points: 120 }
];

function renderLeaderboard() {
    items.sort((a, b) => b.points - a.points);
    
    const listElement = document.getElementById('leaderboard');
    listElement.innerHTML = '';

    items.forEach((item, index) => {
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