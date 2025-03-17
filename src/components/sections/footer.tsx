import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-card p-8 pt-24 border-t border-black w-full min-h-[50vh]">
      <div className="gap-2 grid lg:grid-cols-4 mx-auto container">
        <div className="gap-2 grid">
          <div className="flex items-center gap-2 bg-black shadow px-4 py-2 rounded-lg w-fit text-white">
            <Image
              src="/logos/aaanh.png"
              width={80}
              height={80}
              alt="aaanh's logo"
            />
            <span className="text-4xl">AAANH</span>
          </div>
          <p>&copy; 2025 Anh Hoang Nguyen, AAANH Corporation</p>
        </div>
        <div>
          <p className="font-light text-sm uppercase">On this site</p>
          <ul>
            <li>
              <a href="https://aaanh.com">Homepage</a>
            </li>
            <li>
              <a href="#experiences">Experiences</a>
            </li>
            <li>
              <a href="#personal-projects">Personal Projects</a>
            </li>
            <li>
              <a href="#education">Education</a>
            </li>
            <li>
              <Link href="/Anh_Hoang_Nguyen_Resume.pdf" target="_blank">
                Resume/CV
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-light text-sm uppercase">Socials</p>
          <ul>
            <li>
              <a href="https://github.com/aaanh" target="_blank">
                Github
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/aaanh" target="_blank">
                Linkedin
              </a>
            </li>
            <li>
              <a href="https://instagram.com/aaanhnya" target="_blank">
                Instagram
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-light text-sm uppercase">Canonical sites</p>
          <ul>
            <li>
              <a href="https://tailflare.aaanh.app" target="_blank">
                Tailflare
              </a>
            </li>
            <li>
              <a href="https://script.aaanh.app" target="_blank">
                Script Convenience Store
              </a>
            </li>
            <li>
              <a href="https://reroll.ing" target="_blank">
                FGO Simulator
              </a>
            </li>
            <li>
              <a href="https://blog.aaanh.com" target="_blank">
                Blog
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
