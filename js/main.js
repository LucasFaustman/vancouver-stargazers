//Example fetch using pokemonapi.co
document.querySelectorAll('button').forEach(box => box.addEventListener('click', this.getFetch.bind(this)))

function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://api.nasa.gov/planetary/apod?api_key=U5rK4gHRr9tSJHclmhwHUsUeLEQkSsILggP6uiDe&date=${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)

        if (data.media_type === 'image') {
          document.querySelector('img').src = data.hdurl
        } else if (data.media_type === 'video') {
          document.querySelector('iframe').src = data.url
          document.querySelector('img').style.display = 'none'
        }

        document.querySelector('p').innerHTML = data.explanation
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

