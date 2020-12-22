fetch("https://the-one-api.dev/v2/book")
  .then((response) => response.json())
  .then((data) => {
    let bookPicArray = [
      "https://cdn.waterstones.com/bookjackets/large/9780/2611/9780261103573.jpg",
      "https://cdn.waterstones.com/bookjackets/large/9780/2611/9780261103580.jpg",
      "https://cdn.waterstones.com/bookjackets/large/9780/2611/9780261103597.jpg",
    ];
    for (let i = 0; i < data.docs.length; i++) {
      let eachItem = data.docs[i].name;
      root.innerHTML += `<div class="container">
      <img
        src="${bookPicArray[i]}"
        class="image"
      />
      <h1>Part ${i + 1} - ${eachItem}</h1>
    </div>`;
    }
  })
  .catch((error) => {
    console.log("error is", error);
  });
