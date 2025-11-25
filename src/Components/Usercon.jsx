import React from "react";
import { useParams } from "react-router-dom";

function Usercon() {
  const { userid } = useParams();
  return (
    <div className="flex min-h-screen items-center">
    <div className="flex justify-center flex-wrap items-center text-white text-3xl top-10 min-h-20 bg-teal-400 rounded-2xl max-w-70 mx-auto">
      User Number: {userid}{" "}
    </div>
    </div>
  );
}

export default Usercon;
