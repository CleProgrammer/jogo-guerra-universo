const c = (cl)=>document.querySelector(cl)

let placar = 0
let checkIfTheGameOver = false
let numFire = 0

let positionsX = [30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330, 360, 390, 420, 450]
let posBoxPlayerX = 0

let numTimes = 50
let checkPositionFire = []
let positionBoxAdd = []
let numBox = [0,0,0]
let numBox2 = []
for(let i = numTimes; i >= 0; i--) {
    checkPositionFire[i] = [0, 0, 0]
    positionBoxAdd[i] = [0, 0]
    numBox2 = [0]
}

let positionPrincipalBox1 = [0, 420]

let positionMouseX = 0

//AddBox
function addBox() {
    if(numBox[0] === 0) {
        let newDiv = document.createElement('div')
        newDiv.classList.add(`box-add${numBox2[0]}`)
        let newImg = document.createElement('img')
        newImg.src = '/images/naveInimiga1.png' 
        c('.principal-box .father-player-box').appendChild(newDiv)
        c(`.principal-box .box-add${numBox2[0]}`).appendChild(newImg)
        c(`.principal-box .box-add${numBox2[0]} img`).style.width = '100px'
        c(`.principal-box .box-add${numBox2[0]}`).style.width = '30px'
        c(`.principal-box .box-add${numBox2[0]}`).style.height = '30px'
        c(`.principal-box .box-add${numBox2[0]}`).style.position = 'absolute'
        positionBoxAdd[numBox2[0]][0] = positionsX[Math.floor(Math.random()*positionsX.length)]
        posBoxPlayerX = positionBoxAdd[numBox2[0]][0]
        positionBoxAdd[numBox2[0]][1] = -30
        numBox2[0] ++
        numBox[0] ++
        positionAddBox()
    }
}

function addBox2() {
    if(numBox[1] === 0) {
        let newDiv = document.createElement('div')
        newDiv.classList.add(`box-add${numBox2[0]}`)
        let newImg = document.createElement('img')
        newImg.src = '/images/naveInimiga2.png'
        c('.principal-box .father-player-box').appendChild(newDiv)
        c(`.principal-box .box-add${numBox2[0]}`).appendChild(newImg)
        c(`.principal-box .box-add${numBox2[0]} img`).style.width = '70px'
        c(`.principal-box .box-add${numBox2[0]}`).style.width = '30px'
        c(`.principal-box .box-add${numBox2[0]}`).style.height = '30px'
        c(`.principal-box .box-add${numBox2[0]}`).style.position = 'absolute'
        positionBoxAdd[numBox2[0]][0] = positionsX[Math.floor(Math.random()*positionsX.length)]
        posBoxPlayerX = positionBoxAdd[numBox2[0]][0]
        positionBoxAdd[numBox2[0]][1] = -30
        numBox2[0] ++
        numBox[1] ++
        positionAddBox()
    }
}

function addBox3() {
    if(numBox[2] === 0) {
        let newDiv = document.createElement('div')
        newDiv.classList.add(`box-add${numBox2[0]}`)
        let newImg = document.createElement('img')
        newImg.src = '/images/naveInimiga3.png'
        c('.principal-box .father-player-box').appendChild(newDiv)
        c(`.principal-box .box-add${numBox2[0]}`).appendChild(newImg)
        c(`.principal-box .box-add${numBox2[0]} img`).style.width = '70px'
        c(`.principal-box .box-add${numBox2[0]}`).style.width = '30px'
        c(`.principal-box .box-add${numBox2[0]}`).style.height = '30px'
        c(`.principal-box .box-add${numBox2[0]}`).style.position = 'absolute'
        positionBoxAdd[numBox2[0]][0] = positionsX[Math.floor(Math.random()*positionsX.length)]
        posBoxPlayerX = positionBoxAdd[numBox2[0]][0]
        positionBoxAdd[numBox2[0]][1] = -30
        numBox2[0] ++
        console.log(numBox2[0])
        numBox[2] ++
        positionAddBox()
    }
}

function positionAddBox() {
    if(c(`.principal-box .box-add${numBox2[0] - 1}`)) {
        c(`.principal-box .box-add${numBox2[0] - 1}`).style.marginLeft = `${posBoxPlayerX}px`
        for(let i = 0; i <= numTimes; i++) {
            if(c(`.principal-box .box-add${i}`)) {
                c(`.principal-box .box-add${i}`).style.marginTop = `${positionBoxAdd[i][1]}px`
            }   
        }
    }
}


//AddFire
function addFire() {
        let newDiv = document.createElement('div')
        newDiv.classList.add(`box-fire${numFire}`)
        let newImg = document.createElement('img')
        newImg.src = '/images/tiro.png'
        c('.principal-box .father-player-box').appendChild(newDiv)
        c(`.principal-box .box-fire${numFire}`).appendChild(newImg)
        c(`.principal-box .box-fire${numFire} img`).style.width = '10px'
        c(`.principal-box .box-fire${numFire} img`).style.height = '30px'
        c(`.principal-box .box-fire${numFire}`).style.position = 'absolute'
        numFire ++
        checkPositionFire[numFire-1][2] = 420
}

function positionAddBoxFire() {
    if(c(`.principal-box .box-fire${numFire-1}`)) {
        if(checkPositionFire[numFire-1][0] === 0) {
            c(`.principal-box .box-fire${numFire-1}`).style.marginLeft = `${positionPrincipalBox1[0] + 30}px`
            checkPositionFire[numFire-1][0] = 1
            checkPositionFire[numFire-1][1] = positionPrincipalBox1[0]
        }
        for(let i = 0; i <= numTimes; i++) {
            if(c(`.principal-box .box-fire${i}`)) {
                c(`.principal-box .box-fire${i}`).style.marginTop = `${checkPositionFire[i][2]}px`
            }   
        }
        }
}

function clickToFire() {
    document.body.addEventListener('click', ()=>{
        let audioRandomFire = [Math.floor(Math.random()*4)]
        let audioFire = document.createElement('audio')
        audioFire.src = `/audio/tiroNavePlayer${audioRandomFire}.mp3`
        audioFire.play()
        addFire()
        if(numFire === 20) {
            for(let i = 0; i <= numTimes; i++) {
                checkPositionFire[i][0] = 0
            }
            numFire = 0
        }
    })
}

//positionPrincipalBox
function positionPrincipalBox() {
    c('.principal-box').addEventListener('mousemove', (e)=>{
        if(e.clientX - 419 > positionMouseX) {
            if(positionPrincipalBox1[0] >= 480) {
                positionPrincipalBox1[0] = 480
            } else {
                positionPrincipalBox1[0] = e.clientX - 419
            }
            c('.principal-box .player-box').style.marginLeft = `${positionPrincipalBox1[0]}px`
            positionMouseX = e.clientX - 419
        } else if(e.clientX - 419 < positionMouseX) {
            if(positionPrincipalBox1[0] <= 0) {
                positionPrincipalBox1[0] = 0
            } else {
                positionPrincipalBox1[0] = e.clientX - 419
            }
            c('.principal-box .player-box').style.marginLeft = `${positionPrincipalBox1[0]}px`
            positionMouseX = e.clientX - 419
        }
    })
}


//Deletar box quando tiro acertar
function deleteBoxAdd() {
    for(let i = 0; i <= numTimes; i++) {
        if(c(`.principal-box .box-fire${i}`)) {
            if(checkPositionFire[i][2] < 0) {
                c(`.principal-box .box-fire${i}`).remove()
            }
        } 

        if(c(`.principal-box .box-fire${i}`)) {
            for(let k = 0; k <= numTimes; k++) {
                if(checkPositionFire[i][2] - positionBoxAdd[k][1] <= 25 && checkPositionFire[i][1] - positionBoxAdd[k][0] <= 40 && positionBoxAdd[k][0] - checkPositionFire[i][1] <= 10) {
                    if(c(`.principal-box .box-add${k}`)) {
                        c(`.principal-box .box-fire${i}`).remove()
                        c(`.principal-box .box-add${k}`).remove()

                        let audioDeleteBox = document.createElement('audio')
                        audioDeleteBox.src = `/audio/eliminarNaveInimiga.mp3`
                        audioDeleteBox.play()

                        placar ++

                        c('.placar').innerHTML = placar
                        if(placar === 5) {
                            let OthersAddBox2 = setInterval(()=>{
                                addBox2()
                                numBox[1] = 0
                                if(checkIfTheGameOver === true) {
                                    clearInterval(OthersAddBox2)
                                }
                            }, 2000)
                        }
                        if(placar === 10) {
                            let OthersAddBox3 = setInterval(()=>{
                                addBox3()
                                numBox[2] = 0
                                if(checkIfTheGameOver === true) {
                                    clearInterval(OthersAddBox3)
                                }
                            }, 1000)
                        }
                    }
                }
            }
            
        }
    }
}

//winOrLess
function winOrLess() {
    deleteBoxAdd()

    let lifes = 3
    for(let i = 0; i <= numTimes; i++) {
        if(positionBoxAdd[i][1] === 420) {
            lifes --
            if(c(`.principal-box .box-add${i}`)) {
                c(`.principal-box .box-add${i}`).remove()
                c('.num-lifes').innerHTML = lifes
            } else if(lifes === 0) {
                let audioExplosao = document.createElement('audio')
                audioExplosao.src = '/audio/explosao.mp3'
                audioExplosao.play()
                clearInterval(intervalAddBox)
                clearInterval(intervalFire)
                clearInterval(OthersAddBox)
                let newImg = c('.principal-box .player-box img')
                newImg.src = '/images/explosao.png'
                c('.reload').style.display = 'block'
                c('.reload').style.display = 'flex'
                c('.reload').addEventListener('click', ()=>{
                    location.reload()
                })
                checkIfTheGameOver = true
            }  
        }
    }
}

//Starting Game
let startNumbers = [3,2,1]
let intervalStart = setInterval(()=>{
    c('.starting-game').innerHTML = startNumbers[0]
    startNumbers.shift()
    if(startNumbers.length === 0) {
        clearInterval(intervalStart)
        setTimeout(()=>{
            c('.starting-game').remove()
        },700)
    }
}, 700)


//Atirar
clickToFire()

//Movimentar Player
positionPrincipalBox()

let intervalFire = setInterval(function() {
    for(let i = 0; i <= numTimes; i++) {
        checkPositionFire[i][2] -= 1
    }
    positionAddBoxFire()
}, 1)

let OthersAddBox = setInterval(()=>{
    addBox()
    numBox[0] = 0
}, 3000)

let intervalAddBox = setInterval(function() {
    for(let i = 0; i <= numTimes; i++) {
        if(c(`.principal-box .box-add${i}`)) {
            positionBoxAdd[i][1] += 1
        } 
    }
    positionAddBox()
    if(numBox2[0] === 20) {
        numBox2[0] = 0
    }
    winOrLess()
},10)
