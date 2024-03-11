export default function Header({children}: { children: React.ReactNode }) {
  return (
      <div className="text-4xl sm:text-5xl text-center md:text-start md:text-6xl lg:text-7xl">
        {children}
      </div>
  );
}