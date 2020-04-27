const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');
const modalContent = document.getElementById("modal-content");
for (let card of cards) {
    console.log(card)
    card.addEventListener("click", function (){
        modalOverlay.classList.add('active')
        if(card.id === "starter"){
            modalContent.innerHTML = `
            <h1>01</h1>
            <div>
                <img src="starterfoguete.svg" alt="foguete">
                <h2>Starter</h2>
            </div>
            <div class="text-starter">
               <h3>Cursos 100% online e gratuitos para você entrar com o pé direito nas tecnologias mais desejadas do mercado.</h3>
               <h4> Descubra o caminho para dominar a OmniStack.</h4>
            </div>
            `;
        }
        if(card.id === "lauchBase"){
            modalContent.innerHTML = `
            <h1>02</h1>
            <div>
            <img src="lauchbase.svg" alt="Logolauchbase">
            <br />
            </div>
            <div class="text-lauchbase">
                <h3>Domine programção do zero</h3>
                <h4>e tenho acesso às melhores opotundades do mercado</h4>
            </div>
            `;
        }
        if(card.id === "goStack"){
            modalContent.innerHTML = `
            <h1>03</h1>
            <div>
            <img src="gostack.svg" alt="Logogostack">
            <br />
            </div>
            <div class="text-gostack">
                <h3>Treinamento imersivo nas </h3>
                <h4>tecnologias mais modernas de desenvolvimento web e mobile</h4>
            </div>
            `;
        }
    })
}
closeModal = document.querySelector(".close-modal").addEventListener("click", function(){
     modalOverlay.classList.remove("active")
 })
