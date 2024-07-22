import Image from 'next/image'

export default function Intro() {
  return <div className="grid grid-cols-[1fr_3fr] items-center justify-center gap-4">
    <div className="w-[30vh] h-[50vh] rounded-lg relative bg-foreground">
      <Image alt="" src="/intro.jpg" fill={true} className="object-cover rounded-lg"></Image>
    </div>
    <div>
      Something here
    </div>
  </div>
}
