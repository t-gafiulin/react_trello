import React from 'react';

const DeleteBoard = ({id, deleteBoard}) => {
        return (<div>
            <button onClick={deleteBoard.bind(null, id)}>Delete board</button> 
        </div>);
}

export default DeleteBoard;