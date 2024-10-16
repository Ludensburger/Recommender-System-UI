// Example database for cross-checking (simulated)
const database = {
  genres: {
    rock: ["Rock Classics", "Alternative Rock Radio", "Hard Rock Hits"],
    pop: ["Top Pop Hits", "Pop Radio", "Pop Essentials"],
    jazz: ["Smooth Jazz", "Jazz Legends", "Evening Jazz"],
    hiphop: ["Hip-Hop Beats", "Rap Essentials", "Old-School Hip-Hop"],
  },
  artists: {
    artist1: ["Artist 1 Playlist", "Top Hits by Artist 1"],
    artist2: ["Artist 2 Essentials", "Artist 2 Deep Cuts"],
  },
};

// Function to generate recommendations
function getRecommendations() {
  // Get values from input sliders
  const genre1 = document.getElementById("genre1").value;
  const genre2 = document.getElementById("genre2").value;
  const genre3 = document.getElementById("genre3").value;
  const genre4 = document.getElementById("genre4").value;
  const artist1 = document.getElementById("artist1").value;
  const artist2 = document.getElementById("artist2").value;

  // Cross-check with database
  const recommendationsDiv = document.getElementById("recommendations");
  recommendationsDiv.innerHTML = "";

  if (genre1 >= 3) {
    database.genres.rock.forEach((item) => {
      recommendationsDiv.innerHTML += generateCard(item, "Rock");
    });
  }
  if (genre2 >= 3) {
    database.genres.pop.forEach((item) => {
      recommendationsDiv.innerHTML += generateCard(item, "Pop");
    });
  }
  if (genre3 >= 3) {
    database.genres.jazz.forEach((item) => {
      recommendationsDiv.innerHTML += generateCard(item, "Jazz");
    });
  }
  if (genre4 >= 3) {
    database.genres.hiphop.forEach((item) => {
      recommendationsDiv.innerHTML += generateCard(item, "Hip-Hop");
    });
  }
  if (artist1 >= 3) {
    database.artists.artist1.forEach((item) => {
      recommendationsDiv.innerHTML += generateCard(item, "Artist 1");
    });
  }
  if (artist2 >= 3) {
    database.artists.artist2.forEach((item) => {
      recommendationsDiv.innerHTML += generateCard(item, "Artist 2");
    });
  }
}

// Helper function to generate recommendation cards
function generateCard(title, category) {
  return `
      <div class="col-md-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <p class="card-text">Category: ${category}</p>
            <a href="#" class="btn btn-primary">Listen Now</a>
          </div>
        </div>
      </div>
    `;
}
