import Header from "./components/Header";
import Data from "./Data";
import TravelCard from "./components/TravelCard";

export default function App() {
  return (
    <>
      <Header />
      <main className="w-auto h-auto flex flex-col justify-center m-5 text-black md:flex-col">
        {Data.map((data) => (
          <TravelCard
            location={data.location}
            tourist={data.tourist}
            date={data.date}
            content={data.content}
            img={data.img}
            key={data.id}
          />
        ))}
      </main>
    </>
  );
}

/*
https://source.unsplash.com/WLxQvbMyfas

https://source.unsplash.com/JmuyB_LibRo

https://source.unsplash.com/3PeSjpLVtLg
*/
