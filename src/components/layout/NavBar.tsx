import Link from "next/link";

export default function NavBar() {
  const handleButton = () => {
    const element = document.getElementById("movieList");

    if (element) {
      // Calculate the offset by subtracting 100 pixels from the top of the element
      const offset = element.offsetTop - 100;

      // Scroll to the calculated offset position
      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
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
