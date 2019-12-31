import Message from "./message";

export default interface Container {
  id: string;
  name: string;
  messages: Message[];
}
