import { Package, Container, Message, DefaultMap } from "../models";
import { random } from "faker";

export function createAdDefaults(
  packages: Package[],
  containers: Container[]
): DefaultMap[] {
  return packages.map(p => {
    const container = random.arrayElement(containers);
    const message = random.arrayElement(container.messages);
    return {
      packageId: p.id,
      containerId: container.id,
      messageId: message.id
    };
  });
}
