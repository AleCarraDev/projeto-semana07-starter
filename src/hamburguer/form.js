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

    fetch("Api ainda não foi definida", {
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

//  o Aluno Rodrigo me ajudou a desenvolver o menu hamburguer, estive com bastante dificuldade
// o mesmo se dispos a me ajudar!
