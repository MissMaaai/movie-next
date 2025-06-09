import Image from "next/image";
import logo from "@/assets/logo.jpg";

export default function HomePage() {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Welcome to Mai Movie Finder</h1>
      <br />
      <p>Select a category from the menu to explore movies.</p>
      <br />
      <Image src={logo} alt="Logo" width={600} height={600} priority />
    </div>
  );
}
