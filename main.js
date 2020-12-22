fetch("https://the-one-api.dev/v2/book")
  .then((response) => response.json())
  .then((data) => {
    let bookPicArray = [
      "https://cdn.waterstones.com/bookjackets/large/9780/2611/9780261103573.jpg",
      "https://cdn.waterstones.com/bookjackets/large/9780/2611/9780261103580.jpg",
      "https://cdn.waterstones.com/bookjackets/large/9780/2611/9780261103597.jpg",
    ];
  })
  .catch((error) => {
    console.log("error is", error);
  });
