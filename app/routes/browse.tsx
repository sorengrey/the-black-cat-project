import { useState } from "react";
import type { Route } from "./+types/browse";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Browse Voids | The Black Cat Project" }];
}

// Mock structure mimicking exactly what Petfinder's API array returns
const MOCK_CATS = Array.from({ length: 12 }).map((_, i) => ({
  id: i,
  name: `Voidling ${i + 1}`,
  age: i % 2 === 0 ? "Kitten" : "Adult",
  location: "Nearby",
  image: "https://placekitten.com/300/300", // Temporary fallback placeholder string
}));

export default function Browse() {
  const [zip, setZip] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for black cats near:", zip);
    // Real API fetch logic will attach right here
  };

  return (
    <div
      style={{
        backgroundColor: "#121212",
        color: "#f5f5f5",
        minHeight: "100vh",
        padding: "2rem",
      }}
    >
      {/* Search Bar Container */}
      <header style={{ textAlign: "center", marginBottom: "4rem" }}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "1.5rem" }}>
          Find Voids Near You
        </h1>
        <form
          onSubmit={handleSearch}
          style={{ display: "inline-flex", gap: "0.5rem" }}
        >
          <input
            type="text"
            placeholder="Enter ZIP code..."
            value={zip}
            onChange={(e) => setZip(e.target.value)}
            maxLength={5}
            style={{
              padding: "0.8rem 1rem",
              fontSize: "1rem",
              borderRadius: "4px",
              border: "1px solid #333",
              backgroundColor: "#1a1a1a",
              color: "#fff",
              width: "200px",
              textAlign: "center",
            }}
          />
          <button
            type="submit"
            style={{
              backgroundColor: "#FFD700",
              color: "#121212",
              padding: "0.8rem 1.5rem",
              fontSize: "1rem",
              fontWeight: "bold",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Search
          </button>
        </form>
      </header>

      {/* Grid Component Section */}
      <main style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", // Creates 4 columns perfectly on desktop, auto-scales down on mobile!
            gap: "2rem",
          }}
        >
          {MOCK_CATS.map((cat) => (
            <div
              key={cat.id}
              style={{
                backgroundColor: "#1a1a1a",
                borderRadius: "8px",
                overflow: "hidden",
                border: "1px solid #222",
              }}
            >
              {/* Image Block */}
              <div
                style={{
                  width: "100%",
                  aspectRatio: "1/1",
                  backgroundColor: "#333",
                }}
              />

              {/* Metadata Text Details */}
              <div style={{ padding: "1rem" }}>
                <h3 style={{ margin: "0 0 0.5rem 0", color: "#fff" }}>
                  {cat.name}
                </h3>
                <p
                  style={{ margin: "0", color: "#b3b3b3", fontSize: "0.9rem" }}
                >
                  {cat.age} • {cat.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
