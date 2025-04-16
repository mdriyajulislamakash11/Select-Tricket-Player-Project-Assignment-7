import React from 'react';
import SelectedCard from './SelectedCard';

const SelectedPlayer = ({Selected}) => {

    return (
        <div>
            <h2 className="text-2xl font-bold">Selected Player {Selected.length}</h2>

            <div>
                {
                    Selected.map((player) => <SelectedCard
                     player={player}
                     key={player.playerId}
                     />)
                }
            </div>
        </div>
    );
};

export default SelectedPlayer;