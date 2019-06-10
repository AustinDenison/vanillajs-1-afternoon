const board = []

function play(clickedBox){
    const clickedElement = document.getElementById(clickedBox)
    const playerSpan = document.getElementById('player')

    let boardFull = true
        if(playerSpan.innerText === 'X'){
            playerSpan.innerText = 'O'
            clickedElement.innerText = 'X'
            board[clickedBox] = 'X'
        } else{
            playerSpan.innerText = 'X'
            clickedElement.innerText = 'O'
            board[clickedBox] = 'O'
        }

        const topRight = board[2]
        const topCenter = board[1]
        const topLeft = board[0]
        const middleRight = board[5]
        const middleCenter = board[4]
        const middleLeft = board[3]
        const bottomRight = board[8]
        const bottomCenter = board[7]
        const bottomLeft = board[6]
        
        
        if(topRight !== undefined && topRight === topCenter && topRight === topLeft){
            window.alert(`${topRight} is the winner`)
        }
        if(middleRight !== undefined && middleRight === middleCenter && middleRight === middleLeft){
            window.alert(`${middleRight} is the winner`)
        }
        if(bottomRight !== undefined && bottomRight === bottomCenter && bottomRight === bottomLeft){
            window.alert(`${bottomRight} is the winner`)
        }
        if(topRight !== undefined && topRight === middleRight && topRight === bottomRight){
            window.alert(`${topRight} is the winner`)
        }
        if(topCenter !== undefined && topCenter === middleCenter && topCenter === bottomCenter){
            window.alert(`${topCenter} is the winner`)
        }
        if(topLeft !== undefined && topLeft === middleLeft && topLeft === bottomLeft){
            window.alert(`${topLeft} is the winner`)
        }
        if(topRight !== undefined && topRight === middleCenter && topRight === bottomLeft){
            window.alert(`${topRight} is the winner`)
        }
        if(topLeft !== undefined && topLeft === middleCenter && topLeft === bottomRight){
            window.alert(`${topLeft} is the winner`)
        }
        for(let i = 0; i < 9; i++){
            if(board[i] === undefined ){
                boardFull = false
            }
        } if(boardFull === true){
            window.alert('CAT')
        }
    }









