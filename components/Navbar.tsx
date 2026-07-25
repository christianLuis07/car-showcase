import Link from "next/link";
import Image from "next/image";
import CustomButton from "./CustomButton";

const Navbar = () => (
  <header className="w-full absolute z-10">
    <nav className="max-width flex-between padding-x padding-y">
      <Link href="/" className="flex justify-center items-center">
        <Image
          src="/logo.svg"
          alt="Car Hub Logo"
          width={118}
          height={18}
          className="object-contain"
        />
      </Link>

      <CustomButton
        title="Sign In"
        btnType="button"
        containerStyles="text-primary-blue rounded-full bg-white min-w-[130px] border border-gray-100 shadow-sm font-semibold hover:shadow transition-shadow"
      />
    </nav>
  </header>
);

export default Navbar;