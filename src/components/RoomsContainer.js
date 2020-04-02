import React from 'react';
import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList';
import { RoomConsumer } from '../context';
import Loading from './Loading';

export default function RoomsContainer(){
    return(
        <RoomConsumer>
            {(value) => {
                console.log(value);
                const {loading, rooms, sortedRooms } = value;
                if(loading){
                    return <Loading />
                }
                return(
                    <>
                        <RoomsFilter rooms={rooms} />
                        <RoomsList rooms={sortedRooms} />
                    </>
                );
            }}
        </RoomConsumer>
    );
}


 
// this is another way using higher order component

/* import React from 'react';
import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList';
import { withRoomConsumer } from '../context';
import Loading from './Loading';

function RoomContainer({context}){
    
    const {loading, rooms, sortedRooms} = context;

    if(loading){
        return <Loading />
    }
    return(
        <>
            <RoomsFilter rooms={rooms} />
            <RoomsList rooms={sortedRooms} />
        </>
    );
}


export default withRoomConsumer(RoomContainer); */