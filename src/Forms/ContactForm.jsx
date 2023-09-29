import { useRef, useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

export const ContactForm = () => {
  const nameInput = useRef(null);
  const emailInput = useRef(null);
  const phoneNumberInput = useRef(null);
  const addressInput = useRef(null);
  const buzzerInput = useRef(null);
  const cityInput = useRef(null);
  const messsageInput = useRef(null);

  const [possession, setPossession] = useState("No")
  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: new Date().setMonth(11),
  });

  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestData = {
      fullname: nameInput.current.value,
      email: emailInput.current.value,
      phoneNumber: phoneNumberInput.current.value,
      address: addressInput.current.value,
      buzzer: buzzerInput.current.value,
      city: cityInput.current.value,
      possession,
      message: messsageInput.current.value, 
    }

    console.log(requestData);
  };

  return (
    <form className="w-full flex flex-col">
      <label className="w-full mt-5">
        <span className="block font-semibold mb-1">Full name</span>
        <input
          ref={nameInput}
          type="text"
          className="w-full px-3 py-2 font-semibold bg-white border border-slate-300 rounded-lg shadow-sm"
          required
        />
      </label>
      <div className="flex flex-col md:flex-row md:gap-5 mb-5">
        <label className="w-full mt-5">
          <span className="block font-semibold mb-1">Email</span>
          <input
            ref={emailInput}
            type="email"
            className="w-full px-3 py-2 font-semibold bg-white border border-slate-300 rounded-lg shadow-sm"
          />
        </label>
        <label className="w-full mt-5">
          <span className="block font-semibold mb-1">Phone number</span>
          <input
            ref={phoneNumberInput}
            type="text"
            className="w-full px-3 py-2 font-semibold bg-white border border-slate-300 rounded-lg shadow-sm"
            required
          />
        </label>
      </div>
      <label className="w-full">
        <span className="block font-semibold mb-1">Address</span>
        <input
          ref={addressInput}
          type="text"
          className="w-full px-3 py-2 font-semibold bg-white border border-slate-300 rounded-lg shadow-sm"
          required
        />
      </label>
      <div className="flex items-center gap-5">
        <label className="basis-[30%] w-full mt-5">
          <span className="block font-semibold mb-1">Buzzer</span>
          <input
            ref={buzzerInput}
            type="text"
            className="w-full px-3 py-2 font-semibold bg-white border border-slate-300 rounded-lg shadow-sm"
          />
        </label>
        <label className="basis-[70%] w-full mt-5">
          <span className="block font-semibold mb-1">City</span>
          <input
            ref={cityInput}
            type="text"
            className="w-full px-3 py-2 font-semibold bg-white border border-slate-300 rounded-lg shadow-sm"
            required
          />
        </label>
      </div>
      <div className="w-full mt-5 flex flex-col gap-1 my-5">
        <span className="block font-semibold">
          Do you have possession of the property?
        </span>
        <div className="flex gap-5">
          <label className="flex items-center gap-1">
            <input
              name="possession"
              type="radio"
              onChange={() => setPossession("Yes")}
              className="w-full px-3 py-2 font-semibold bg-white border border-slate-300 rounded-lg shadow-sm"
            />
            Yes
          </label>
          <label className="flex items-center gap-1">
            <input
              name="possession"
              type="radio"
              onChange={() => setPossession("No")}
              className="w-full px-3 py-2 font-semibold bg-white border border-slate-300 rounded-lg shadow-sm"
            />
            No
          </label>
        </div>
      </div>
      <div className="flex flex-col">
        <label className="block font-semibold mb-1">
          <span className="block font-semibold mb-1">
            When would you like to start and end?
          </span>
          <Datepicker
            primaryColor={"teal"}
            value={value}
            onChange={handleValueChange}
            displayFormat={"MM/DD/YYYY"}
            inputClassName="w-full px-3 py-2 font-semibold border border-slate-300 rounded-lg shadow-sm"
          />
        </label>
      </div>
      <label className="w-full mt-5">
        <span className="block font-semibold mb-1">
          What would you like to paint?
        </span>
        <textarea
          ref={messsageInput}
          type="text"
          className="w-full px-3 py-2 font-semibold bg-white border border-slate-300 rounded-lg shadow-sm"
          rows={4}
          required
        />
      </label>
      <button
        type="submit"
        onClick={(e) => handleSubmit(e)}
        className="w-2/3 self-center bg-[#145B19] text-white font-semibold my-8 hover:text-[#145B19] hover:bg-white hover:border border-[#145B19] disabled:opacity-50"
      >
        Send
      </button>
    </form>
  );
};
