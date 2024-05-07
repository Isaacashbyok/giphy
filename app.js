console.log("Let's get this party started!");

const $gifContainer = $('#gif-container');
const $searchInput = $('#search-input');

function addGif(res) {
  let numResults = res.data.length;
  if (numResults) {
    let randomIdx = Math.floor(Math.random() * numResults);
    let $newContainer = $('<div>', { class: 'gifContainer' });
    let $newGif = $('<img>', {
      src: res.data[randomIdx].images.original.url,
      class: 'w-100',
    });
    $newContainer.append($newGif);
    $gifContainer.append($newContainer);
  }
}

$('form').on('submit', async function (evt) {
  evt.preventDefault();

  let searchQuery = $searchInput.val();
  $searchInput.val('');

  const res = await axios.get('http://api.giphy.com/v1/gifs/search', {
      params: {
          q       : searchQuery,
          api_key : 'Gujgb9WbFBbdHNTMYwBLxtDNd2HV3XkR'
      },
  });
  addGif(res.data);
});

$('#remove').on('click', function () {
  $gifContainer.empty();
});
