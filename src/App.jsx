import { useEffect, useRef } from "react";
import "./App.css";
import fondoExtremo from "../src/assets/fondo.png";
import fondoExtremoTop from "../src/assets/fondo2.png";
import iglesia from "../src/assets/iglesia.png";
import brindis from "../src/assets/brindis.png";
import calendario from "../src/assets/calendario.png";
import dress from "../src/assets/dress.png";
import gift from "../src/assets/gift.png";
import rings from "../src/assets/rings.png";
import tuxedo from "../src/assets/tuxedo.png";
import Reproductor from "./components/Reproductor";
function App() {
  useEffect(() => {
    // Función para cargar el script de TickCounter
    const loadTickCounterScript = () => {
      const script = document.createElement("script");
      script.id = "tickcounter-sdk";
      script.src = "//www.tickcounter.com/static/js/loader.js";
      script.async = true;
      document.body.appendChild(script);
    };

    // Verificar si el script ya está cargado para evitar duplicados
    if (!document.getElementById("tickcounter-sdk")) {
      loadTickCounterScript();
    }

    // Limpiar el script cuando el componente se desmonte
    return () => {
      const script = document.getElementById("tickcounter-sdk");
      if (script) {
        document.body.removeChild(script);
      }
    };
  }, []);
  return (
    <div className="container">
      <div
        style={{
          backgroundImage: `url(${fondoExtremoTop})`,
          backgroundRepeat: "repeat-x",
          height: "100px",
          backgroundSize: "auto 100px",
        }}
      ></div>
      <div className="primerbloque">
        <p className="great-vibes-regular">Nuestro Matrimonio</p>
        <label className="alice-regular">STALYN</label>
        <div
          style={{
            display: "flex",
            gap: 5,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ width: "40px" }}>
            <hr />
          </div>
          <p className="great-vibes-regular">Y</p>
          <div style={{ width: "40px" }}>
            <hr />
          </div>
        </div>

        <label className="alice-regular">JHOSELYN</label>
        <p className="fraunces-playsong">Dale play para oír nuestra canción</p>
        {/* <div>
          <p>lover</p>
          <p>Taylor Swift</p>
          <div>Audio player</div>
        </div> */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            style={{
              backgroundColor: "#FBD4E8",
              borderRadius: 20,
              width: "95%",
              padding: "10px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
              }}
            >
              <div style={{ flex: 1, textAlign: "center" }}>
                <p
                  style={{
                    fontWeight: "800",
                    fontSize: "26px",
                    margin: 0,
                    color: "black",
                  }}
                >
                  Lover
                </p>
              </div>
              <div>
                <svg
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#8F5472"
                >
                  <path
                    d="M21,14 L19,14 L19,10 L21,10 L21,14 Z M17,16 L15,16 L15,8 L17,8 L17,16 Z M13,19 L11,19 L11,5 L13,5 L13,19 Z M9,16 L7,16 L7,8 L9,8 L9,16 Z M5,14 L3,14 L3,10 L5,10 L5,14 Z"
                    fillRule="evenodd"
                  />
                </svg>
              </div>
            </div>

            <p
              style={{
                fontSize: "26px",
                margin: 0,
                color: "#8F5472",
              }}
            >
              Taylor Swift
            </p>
            <div>
              <Reproductor />
            </div>
          </div>
        </div>
      </div>
      <div className="segundobloque">
        <p className="fraunces-invitacion">
          Te invitamos a nuestro matrimonio que
          <br /> se celebrará el próximo
        </p>
        <p className="fraunces-fecha">21 de SETIEMBRE, 2024</p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 5,
            marginBottom: 50,
            marginLeft: 5,
            marginRight: 5,
          }}
        >
          <div>
            <div style={{ height: "350px" }}>
              <p className="fraunces-texto1">CEREMONIA</p>
              <img src={iglesia} alt="iglesia" className="iconos" />
              <p className="fraunces-texto2">12:30 PM</p>
              <p className="fraunces-texto2">IGLESIA</p>
              <p className="fraunces-texto1">
                SEÑOR DE LA DIVINA
                <br /> MISERICORDIA
              </p>
              <p className="fraunces-texto2">
                Av. CAMINOS DEL INCA
                <br /> CDRA 21, SANTIAGO DE
                <br /> SURCO
              </p>
            </div>

            <button
              style={{ width: "150px" }}
              className="btn"
              onClick={() => {
                window.open(
                  "https://maps.app.goo.gl/ouVLrrYdSLEc1cm26",
                  "_blank"
                );
              }}
            >
              VER MAPA
            </button>
          </div>
          <div>
            <div style={{ height: "350px" }}>
              <p className="fraunces-texto1">RECEPCIÓN</p>
              <img src={brindis} alt="brindis" className="iconos" />
              <p className="fraunces-texto2">2:30 PM</p>
              <p className="fraunces-texto2">LOCAL</p>
              <p className="fraunces-texto1" style={{ height: "35px" }}>
                VILLA TRES REINAS
              </p>
              <p className="fraunces-texto2">PACHACAMAC</p>
            </div>

            <button
              className="btn"
              style={{ width: "150px" }}
              onClick={() => {
                window.open(
                  "https://maps.app.goo.gl/Hd5EYF8HFy5yBAy66",
                  "_blank"
                );
              }}
            >
              VER MAPA
            </button>
          </div>
        </div>
        <p className="great-vibes-regular">Faltan:</p>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: 45,
          }}
        >
          <div style={{ width: 300 }}>
            {/* Aquí está el marcador de posición para el contador de TickCounter */}
            <a
              data-type="countdown"
              data-id="5497001"
              className="tickcounter"
              style={{
                display: "block",
                left: 0,
                width: "100%",
                top: -25,
                height: 0,
                position: "relative",
                paddingBottom: "25%",
                margin: "0 auto",
              }}
              title="My countdown"
              href="//www.tickcounter.com/"
            >
              My countdown
            </a>
            <div
              style={{
                width: 300,
                display: "flex",
                marginLeft: "12px",
                marginTop: -20,
              }}
            >
              <label className="fraunces-fecha" style={{ marginRight: "25px" }}>
                Días
              </label>
              <label className="fraunces-fecha" style={{ marginRight: "25px" }}>
                Horas
              </label>
              <label className="fraunces-fecha" style={{ marginRight: "38px" }}>
                Min
              </label>
              <label className="fraunces-fecha">Seg</label>
            </div>
          </div>
        </div>
      </div>
      <div className="tercerbloque">
        <div>
          <img src={dress} alt="dress" className="iconos" />
          <img src={tuxedo} alt="tuxedo" className="iconos" />
        </div>

        <p className="fraunces-texto1">DRESS CODE</p>
        <p className="fraunces-texto2">BODA DE JARDÍN</p>
        <p className="fraunces-texto2">
          PREPARENSE PARA UNA BODA <br className="fraunces-texto2" /> LLENA DE
          COLORES, DEJEN <br className="fraunces-texto2" /> EL BLANCO PARA LA
          NOVIA
        </p>
        <img src={gift} alt="gift" className="iconos" />
        <p className="fraunces-texto2">
          SI DESEAS HACERNOS UN{" "}
          <label style={{ fontWeight: "bold" }}>PRESENTE</label>,
          <br className="fraunces-texto2" /> PUEDES CONTRIBUIR A NUESTRA FUTURA
          <br className="fraunces-texto2" /> VIDA JUNTOS. TE DEJAMOS LAS
          <br className="fraunces-texto2" />
          SIGUIENTES OPCIONES:
        </p>
        <p className="fraunces-texto2">
          YAPE/PLIN <br className="fraunces-texto2" />
          994 690 902
          <br className="fraunces-texto2" /> JOSÉ STALYN CARTULIN RIVERA
        </p>
        <p className="fraunces-texto2">
          BCP <br className="fraunces-texto2" /> 19394683974075
          <br className="fraunces-texto2" /> CCI: 00219319468397407513
          <br className="fraunces-texto2" /> JHOSELYN EDITH VARGAS AGUIRRE
        </p>
        <p className="fraunces-texto2">
          DIRECCIÓN PARA REGALOS
          <br className="fraunces-texto2" /> JR. PACASMAYO 267 - VMT
        </p>
        <img src={rings} alt="rings" className="iconos" />
        <p
          className="fraunces-texto2"
          style={{ fontStyle: "italic", fontSize: "20px" }}
        >
          Con gran ilusión, deseamos
          <br
            className="fraunces-texto2"
            style={{ fontStyle: "italic", fontSize: "20px" }}
          />
          compartir este momento único
          <br
            className="fraunces-texto2"
            style={{ fontStyle: "italic", fontSize: "20px" }}
          />
          rodeados de aquellos que han sido{" "}
          <br
            className="fraunces-texto2"
            style={{ fontStyle: "italic", fontSize: "20px" }}
          />
          parte fundamental de nuestra{" "}
          <br
            className="fraunces-texto2"
            style={{ fontStyle: "italic", fontSize: "20px" }}
          />
          historia.
        </p>
        <p
          className="fraunces-texto2"
          style={{ fontStyle: "italic", fontSize: "20px", marginTop: 30 }}
        >
          Será un honor contar con su{" "}
          <br
            className="fraunces-texto2"
            style={{ fontStyle: "italic", fontSize: "20px" }}
          />
          presencia.
        </p>
        {/* <p
          className="great-vibes-regular"
          style={{
            color: "#eeaec9",
            fontSize: "60px",
            letterSpacing: "4px",
            fontWeight: "500",
            marginTop: 0,
            marginBottom: 0,
          }}
        >
          Confirmar Asistencia
        </p> */}
        <p
          className="alice-regular"
          style={{
            fontWeight: "600",
            letterSpacing: "3px",
            color: "#EEAEC9",
            fontStyle: "italic",
          }}
        >
          Confirmar Asistencia
        </p>
        <p
          className="fraunces-texto2"
          style={{ fontSize: "16px", fontWeight: "600" }}
        >
          POR FAVOR, CONFIRMAR ANTES DEL
          <br className="fraunces-texto2" style={{ fontSize: "16px" }} />
          20 DE AGOSTO
        </p>
        <img />
        <button
          className="btn"
          onClick={() => {
            window.open("https://wa.link/niob5o", "_blank");
          }}
        >
          CONFIRMAR AQUI
        </button>
        <p
          className="alice-regular"
          style={{ fontWeight: "600", letterSpacing: "3px" }}
        >
          TE ESPERAMOS!
        </p>
      </div>
      <div
        style={{
          backgroundImage: `url(${fondoExtremo})`,
          backgroundRepeat: "repeat-x",
          height: "100px",
          backgroundSize: "auto 100px",
        }}
      ></div>
    </div>
  );
}

export default App;
