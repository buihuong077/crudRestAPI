import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { BaseUrl } from "../baseUrl/url";
import ListPet from "./listPet";

function TablePet() {
  const [valueName, setValueName] = useState("");
  const [errorName, setErrorName] = useState("");
  const [valueAge, setValueAge] = useState("");
  const [errorAge, setErrorAge] = useState("");
  const [weightValue, setWeightValue] = useState("");
  const [errorWeight, setErrorWeight] = useState("");
  const [lengthValue, setLengthValue] = useState("");
  const [lengthError, setLengthError] = useState("");
  const [pets, setPets] = useState([]);

  useEffect(() => {
    getPets();
  }, []);

  const postPet = useMemo(() => {
    return async () => {
      const res = await axios.post(`${BaseUrl}/pet`, {
        name: valueName,
        age: valueAge,
        weight: weightValue,
        height: lengthValue,
      });
      //@ts-ignore
      setPets((prev) => [...prev, res.data]);
    };
  }, []);

  const getPets = async () => {
    const res = await axios.get(`${BaseUrl}/pet`);
    setPets(res.data);
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
    if (!valueName) {
      setErrorName("Please fill in your name in the form");
      return;
    }
    if (!valueAge) {
      setErrorAge("Please fill in your Age in the form");
      return;
    }
    if (!weightValue) {
      setErrorWeight("Please fill in your weight in the form");
      return;
    }
    if (!lengthValue) {
      setLengthError("Please fill in your length in the form");
      return;
    }
    setValueName("");
    setValueAge("");
    setWeightValue("");
    setLengthValue("");
    postPet();
  };

  return (
    <div>
      <p className=" font-bold text-5 mb-5">Table create pet</p>

      <div>
        <div className="w-[300px] flex mt-4">
          <span className="mr-3 w-[50px]">Name</span>
          <div>
            <input
              onChange={handleValueName}
              value={valueName}
              className=" border-[1px] border-[#333] px-1"
            />
            {errorName && <p className="text-rose-400">{errorName}</p>}
          </div>
        </div>
        <div className="w-[300px] flex mt-4">
          <span className="mr-3 w-[50px]">Age</span>
          <div>
            <input
              onChange={handleValueAge}
              value={valueAge}
              className=" border-[1px] border-[#333] px-1 "
            />
            {errorAge && <p className="text-rose-400">{errorAge}</p>}
          </div>
        </div>
        <div className="w-[300px] flex mt-4">
          <span className="mr-3 w-[50px]">Weight</span>
          <div>
            <input
              onChange={handleValueWeight}
              value={weightValue}
              className=" border-[1px] border-[#333] px-1"
            />
            {errorWeight && <p className="text-rose-400">{errorWeight}</p>}
          </div>
        </div>
        <div className="w-[300px] flex mt-4">
          <span className="mr-3 w-[50px]">Length</span>
          <input
            onChange={handleValueheight}
            value={lengthValue}
            className=" border-[1px] border-[#333] px-1"
          />
          {lengthError && <p className="text-rose-400">{lengthError}</p>}
        </div>

        <button
          className="mt-5 border-none bg-red-600 text-white"
          onClick={handleAddPet}
        >
          Add Pet
        </button>
      </div>

      <ListPet pets={pets} />
    </div>
  );
}

export default TablePet;
