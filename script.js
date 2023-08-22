document.body.addEventListener('keyup',(event) =>{
    playSound(event.code.toLocaleLowerCase())
    mobileSound(event.code.toLocaleLowerCase())
})

document.querySelector('.composer button').addEventListener('click',()=>{
    let song = document.querySelector('#input').value
    if(song != ''){
        let songarray = song.split('')
        console.log(songarray)
        playcompositin(songarray)
        
    }
})


function playSound(sound){
    let audioElemt = document.querySelector(`#s_${sound}`)
    let kayElemnt = document.querySelector(`div[data-key="${sound}"]`)
    if(audioElemt){
        audioElemt.currentTime = 0
        audioElemt.play()
    }
    if(kayElemnt){
        kayElemnt.classList.add('active')
        

        setTimeout(()=>{
            kayElemnt.classList.remove('active')
        }, 200)
    }
}

document.querySelector('#keyq').addEventListener('click', ()=>{
    let audioElemt = document.querySelector(`#s_keyq`)
    let kayElemnt = document.querySelector(`div[data-key="s_keyq"]`)

    if(kayElemnt == document.querySelector(`div[data-key="s_keyq"]`)){
        audioElemt.currentTime = 0
        audioElemt.play()
    }
    if(kayElemnt){
        kayElemnt.classList.add('active')
        

        setTimeout(()=>{
            kayElemnt.classList.remove('active')
        }, 200)
    }

})
document.querySelector('#keyq').addEventListener('click', (clickC)=>{
    let kayElemnt = document.querySelector(`#keyq`)
    if(kayElemnt){
        kayElemnt.classList.add('active')
        

        setTimeout(()=>{
            kayElemnt.classList.remove('active')
        }, 200)
    }
})

//kay q  acima

document.querySelector('#keyw').addEventListener('click', ()=>{
    let audioElemt = document.querySelector(`#s_keyw`)
    let kayElemnt = document.querySelector(`div[data-key="s_keyw"]`)

    if(kayElemnt == document.querySelector(`div[data-key="s_keyw"]`)){
        audioElemt.currentTime = 0
        audioElemt.play()
    }
    if(kayElemnt){
        kayElemnt.classList.add('active')
        

        setTimeout(()=>{
            kayElemnt.classList.remove('active')
        }, 200)
    }

})
document.querySelector('#keyw').addEventListener('click', (clickC)=>{
    let kayElemnt = document.querySelector(`#keyw`)
    if(kayElemnt){
        kayElemnt.classList.add('active')
        

        setTimeout(()=>{
            kayElemnt.classList.remove('active')
        }, 200)
    }
})

//kay w acima mobile

document.querySelector('#keye').addEventListener('click', ()=>{
    let audioElemt = document.querySelector(`#s_keye`)
    let kayElemnt = document.querySelector(`div[data-key="s_keye"]`)

    if(kayElemnt == document.querySelector(`div[data-key="s_keye"]`)){
        audioElemt.currentTime = 0
        audioElemt.play()
    }
    if(kayElemnt){
        kayElemnt.classList.add('active')
        

        setTimeout(()=>{
            kayElemnt.classList.remove('active')
        }, 200)
    }

})
document.querySelector('#keye').addEventListener('click', (clickC)=>{
    let kayElemnt = document.querySelector(`#keye`)
    if(kayElemnt){
        kayElemnt.classList.add('active')
        

        setTimeout(()=>{
            kayElemnt.classList.remove('active')
        }, 200)
    }
})

//kay e acima

document.querySelector('#keya').addEventListener('click', ()=>{
    let audioElemt = document.querySelector(`#s_keya`)
    let kayElemnt = document.querySelector(`div[data-key="s_keya"]`)

    if(kayElemnt == document.querySelector(`div[data-key="s_keya"]`)){
        audioElemt.currentTime = 0
        audioElemt.play()
    }
    if(kayElemnt){
        kayElemnt.classList.add('active')
        

        setTimeout(()=>{
            kayElemnt.classList.remove('active')
        }, 200)
    }

})
document.querySelector('#keya').addEventListener('click', (clickC)=>{
    let kayElemnt = document.querySelector(`#keya`)
    if(kayElemnt){
        kayElemnt.classList.add('active')
        

        setTimeout(()=>{
            kayElemnt.classList.remove('active')
        }, 200)
    }
})

//kay a acima
document.querySelector('#keys').addEventListener('click', ()=>{
    let audioElemt = document.querySelector(`#s_keys`)
    let kayElemnt = document.querySelector(`div[data-key="s_keys"]`)

    if(kayElemnt == document.querySelector(`div[data-key="s_keys"]`)){
        audioElemt.currentTime = 0
        audioElemt.play()
    }
    if(kayElemnt){
        kayElemnt.classList.add('active')
        

        setTimeout(()=>{
            kayElemnt.classList.remove('active')
        }, 200)
    }

})
document.querySelector('#keys').addEventListener('click', (clickC)=>{
    let kayElemnt = document.querySelector(`#keys`)
    if(kayElemnt){
        kayElemnt.classList.add('active')
        

        setTimeout(()=>{
            kayElemnt.classList.remove('active')
        }, 200)
    }
})


//kay s acima
document.querySelector('#keyd').addEventListener('click', ()=>{
    let audioElemt = document.querySelector(`#s_keyd`)
    let kayElemnt = document.querySelector(`div[data-key="s_keyd"]`)

    if(kayElemnt == document.querySelector(`div[data-key="s_keyd"]`)){
        audioElemt.currentTime = 0
        audioElemt.play()
    }
    if(kayElemnt){
        kayElemnt.classList.add('active')
        

        setTimeout(()=>{
            kayElemnt.classList.remove('active')
        }, 200)
    }

})
document.querySelector('#keyd').addEventListener('click', (clickC)=>{
    let kayElemnt = document.querySelector(`#keyd`)
    if(kayElemnt){
        kayElemnt.classList.add('active')
        

        setTimeout(()=>{
            kayElemnt.classList.remove('active')
        }, 200)
    }
})

//kay d acima

document.querySelector('#keyz').addEventListener('click', ()=>{
    let audioElemt = document.querySelector(`#s_keyz`)
    let kayElemnt = document.querySelector(`div[data-key="s_keyz"]`)

    if(kayElemnt == document.querySelector(`div[data-key="s_keyz"]`)){
        audioElemt.currentTime = 0
        audioElemt.play()
    }
    if(kayElemnt){
        kayElemnt.classList.add('active')
        

        setTimeout(()=>{
            kayElemnt.classList.remove('active')
        }, 200)
    }

})
document.querySelector('#keyz').addEventListener('click', (clickC)=>{
    let kayElemnt = document.querySelector(`#keyz`)
    if(kayElemnt){
        kayElemnt.classList.add('active')
        

        setTimeout(()=>{
            kayElemnt.classList.remove('active')
        }, 200)
    }
})

//kay z acima
document.querySelector('#keyx').addEventListener('click', ()=>{
    let audioElemt = document.querySelector(`#s_keyx`)
    let kayElemnt = document.querySelector(`div[data-key="s_keyx"]`)

    if(kayElemnt == document.querySelector(`div[data-key="s_keyx"]`)){
        audioElemt.currentTime = 0
        audioElemt.play()
    }
    if(kayElemnt){
        kayElemnt.classList.add('active')
        

        setTimeout(()=>{
            kayElemnt.classList.remove('active')
        }, 200)
    }

})
document.querySelector('#keyx').addEventListener('click', (clickC)=>{
    let kayElemnt = document.querySelector(`#keyx`)
    if(kayElemnt){
        kayElemnt.classList.add('active')
        

        setTimeout(()=>{
            kayElemnt.classList.remove('active')
        }, 200)
    }
})

//kay x acima
document.querySelector('#keyc').addEventListener('click', ()=>{
    let audioElemt = document.querySelector(`#s_keyc`)
    let kayElemnt = document.querySelector(`div[data-key="s_keyc"]`)

    if(kayElemnt == document.querySelector(`div[data-key="s_keyc"]`)){
        audioElemt.currentTime = 0
        audioElemt.play()
    }
    if(kayElemnt){
        kayElemnt.classList.add('active')
        

        setTimeout(()=>{
            kayElemnt.classList.remove('active')
        }, 200)
    }

})

document.querySelector('#keyc').addEventListener('click', (clickC)=>{
    let kayElemnt = document.querySelector(`#keyc`)
    if(kayElemnt){
        kayElemnt.classList.add('active')
        

        setTimeout(()=>{
            kayElemnt.classList.remove('active')
        }, 200)
    }
})

//kay c acima

//input a baixo 

function playcompositin(songarray){
    let wait = 0

    for(let songitem of songarray){
        setTimeout(()=>{
            playSound(`key${songitem}`)
        },wait )

        wait += 250
    }
}
