fetch('nohay.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('noha-container');
    data.forEach(noha => {
      container.innerHTML += `
        <div class="reciter">
          <h2>${noha.reciter} – ${noha.title} (${noha.year})</h2>
          <iframe src="${noha.youtube}?autoplay=0&controls=1"></iframe>
          <div class="lyrics">
            ${noha.lyrics_urdu.map(line => `<p>${line}</p>`).join('')}
            ${noha.lyrics_roman.map(line => `<p>${line}</p>`).join('')}
          </div>
        </div>
      `;
    });
  });
