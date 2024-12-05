import Link from "next/link";
import Image from "next/image";
export default function Home() {
  return (
    <main className="min-h-screen bg-primary relative">
      <div className="top-0 left-0 w-full absolute h-3/4">
        <Image
          src="/bg.jpg"
          alt="logo"
          fill
          className="object-cover object-top h-auto"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-primary"></div>
      </div>
      <div className="relative z-10 flex justify-center items-center min-h-screen">
        <div className="text-center text-white max-w-2xl">
          <h1 className="text-1xl">Produktvælger</h1>
          <h2 className="text-5xl font-light">
            Lad os hjælpe dig med at finde en rigtig ladeløsning.
          </h2>
          <p className="">
            Svar på spørgsmålene og find ud af hvilken Clever løsning der passer
            bedst til dine behov.
          </p>
          <Link
            href="/product-picker"
            className="inline-block bg-white text-primary px-4 py-2"
          >
            Tag testen her
          </Link>
        </div>
      </div>
    </main>
  );
}