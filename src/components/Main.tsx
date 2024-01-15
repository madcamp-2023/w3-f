"use client";

import Madcamp from "./Madcamp";

export default function Main() {
  return <Madcamp />;
}

// "use client";

// import { useEffect, useState } from "react";
// import { useRecoilState } from "recoil";
// import Madcamp from "./Madcamp";
// import Review from "./Review";
// import Introduce from "./Introduce";
// import { pageState } from "@/recoil/recoil";

// export default function Main() {
//   const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
//   const [visibleComponent, setVisibleComponent] = useState("Madcamp"); // default component
//   const [animationState, setAnimationState] = useState("");

//   const [pageIndex, setPageIndex] = useRecoilState(pageState);
//   const totalPages = 3;

//   useEffect(() => {
//     const handleWheel = (e: any) => {
//       if (e.deltaY < 0 && pageIndex > 0) {
//         setPageIndex(pageIndex - 1);
//       } else if (e.deltaY > 0 && pageIndex < totalPages - 1) {
//         setPageIndex(pageIndex + 1);
//       }

//       setVisibleComponent("Review");
//     };

//     window.addEventListener("wheel", handleWheel);

//     return () => {
//       window.removeEventListener("wheel", handleWheel);
//     };
//   }, [pageIndex, setPageIndex]);

//   const renderComponent = () => {
//     switch (visibleComponent) {
//       case "Madcamp":
//         return <Madcamp />;
//       case "Review":
//         return <Review />;
//       case "Introduce":
//         return <Introduce />;
//       default:
//         return <Madcamp />;
//     }
//   };

//   return (
//     <div
//       className={`
//     absolute top-0 left-0 right-0 bottom-0 ${animationState}`}
//     >
//       {renderComponent()}
//     </div>
//   );
// }
