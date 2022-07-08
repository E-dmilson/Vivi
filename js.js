var corpo = window.document.body
var mensagem = window.prompt('Write your full name to get the link')

if((mensagem == "") || (mensagem == false)){
    alert('You did not write your name! cannot give the link')
    corpo.style.visibility = 'hidden'
}else if(mensagem == 'Kathirinda Roy'){
    document.write(`<p> Click upon your name😉 ${mensagem.link("home.html")} </p>`)
}else{
    alert('Sorry, only Vivi can access this page')
    corpo.style.visibility = 'hidden'
}