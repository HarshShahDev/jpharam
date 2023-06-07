import {
  PhoneArrowDownLeftIcon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

export default function PrimaryNav() {
  return (
    <div className="mx-auto max-w-6xl flex flex-row justify-between py-7">
      <div className="flex items-center gap-4">
        <img src="favicon.png" alt="logo" className="w-10" />
        <p className="font-bold text-black text-4xl">JirehPharm</p>
      </div>
      <div className="flex items-center gap-4 text-light">
        <PhoneArrowDownLeftIcon className="h-8 w-8" />
        <div className="font-medium text-sm">
          <p>PHONE</p> <a href="#" className="hover:text-secondary">+0123-456-789</a>
        </div>
        <div className="min-w-[500px] rounded-full shadow-light">
          <form className="flex h-10">
            <input
              type="search"
              placeholder="Search here..."
              className="w-full bg-white pl-4 pr-8 rounded-full focus-visible:outline-0"
            />
            <button
              type="submit"
              className="p-2 border-0 focus-visible:outline-0"
            >
              <MagnifyingGlassIcon className="h-6 w-6" />
            </button>
          </form>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <UserIcon className="h-8 w-6" />
        <ShoppingCartIcon className="h-8 w-6" />
        <p className="font-medium">VIEW CART</p>
      </div>
    </div>
  );
}
