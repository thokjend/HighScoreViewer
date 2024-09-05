import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();
app.use(cors());

app.get("/api/hiscore", async (req, res) => {
  const playerName = req.query.player;

  if (!playerName) {
    return res.status(400).json({ error: "Player name is required" });
  }

  try {
    const response = await fetch(
      `https://secure.runescape.com/m=hiscore_oldschool/index_lite.json?player=${playerName}`
    );

    if (!response.ok) {
      throw new Error("Player not found");
    }

    const data = await response.text();
    res.send(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
