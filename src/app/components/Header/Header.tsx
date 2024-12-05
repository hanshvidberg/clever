"use client";
import { usePathname } from "next/navigation";
import { Nav } from "../Nav/Nav";

export const Header = () => {
  const pathname = usePathname();
  const textColor = pathname === "/" ? "white" : "primary";
  return (
    <header className={`absolute top-0 left-0 w-full z-50 p-4 ${textColor}`}>
      <Nav textColor={textColor} />
    </header>
  );
};
