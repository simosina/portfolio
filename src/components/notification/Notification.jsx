import "./notification.scss";

export default function Notification({ visible }) {

    return (
        <div className={"notification " + (visible ? 'visible ' : undefined)}>
            <img src="assets/checkmark.svg" alt="" />
            <p>Your message has been sent successfully.</p>
        </div>
    )
}
