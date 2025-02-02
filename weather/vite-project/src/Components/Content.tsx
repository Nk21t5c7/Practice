import React, { useEffect, useState } from "react";

const Content: React.FC = () => {
  const [lat, setLat] = useState<number | null>(null);
  const [long, setLong] = useState<number | null>(null);

  useEffect(() => {
    const weatherdata = async () =>{

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((pos) => {
                setLat(pos.coords.latitude);
                setLong(pos.coords.longitude);
                
                const data = await(
                    fetch("/current-weather", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({ lat: lat, long: long }),
                    });
                    
                );
                
            });
        }
    };
    weatherdata();
    }, []);

  return <></>;
};

export default Content;
