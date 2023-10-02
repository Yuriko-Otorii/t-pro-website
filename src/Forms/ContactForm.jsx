import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Datepicker from "react-tailwindcss-datepicker";

export const ContactForm = () => {
  const form = useRef(null)
  const [possession, setPossession] = useState("No");
  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: new Date().setMonth(11),
  });

  useEffect(() => {
    const parentNode = document.getElementById("datePicker")
    const datePickerInput = parentNode.children[0].children[1].children[0]
    datePickerInput.setAttribute('name', "date")
  }, [])

  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await emailjs.sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_CONTACT_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      );
      if(result.satus === 200){
        console.log("Success");
      }
    } catch (error) {
      console.log("Something went wrong...");
    }
  };

  return (
    <form ref={form} onSubmit={handleSubmit} className="w-full flex flex-col">
      <label className="w-full mt-5">
        <span className="block font-semibold mb-1">Full name</span>
        <input
          type="text"
          name="fullname"
          className="w-full px-3 py-2 font-semibold bg-white border border-slate-300 rounded-lg shadow-sm"
          required
        />
      </label>
      <div className="flex flex-col md:flex-row md:gap-5 mb-5">
        <label className="w-full mt-5">
          <span className="block font-semibold mb-1">Email</span>
          <input
            type="email"
            name="email"
            className="w-full px-3 py-2 font-semibold bg-white border border-slate-300 rounded-lg shadow-sm"
          />
        </label>
        <label className="w-full mt-5">
          <span className="block font-semibold mb-1">Phone number</span>
          <input
            type="text"
            name="phoneNumber"
            className="w-full px-3 py-2 font-semibold bg-white border border-slate-300 rounded-lg shadow-sm"
            required
          />
        </label>
      </div>
      <label className="w-full">
        <span className="block font-semibold mb-1">Address</span>
        <input
          type="text"
          name="address"
          className="w-full px-3 py-2 font-semibold bg-white border border-slate-300 rounded-lg shadow-sm"
          required
        />
      </label>
      <div className="flex items-center gap-5">
        <label className="basis-[30%] w-full mt-5">
          <span className="block font-semibold mb-1">Buzzer</span>
          <input
            type="text"
            name="buzzer"
            className="w-full px-3 py-2 font-semibold bg-white border border-slate-300 rounded-lg shadow-sm"
          />
        </label>
        <label className="basis-[70%] w-full mt-5">
          <span className="block font-semibold mb-1">City</span>
          <input
            type="text"
            name="city"
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
              value={possession}
              onChange={() => setPossession("Yes")}
              className="w-full px-3 py-2 font-semibold bg-white border border-slate-300 rounded-lg shadow-sm"
            />
            Yes
          </label>
          <label className="flex items-center gap-1">
            <input
              name="possession"
              type="radio"
              value={possession}
              onChange={() => setPossession("No")}
              className="w-full px-3 py-2 font-semibold bg-white border border-slate-300 rounded-lg shadow-sm"
            />
            No
          </label>
        </div>
      </div>
      <div className="flex flex-col" id="datePicker">
        <label className="block font-semibold mb-1">
          <span className="block font-semibold mb-1">
            When would you like to start and end?
          </span>
          <Datepicker
            primaryColor={"teal"}
            value={value}
            name="date"
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
          type="text"
          name="message"
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
