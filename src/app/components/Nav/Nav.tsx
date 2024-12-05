import Link from "next/link";

export const Nav = ({ textColor }: { textColor: "primary" | "white" }) => {
  return (
    <nav className={`flex justify-between items-center text-${textColor}`}>
      <div className="flex gap-3 w-48">
        <Link href="/">Privat</Link>
        <Link href="/">Erhverv</Link>
        <Link href="/">Boligforeninger</Link>
      </div>
      <div className="flex justify-center flex-grow-0 text-4xl ">
        <Link href="/">Clever</Link>
      </div>
      <div className="w-48 flex justify-end">
        <Link href="/">Spørgsmål og svar</Link>
      </div>
    </nav>
  );
};
