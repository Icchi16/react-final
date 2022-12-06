import React from "react";
import { DocumentInitialProps } from "next/document";

const hotels = () => {
  return <div>Hotels</div>;
};

export default hotels;

// export const getStaticProps = async (ctx) => {
//   console.log("Get data");
//   const res = await fetch("https://fakesstoreapi.com/products");
//   const data = await res.json();

//   return {
//     prop: {
//       products: data,
//     },
//   };
// };
