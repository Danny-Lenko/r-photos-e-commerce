import React, { useContext } from "react";
import { Context } from "../Context";
import {getClass} from "../utils/index"
import Picture from "../components/Picture";

function Photos() {
  const { pictures } = useContext(Context);

  const allPictures = pictures.map((img, i) => (
        <Picture img={img} className={getClass(i)}/>
));

  return (
    <main className="photos">
        {allPictures}
    </main>
  );
}

export default Photos;
