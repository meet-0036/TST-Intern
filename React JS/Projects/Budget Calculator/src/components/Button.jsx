export default function Botton({ label, onChange }) {
  return (
    <>
      <button
        onClick={onChange}
        className="bg-amber-100/50 w-10 text-lg font-bold hover:bg-sky-100/50 rounded-sm transition"
      >
        {label}
      </button>
    </>
  );
}
