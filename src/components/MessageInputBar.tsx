import { Socket } from "socket.io-client";
import { ChatRoomMessage } from "../interfaces/ChatRoomMessage";

interface Props {
    socket : Socket
}

const sendChatRoomMessage = (socket: Socket, message: ChatRoomMessage) => {    
    if (socket.connected) {      
        socket.send(JSON.stringify(message));     
    }  
}
export function MessageInputBar (props : Props) {
    
    return ( 
        <div className="grow-0">
            <form  
                onSubmit={(event) => {         
                    event.preventDefault();         
                    const messageInput = event.target.elements.message;         
                    sendChatRoomMessage(props.socket,messageInput)         
                    messageInput.value = '';       
                }
            }>
                <div className="join object-bottom flex">
                    <input name="message" type="text" 
                        placeholder="Type here" 
                        className="input input-bordered join-item grow" />    
                    <button className="btn join-item" type="submit">Send</button> 
                </div>
            </form>
        </div>
    )
}