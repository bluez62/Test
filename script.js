let items = JSON.parse(localStorage.getItem('rankedItems')) || [];

function addItem() {
    const input = document.getElementById('itemName');
    const name = input.value.trim();
    
    if (name === '') return;

    const newItem = {
        id: Date.now(),
        name: name,
        points: 0
    };

    items.push(newItem);
    input.value = '';
    
    saveAndRender();
}

function updatePoints(id, amount) {
    const item = items.find(i => i.id === id);
    if (item) {
        item.points += amount;
        saveAndRender();
    }
}

function saveAndRender() {
    items.sort((a, b) => b.points - a.points);
    
    localStorage.setItem('rankedItems', JSON.stringify(items));
    
    const listElement = document.getElementById('leaderboard');
    listElement.innerHTML = '';

    items.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span><strong>${item.name}</strong> (${item.points} pts)</span>
            <div class="controls">
                <button onclick="updatePoints(${item.id}, 1)">+1</button>
                <button onclick="updatePoints(${item.id}, -1)">-1</button>
            </div>
        `;
        listElement.appendChild(li);
    });
}

saveAndRender();