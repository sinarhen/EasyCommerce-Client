'use client'

export default function ErrorComponent({message}: {message: string}) {
  return (
    <div className="w-full h-full flex justify-center items-center">
      {message}
    </div>
  )
}