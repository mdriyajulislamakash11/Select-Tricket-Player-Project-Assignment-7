import React from 'react';
import SelectedCard from './SelectedCard';

const SelectedPlayer = ({Selected, handleCartDelet}) => {

    return (
        <div>
            <h2 className="text-2xl font-bold">Selected Player: ({Selected.length}/15)</h2>

            <div>
                {
                    Selected.map((player) => <SelectedCard
                     player={player}
                     key={player.playerId}
                     handleCartDelet={handleCartDelet}
                     />)
                }
            </div>
        </div>
    );
};

export default SelectedPlayer;