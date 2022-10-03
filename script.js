function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var form_ano = document.getElementById("txtano").value
    var res = document.getElementById("res")
    if (form_ano == "" || form_ano > ano){
        alert("[ERROR] Verifique os dados e tente novamente")
    }else {
        var fsex = document.getElementsByName("radsex")
        var idade = ano - form_ano
        var genero = ''
        var img = document.createElement("img")
        img.setAttribute("id", "foto")
        if(fsex[0].checked){
            genero = ""
            if(idade >= 0 && idade < 2){
                //bebe
                var vida = "um bebe"
                img.setAttribute('src', 'm_bebe.png')
            } else if(idade >= 2 && idade < 14){
                //criança
                var vida = "uma criança"
                img.setAttribute('src', 'm_crianca.png')
            } else if(idade >= 14 && idade < 21){
                //jovem
                var vida = "um jovem"
                img.setAttribute('src', 'm_jovem.png')
            } else if(idade >= 21 && idade < 50){
                //adulto
                var vida = "um adulto"
                img.setAttribute('src', 'm_adulto.png')
            }else {
                //idoso
                var vida = "um idoso"
                img.setAttribute('src', 'm_idoso.png')
            }

        }else if(fsex[1].checked){
            genero = ""
            if(idade >= 0 && idade < 2){
                //bebe
                var vida = "um bebe"
                img.setAttribute('src', 'f_bebe.png')
            } else if(idade >= 2 && idade < 14){
                //criança
                var vida = "uma criança"
                img.setAttribute('src', 'f_crianca.png')
            } else if(idade >= 14 && idade < 21){
                //jovem
                var vida = "um jovem"
                img.setAttribute('src', 'f_jovem.png')
            } else if(idade >= 21 && idade < 50){
                //adulto
                var vida = "uma adulta"
                img.setAttribute('src', 'f_adulta.png')
            }else {
                //idoso
                var vida = "uma idosa"
                img.setAttribute('src', 'f_idosa.png')
            }
        }else{
            genero = "gênero não declarado"
        }
        res.style.textAlign = "center"
        res.innerHTML = `Detectamos ${vida} com ${idade} anos.`
        res.appendChild(img)
    }


}