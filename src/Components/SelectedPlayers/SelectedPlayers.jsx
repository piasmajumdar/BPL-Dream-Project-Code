import SelectedCard from './../ui/SelectedCard';

const SelectedPlayers = ({ selectedPlayers, setSelectedPlayers, coin, setCoin }) => {
    console.log(selectedPlayers);

    const handleDeleteSelectedPlayer = (player) => {
        // console.log("selectedPlayers", selectedPlayers)
        // console.log(player, "player delete");
        const filteredPlayers = selectedPlayers.filter(selectedPlayer => selectedPlayer.playerName != player.playerName);
        // console.log("filteredPlayers", filteredPlayers);
        setSelectedPlayers(filteredPlayers);
        setCoin(coin + player.Price)

    }
    return (
        <div>
            <div className="space-y-5">
                {selectedPlayers.length === 0 ?
                    <div className="h-100 flex flex-col justify-center items-center gap-4">
                        <h2 className="font-semibold text-xl">No players selected yet</h2>
                        <p>Go to Available tab to select players</p>
                    </div>
                    :
                    selectedPlayers.map((player, index) => {
                        return <SelectedCard
                            player={player}
                            key={index}
                            handleDeleteSelectedPlayer={handleDeleteSelectedPlayer}>
                        </SelectedCard>

                    })
                }
            </div>
        </div>
    );
};

export default SelectedPlayers;