export function Header1({children}: { children: React.ReactNode }) {
  return (
    <div className="text-4xl sm:text-5xl text-center md:text-start md:text-6xl lg:text-7xl">
      {children}
    </div>
  );

}

export function Header2({children}: { children: React.ReactNode }) {
  return (
    <div className="text-3xl sm:text-4xl text-center md:text-start md:text-5xl lg:text-6xl">
      {children}
    </div>
  );
}

export function Header3({children}: { children: React.ReactNode }) {
  return (
    <div className="text-2xl sm:text-3xl text-center md:text-start md:text-4xl lg:text-5xl">
      {children}
    </div>
  );
}

export function Header4({children}: { children: React.ReactNode }) {
  return (
    <div className="text-xl sm:text-2xl text-center md:text-start md:text-3xl lg:text-4xl">
      {children}
    </div>
  );
}

export function Header5({children}: { children: React.ReactNode }) {
  return (
    <div className="text-lg sm:text-xl text-center md:text-start md:text-2xl lg:text-3xl">
      {children}
    </div>
  );
}

export function Header6({children}: { children: React.ReactNode }) {
  return (
    <div className="text-base sm:text-lg text-center md:text-start md:text-xl lg:text-2xl">
      {children}
    </div>
  );
}