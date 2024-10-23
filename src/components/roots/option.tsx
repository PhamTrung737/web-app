export type Option = {
    key:number,
    url:string,
    title:string
}

export const listAccessories:Option[]=[
    {key:1,url:"public/alpaca/accessories/headphone.png",title:"headphone"},
    {key:2,url:"public/alpaca/accessories/earings.png",title:"earings"},
    {key:3,url:"public/alpaca/accessories/flower.png",title:"flower"},
    {key:4,url:"public/alpaca/accessories/glasses.png",title:"glasses"},
]

export const listBackgrounds:Option[]=[
    {key:1,url:"public/alpaca/backgrounds/blue50.png",title:"blue50"},
    {key:2,url:"public/alpaca/backgrounds/blue60.png",title:"blue60"},
    {key:3,url:"public/alpaca/backgrounds/blue70.png",title:"blue70"},
    {key:4,url:"public/alpaca/backgrounds/darkblue30.png",title:"darkblue30"},
    {key:5,url:"public/alpaca/backgrounds/darkblue50.png",title:"darkblue50"},
    {key:6,url:"public/alpaca/backgrounds/darkblue70.png",title:"darkblue70"},
    {key:7,url:"public/alpaca/backgrounds/green50.png",title:"green50"},
    {key:8,url:"public/alpaca/backgrounds/green60.png",title:"green60"},
    {key:9,url:"public/alpaca/backgrounds/green70.png",title:"green70"},
    {key:10,url:"public/alpaca/backgrounds/grey40.png",title:"grey40"},
    {key:11,url:"public/alpaca/backgrounds/grey70.png",title:"grey70"},
    {key:12,url:"public/alpaca/backgrounds/grey80.png",title:"grey80"},
    {key:13,url:"public/alpaca/backgrounds/red50.png",title:"red50"},
    {key:14,url:"public/alpaca/backgrounds/red60.png",title:"red60"},
    {key:15,url:"public/alpaca/backgrounds/red70.png",title:"red70"},
    {key:16,url:"public/alpaca/backgrounds/yellow50.png",title:"yellow50"},
    {key:17,url:"public/alpaca/backgrounds/yellow60.png",title:"yellow60"},
    {key:18,url:"public/alpaca/backgrounds/yellow70.png",title:"yellow70"},
] 

export const listEars:Option[] = [
    {key:1,url:"public/alpaca/ears/default.png",title:"default"},
    {key:2,url:"public/alpaca/ears/tilt-backward.png",title:"tilt-backward"},
    {key:3,url:"public/alpaca/ears/tilt-forward.png",title:"tilt-forward"},
]

export const listEyes:Option[] = [
    {key:1,url:"public/alpaca/eyes/default.png",title:"default"},
    {key:2,url:"public/alpaca/eyes/angry.png",title:"angry"},
    {key:3,url:"public/alpaca/eyes/naughty.png",title:"naughty"},
    {key:4,url:"public/alpaca/eyes/panda.png",title:"panda"},
    {key:5,url:"public/alpaca/eyes/smart.png",title:"smart"},
    {key:6,url:"public/alpaca/eyes/star.png",title:"star"},
]

export const listHairs:Option[] = [
    {key:1,url:"public/alpaca/hair/default.png",title:"default"},
    {key:2,url:"public/alpaca/hair/bang.png",title:"bang"},
    {key:3,url:"public/alpaca/hair/curls.png",title:"curls"},
    {key:4,url:"public/alpaca/hair/elegant.png",title:"elegant"},
    {key:5,url:"public/alpaca/hair/fancy.png",title:"fancy"},
    {key:6,url:"public/alpaca/hair/quiff.png",title:"quiff"},
    {key:7,url:"public/alpaca/hair/short.png",title:"short"},
]

export const listLegs:Option[] = [
    {key:1,url:"public/alpaca/leg/default.png",title:"default"},
    {key:2,url:"public/alpaca/leg/bubble-tea.png",title:"bubble-tea"},
    {key:3,url:"public/alpaca/leg/cookie.png",title:"cookie"},
    {key:4,url:"public/alpaca/leg/game-console.png",title:"game-console"},
    {key:5,url:"public/alpaca/leg/tilt-backward.png",title:"tilt-backward"},
    {key:6,url:"public/alpaca/leg/tilt-forward.png",title:"tilt-forward"},
]

export const listMouths:Option[] = [
    {key:1,url:"public/alpaca/mouth/default.png",title:"default"},
    {key:2,url:"public/alpaca/mouth/astonished.png",title:"astonished"},
    {key:3,url:"public/alpaca/mouth/eating.png",title:"eating"},
    {key:4,url:"public/alpaca/mouth/tongue.png",title:"tongue"},
    {key:5,url:"public/alpaca/mouth/laugh.png",title:"laugh"},
   
]

export const listNecks:Option[] = [
    {key:1,url:"public/alpaca/neck/default.png",title:"default"},
    {key:2,url:"public/alpaca/neck/bend-backward.png",title:"bend-backward"},
    {key:3,url:"public/alpaca/neck/bend-forward.png",title:"bend-forward"},
    {key:4,url:"public/alpaca/neck/thick.png",title:"thick"},
   
   
]


export const randomNumber =(number:number)=>{
    return Math.floor(Math.random()*number)
}