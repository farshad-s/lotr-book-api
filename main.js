fetch("https://the-one-api.dev/v2/book")
  .then((response) => response.json())
  .then(() => {})
  .catch((error) => {
    console.log("error is", error);
  });
