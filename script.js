<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Auto-Sorting Leaderboard</title>
<style>
  body { font-family: sans-serif; margin: 20px; }
  .input-group { margin-bottom: 20px; }
  ol { padding-left: 20px; }
  li { font-size: 1.2em; margin-bottom: 8px; }
</style>
</head>
<body>

  <div class="input-group">
    <input type="text" id="itemInput" placeholder="Thing name...">
    <input type="number" id="pointInput" placeholder="Points...">
    <button onclick="addItem()">Add Item</button>
  </div>

  <ol id="leaderboard">
    <!-- Items will be injected here -->
  </ol>

  <script>
    let listData = [
      { name: "Alpha", points: 150 },
      { name: "Beta", points: 999 },
      { name: "Gamma", points: 450 }
    ];

    function addItem() {
      const nameInput = document.getElementById('itemInput');
      const pointInput = document.getElementById('pointInput');
      
      const name = nameInput.value.trim();
      const points = parseInt(pointInput.value);

      if (name && !isNaN(points)) {
        listData.push({ name: name, points: points });
        renderList();
        
        nameInput.value = '';
        pointInput.value = '';
      }
    }

    function renderList() {
      listData.sort((a, b) => b.points - a.points);

      const listElement = document.getElementById('leaderboard');
      listElement.innerHTML = '';

      listData.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ${item.points} Points`;
        listElement.appendChild(li);
      });
    }

    renderList();
  </script>

</body>
</html>
