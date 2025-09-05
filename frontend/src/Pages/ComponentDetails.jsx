import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function ComponentDetails() {
    const { id } = useParams();
  return (
    <div>
        Component : 
        {id}
    </div>
  )
}

export default ComponentDetails