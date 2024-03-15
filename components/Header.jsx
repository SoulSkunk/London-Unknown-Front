import Link from "next/link";
import BlackAlert from "./BlackAlert";

function Header() {
  const left_links = [
    "shop▼",

    "lookbooks",
    "stocklists",
    "membersclub",
    "audio",
  ];

  const right_links = ["eur € | france ▼", "search", "account", "cart"];
  return (
    // ALL
    <div className="all">
      <BlackAlert />
      {/* HEADER */}
      <header className="bg-white">
        <div className="in_header mx-auto flex justify-between items-center py-4 max-w-[1800px]">
          {/* LEFT PART */}
          <nav className="left_nav w-96 mr-auto">
            <ul className="flex gap-6 ">
              {left_links.map((link, index) => (
                <li key={index}>
                  <Link href={"/" + link}>
                    <a className="text-sm  font-normal text-gray-800 transition-colors duration-300 hover:text-black focus:text-black uppercase">
                      {link}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          {/* MIDDLE PART */}
          <div className="middle_nav justify-center items-center">
            <Link href="/">
              <img
                className="logo h-auto w-64"
                src="https://unknownlondon.com/cdn/shop/files/New_unknown_logo_cropped_copy.png?v=1614348770&width=300"
                alt=""
              />
            </Link>
          </div>
          {/* RIGHT PART */}
          <nav className="right_nav w-96 flex ml-auto items-center justify-end ">
            <ul className="flex gap-6">
              {right_links.map((link, index) => (
                <li key={index}>
                  <Link href={"/" + link}>
                    <a className="text-sm font-normal text-gray-800 transition-colors duration-300 hover:text-black focus:text-black uppercase">
                      {link}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
