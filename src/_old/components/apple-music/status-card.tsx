// import { SiApplemusic } from "react-icons/si";
// import { IoIosMusicalNotes } from "react-icons/io";
// import Image from "next/image";
// import { AppleMusicNowPlaying } from "@/lib/types";

// export default function AppleMusicStatusCard({
//   title,
//   albumTitle,
//   albumCoverUrl,
//   artist,
//   lyricsUri,
// }: AppleMusicNowPlaying) {
//   return (
//     <a
//       target="_blank"
//       rel="noopener noreferrer"
//       href={lyricsUri}
//       className="relative flex items-center space-x-4 p-2 border border-zinc-500 hover:border-primary rounded-md w-80 h-fit transition-all btn-ghost btn"
//     >
//       <div className="w-16">
//         {albumCoverUrl ? (
//           <Image
//             unoptimized
//             height={72}
//             width={72}
//             className={"w-16 rounded-md"}
//             src={albumCoverUrl ?? "https://github.com/aaanh.png"}
//             alt={albumCoverUrl}
//           />
//         ) : (
//           <IoIosMusicalNotes size={64} className="text-primary" />
//         )}
//       </div>

//       <div className="flex-1 pr-5 font-sans text-left">
//         <p className="font-bold text-sm normal-case component">
//           {title ?? "Not listening at the moment"}
//         </p>
//         <p className="font-dark text-xs">{artist ?? "Artist: ---"}</p>
//         <p className="w-[172px] overflow-hidden font-dark font-light text-primary/80 text-xs text-ellipsis whitespace-nowrap">
//           {`Album: ${albumTitle ?? "---"}`}
//         </p>
//       </div>
//       <div className="right-1.5 bottom-1.5 absolute">
//         <SiApplemusic size={16} color={"#FA2D48"} />
//       </div>
//     </a>
//   );
// }
