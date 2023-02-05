import MoonLight from "../../components/UI/Moon/MoonLight";
import Moon from "../../components/UI/Moon/Moon";

export default function Main() {
  return (
    <>
      <main className="w-screen h-screen">
        <MoonLight />
        <section className="w-full h-full grid grid-cols-1 grid-rows-2 md:grid-rows-1 md:grid-cols-2  justify-items-center text-center z-40">
            <Moon />
            <div >
                <h1>Reza</h1>
            </div>
        </section>
      </main>
    </>
  );
}
