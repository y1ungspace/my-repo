let button = document.querySelector('button');
let form = document.querySelector('form');
form.addEventListener("submit", getData);
button.addEventListener("click", getData);
function getInputValue(){
  var inputValue = document.getElementsByTagName("input")[0].value;
  const url = `https://api.unsplash.com/search/photos?query=${inputValue}&per_page=30&orientation=landscape&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo`;
  return url;
}

async function getData() {
  removeImages();
  const url = getInputValue();
  const res = await fetch(url);
  const data = await res.json();
  for (i = 0; i < 30; i++) {
    const result = data.results[i].urls.regular;
    let main = document.querySelector('main');
    var img = document.createElement('img');
    img.classList.add('img');
    img.src= result;
    main.append(img);
  }
}

async function getDataOrigin() {
  const url = 'https://api.unsplash.com/search/photos?query=$apple&per_page=30&orientation=landscape&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo';
  const res = await fetch(url);
  const data = await res.json();
  for (i = 0; i < 30; i++) {
    const result = data.results[i].urls.regular;
    let main = document.querySelector('main');
    var img = document.createElement('img');
    img.classList.add('img');
    img.src= result;
    main.append(img);
  }
}
getDataOrigin()

function removeImages() {
  var result = document.querySelectorAll('.img');
  Array.prototype.forEach.call( result, function( node ) {
    node.parentNode.removeChild( node );
});
  console.log(result);
}