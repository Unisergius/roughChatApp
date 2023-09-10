import { ChatRoomMessage } from "../interfaces/ChatRoomMessage";

export function FirstPersonMessage( props: ChatRoomMessage ) {
    return (
        <div className="chat chat-end">
            <div className="chat-bubble">{props.message}</div>
        </div>
    );
}