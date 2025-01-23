import { Link } from "react-router-dom";
import "../App.css";

export default function LandingPage() {
  return (
    <>
      <div className="text-center p-4">
        <div className="flex flex-col mt-[7em]">
          <h1 className="font-semibold text-4xl text-white">Botanic Shop</h1>
          <p className="text-lg mt-4 font-extralight text-white">
            Your one-stop shop for houseplants!
          </p>
          <div className="mt-6">
            <Link
              to="/product"
              className="bg-green-500 text-white px-4 py-2 rounded-2xl"
            >
              Shop now
            </Link>
          </div>
        </div>
        <div
          id="image1"
          className="h-[20em] w-[74em] bg-black mt-[3em] rounded-xl justify-center relative shadow-xl shadow-gray-900"
        ></div>
        <div className="flex flex-row gap-20 p-10 w-full mt-[5em]">
          <div className="h-[20em] w-[35em] mt-[8em] rounded-xl text-justify text-white font-thin">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
          <div
            id="image2"
            className="h-[20em] w-[40em] bg-black mt-[3em] rounded-xl"
          ></div>
        </div>
      </div>
    </>
  );
}
