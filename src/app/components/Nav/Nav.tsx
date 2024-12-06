import Link from "next/link";

export const Nav = ({ textColor }: { textColor: "primary" | "white" }) => {
  return (
    <nav
      className={`flex-wrap flex-row-reverse md:flex-row flex justify-between items-center text-${textColor}`}
    >
      <div className="flex gap-3 md:w-48">
        <Link href="/">Privat</Link>
        <Link href="/">Erhverv</Link>
        <Link href="/">Boligforeninger</Link>
      </div>
      <div className="flex justify-center flex-grow-0 text-5xl">
        <Link href="/">Clever</Link>
      </div>
      <div className="md:w-48 flex justify-end">
        <Link href="/">Spørgsmål og svar</Link>
      </div>
    </nav>
  );
};
