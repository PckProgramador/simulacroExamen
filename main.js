import { renderCardFoods } from "./src/components/renderCardFoods";
import {
  renderCardOrder,
  añadirOrderDB,
} from "./src/components/renderCardOrder";
/**
 * VARIABLES GLOBALES
 */

const orderDiv = document.getElementById("orderId");
const comidaDiv = document.getElementById("comidaContainerId");

const url = "http://localhost:3000/categories";

function getCardFoodApi() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      renderCardFoods(data);
    })
    .catch((error) => console.log(error));
}

getCardFoodApi();

comidaDiv.addEventListener("click", async (e) => {
  e.preventDefault();
  if (e.target.textContent === "Añadir") {
    let targetPadre = e.target.closest(".col-md-4");
    console.log(targetPadre);
    const carta = targetPadre.querySelector("#carta");
    const idcarta = carta.getAttribute("idvalue");
    console.log(carta);
    console.log(idcarta);
    const srcImagen = targetPadre.getElementsByTagName("img")[0].src;
    const titulo = targetPadre.querySelector(".card-title").textContent;
    const textos = targetPadre.getElementsByClassName("card-text");
    const precio = textos[0].textContent;
    const descripcion = textos[1].textContent;

    const objetoDB = {
      id: idcarta,
      strCategory: titulo,
      strCategoryThumb: srcImagen,
      strCategoryDescription: descripcion,
      price: precio,
    };
    añadirOrderDB(objetoDB);
  }
});

// .addEventListener("click", async (e) => {
//     e.preventDefault();
//     if (e.target.textContent === "Añadir") {
//       let targetPadre = e.target.closest(".col-md-4");
//       console.log(targetPadre);
//       const carta = targetPadre.querySelector("#carta");
//       const idcarta = carta.getAttribute("idvalue");
//       console.log(carta);
//       console.log(idcarta);
//       const srcImagen = targetPadre.getElementsByTagName("img")[0].src;
//       const titulo = targetPadre.querySelector(".card-title").textContent;
//       const textos = targetPadre.getElementsByClassName("card-text");
//       const precio = textos[0].textContent;
//       const descripcion = textos[1].textContent;

//       const objetoDB = {
//         id: idcarta,
//         strCategory: titulo,
//         strCategoryThumb: srcImagen,
//         strCategoryDescription: descripcion,
//         price: precio,
//       };
//       añadirOrderDB(objetoDB);
//     }
//   });
