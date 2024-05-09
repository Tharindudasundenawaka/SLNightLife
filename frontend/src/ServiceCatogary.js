import food from "../src/Pic/fnb.jpg";
import Entertainment from "../src/Pic/entertainment.jpeg";
import Health from "../src/Pic/helth.jpeg";
import Residences from "../src/Pic/residences.jpg";
import groceries from "../src/Pic/groceries.jpg";
import Transportation from "../src/Pic/transportation.jpg";
import parking from "../src/Pic/parking.jpg";



const category = [
    {
      name: "Food and beverage",
      path: "",
      image: food ,
    },
    {
      name: "Entertainment",
      // path: "categoryWoodPaint",
      image: Entertainment,
    },
    {
      name: "Health",
      // path: "categoryWax",
      image: Health,
    },
    {
      name: "Residences",
      // path: "categoryOthers",
      image: Residences,
    },
    { name: "Groceries",
      // path: "categoryOthers",
      image: groceries,
    },
    { name: "Transportation",
      // path: "categoryOthers",
      image: Transportation,
    },
    { name: "Vehicle parking slots",
      // path: "categoryOthers",
      image: parking,
    },
  ];

  export default category;