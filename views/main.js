document.addEventListener('DOMContentLoaded', () => {
  // Fetch data from the server
  fetch('/patients')
      .then((response) =>{ console.log(response.json())})
      .then((patients) => {
          // Update the view with the fetched data
          const dataContainer = document.getElementById('data-container');
          dataContainer.innerHTML = `Data from the server: ${patients[1].username}`;
          
      })
      .catch((error) => console.error('Error fetching data:', error));
});
