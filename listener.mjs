import events from 'events';

const eventListener = new events.EventEmitter();

const NOTIFICATION_CHANNEL = "notification-chanel";

export const sendNotification = (message) => {
    eventListener.emit(NOTIFICATION_CHANNEL, message);
}

export const startNotificationService = () => {
    eventListener.on(NOTIFICATION_CHANNEL, (message) => {
        console.log(message);
    });
}