'use client';
// import React, { useRef, useEffect } from 'react';
// import 'animate.css';

// // import './App.css';  // Make sure to include Tailwind CSS styles

// const App = () => {
//   const animatedSectionRef = useRef(null);

//   useEffect(() => {
//     const options = {
//       root: null,
//       threshold: 0.5,  // Adjust as needed
//     };

//     const callback = (entries: any) => {
//       entries.forEach((entry: any) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add(' ');
//         }
//       });
//     };

//     const observer = new IntersectionObserver(callback, options);
//     if (animatedSectionRef.current) {
//       observer.observe(animatedSectionRef.current);
//     }

//     return () => {
//       if (animatedSectionRef.current) {
//         observer.unobserve(animatedSectionRef.current);
//       }
//     };
//   }, []);

//   return (
//     <div>
//       <div className="h-64 bg-gray-200 flex items-center justify-center">
//         <h1 className="text-3xl font-bold">Scroll down</h1>
//       </div>

//       <section
//         ref={animatedSectionRef}
//         className="animate__animated animate__slideInLeft animate__delay-1s animate__slower h-screen flex items-start justify-center"
//       >
//         <div>
//           <h2 className="text-4xl font-bold">Animated Section</h2>
//           <p className="mt-4 text-lg">
//             This section will animate when it comes into view as you scroll down.
//           </p>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default App;

const Sample = () => {
  return ( <>
  SAmple</> );
}
 
export default Sample;