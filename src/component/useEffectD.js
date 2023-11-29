
// 'use client'
// import { isThenable } from 'next/dist/client/components/router-reducer/router-reducer-types';
// import { useEffect, useState } from 'react'

// export default function Home() {
//   let text = '';
//   const [count, setCount] = useState(0);
//   let id = null;
//   const [isStarted, setStart] = useState(false);

//   useEffect(() => {
//     const setMile = () => {
//       setCount((count) => count + 1);
//     }
//     if (isStarted) {
//       id = setInterval(setMile, 1);
//     }
//     return () => {
//       clearInterval(id);
//     }

//   }, [isStarted])
//   text = isStarted ? "Stop" : "Start"

//   return (
//     <div>
//       <div className='flex gap-[5px]'>
//         <div>{Math.floor(count / 60000 / 24)}:</div>
//         <div>{Math.floor(count / 60000) % 24}:</div>
//         <div>{Math.floor(count / 1000) % 60}:</div>
//         <div>{count % 1000}</div>
//       </div>

//       <div className='flex gap-[10px]'>
//         <button onClick={() => {
//           setStart((prev) => !prev)
//         }}
//           className='bg-black text-white w-[100px] h-[20px]'>{text}

//         </button>
//         <button onClick={() => {
//           setCount(0);
//           setStart(false)
//         }}
//           className='bg-black text-white w-[100px] h-[20px]'>Reset

//         </button>
//       </div>

//     </div>
//   )
// }


{/* <div>{parseInt(count / 3600000)}:</div>
<div>{parseInt(count / 60000)}:</div>
<div>{parseInt(count / 1000)}:</div>
<div>{count % 1000}</div> */}


