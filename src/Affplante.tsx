import { useEffect, useState } from "react";
import axios from "axios";

interface Plant {
  id: number;
  name: string;
  unitprice_ati: number;
  quantity: number;
  category: string;
  rating: number;
  url_picture: string;
}

function Affplante() {
  useEffect(() => {
    axios.get("http://localhost:8082/api/plant").then((response) => {
      console.table(response.data.data);
      setTabPlants(response.data.data);
    });
  }, []);

  const [tabPlantes, setTabPlants] = useState<Plant[]>([]);

  return (
    <div>
      <div className="Tcard">
        {tabPlantes.map((tab) => (
          <div className="cardT">
            <img
              className="imgP"
              src={`http://localhost:8082/assets/${tab?.url_picture}`}
              alt=""
            />

            <p className="nomen">{tab?.name}</p>
            <p>
              category:
              <br /> {tab?.category}
            </p>
            <p className="price">
              prix unitaire:
              <br /> {tab?.unitprice_ati} €
            </p>
            <p>quantity:{tab?.quantity}</p>
            <p>rating:{tab?.rating}</p>
            <p>id: {tab?.id}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Affplante;
