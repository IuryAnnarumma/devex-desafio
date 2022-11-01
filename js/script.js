function expandir(element_id) {
  const expand = document.getElementById(element_id);
  expand.style.display = "flex";
  window.onclick = (e) => {
    if (e.target == expand) {
      expand.style.display = "none";
    }
  };
} // função para expandir imagem

var requisicao = {
    method: "GET",
  };
  fetch(
    "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=VDFrIbFLcU9MygtVGpZFXGp44qCltdBTBN8FxK99"
  ) // fetch da api key através do método get.

    
    .then((response) => response.json())
    .then((result) => {
      const coletor = result.photos.map(
        (i) =>
        `<div class="box">
        <div class="expand" id="expand-${i.img_src}">

      <img class="imagem_expandida" src="${i.img_src}" height="80%" alt="" />
        </div> 
        <img class="imagem" src="${i.img_src}" width="337px" height="211px" alt="${i.name}" />
        <p class="id"> Id: ${i.id} </p>
        <p>Nome: ${i.camera.full_name}</p>
        <p>Data Terrestre: ${i.earth_date}</p>
        
        <div class="botao_f">
        <button class="botao" onclick="expandir('expand-${i.img_src}')">Conferir</button>
        </div>
        </div>`
        );
        document.getElementById("display_tela").innerHTML = coletor;
      }) // características da API + expansão de tela.
      .catch((error) => console.log("error", error));
      

      