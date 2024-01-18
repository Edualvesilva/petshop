import Menu from "./Menu";
import Link from "next/link";
export default function Cabecalho() {
  return (
    <>
      <header>
        <h1>
          <Link href="/">PetShop</Link>
        </h1>
        <Menu />
      </header>
    </>
  );
}
