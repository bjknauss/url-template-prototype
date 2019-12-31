import Adcode from "./adcode";

export default interface Message {
  id: string;
  containerId: string;
  message: string;
  adcodes: Adcode[];
}
