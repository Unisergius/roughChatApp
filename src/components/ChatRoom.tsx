import io from 'socket.io-client'
import { ThirdPersonMessage } from "./ThirdPersonMessage";
import { FirstPersonMessage } from "./FirstPersonMessage";
import { MessageInputBar } from "./MessageInputBar";
import { UseWebSocket } from "../services/UseWebsocket";
import { ChatRoomMessage } from '../interfaces/ChatRoomMessage';

const socket = io(`${import.meta.env.SERVERIP}:${import.meta.env.SERVERPORT}`);  

function ChatRoom() {

    const myID :string = "Sergio";
    const { chatRoomState, error } = UseWebSocket(socket);   
  
    if (error) {     
      return <div>Error: {error}</div>;   
    }   
    return (
        <>
            <div className="flex flex-col space-y-4 p-3 grow overflow-y-auto">
            {
                chatRoomState.chat.map((chatMessage: ChatRoomMessage) => {       
                    if(chatMessage.id != myID) {
                        return ( 
                            <ThirdPersonMessage 
                                id={chatMessage.id} 
                                message={chatMessage.message} 
                            />
                        ) 
                    }
                    return ( 
                        <FirstPersonMessage 
                            id={chatMessage.id} 
                            message={chatMessage.message} 
                        />
                    )
                })
            }
            </div>
            <MessageInputBar socket={socket} />
        </>
    )
  }

  export default ChatRoom