import Link from "next/link";
import { useRouter } from "next/router";

const ROUTES = {
  Home: "/",
  Experience: "/experience",
  Contact: "/contact",
};

type RouteKeys = keyof typeof ROUTES; // Define a type for the keys

type NavbarItemProps = {
  href: string;
  isSelected: boolean;
  children: React.ReactNode;
};
const NavbarItem = ({ href, isSelected, children }: NavbarItemProps) => (
  <Link
    className={
      isSelected
        ? ""
        : "cubic-bezier-0.1-0.4-0.2-1 transition-colors duration-300 ease-in-out hover:text-gray-200"
    }
    href={href}
  >
    {isSelected ? "●" : children}
  </Link>
);

export const Navbar = () => {
  const { pathname: currentRoute } = useRouter();

  return (
    <nav className="absolute right-6 top-32 z-50 bg-primary p-4 md:right-20 md:top-24">
      <div className="flex flex-col text-right">
        {Object.keys(ROUTES).map((value) => (
          <NavbarItem
            key={value}
            href={ROUTES[value as RouteKeys]}
            isSelected={currentRoute === ROUTES[value as RouteKeys]}
          >
            {value}
          </NavbarItem>
        ))}
      </div>
    </nav>
  );
};
