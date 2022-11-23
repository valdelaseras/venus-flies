function fetchPlayers() {
    return fetch("http://localhost:3000/players")
        .then((response) => response.json());
}

export {
    fetchPlayers
};
