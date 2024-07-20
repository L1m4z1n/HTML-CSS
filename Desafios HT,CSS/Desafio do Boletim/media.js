function media() {
    var avisomat= window.document.getElementById('aviso')
   var n1= Number.parseInt(window.prompt('Digite sua Nota do primeiro semestre em matemática:'))
   var n2= Number.parseInt(window.prompt('Digite sua segunda nota em matemática:'))
   var t1= window.document.getElementById('n1')
   var t2= window.document.getElementById('n2')
   var medmat=(n1+n2)/2
   var resmat= window.document.getElementById('res')
    resmat.innerHTML=(`${medmat}`)
    t1.innerHTML=(`${n1}`)
    t2.innerHTML=(`${n2}`)
   
   var n1fis= Number.parseInt(window.prompt('Digite sua Nota do primeiro semestre em física:'))
   var n2fis= Number.parseInt(window.prompt('Digite sua segunda nota em física:'))
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

    var n1his=Number.parseInt(window.prompt('Digite sua Nota do primeiro semestre em história:'))
    var n2his=Number.parseInt(window.prompt('Digite sua segunda nota em história:'))
    var h1= window.document.getElementById('n1his')
    var h2=window.document.getElementById('n2his')
    var medhis= (n1his+n2his)/2
    var reshis= window.document.getElementById('reshis')
    reshis.innerHTML=(`${medhis}`)
    h1.innerHTML=(`${n1his}`)
    h2.innerHTML=(`${n2his}`)

    var n1geo=Number.parseInt(window.prompt('Digite sua Nota do primeiro semestre em geografia:'))
    var n2geo=Number.parseInt(window.prompt('Digite sua segunda nota em geografia:'))
    var g1= window.document.getElementById('n1geo')
    var g2=window.document.getElementById('n2geo')
    var medgeo= (n1geo+n2geo)/2
    var resgeo= window.document.getElementById('resgeo')
    resgeo.innerHTML=(`${medgeo}`)
    g1.innerHTML=(`${n1geo}`)
    g2.innerHTML=(`${n2geo}`)

    var medhum = window.document.getElementById('mediahumanas')
    var mediahumanas=(medhis+medgeo)/2
    medhum.innerHTML=(`${mediahumanas}`)

    if (mediaexatas<7 || mediahumanas<7) {
        avisomat.innerHTML=(`Sua média foi menor que 7, você está <strong>reprovado</strong>!`)
        } else {
    aviso.innerHTML=(`Você está aprovado!`)
                }
}