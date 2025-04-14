// import React from "react";
// import { useNavigate } from "react-router-dom";
// import photos from "../../Asserts/Phonewall2.png";
// import Logo from "../../Componenets/Logo.jsx";
// function MainBar() {
//   const navigate = useNavigate();

//   return (
//     <div
//       className="w-screen h-screen bg-cover bg-center relative flex items-end justify-center"
//       style={{ backgroundImage: `url(${photos})` }}
//     >
//       <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-20">
//         <Logo />
//       </div>

//       <div className="w-full mb-30 px-4 z-10 flex justify-center">
//         <div className="flex gap-5 bg-white/10 backdrop-blur-md p-2 mb-5 rounded-2xl shadow-lg max-w-md w-full justify-center">
//           <div
//             className="app w-20 h-20 sm:w-24 sm:h-24 bg-white/20 backdrop-blur-md rounded-lg flex items-center justify-center shadow-md hover:scale-105 transition-all duration-300 cursor-pointer"
//             onClick={() => navigate("/freenote")}
//           >
//             <p className="text-white text-sm sm:text-base font-semibold">
//               NOTES
//             </p>
//           </div>

//           <div
//             className="app w-20 h-20 sm:w-24 sm:h-24 bg-white/20 backdrop-blur-md rounded-lg flex items-center justify-center shadow-md hover:scale-105 transition-all duration-300 cursor-pointer"
//             onClick={() => navigate("/games")}
//           >
//             <p className="text-white text-sm sm:text-base font-semibold">
//               GAMES
//             </p>
//           </div>

//           <div
//             className="app w-20 h-20 sm:w-24 sm:h-24 bg-white/20 backdrop-blur-md rounded-lg flex items-center justify-center shadow-md hover:scale-105 transition-all duration-300 cursor-pointer"
//             onClick={() => navigate("/Devai")}
//           >
//             <p className="text-white text-sm sm:text-base font-semibold">
//               DEV.AI
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className="absolute inset-0 bg-black/40 z-0" />
//     </div>
//   );
// }

// export default MainBar;
