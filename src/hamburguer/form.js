window.onload = () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      body: formData.get("message"),
      email: formData.get("email"),
    };

    // Obs estou usando o jsonplaceholder apenas como um mero exemplo e por isso não estou seguindo a sua nomenclatura :{userId, body e title }

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        event.target.reset();
        console.log(json);
      });
  });
};
