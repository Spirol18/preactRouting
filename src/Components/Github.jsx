import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Github() {
//   const {userid} = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(` https://api.github.com/users/spirol18`)
    // fetch(` https://api.github.com/users/${userid}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        {
          console.log(data.avatar_url);
        }
      });
  }, []);
  return (
    <div className="flex justify-center">
      <img src={data.avatar_url} alt="gitpic" height={300} width={300} />
      No of Followers:{data.followers}
    </div>
  );
}

export default Github;
