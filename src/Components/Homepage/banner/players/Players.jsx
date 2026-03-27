import React, { use } from 'react';

const Players = ({playerPromise}) => {

    const data= use(playerPromise);
    console.log(data);

    return (
        <div>
            players: {data.length}
        </div>
    );
};

export default Players;