const btnlateral = document.getElementById("btn_agendarlateral");
const botoes = document.querySelectorAll(".agendar");
const carrinho = document.getElementById("carrinho");
const valorfinal = document.getElementById("valor");
const finalizar = document.getElementById("Finalizarpedido")
const nomeInput = document.getElementById("nome");
const pagamentoSelect = document.getElementById("pagamento");
const confirmar = document.getElementById("confirmarFinalizar");
const popupfinalizar = document.getElementById("popupfinalizar")
const btnmenu = document.getElementById("menu") 
const btnfechar = document.getElementById("btnfechar")
const abririnsta = document.getElementById("btnabririnsta")
const facebook = document.getElementById("btnfacebook")

let total = 0;
let carrinhoguarda = []

facebook.addEventListener("click", ()=>{
  alert("Não temos Facebook")
})

abririnsta.addEventListener("click", ()=>{
    window.open(
    `https://www.instagram.com/william_dev1/`,
    "_blank"
  );
})

btnmenu.addEventListener("click", ()=>{
  const menulateral =  document.getElementById("menulateral")
  const btnnav = document.querySelectorAll(".btnnav")
  menulateral.style.display = "flex"
  btnmenu.style.display = "none"
  menulateral.style.justifyContent = "center"
  menulateral.style.alignItems = "center"
  menulateral.style.gap = "20px"

  btnfechar.addEventListener("click", ()=>{
  menulateral.style.display = "none"

  btnmenu.style.display = "block"
})

  btnnav.forEach((el) => {
  el.addEventListener("click", () => {
    menulateral.style.display = "none"
    btnmenu.style.display = "block"
  })
})

})


botoes.forEach(botao => {
  botao.addEventListener("click", () => {
    const preco = Number(botao.dataset.preco);
    const nomeservico = botao.dataset.nome
    carrinhoguarda.push({
    nome: nomeservico,
    preco: preco
})


    total += preco;
    valorfinal.textContent = `R$ ${total.toFixed(2)}`;

    carrinho.style.display = "flex"; 
  });
});

finalizar.addEventListener("click", ()=>{
    popupfinalizar.style.display = "flex"
})
setTimeout(()=>{
    popupfinalizar.style.display = "none"
    carrinho.style.display = "none"
}, 90000)
function Fechar(){
    popupfinalizar.style.display = "none"
}

confirmar.addEventListener("click", () => {

  const usuarionome = nomeInput.value.trim();
  const formadepagamento = pagamentoSelect.value;

  if (!usuarionome || !formadepagamento) {
    alert("Preencha todos os campos!");
    return;
  }

  let msg = `*Agendamento*\n\n`;
  msg += `👤 Nome: ${usuarionome}\n\n`;
  msg += `💅 Serviços:\n`;

  carrinhoguarda.forEach(item => {
    msg += `• ${item.nome} - R$ ${item.preco.toFixed(2)}\n`;
  });

  msg += `\n💰 Total: R$ ${total.toFixed(2)}\n`;
  msg += `💳 Pagamento: ${formadepagamento}`;

  window.open(
    `https://api.whatsapp.com/send?phone=5527988223701&text=${encodeURIComponent(msg)}`,
    "_blank"
  );
});

