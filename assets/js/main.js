document.addEventListener('DOMContentLoaded', function() {
    fetch('assets/js/emojis.json')
      .then(response => response.json())
      .then(data => {
        const emojiButtonsRow = document.getElementById('emojiButtonsRow');
  
        data.forEach(emoji => {
          const button = document.createElement('button');
          button.textContent = emoji;
          button.className = 'btn btn-outline-light col-6 col-sm-4 col-md-3 col-lg-3 m-2 p-2';
  
          const copyEmoji = (emoji) => {
            const textarea = document.createElement('textarea');
            textarea.value = emoji;
            document.body.appendChild(textarea);
            textarea.select();
          
            try {
              const successful = document.execCommand('copy');
              if (successful) {
                button.classList.remove('btn-outline-light');
                button.classList.add('btn-success');
                button.textContent = 'Copied ✅';
                setTimeout(() => {
                  button.textContent = emoji;
                  button.classList.remove('btn-success');
                  button.classList.add('btn-outline-light');
                }, 1000);
              }
            } catch (err) {
              console.error('Error:', err);
            } finally {
              document.body.removeChild(textarea);
            }
          };
          
          button.addEventListener('click', function(event) {
            event.preventDefault();
            copyEmoji(event.target.textContent);
          });
          
          button.addEventListener('touchend', function(event) {
            event.preventDefault();
            copyEmoji(event.target.textContent);
          });
          emojiButtonsRow.appendChild(button);
        });
  
        function getRandomEmoji(data) {
          const randomIndex = Math.floor(Math.random() * data.length);
          const randomEmoji = data[randomIndex];
          
          const emojiSpan = document.querySelector('.emoji');
          emojiSpan.textContent = randomEmoji;
        }
        getRandomEmoji(data);
      })
      .catch(error => {
        console.error('Error fetching:', error);
      });
  });
  function setRandomFavicon() {
    const randomNumber = Math.floor(Math.random() * 68) + 1;
    const faviconURL = `assets/favicons/${randomNumber}.png`;
    const favicon = document.createElement('link');
    favicon.rel = 'icon';
    favicon.type = 'image/png';
    favicon.href = faviconURL;
    const head = document.querySelector('head');
    const existingFavicon = document.querySelector('link[rel="icon"]');
    if (existingFavicon) {
      head.removeChild(existingFavicon);
    }
    head.appendChild(favicon);
  }
  document.addEventListener('DOMContentLoaded', setRandomFavicon);
  document.addEventListener('DOMContentLoaded', setRandomFavicon);