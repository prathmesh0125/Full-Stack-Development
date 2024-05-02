import React from "react";

export default function banner({ children }:{
  children:React.ReactNode
}) {
  return(
  <div>
    <div className="border-b text-center">20% of for the next 3 days</div>
    {children}
  </div>);
}
