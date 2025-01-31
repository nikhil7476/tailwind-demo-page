// import { useState } from "react";
// import DummyCards from "@/components/Cards";

// export default function Home() {
//   const [search, setSearch] = useState("");

//   return (
//     <div className="h-screen p-8 flex flex-col justify-between">
//       {/* Search Bar Section */}
//       <div className="max-w-screen-lg mx-auto w-full">
//         <div className="flex flex-col gap-4 w-full">
//           {/* Dropdown (25% width) */}
//           <select className="w-full md:w-1/4 p-3 border rounded-md bg-white">
//             <option value="">Select</option>
//             <option value="option1">Bulbasaur</option>
//             <option value="option2">Ivysaur</option>
//             <option value="option2">Venusaur</option>
//           </select>

//           {/* Search Box (50% width) */}
//           <div className="flex w-full md:w-1/2 border rounded-md overflow-hidden">
//             <input
//               type="text"
//               placeholder="🔍 Search..."
//               className="w-full p-3 focus:outline-none"
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//             />
//             <button className="bg-customgreen text-white px-6 py-3 hover:bg-customgreen">
//               Search
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Cards Component */}
//       <div className="max-w-screen-lg mx-auto mt-8 w-full flex-grow">
//         <DummyCards searchQuery={search} />
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import DummyCards from "@/components/Cards";

export default function Home() {
  const [search, setSearch] = useState("");
  const [selectedCard, setSelectedCard] = useState(""); // State to track the selected card

  // Function to handle dropdown change
  const handleSelectChange = (e) => {
    setSelectedCard(e.target.value); // Set selected card based on dropdown value
  };

  return (
    <div className="h-screen p-8 flex flex-col justify-between">
      {/* Search Bar Section */}
      <div className="max-w-screen-lg mx-auto w-full">
        <div className="flex flex-col gap-4 w-full">
          {/* Dropdown (25% width) */}
          <select
            className="w-full md:w-1/4 p-3 border rounded-md bg-white"
            value={selectedCard}
            onChange={handleSelectChange}
          >
            <option value="">Select ...</option>
            <option value="bulbasaur">Bulbasaur</option>
            <option value="ivysaur">Ivysaur</option>
            <option value="venusaur">Venusaur</option>
          </select>

          {/* Search Box (50% width) */}
          <div className="flex w-full md:w-1/2 border rounded-md overflow-hidden">
            <input
              type="text"
              placeholder="🔍 Search..."
              className="w-full p-3 focus:outline-none"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="bg-customgreen text-white px-6 py-3 hover:bg-customgreen">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Cards Component */}
      <div className="max-w-screen-lg mx-auto mt-8 w-full flex-grow">
        <DummyCards searchQuery={search} selectedCard={selectedCard} />
      </div>
    </div>
  );
}
