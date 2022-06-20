function verificar() {
    var data = new Date()
    var ano = data.getUTCFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    var fsex = document.getElementsByName('radsex')
    var genero = ''
    var img = document.createElement('img')
    var texto = ''
    if (fano.value.length == 0 || fano.value < 2015 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Mulher'
            if (fano.value == 2015 || fano.value == 2019 || fano.value == 2021) {
                //Carissa Moore 5 vezes campeã
                texto = 'a Campeã da WSL foi Carissa Moore. Ela é 5 vezes Campeã Mundial de Surf!'
                img.setAttribute('src', 'moore5.png')
                document.body.style.background = `#d77d60`
            } else if (fano.value == 2016 || fano.value == 2017) {
                //Tyler Wright 2 vezes campeã
                texto = 'a Campeã da WSL foi Tyler Wright. Ela é 2 vezes Campeã Mundial de Surf!'
                img.setAttribute('src', 'tyler2.png')
                document.body.style.background = `#74729a`
            } else if (fano.value == 2018) {
                //Stephanie Gilmore 7 vez campeã
                texto = 'a Campeã da WSL foi Stephanie Gilmore. Ela é 7 vezes Campeã Mundial de Surf!'
                img.setAttribute('src', 'gilmore7.png')
                document.body.style.background = `#ca8e39`
            } else {
                //2020 - Ano sem realização de campeonato!
                texto = 'não foi realizado o Campeonato Mundial de Surf devido a pandemia!'
                document.body.style.background = `#569efc`
            }
        } else if (fsex[1].checked) {
            genero = 'Homem'
            if (fano.value == 2015) {
                //Adriano de Souza 1 vez campeão
                texto = 'o Campeão da WSL foi Adriano de Souza. Ele é 1 vez Campeão Mundial de Surf!'
                img.setAttribute('src', 'mineiro1.png') 
                document.body.style.background = `#1e46a5`
            } else if (fano.value == 2016 || fano.value == 2017) {
                //John John Florence 2 vezes campeão
                texto = 'o Campeão da WSL foi John John Florence. Ele é 2 vezes Campeão Mundial de Surf!'
                img.setAttribute('src', 'florence2.png') 
                document.body.style.background = `#76472c`
            } else if (fano.value == 2018 || fano.value == 2021) {
                //Gabriel Medina 3 vezes campeão
                texto = 'o Campeão da WSL foi Gabriel Medina. Ele é 3 vezes Campeão Mundial de Surf!'
                img.setAttribute('src', 'medina3.png')
                document.body.style.background = `#4a494d`
            } else if (fano.value == 2019) {
                //Ítalo Ferreira 1 vez campeão
                texto = 'o Campeão da WSL foi Ítalo Ferreira. Ele é 1 vez Campeão Mundial de Surf!'
                img.setAttribute('src', 'italo1.png') 
                document.body.style.background = `#4d5f58`
            } else {
                //2020 - Ano sem realização de campeonato!
                texto = 'não foi realizado o Campeonato Mundial de Surf devido a pandemia!'
                document.body.style.background = `#569efc`
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Em ${fano.value} ${texto}`
        res.appendChild(img) 
    }
    
    
}