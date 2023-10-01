import { useRef, useState } from "react";

export const CareerForm = () => {
  const [selectedFile, setSelectedFile] = useState();
  const nameInput = useRef(null);
  const emailInput = useRef(null);
  const phoneNumberInput = useRef(null);
  const messsageInput = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(selectedFile);

    const requestData = {
      fullname: nameInput.current.value,
      email: emailInput.current.value,
      phoneNumber: phoneNumberInput.current.value,
      message: messsageInput.current.value,
    };

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
      <div className="flex flex-col md:flex-row md:gap-5">
        <label className="w-full mt-5">
          <span className="block font-semibold mb-1">Email</span>
          <input
            ref={emailInput}
            type="email"
            className="w-full px-3 py-2 font-semibold bg-white border border-slate-300 rounded-lg shadow-sm"
            required
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

      <label className="w-full mt-5">
        <span className="block font-semibold mb-1">Resume</span>
        <input
          className="block w-full mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
          defaultValue={selectedFile}
          onChange={(e) => setSelectedFile(e.target.files)}
          type="file"
          required
        />
      </label>

      <label className="w-full mt-5">
        <span className="block font-semibold mb-1">Message</span>
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
