import logo from "../assets/image/logo.png";
export default function Loader() {
  return (
    <>
      <section className="w-full h-full fixed inset-0 bg-slate-700 flex justify-center items-center text-center">
        <span className="flex h-[150px] w-[150px] relative justify-center items-center">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-800 opacity-75"></span>
          <img
            src={logo}
            alt="logoLoader"
            className="w-[150px] h-[150px] bg-cover bg-center rounded-full relative inline-flex bg-slate-900 shadow-lg shadow-slate-900/50"
          />
        </span>
      </section>
    </>
  );
}
