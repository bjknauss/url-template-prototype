import Package from "./package";
import Container from "./container";
import Message from "./message";

export default interface AdMap {
  package: Package;
  container: Container;
  message: Message;
}
