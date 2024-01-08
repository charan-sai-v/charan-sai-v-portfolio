'use client';

import { Menu } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
      setMounted(true)
  }, [])
  if (!mounted) {
    return null;
  }
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14  items-center">
        <div className="mr-4 flex item-center w-full">
          <a className="mr-6 flex items-center space-x-2" href="/">
            <span className="font-bold sm:inline-block">Charan&nbsp;Sai&nbsp;Portfolio</span>
          </a>
          <div className="hidden md:flex mr-4 item-center w-full">
            <nav className="flex items-center justify-center gap-6 text-sm w-full">
              <a
                className="transition-colors hover:text-foreground/80 text-foreground/60"
                href="#skills"
              >
                Skills
              </a>
              <a
                className="transition-colors hover:text-foreground/80 text-foreground/60"
                href="#projects"
              >
                Projects
              </a>
              <a
                className="transition-colors hover:text-foreground/80 text-foreground/60"
                href="#achievements"
              >
                Achievements
              </a>
              <a
                className="transition-colors hover:text-foreground/80 text-foreground/60"
                href="#publications"
              >
                Publications
              </a>
              <a
                className="hidden text-foreground/60 transition-colors hover:text-foreground/80 lg:block"
                href="#contact"
              >
                Contact
              </a>
              
            </nav>
          </div>
        </div>
        <Sheet>
          <SheetTrigger>
            <button
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-9 py-2 mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            type="button"
            aria-haspopup="dialog"
            aria-expanded="false"
            aria-controls="radix-:R96la:"
            data-state="closed"
          >
            <Menu />
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0">
            <div className="flex flex-col justify-center items-start p-10">
              <a
                className="transition-colors hover:text-foreground/80 text-foreground/60"
                href="#skills"
              >
                Skills
              </a>
              <a
                className="transition-colors hover:text-foreground/80 text-foreground/60"
                href="#projects"
              >
                Projects
              </a>
              <a
                className="transition-colors hover:text-foreground/80 text-foreground/60"
                href="#achievements"
              >
                Achievements
              </a>
              <a
                className="transition-colors hover:text-foreground/80 text-foreground/60"
                href="#publications"
              >
                Publications
              </a>
              <a
                className="hidden text-foreground/60 transition-colors hover:text-foreground/80 lg:block"
                href="#contact"
              >
                Contact
              </a>
            </div>
          </SheetContent>
        </Sheet>
        <div className="ml-5">
          <ModeToggle />
        </div>

        {/* <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            
          </div>
          <nav className="flex items-center">
          </nav>
        </div> */}
      </div>
    </header>
  );
};

export default Navbar;
