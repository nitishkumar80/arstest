// import React, { useEffect, useState } from "react";
// import Container from "../../../Components/Container/Container";
// import SectionHeader from "../../../Components/SectionHeader/SectionHeader";
// import ProgramCard from "./ProgramCard";
// import FadeInAnimation from "../../../Components/FadeInAnimation/FadeInAnimation";

// const SportsProgrammes = () => {
//   const [programmes,setProgrammes] = useState([]);
//   const [showAllProgrammes,setShowAllProgrammes] = useState(false);

//   /* fetch data from json file */
//   useEffect(()=>{
//     fetch('programmes.json')
//       .then(res=>res.json())
//       .then(data=> setProgrammes(data))
//   },[])

//   /* show only 6 data first */
//   const visibleProgrammes= showAllProgrammes ? programmes : programmes.slice(0,6);
//   const handleSeeMore =()=>{
//     setShowAllProgrammes(true);
//   }

//   return (
//     <div className="dark:bg-gray-800 pb:10 md:pb-20" id="programmes">
//       <Container>
//         <SectionHeader heading={"Our Sports Programmes"} />
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//           {visibleProgrammes.map((program, index) => (
//             <FadeInAnimation custom={index} key={program.id}>
//               <ProgramCard program={program}>

            
//               </ProgramCard>
//             </FadeInAnimation>
//           ))}
//         </div>
//         <FadeInAnimation custom={1}>
//           <div className="text-center">
//             {!showAllProgrammes && (
//               <button
//                 className="btn bg-amber-500 hover:bg-amber-600 mt-8 text-white border-0 transition-transform transform hover:scale-95"
//                 onClick={handleSeeMore}
//               >
//                 See More
//               </button>
//             )}
//           </div>
//         </FadeInAnimation>
//       </Container>
//     </div>
//   );
// };

// export default SportsProgrammes;
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Container from "../../../Components/Container/Container";
import SectionHeader from "../../../Components/SectionHeader/SectionHeader";
import ProgramCard from "./ProgramCard";
import FadeInAnimation from "../../../Components/FadeInAnimation/FadeInAnimation";

const SportsProgrammes = ({ searchQuery }) => {
  const [programmes, setProgrammes] = useState([]);
  const [showAllProgrammes, setShowAllProgrammes] = useState(false);

  /* Fetch data from JSON file */
  useEffect(() => {
    fetch("programmes.json")
      .then((res) => res.json())
      .then((data) => setProgrammes(data))
      .catch((err) => console.error("Error fetching programs:", err));
  }, []);

  /* Filter programs based on search query */
  const filteredProgrammes = searchQuery
    ? programmes.filter((program) =>
        program.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : programmes;

  const visibleProgrammes = showAllProgrammes
    ? filteredProgrammes
    : filteredProgrammes.slice(0, 6);

  const handleSeeMore = () => {
    setShowAllProgrammes(true);
  };

  return (
    <div className=" dark:bg-gray-700 bg-[#68a9d3]  text-gray-700 pb-10 md:pb-20" id="programmes">
      <Container>
        <SectionHeader heading={" Sports"} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {visibleProgrammes.map((program, index) => (
            <FadeInAnimation custom={index} key={program.id}>
              <ProgramCard program={program}>
                <Link
                  to={`/program/${program.id}`}
                  className="btn bg-amber-500 hover:bg-amber-600 mt-4 text-white border-0 transition-transform transform hover:scale-95"
                >
                  View Details
                </Link>
              </ProgramCard>
            </FadeInAnimation>
          ))}
        </div>

        {/* See More button */}
        <FadeInAnimation custom={1}>
          <div className="text-center">
            {!showAllProgrammes && (
              <button
                className="btn bg-amber-500 hover:bg-amber-600 mt-8 text-white border-0 transition-transform transform hover:scale-95"
                onClick={handleSeeMore}
              >
                See More
              </button>
            )}
          </div>
        </FadeInAnimation>
      </Container>
    </div>
  );
};

export default SportsProgrammes;
