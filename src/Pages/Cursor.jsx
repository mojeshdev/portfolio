// // src/components/CustomCursor.jsx
// import React, { useEffect } from 'react';
// import './index.css';

// const CustomCursor = () => {
//     useEffect(() => {
//     const cursor = document.querySelector('.cursor');
//     const glow = document.querySelector('.cursor-glow');

//     const moveCursor = (e) => {
//         const { clientX: x, clientY: y } = e;
//         cursor.style.top = `${y}px`;
//         cursor.style.left = `${x}px`;
//         glow.style.top = `${y}px`;
//         glow.style.left = `${x}px`;
//     };

//     const clickEffect = () => {
//         cursor.classList.add('click-effect');
//         glow.classList.add('click-effect');
//         setTimeout(() => {
//         cursor.classList.remove('click-effect');
//         glow.classList.remove('click-effect');
//         }, 200);
//     };

//     window.addEventListener('mousemove', moveCursor);
//     window.addEventListener('mousedown', clickEffect);

//     return () => {
//         window.removeEventListener('mousemove', moveCursor);
//         window.removeEventListener('mousedown', clickEffect);
//     };
//     }, []);

//     return (
//     <>
//         <div className="cursor"></div>
//         <div className="cursor-glow"></div>
//     </>
// );
// };

// export default CustomCursor;
