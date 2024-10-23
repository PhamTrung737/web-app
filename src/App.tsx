import React, { useEffect, useRef, useState } from "react";
import ImageOverlayCollage from "./components/image";
import { Affix, AffixRef, Col, Row } from "antd";
import SelectOption, { OptionProps } from "./components/selectOption";
import { listAccessories, listBackgrounds, listEars, listEyes, listHairs, listLegs, listMouths, listNecks } from "./components/roots/option";

const App: React.FC = () => {
  const [found,setFound] = useState<number>(1)
  const [background,setBackgroud] = useState<string>(listBackgrounds[0].url)
  const [images,setImg] = useState<string[]>(
    [
      listEars[0].url,
      listNecks[0].url,
      listHairs[0].url,
      listAccessories[0].url,
      listEyes[0].url,
      "public/alpaca/nose.png",
      listMouths[0].url,
      listLegs[0].url,
    ]
  )
  const affixRef = useRef<AffixRef>(null);

  const handleDownload = () => {
   
  };
  const customImage = ()=>{
      setFound(found+1)
  }
  const getInputImage = (value:OptionProps)=>{
    const newBg = value.backgrounds
    setBackgroud(newBg)
    const newImages = [...images]
    newImages[0] = value.ears
    newImages[1] = value.neck
    newImages[2] = value.hair
    newImages[3] = value.accessories
    newImages[4] = value.eyes
    newImages[5] = value.body
    newImages[6] = value.mouth
    newImages[7] = value.leg
    setImg(newImages)
  }

  return (
    
    <div className="container mx-auto my-32 ">
      <Row gutter={20}>
      <Col span={12}>
      <Affix ref={affixRef} offsetTop={0}>
      <ImageOverlayCollage
        onDownload={handleDownload}
        onCustom={customImage}
        backgroundImage={background}
        images={images}
        canvasWidth={600}
        canvasHeight={400}
      />
      </Affix>
      
      </Col>
      <Col span={12}>
      <SelectOption custom={found} getInput={getInputImage}/>
      </Col>
    </Row>
    </div>
  );
};

export default App;

