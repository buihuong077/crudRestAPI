import React, { useEffect, useState } from "react";
import axios from "axios";
function TablePet() {
  const [valueName, setValueName] = useState("");
  const [valueAge, setValueAge] = useState("");
  const [weightValue, setWeightValue] = useState("");
  const [lengthValue, setLengthValue] = useState("");
  const [pets, setPet] = useState([]);

  const postPet = async () => {
    const res = await axios.post(
      "https://crudcrud.com/api/3bfd2cf10062492b9f5984b5099b1a7c/pet",
      {
        name: valueName,
        age: valueAge,
        weight: weightValue,
        height: lengthValue,
      }
    );

    setPet((prev) => {
      return [...prev, res.data];
    });
  };

  const handleValueName = (e) => {
    setValueName(e.target.value);
  };

  const handleValueAge = (e) => {
    setValueAge(e.target.value);
  };
  const handleValueWeight = (e) => {
    setWeightValue(e.target.value);
  };
  const handleValueheight = (e) => {
    setLengthValue(e.target.value);
  };

  const handleAddPet = () => {
    console.log(valueName, valueAge, weightValue, lengthValue);
    setValueName("");
    setValueAge("");
    setWeightValue("");
    setLengthValue("");
    postPet();
  };

  return (
    <div>
      <p className=" font-bold text-[20px] mb-5">Table create pet</p>

      <div>
        <div className="w-[300px] flex mt-4">
          <span className="mr-3 w-[50px]">Name</span>
          <input
            onChange={handleValueName}
            value={valueName}
            className=" border-[1px] border-[#333] px-1"
            type="text"
          />
        </div>
        <div className="w-[300px] flex mt-4">
          <span className="mr-3 w-[50px]">Age</span>
          <input
            onChange={handleValueAge}
            value={valueAge}
            className=" border-[1px] border-[#333] px-1 "
            type="text"
          />
        </div>
        <div className="w-[300px] flex mt-4">
          <span className="mr-3 w-[50px]">Weight</span>
          <input
            onChange={handleValueWeight}
            value={weightValue}
            className=" border-[1px] border-[#333] px-1"
            type="text"
          />
        </div>
        <div className="w-[300px] flex mt-4">
          <span className="mr-3 w-[50px]">Length</span>
          <input
            onChange={handleValueheight}
            value={lengthValue}
            className=" border-[1px] border-[#333] px-1"
            type="text"
          />
        </div>
        <div className="mt-5 ">
          <span>Species</span>
          <select name="" className=" border-[1px] border-[#333]" id="">
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
          </select>
        </div>
        <button onClick={handleAddPet}>Add Pet</button>
      </div>
    </div>
  );
}

export default TablePet;
