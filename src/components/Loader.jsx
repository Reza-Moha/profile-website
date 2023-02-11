import logo from "../assets/image/logo.png";
export default function Loader() {
  return (
    <>
      <section className="w-full h-full fixed inset-0 bg-slate-700 flex justify-center items-center text-center">
        <span className="flex h-36 w-36 relative justify-center items-center">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-500 opacity-75"></span>
          <img
            src={logo}
            alt="logoLoader"
            className="w-[340px] h-[156px] rounded-full scale-125 relative inline-flex rounded-full h-3 w-3 bg-slate-600 shadow-lg shadow-slate-900/50"
          />
        </span>
      </section>
    </>
  );
}
