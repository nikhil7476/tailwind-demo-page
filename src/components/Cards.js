import Image from "next/image";
import Link from "next/link";

const dummyData = [
  { id: "bulbasaur", title: "Bulbasaur", image: "/baby-dragon-1.png" },
  { id: "ivysaur", title: "Ivysaur", image: "/baby-dragon-2.png" },
  { id: "venusaur", title: "Venusaur", image: "/baby-dragon-3.png" },
];

export default function DummyCards({ searchQuery, selectedCard }) {
  // Filter data by selected card and search query
  const filteredData = dummyData.filter((item) => {
    const matchesSearch = item.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesSelection = selectedCard ? item.id === selectedCard : true;
    return matchesSearch && matchesSelection; // Apply both filters
  });

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md min-h-[400px] flex flex-col" // Apply flex to avoid white space
            >
              {/* Image Section */}
              <div className="w-full p-6 flex justify-center flex-shrink-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={200} // Adjusted image width for better view
                  height={200} // Adjusted image height for better view
                  objectFit="cover" // Ensures the image fits well inside the div
                />
              </div>

              {/* Content Section */}
              <div className="p-6 bg-gray-100 grid gap-6 rounded-lg flex-grow">
                <h2 className="mt-4 font-semibold">{item.title}</h2>
                <Link
                  href={`/pokemon/${item.id}`}
                  className="text-customgreen mt-2 inline-block"
                >
                  Details →
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-3">
            No results found
          </p>
        )}
      </div>
    </>
  );
}
