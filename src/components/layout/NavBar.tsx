import Link from "next/link";

export default function NavBar() {
  const handleButton = () => {
    const element = document.getElementById("movieList");

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav>
      <ul>
        <li>
          <button onClick={() => handleButton()}>Alla Filmer</button>
        </li>
      </ul>
    </nav>
  );
}
