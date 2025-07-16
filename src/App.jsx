import React, { useEffect, useState } from "react";

export default function App() {
  const [characters, setCharacters] = useState([]);

  const [scores, setScores] = useState(() => {
    try {
      const saved = localStorage.getItem("rick-scores");
      return saved ? JSON.parse(saved) : {};
    } catch (error) {
      console.error("Error leyendo localStorage:", error);
      return {};
    }
  });

  // Calcular totales globales
  const totalLikes = Object.values(scores).filter((v) => v > 0).reduce((a, b) => a + b, 0);
  const totalDislikes = Object.values(scores).filter((v) => v < 0).reduce((a, b) => a + b, 0);

  
  // Guardar en localStorage cuando cambian los puntajes
  useEffect(() => {
    try {
      localStorage.setItem("rick-scores", JSON.stringify(scores));
      console.log("Guardado en localStorage:", scores);
    } catch (error) {
      console.error("Error guardando en localStorage:", error);
    }
  }, [scores]);
  
  
  
  const [filter, setFilter] = useState(""); // primero se declara el estado

  // Luego se usa el estado para filtrar
  const filteredCharacters = characters.filter((char) => {
    const search = filter.toLowerCase();
    return (
      char.name.toLowerCase().includes(search) ||
      char.species.toLowerCase().includes(search) ||
      char.status.toLowerCase().includes(search)
    );
  });

  // Traer personajes de la API
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data.results);
      })
      .catch((error) => console.error("Error fetching characters:", error));
  }, []);

  // Manejar Like o Dislike
  const handleVote = (id, delta) => {
    setScores((prev) => {
      const currentScore = prev[id] || 0;
      return { ...prev, [id]: currentScore + delta };
    });
  };

  return (
    <div
      style={{
      padding: "20px",
      maxWidth: "1200px",
      margin: "0 auto",
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f4f4f4",
      minHeight: "100vh",
    }}
    >
      <h1>Rick and Morty - Visor de Personajes</h1>

      <input
        type="text"
        placeholder="Buscar por nombre, especie o estado"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        style={{ padding: 8, width: "100%", maxWidth: 400, marginBottom: 20 }}
      />

       <div
        style={{
        marginBottom: 20,
        fontSize: "18px",
        fontWeight: "bold",
        textAlign: "center",
     }}
     >
      👍 Total Likes: {totalLikes} — 👎 Total Dislikes: {Math.abs(totalDislikes)}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: 20,
        }}
      >
        {filteredCharacters.map((char) => (
          <div
            key={char.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: 12,
              padding: 12,
              textAlign: "center",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              background: "#fefefe",
              color: "#1a1a1a",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: 10,
            }}
          >
            <img
              src={char.image}
              alt={char.name}
              style={{
                width: "100%",
                borderRadius: 8,
                maxHeight: 200,
                objectFit: "cover",
              }}
            />
            <h3>{char.name}</h3>
            <p>
              <b>Estado:</b> {char.status} <br />
              <b>Especie:</b> {char.species}
            </p>
            <div>
            <button
            onClick={() => handleVote(char.id, +1)}
              style={{
                marginRight: 10,
                padding: "6px 12px",
                fontSize: "14px",
                borderRadius: 6,
                border: "none",
                background: "#4caf50",
                color: "#fff",
                cursor: "pointer",
              }}
                >
                👍 Like
              </button>

              <button
                onClick={() => handleVote(char.id, -1)}
                  style={{
                    padding: "6px 12px",
                    fontSize: "14px",
                    borderRadius: 6,
                    border: "none",
                    background: "#f44336",
                    color: "#fff",
                    cursor: "pointer",
                  }}
                  >
                  👎 Dislike
              </button>
            
            </div>
            <p>
              <b>Puntaje:</b> {scores[char.id] || 0}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}


