import { useEffect, useState } from "react";
import {
  listAccessories,
  listBackgrounds,
  listEars,
  listEyes,
  listHairs,
  listLegs,
  listMouths,
  listNecks,
  Option,
  randomNumber,
} from "./roots/option";
import {  Col, Row } from "antd";

export type OptionProps = {
  ears: string;
  neck: string;
  hair: string;
  accessories: string;
  eyes: string;
  body: string;
  mouth: string;
  leg: string;
  backgrounds: string;
};
type Props ={
  custom:number,
  getInput:(value:OptionProps)=>void
}
export default function SelectOption(props:Props) {
  
  const [option, setOption] = useState<OptionProps>({
    ears: listEars[0].url,
    neck: listNecks[0].url,
    hair: listHairs[0].url,
    accessories: listAccessories[0].url,
    eyes: listEyes[0].url,
    body: "public/alpaca/nose.png",
    mouth: listMouths[0].url,
    leg: listLegs[0].url,
    backgrounds: listBackgrounds[0].url,
  });
  useEffect(()=>{
      if(props.custom>1){
        const newOption = {...option}
      newOption.ears = listEars[randomNumber(3)].url
      newOption.neck = listNecks[randomNumber(4)].url
      newOption.hair = listHairs[randomNumber(7)].url
      newOption.accessories = listAccessories[randomNumber(4)].url
      newOption.eyes = listEyes[randomNumber(6)].url
      newOption.mouth = listMouths[randomNumber(5)].url
      newOption.leg = listLegs[randomNumber(6)].url
      newOption.backgrounds = listBackgrounds[randomNumber(18)].url
      setOption(newOption)
      }
     
     
  },[props.custom])
  useEffect(()=>{props.getInput(option)},[option])
  const hendelButtonItems = (url:string,keyState:string,title:string)=>{
    switch (keyState) {
        case "ears":
          return (
             <button
             className={url===option.ears?"active":""}
             onClick={()=>{
              const newOptionEars = {...option}
              newOptionEars.ears = url
              setOption(newOptionEars)
             
             }}>{title}</button>
          )
        case "neck":
          
          return <button
          className={url===option.neck?"active":""}
          onClick={()=>{
            const newOptionNeck = {...option}
            newOptionNeck.neck = url
            setOption(newOptionNeck)
           
          }}>{title}</button>
       
        case "hair":
          
          return <button
          className={url===option.hair?"active":""}
          onClick={()=>{
            const newOptionHair = {...option}
          newOptionHair.hair = url
          setOption(newOptionHair)
        
          }}>{title}</button>
         
        case "accessories":
          
          return <button
          className={url===option.accessories?"active":""}
          onClick={()=>{
            const newOptionAccess = {...option}
          newOptionAccess.accessories = url
          setOption(newOptionAccess)
          
          }}>{title}</button>
        case "eyes":
          
          return <button
          className={url===option.eyes?"active":""}
          onClick={()=>{
            const newOptionEyes = {...option}
            newOptionEyes.eyes = url
            setOption(newOptionEyes)
           
          }}>{title}</button>
        case "mouth":
          
          return <button
          className={url===option.mouth?"active":""}
          onClick={()=>{
            const newOptionMouth = {...option}
          newOptionMouth.mouth = url
          setOption(newOptionMouth)
         
          }}>{title}</button>
        case "leg":
          
          return <button
          className={url===option.leg?"active":""}
          onClick={()=>{
            const newOptionLeg = {...option}
          newOptionLeg.leg = url
          setOption(newOptionLeg)
       
          }}>{title}</button>
        case "backgrounds":
          
          return <button
          className={url===option.backgrounds?"active":""}
          onClick={()=>{
            const newOptionBg = {...option}
          newOptionBg.backgrounds = url
          setOption(newOptionBg)
          
          }}>{title}</button>
        default:
          break;
      }
}
  const handelSelect = (select: Option[], keyState: string) => {
    return (
      <Row className="justify-bettwen gap-3">
        {select.map((item: Option) => {
          return (
            <Col key={item.key}>
              {hendelButtonItems(item.url,keyState,item.title)}
            </Col>
          );
        })}
      </Row>
    );
  };
  return <div className="content__right flex flex-col gap-3">
    <h2>Background</h2>
    {handelSelect(listBackgrounds,"backgrounds")}
    <h2>Ears</h2>
    {handelSelect(listEars,"ears")}
    <h2>Neck</h2>
    {handelSelect(listNecks,"neck")}
    <h2>Accessories</h2>
    {handelSelect(listAccessories,"accessories")}
    <h2>Eyes</h2>
    {handelSelect(listEyes,"eyes")}
    <h2>Hairs</h2>
    {handelSelect(listHairs,"hair")}
    <h2>Leg</h2>
    {handelSelect(listLegs,"leg")}
    <h2>Mouth</h2>
    {handelSelect(listMouths,"mouth")}
  </div>;
}
