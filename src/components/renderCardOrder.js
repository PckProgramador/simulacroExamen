export function renderCardOrder(objeto) {
  //seleccionas el contenedor de todas las cartas
  const containergrande = document.getElementById("orderId");

  //creamos el container
  const container = document.createElement("div");
  container.classList.add("col");

  //creas el div de la carta y le añades la clase de bootstrap
  const cardContainer = document.createElement("div");
  cardContainer.classList.add("card");

  //crea la carta
  const card = document.createElement("div");
  card.setAttribute("id", "carta");
  card.setAttribute("idvalue", objeto.id);

  //crea la imagen
  const imagen = document.createElement("img");
  imagen.src = objeto.strCategoryThumb;
  imagen.alt = "comida";

  //crea el card body
  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  //Introduce en el cardBody los datos
  //Titulo h5
  const cardH5 = document.createElement("h5");
  cardH5.classList.add("card-title");
  cardH5.innerText = objeto.strCategory;

  //descripcion
  const descripcionP = document.createElement("p");
  descripcionP.classList.add("card-text");
  const descripciontexto = objeto.strCategoryDescription;
  descripcionP.innerText = descripciontexto;

  //precio
  const precio = document.createElement("p");
  precio.classList.add("card-text");
  precio.innerText = objeto.price;

  //boton
  const boton = document.createElement("a");
  boton.classList.add("btn", "btn-link", "card-link");
  boton.href = "#";
  boton.textContent = "borrar";
  boton.id = "botonadd";

  cardBody.appendChild(cardH5);
  cardBody.appendChild(precio);
  cardBody.appendChild(descripcionP);
  cardBody.appendChild(boton);

  card.appendChild(imagen);
  card.appendChild(cardBody);
  cardContainer.appendChild(card);
  container.appendChild(cardContainer);
  containergrande.appendChild(container);
}

const urlOrder = "http://localhost:3000/order";

export async function añadirOrderDB(objeto) {
  console.log(objeto);
  fetch(urlOrder, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: objeto.id,
      strCategory: objeto.strCategory,
      strCategoryThumb: objeto.strCategoryThumb,
      strCategoryDescription: objeto.strCategoryDescription,
      price: objeto.price,
    }),
  })
    .then((response) => response.json())
    .then((data) => renderCardOrder(data));
}

// {
// "idCategory": "1",
// "strCategory": "Beef",
// "strCategoryThumb": "https://www.themealdb.com/images/category/beef.png",
// "strCategoryDescription": "Beef is the culinary name for meat from cattle, particularly skeletal muscle. Humans have been eating beef since prehistoric times.[1] Beef is a source of high-quality protein and essential nutrients.[2]",
// "price": 20.44
//   }
