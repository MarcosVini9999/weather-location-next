import { CityContext } from "@/contexts/city";
import React from "react";
import { Button } from "../Button/Button";
import Link from "next/link";

interface DropdownMenuProps {
  open: boolean;
}

export function DropdownMenu({ open }: DropdownMenuProps) {
  const { citiesSaved, deleteCity } = React.useContext(CityContext);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  const renderCities = () => {
    return citiesSaved && citiesSaved.length > 0 ? (
      citiesSaved?.map((city) => (
        <Link
          className="flex items-center justify-between rounded p-3 hover:cursor-pointer hover:bg-slate-100 hover:dark:bg-slate-500"
          key={city}
          href={city}
        >
          <h1>{city}</h1>
          <Button
            onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
              e.preventDefault();
              e.stopPropagation();
              deleteCity(city);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </Button>
        </Link>
      ))
    ) : (
      <h1>NENHUMA CIDADE SALVA</h1>
    );
  };

  return (
    <div
      className={`max-h-48 overflow-y-scroll animate-fade-in-down flex flex-col gap-2 absolute p-3 rounded w-full bg-slate-300 dark:bg-slate-600 ${
        open ? "block" : "hidden"
      }`}
    >
      {mounted && renderCities()}
    </div>
  );
}
