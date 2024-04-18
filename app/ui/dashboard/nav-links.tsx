import { HomeIcon } from "@heroicons/react/24/outline";

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: "Home", href: "/" },
  {
    name: "Collections",
    href: "/collections",
  },
  { name: "Products", href: "/Products" },
  { name: "About", href: "/About" },
];

export default function NavLinks() {
  return (
    <>
      {links.map((link) => {
        // const LinkIcon = link.icon;
        return (
          <a
            key={link.name}
            href={link.href}
            className="flex h-[48px] flex-row grow items-center justify-end gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-row md:justify-start md:p-2 md:px-3"
          >
            <p className="hidden md:block">{link.name}</p>
          </a>
        );
      })}
    </>
  );
}
