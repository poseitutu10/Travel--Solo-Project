import { FaLocationDot } from "react-icons/fa6";

const TravelCard = ({ location, tourist, date, content, img }) => {
  return (
    <>
      <div className="md:flex md:justify-center">
        <img
          src={img}
          className="w-full rounded-lg md:my-5 md:w-[250px] md:mr-5"
        />
        <div className="content py-5 border-b-2 border-teal-400 h-auto w-auto flex flex-col gap-2 mb-10 md:w-1/2 md:border-b-0 md:mt-10">
          <div className="loaction flex gap-5 align-middle">
            <div className="first flex gap-1">
              <FaLocationDot className="text-red-400 text-xl" />
              <h2 className="font-bold tracking-widest uppercase">{location}</h2>
            </div>
            <p className="underline decoration-2 text-gray-400">
              View on Google Maps
            </p>
          </div>
          <div className="main-content">
            <h1 className="text-2xl font-bold mb-5">{tourist}</h1>
            <h2 className="font-bold text-gray-600">{date}</h2>
            <p className="text-gray-500 md:w-3/4">{content}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TravelCard;
