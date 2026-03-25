export class Message {
  constructor({ userId, channel, text }) {
    this.userId = userId;
    this.channel = channel;
    this.text = text;
    this.timestamp = new Date();
  }
}
