import { useContext, useRef, useState } from "react";
import AppContext from "../context/appContext";
import { getCityName } from "../services/weatherService";
import geoCoords from "./GeoCords";

function CityInput() {

   const [input,setInput] = useState("");
   const {
    app: { isDark },
    dispatchApp,
  } = useContext(AppContext);
  let time;
 
  const search = async (event)=>{
    if(event.key==='Enter'){
      event.preventDefault();
      dispatchApp({type:"CITY",payload:input});
        setInput("");
    }
  }

  return  (
    <div className="input-group">
      <span
          style={isDark ? { background: "#37435a" } : null}
      >
          <i
            className="fa-solid fa-location-crosshairs location-icon"
            style={isDark ? { color: "#FFFFFF" } : null}
          ></i>
      </span>
      <i className="fa-solid fa-magnifying-glass search-icon"></i>
        <input
          type="text"
          style={isDark ? { background: "#232b39", color: "#fff" } : null}
          placeholder="Search for places ..."
          name="query"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          onKeyDown={search}
        />
    </div>
   );
  }
  
  export default CityInput;



  /*

    const input = useRef();
    const {
      app: { isDark },
      dispatchApp,
    } = useContext(AppContext);
    let time;
    return (
      <div className="input-group">
        <span
          onClick={async () => {
            const coords = await geoCoords();
            dispatchApp({
              type: "GEO_COORDS",
              payload: { lon: coords.longitude, lat: coords.latitude },
            });
            const { country, name } = await getCityName(
              coords.longitude,
              coords.latitude
            );
            dispatchApp({ type: "COUNTRY", payload: country });
            dispatchApp({ type: "CITY", payload: name });
            input.current.value = "";
          }}
          style={isDark ? { background: "#37435a" } : null}
        >
          <i
            className="fa-solid fa-location-crosshairs location-icon"
            style={isDark ? { color: "#FFFFFF" } : null}
          ></i>
        </span>
        <i className="fa-solid fa-magnifying-glass search-icon"></i>
        <input
          type="text"
          ref={input}
          style={isDark ? { background: "#232b39", color: "#fff" } : null}
          placeholder="Search for places ..."
          onInput={(e) => {
            const value = e.target.value;
            clearTimeout(time);
            time = setTimeout(() => {
              dispatchApp({ type: "CITY", payload: value });
            }, 500);
          }}
        />
      </div>
    );

  */