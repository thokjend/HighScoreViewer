# Old School RuneScape Highscore Lookup

This project is a React application that allows users to search for Old School RuneScape (OSRS) players and view their in-game stats. The app utilizes the official OSRS Highscore API to retrieve and display player information.

## Features

- **Player Search:** Enter a player's name to retrieve their OSRS stats.
- **Highscore Display:** View details such as total level, experience, and individual skill levels.
- **Real-Time Data:** Data is fetched directly from the OSRS Highscore API, ensuring up-to-date stats.

## Install

```
npm install
```

## Running the Application

```
npm run dev
```

The application will be available at `http://localhost:5173/`

## API Usage

This application uses the OSRS Highscore API to fetch player statistics. The API endpoint is:

```
https://secure.runescape.com/m=hiscore_oldschool/index_lite.json?player=PLAYER_NAME
```

Replace `PLAYER_NAME` with the OSRS username you want to look up.
