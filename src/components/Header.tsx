
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="bg-gray-900 text-white py-4 px-8 flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold">
        POS
      </Link>
      <nav>
        <ul className="flex gap-4">
          <li>
            <Link href="/">
              <Button variant="ghost">Shop</Button>
            </Link>
          </li>
          <li>
            <Link href="/admin">
              <Button variant="ghost">Admin</Button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
