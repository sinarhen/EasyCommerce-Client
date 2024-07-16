const GridBackground = (
  {children}: { children: React.ReactNode }
) => {
  return (
    <div
      className="w-full overflow-hidden transition-colors duration-700 h-full dark:bg-black bg-white relative dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2]"
    >
      {children}
    </div>
  )
}

export default GridBackground;