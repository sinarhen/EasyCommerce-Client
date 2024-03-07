const GridBackground = (
  {children}: { children: React.ReactNode }
) => {
  return (
    <div
      className="w-screen overflow-hidden transition-colors duration-700 h-screen flex items-center dark:bg-black bg-white  justify-center relative dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2]"
    >
      {children}
    </div>
  )
}

export default GridBackground;