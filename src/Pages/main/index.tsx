import { useEffect, useState} from 'react';
import Selector from '../../components/Selector';

import './style.scss'

export interface Items {
  lamps: [
    {
      id: number;
      material: string;
      dimensions: string;
      weight: string;
      electrification: string;
      img: {
          small: string;
          medium: string;
          wide: string;
      };
    }
  ]
}

const index = () => {
  const [data, setData] = useState<Items>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const [active, setActive] = useState<number>(2);
  const [lightOn, setLightOn] = useState<boolean>(false);

  const getItems = async () => {
    try {
    await fetch('data.json')
    .then((response) => {
      return response.json();
    })
    .then((myJson) => {
      setIsLoading(false)
      setData(myJson)
    });
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
      console.log(error);
    }
  };

  useEffect(() => {
    getItems()
  }, [])
  
    if (isLoading) return <div>Loading...</div>;

    return (
        <main>
            <div className='left_side'>
              <div className="text">
                <p>Collection of lighting is inspired by the geometric works of the great Suprematist artists Kissitzky and Kazimir Malevich. 
                </p>    
                <p>Suprematism is a modernist movement in the art of the early twentieth century, focused on the basic geometric forms, such as circles, squares, lines and rectangles. The geometric structure of the lamps will always look like a small art objects in your house.</p>
              </div>
              <Selector 
                data={data} 
                active={active}
                setActive={setActive}
                lightOn={lightOn}
                setLightOn={setLightOn}
                />
            </div>
            <div className={`right-side ${lightOn ? "night" : "day"}`}>
              <div className={`lamp__selected ${data.lamps[active].material}`}>
                  <img src={data.lamps[active].img.medium} alt="" />
              </div>
            </div>
        </main>
    );
};

export default index;