import type { Route } from "./+types/home";
import HeroImage from "~/components/HeroImage";
import { Link } from "react-router";

// This sets the browser tab title and metadata
export function meta({}: Route.MetaArgs) {
  return [
    { title: "The Black Cat Project | Adopt a Void" },
    { name: "description", content: "Find your perfect black cat companion." },
  ];
}

export default function Home() {
  return (
    <div
      style={{
        backgroundColor: "#121212",
        color: "#f5f5f5",
        minHeight: "100vh",
      }}
    >
      {/* 1. Global Navigation Placeholder */}
      <header
        style={{ padding: "1.5rem 2rem", borderBottom: "1px solid #222" }}
      >
        <span style={{ fontWeight: "bold", letterSpacing: "1px" }}>
          THE BLACK CAT PROJECT
        </span>
      </header>

      {/* 2. Hero Container */}
      <section
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "4rem 2rem",
          maxWidth: "1200px",
          margin: "0 auto",
          gap: "2rem",
        }}
      >
        {/* Left Column: Text & CTA */}
        <div style={{ flex: "1" }}>
          <h1
            style={{
              fontSize: "3.5rem",
              marginBottom: "1rem",
              lineHeight: "1.1",
            }}
          >
            Bring a Beautiful <span style={{ color: "#FFD700" }}>Void</span>{" "}
            Into Your Home
          </h1>
          <p
            style={{
              fontSize: "1.2rem",
              color: "#b3b3b3",
              marginBottom: "2rem",
              lineHeight: "1.5",
            }}
          >
            Black cats are often the last to be adopted from shelters due to
            old-fashioned superstitions. We're here to spotlight these loving
            house panthers and help you find your perfect match.
          </p>
          <Link to="/browse" style={{ textDecoration: "none" }}>
            <button
              style={{
                backgroundColor: "#FFD700",
                color: "#121212",
                padding: "0.8rem 2rem",
                fontSize: "1rem",
                fontWeight: "bold",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Find Your Kitty
            </button>
          </Link>
        </div>

        {/* Right Column: Hero Image Placeholder */}
        <div style={{ flex: "1", display: "flex", justifyContent: "center" }}>
          <div
            style={{
              width: "100%",
              maxWidth: "450px",
              aspectRatio: "1/1",
              backgroundColor: "#222",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#666",
            }}
          >
            <HeroImage />
          </div>
        </div>
      </section>
    </div>
  );
}
