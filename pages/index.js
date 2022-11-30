const image = document.querySelector('.image'),
  button = document.querySelector('.button')

const getImageCat = () => {
  fetch(
    'https://api.giphy.com/v1/gifs/random?api_key=uNDGsKfOrlKXHCJZWKRJ9Mn8lAVs3hRo&tag=cat&rating=R'
  )
    .then(res => res.json())
    .then(data => {
      image.src = data.data.images.downsized.url
    })
}

getImageCat()
button.addEventListener('click', getImageCat)
