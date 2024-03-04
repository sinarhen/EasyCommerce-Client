const GridBackground = (
  {children} : {children: React.ReactNode}
) => {
  return (
    <div
      className="h-screen w-full items-center justify-center dark:bg-black bg-white relative dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2]"
    >
      {children}
    </div>
  )
}

export default GridBackground;