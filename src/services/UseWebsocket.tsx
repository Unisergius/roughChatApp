import { useEffect, useState } from "react";
import { Socket } from "socket.io-client";
import { ChatRoomState } from "../interfaces/ChatRoomState";

export function UseWebSocket(socket: Socket) {
    const [chatRoomState, setChatRoomState] = useState<ChatRoomState>({chat: []}); 
    const [error, setError] = useState(null); 

    useEffect(() => {      
        socket.on('connect', () => {      
          console.log('Connected to server!');    
        });    
        socket.on('disconnect', () => {      
          console.log('Disconnected from server');    
        });    
        socket.on('error', (error) => {      
          setError(error);    
        });    
        socket.on('message', (chatMessages) => { 
            // TODO: check if parse is successful maybe with a try catch exception.     
            setChatRoomState(JSON.parse(chatMessages));    
        });    
        return () => {      
          socket.disconnect();    
        }; 
    }, [socket]);

    return { chatRoomState, error };
}