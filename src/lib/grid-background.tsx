const GridBackground = (
  {children} : {children: React.ReactNode}
) => {
  return (
    <div
      className="duration-700 transition-colors h-screen w-full  dark:bg-black bg-white relative dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2]"
    >
      {children}
    </div>
  )
}

export default GridBackground;