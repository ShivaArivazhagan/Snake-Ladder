 type Places={
    snake :{
        from:Number[],
        to:Number[]
    },
    ladder:{
        from:Number[],
        to:number[]
    }
 }
 
let placesOfSnakeLadder:Places = {
    snake:
    {
        from: [98, 96, 92, 77, 58, 53, 21],
        to: [67, 71, 52, 38, 8, 18, 15]
    },

    ladder: {
        from: [7, 12, 16, 34, 50, 69, 62, 89],
        to: [29, 49, 59, 70, 91, 87, 97, 93]
    }

}

export const snakeLadderPosition = (e:Number) => {
    if (placesOfSnakeLadder.snake.from.includes(e)) {
        return '🐍'
    }
    else if (placesOfSnakeLadder.ladder.from.includes(e)) {
        return '⚡'
    }
}

export const fromTo = (value:Number) => {
    if (placesOfSnakeLadder.ladder.from.includes(value)) {
        let index = placesOfSnakeLadder.ladder.from.indexOf(value)
        return `${value}-${placesOfSnakeLadder.ladder.to[index]}`
    } else if (placesOfSnakeLadder.snake.from.includes(value)) {
        let index = placesOfSnakeLadder.snake.from.indexOf(value)
        return `${value}-${placesOfSnakeLadder.snake.to[index]}`
    }
}

export const PlayerPosition1 = (position:Number,playerPosition1:Number) => {
    if (position===playerPosition1) {
       return "🍥"
    }
  }

export const PlayerPosition2 = (position:Number,playerPosition1:Number) => {
if (position===playerPosition1) {
    return "🧇"
}
}

export function SnakeForPlayrs(position:Number,setPosition:Function) {
    if (position === 98) {
        setPosition(67)
    } else if (position === 96) {
        setPosition(71)
    } else if (position === 92) {
        setPosition(52)
    } else if (position === 77) {
        setPosition(38)
    } else if (position === 58) {
        setPosition(8)
    } else if (position === 53) {
        setPosition(18)
    } else if (position === 21) {
        setPosition(15)
    }
    return (setPosition)
}

export const LadderForPlayers = (position:Number, setPosition:Function) => {
    if (position === 7) {
        setPosition(29)
    } else if (position === 12) {
        setPosition(49)
    } else if (position === 16) {
        setPosition(59)
    } else if (position === 34) {
        setPosition(70)
    } else if (position === 50) {
        setPosition(91)
    } else if (position === 69) {
        setPosition(87)
    } else if (position === 62) {
        setPosition(97)
    } else if (position === 89) {
        setPosition(93)
    }
    return (position)
}


