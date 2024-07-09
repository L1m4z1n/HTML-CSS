function media() {
    var aviso= window.document.getElementById('aviso')
   var n1= Number.parseInt(window.prompt('Digite sua Nota do primeiro semestre:'))
   var t1= window.document.getElementById('n1')
   var t2= window.document.getElementById('n2')
   var n2= Number.parseInt(window.prompt('Digite sua segunda nota:'))
   var med=(n1+n2)/2
var res= window.document.getElementById('res')
res.innerHTML=(`${med}`)
t1.innerHTML=(`${n1}`)
t2.innerHTML=(`${n2}`)
if (med<7) {
    aviso.innerHTML=(`Sua média foi menor que 7, você está <strong>reprovado</strong>!`)
} else {
    aviso.innerHTML=(`Você está aprovado!`)
}
}