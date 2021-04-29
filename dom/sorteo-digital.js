const d = document;


export default function draw(btn, selector) {
    const getWinner = (selector) => {
        const $players = d.querySelectorAll(selector),
         random = Math.floor(Math.random()* $players.length),
         winner = $players[random];
         console.log($players,random,winner)
         $players.forEach(e => {
             if(e.textContent === winner.textContent){
                 e.style.setProperty("font-size","2.0rem");
                 e.style.setProperty("color","red");
                 setTimeout(() => {
                     e.style.setProperty("color","black");
                     e.style.setProperty("font-size","1rem");

                 }, 3000);
                }

         })

         return `El ganador es: ${winner.textContent}`
        }

        d.addEventListener("click", e => {
            if(e.target.matches(btn)){
            let result = getWinner(selector)
            alert(result);
            console.log(result);
            
        }
    })
}


// const getWinner = (selector) => {
//     const $players = d.querySelectorAll(selector),
//      random = Math.floor(Math.random()* $players.length),
//      winner = $players[random];
//      console.log($players,random,winner)

//      return `El ganador es: ${winner.textContent}`
//     }