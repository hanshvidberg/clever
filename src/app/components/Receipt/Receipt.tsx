"use client";
import Image from "next/image";
import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
export const Receipt = ({ goToStart }: { goToStart: () => void }) => {
  const { getValues } = useFormContext();
  const values = getValues();

  useEffect(() => {
    document.body.classList.add("header-white");
    return () => {
      document.body.classList.remove("header-white");
    };
  }, []);
  return (
    <>
      <div className="min-h-screen bg-primary relative w-full">
        <div className="h-screen max-w-6xl mx-auto flex md:items-center justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:items-center w-full">
            <div className=" w-full md:min-h-[700px] min-h-[400px] relative ">
              <Image
                src="/images/receipt.jpg"
                alt="receipt"
                className="object-cover object-center"
                fill
              />
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-primary to-transparent"></div>
            </div>
            <div className="px-4">
              <div className=" text-white space-y-4">
                <p>
                  <strong>Vi vil anbefale</strong>
                </p>
                <h1 className="text-4xl font-light">Clever One</h1>
                <p>
                  Start dagen med fuld energi fra Clever-ladeboksen hjemme, og
                  lad frit på Danmarks største ladenetværk.
                </p>
              </div>
              <div className="text-white space-y-2 mt-6">
                <p>Du har valgt:</p>
                <div className="grid grid-cols-2">
                  {Object.entries(values).map(([key, value]) => (
                    <div key={key} className="text-white py-4">
                      <div className="flex flex-col gap-2">
                        <span className="font-bold">{key}:</span>{" "}
                        {JSON.stringify(value, null, 2)}
                      </div>
                    </div>
                  ))}
                </div>
                <button
                  className="bg-white text-primary px-4 py-2"
                  onClick={goToStart}
                >
                  Start igen
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
