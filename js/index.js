
    document.getElementById('getCoffeeBtn').addEventListener('click', function() {
        fetch('https://coffee.alexflipnote.dev/random')
            .then(response => response.json())
            .then(data => {
                const coffeeName = data.title;
                const coffeeDescription = data.description;
    
                document.getElementById('coffeeName').textContent = `Coffee: ${coffeeName}`;
                document.getElementById('coffeeDescription').textContent = `Description: ${coffeeDescription}`;
                
               
                document.getElementById('coffeeResult').classList.remove('hidden');
            })
            .catch(error => {
                console.error('Error fetching coffee data:', error);
                alert('Failed to fetch coffee data. Please try again.');
            });
    });
    