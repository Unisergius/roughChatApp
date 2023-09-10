import { ChatRoomMessage } from "../interfaces/ChatRoomMessage";

export function ThirdPersonMessage(props: ChatRoomMessage) {
    return (
        <> 
            <div className="chat-header">
                {props.id}
            </div>
            <div className="chat chat-start">
                <div className="chat-bubble">{props.message}</div>
            </div>
        </>
    );
}