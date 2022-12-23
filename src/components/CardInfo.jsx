import React from 'react'

export const CardInfo = (props) => {
  return (
    <div className="text-center shadow-lg p-10 rounded-xl my-10">
        <img className="mx-auto" src={props.image} alt="Design" width={100} height={100}/>
        <h3 className="text-lg font-medium pt-8 pb-2">{props.title}</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur fuga odit quaerat veritatis. Nihil repellat libero fugiat pariatur consequuntur, iure fuga veniam error quo dolorem sapiente vel ipsa saepe cumque.</p>
        <h4 className="py-4 text-teal-600">Design tools I use </h4>
        <p className="text-gray-800 py-1">Photoshop</p>
        <p>Illustrator</p>
        <p>Figma</p>
    </div>
  )
}