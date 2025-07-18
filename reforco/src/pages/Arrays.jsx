import React from 'react'

export default function Arrays() {

    let number = ['ana', 'pedro', 'gabriel', 'nixolas']

    let mix = ['MIX', 12, 200, true]

    number.push(1)

    number.slice(1)

    console.log(number)

    let pos = 2

    let posElement

    let i

    mix.splice(pos, 1 ,'janete')
    console.log(mix)

    for( i=0; i < number.length; i++){

        if ( number[i] === "gabriel" ){
            posElement = i
        }
    }

    

  return (
    <div>
      
    </div>
  )
}
