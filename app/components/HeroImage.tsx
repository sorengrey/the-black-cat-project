import catImage from "../assets/hero-cat.png";

export default function HeroImage() {
  return (
    <img
      src={catImage}
      alt="A cute black cat laying on a bed with a lavender blanket"
      style={{
        width: "100%",
        maxWidth: "450px",
        height: "auto",
        aspectRatio: "1/1",
        objectFit: "cover",
        borderRadius: "8px",
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.5)",
      }}
    />
  );
}
