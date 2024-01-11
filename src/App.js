import React, { useState } from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

import About from "./About";
const App = () => {
  const [show, setshow] = useState(false);
  return (
    <div className="BigCon bg-[#00162B]">
      <section className="imagesat lg:w-full sm:w-[500px] flex justify-center">
        <main className="text-center items-center  space-y-4 pt-4 my-auto h-1/2 justify-center">
          <div className="rounded-full flex-col justify-center items-center text-center  overflow-hidden  h-[100px] w-[100px] border-2 border-[#0D2236]">
            <img
              className="object-fill  rounded-full "
              src="https://i.ibb.co/9HzBSZF/download-image-1704983885424.png"
              alt="logo"
            />
          </div>
          <h1 className="text-white font-serif text-4xl ">
            <p>Harse</p>
            <p>Gond</p>
          </h1>
          <section className="flex  items-center space-x-2">
            <div>
              <img
                className="w-[30px]"
                src="https://resources.redbull.com/icons/flags/v2/IN@2x.png"
                alt="r"
              />
            </div>
            <h1 className="flex space-x-1">
              <p>India</p>
              <p>.</p>
              <p>Game</p>
            </h1>
          </section>
          <header>
            <div className="flex space-x-3 items-center justify-center">
              <a href="https://www.facebook.com/your-facebook-page">
                <FaFacebook size={30} />
              </a>
              <a href="https://www.instagram.com/your-instagram-page">
                <FaInstagram size={30} />
              </a>
            </div>
          </header>
        </main>
      </section>

      {/* //Age gaming */}

      <div className="bg-[#00162B]  container p-4">
        <section className="bg-[#0D2236] text-white pl-4 py-2">
          <div className="space-y-1  font-sans,serif">
            <h1 className="text-[#505475]">Date of birth</h1>
            <h1 className="text-white  text-xl">3 January 2012</h1>
          </div>
          <div className="space-y-1  font-sans,serif">
            <h1 className="text-[#505475]">Age</h1>
            <h1 className="text-white  text-xl">12</h1>
          </div>
          <div className="space-y-1  font-sans,serif">
            <h1 className="text-[#505475]"> Natioality</h1>
            <p className="flex space-x-1">
              <div>
                <img
                  className="w-[30px]"
                  src="https://resources.redbull.com/icons/flags/v2/IN@2x.png"
                  alt="r"
                />
              </div>
              <h1 className="text-white  text-xl">India</h1>
            </p>
          </div>
          <div className="space-y-1  font-sans,serif">
            <h1 className="text-[#505475]">Disciplines</h1>
            <h1 className="text-white  text-xl">Gaming</h1>
          </div>
        </section>
      </div>

      {/* //button */}
      {show ? (
        <About />
      ) : (
        <div className="px-4 py-2 space-y-1">
          <button onClick={()=>setshow(true)}  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            About
          </button>
          <p className="text-white">
            Ujjwal ‘Techno Gamerz’ Chaurasia is one of India’s leading gaming
            personalities.
          </p>
        </div>
      )}
    </div>
  );
};

export default App;
