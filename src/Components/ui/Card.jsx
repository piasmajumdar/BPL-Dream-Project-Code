
import { useState } from 'react';
import { FaFlag, FaUser } from 'react-icons/fa';

const card = ({ player, setCoin, coin, selectedPlayers, setSelectedPlayers }) => {

    const [isSelected, setIsSelected] = useState(false);

    const handleChoosePlayers = () => {
        let newCoin = coin - player.Price;
        if (newCoin >= 0) {
            setCoin(newCoin);
        }else{
            alert("Not enough coin to purchase this player");
            return;
        }
        
        alert(`${player.playerName} is selected`)
        setIsSelected(true);
        setSelectedPlayers([...selectedPlayers, player])
    }

    return (

        <div className="card bg-base-100 shadow-sm">
            <figure className='h-90'>
                <img className=' w-full'
                    src={player.playerImg}
                    alt={player.playerName} />
            </figure>
            <div className="card-body">
                <h2 className="card-title"><FaUser /> {player.playerName}</h2>
                <div className='flex justify-between items-center gap-2'>
                    <div className='flex items-center gap-2'>
                        <FaFlag></FaFlag>
                        <p>{player.playerCountry}</p>
                    </div>
                    <button className='btn'>{player.playerType}</button>
                </div>
                <div className="divider"></div>

                <h2 className='font-bold'>Rating ({player.rating})</h2>
                <div className='flex justify-between gap-4 font-bold'>
                    <p>{player.battingStyle}</p>
                    <p className='text-right'>{player.bowlingStyle}</p>
                </div>
                <div className="card-actions justify-between items-center">
                    <p className='font-semibold'>Price: ${player.Price}</p>
                    <button className="btn" onClick={handleChoosePlayers} disabled={isSelected}>
                        {isSelected ? "Selected" : "Choose Player"}
                    </button>
                </div>
            </div>
        </div>

    );
};

export default card;