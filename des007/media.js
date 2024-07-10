function media() {
    var avisomat= window.document.getElementById('aviso')
   var n1= Number.parseInt(window.prompt('Digite sua Nota do primeiro semestre em matematica:'))
   var n2= Number.parseInt(window.prompt('Digite sua segunda nota em matematica:'))
   var t1= window.document.getElementById('n1')
   var t2= window.document.getElementById('n2')
   var medmat=(n1+n2)/2
   var resmat= window.document.getElementById('res')
    resmat.innerHTML=(`${medmat}`)
    t1.innerHTML=(`${n1}`)
    t2.innerHTML=(`${n2}`)
   
   var n1fis= Number.parseInt(window.prompt('Digite sua Nota do primeiro semestre em fisica:'))
   var n2fis= Number.parseInt(window.prompt('Digite sua segunda nota em fisica:'))
   var f1=window.document.getElementById('n1fis')
   var f2=window.document.getElementById('n2fis')
   var medfis= (n1fis+n2fis)/2
   var resfis= window.document.getElementById('resfis') 
   resfis.innerHTML=(`${medfis}`)
    f1.innerHTML=(`${n1fis}`)
    f2.innerHTML=(`${n2fis}`) 
    
    var n1qui=Number.parseInt(window.prompt('Digite sua Nota do primeiro semestre em quimica:'))
    var n2qui=Number.parseInt(window.prompt('Digite sua segunda nota em quimica:'))
    var q1= window.document.getElementById('n1qui')
    var q2=window.document.getElementById('n2qui')
    var medqui= (n1qui+n2qui)/2
    var resqui= window.document.getElementById('resqui')
    resqui.innerHTML=(`${medqui}`)
    q1.innerHTML=(`${n1qui}`)
    q2.innerHTML=(`${n2qui}`)  

    var n1bio=Number.parseInt(window.prompt('Digite sua Nota do primeiro semestre em biologia:'))
    var n2bio=Number.parseInt(window.prompt('Digite sua segunda nota em biologia:'))
    var b1= window.document.getElementById('n1bio')
    var b2=window.document.getElementById('n2bio')
    var medbio= (n1bio+n2bio)/2
    var resbio= window.document.getElementById('resbio')
    resbio.innerHTML=(`${medbio}`)
    b1.innerHTML=(`${n1bio}`)
    b2.innerHTML=(`${n2bio}`)
    
    var mediatot =window.document.getElementById('mediaexatas')
    var mediaexatas=(medmat+medfis+medqui+medbio)/4
    
    mediatot.innerHTML=(`${mediaexatas}`)

    if (mediaexatas<7) {
        avisomat.innerHTML=(`Sua média foi menor que 7, você está <strong>reprovado</strong>!`)
        } else {
    aviso.innerHTML=(`Você está aprovado!`)
                }
}