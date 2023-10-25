import React, { useState } from "react";
import './budget.css';
import TotalCostModal from "../components/TotalCostModal"; 
function BudgetCalculator() {
  
  const [location, setLocation] = useState("");
  const [guests, setGuests] = useState(0);
  const [venue, setVenue] = useState("type");
  const [decoration, setDecoration] = useState("type");
  const [cateringType, setCateringType] = useState("type");
  const [cateringOption, setCateringOption] = useState("veg");
  const [supplementaryService, setSupplementaryService] = useState("type");
  const [totalCost, setTotalCost] = useState(0);
  const [showModal, setShowModal] = useState(false);

  
  const handleGuestsChange = (event) => {
    setGuests(event.target.value);
  };
  
  const handleCloseModal = () => {
    setShowModal(false);
  };
  const calculateCost = () => {
    let dcost = 0;
    let ccost = 0;
    let scost = 0;
    let vcost = 0;

    if (venue === "ban") {
      vcost = 50000;
    } else if (venue === "bi") {
      vcost = 50000;
    } else if (venue === "lf") {
      vcost = 50000;
    }else if (venue === "pw") {
      vcost = 50000;
    }


    if (decoration === "classic") {
      dcost = 100000;
    } else if (decoration === "med") {
      dcost = 200000;
    } else if (decoration === "roy") {
      dcost = 300000;
    }

    if (cateringType === "ba") {
      if (cateringOption === "veg") {
        ccost = guests * 150;
      } else if (cateringOption === "non") {
        ccost = guests * 200;
      } else if (cateringOption === "nv") {
        ccost = guests * 250;
      }
    } else if (cateringType === "buff") {
      if (cateringOption === "veg") {
        ccost = guests * 200;
      } else if (cateringOption === "non") {
        ccost = guests * 250;
      } else if (cateringOption === "nv") {
        ccost = guests * 300;
      }
    }

    if (supplementaryService === "dj") {
      scost = 50000;
    } else if (supplementaryService === "pot") {
      scost = 40000;
    } else if (supplementaryService === "invi") {
      scost = guests * 15;
    }
    else if (supplementaryService === "sty") {
      scost = 50000;
    }

    const tcost = dcost + ccost + scost + vcost;
    setTotalCost(tcost);
    setShowModal(true);
  };

  return ( 
    <div className="budjet">
    <div className="center-container my-5">
      <div className="div1"  id="calculator-container">
        <h3 style={{fontSize:"18px"}}>Estimate your budget here!</h3>
        <form>
  <div className="grid-containerB">
    <div className="grid-itemB">
    <div className="mb-3">
            <input
              type="text"
              className="form-control"
              style={{fontSize:"13px"}}
              placeholder="Location of the wedding"
              value={location}
              onChange={(e) => setLocation(e.target.value)}/>
          </div>
    </div>
    <div className="grid-itemB"> 
    <div className="mb-3">
          <select className="form-select" value={venue} onChange={(e) => setVenue(e.target.value)}>
              <option value="type">--Venue Type--</option>
              <option value="ban">Banquet Hall</option>
              <option value="bi">Beaches & islands</option>
              <option value="lf">Lawns & farmland</option>
              <option value="pw">Places of worship</option>
            </select>
          </div>
    </div>
</div>
         
         
          <div className="mb-3">
           <p style={{fontSize:"14px"}} >How many guests will attend the event (approximately)?</p>
            
            <input type="range" min="0" max="5000" step="100" className="form-control" value={guests} onChange={handleGuestsChange} />
            <h5> Max guests :&emsp;<span id="curr">{guests}</span></h5>
          </div>
          <div className="mb-3">
           <select className="form-select" value={decoration} onChange={(e) => setDecoration(e.target.value)}>
              <option value="type">--Decoration Type--</option>
              <option value="classic">Classic</option>
              <option value="med">Medium</option>
              <option value="roy">Royal</option>
            </select>
          </div><br/>
          <div className="mb-3">
            Catering
            <input 
              type="radio"
              value="veg"
              id="v"
              checked={cateringOption === "veg"}
              onChange={() => setCateringOption("veg")}
            />Veg
            <input
              type="radio"
              value="non"
              id="n"
              checked={cateringOption === "non"}
              onChange={() => setCateringOption("non")}
            />Non-veg
            <input
              type="radio"
              value="nv"
              id="nv"
              checked={cateringOption === "nv"}
              onChange={() => setCateringOption("nv")}
            />Veg and Non-veg 
            <br/>
            <br/><select
              className="form-select"
              value={cateringType}
              onChange={(e) => setCateringType(e.target.value)}
            >
              <option value="type">--Catering Type--</option>
              <option value="ba">Basic</option>
              <option value="buff">Buffet</option>
            </select>
          </div><br/>
          <div className="mb-3">
             <select className="form-select" value={supplementaryService} onChange={(e) => setSupplementaryService(e.target.value)}>
              <option value="type">--Supplementry Services--</option>
              <option value="dj">DJ services</option>
              <option value="pot">Photography</option>
              <option value="invi">Web Invitations</option>
              <option value="sty">Styling</option>
            </select>
          </div><br/>
          <button type="button" className="btn btn-primary" onClick={calculateCost}>Estimate</button><br/>
          {showModal && (
            <TotalCostModal totalCost={totalCost} onClose={handleCloseModal} />
          )}
          
        </form>
      </div>
    </div>
    </div>
  );
}

export default BudgetCalculator;
