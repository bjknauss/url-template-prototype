import { Adcode, Container, Message } from "../models";
import { random, lorem, company, address } from "faker";
import Package from "../models/package";

const dealers = ["Chevy", "GM", "Buick", "Jeep"];
const strategies = [
  "Conq",
  "Conquest",
  "Ret",
  "Retention",
  "Retargeting",
  "Display",
  "Search"
];

interface Range {
  min: number;
  max: number;
}

function size(num: number): any[] {
  return [...Array(num)];
}

function rangeArray(range: Range): any[] {
  return size(randomNum(range));
}

function randomNum(range: Range) {
  const num = random.number({ min: range.min, max: range.max, precision: 1 });
  return num;
}

function createId(): string {
  return randomNum({ min: 1000, max: 99999 }).toString();
}

export function createAdcode(messageId: string): Adcode {
  return {
    id: createId(),
    messageId,
    adcode: lorem.slug()
  };
}

export function createMessage(
  containerId: string,
  adcodeRange: Range
): Message {
  const id = createId();
  const message = `Message - ${company.bs()}`;
  const adcodes = rangeArray(adcodeRange).map(() => createAdcode(id));
  return {
    id,
    adcodes,
    containerId,
    message
  };
}

export function createContainer(
  rangeOfMessages: Range,
  rangeOfAdcodes: Range
): Container {
  const id = createId();
  const messages = rangeArray(rangeOfMessages).map(() =>
    createMessage(id, rangeOfAdcodes)
  );
  const name = `Con - ${random.arrayElement(
    dealers
  )} of ${address.city()} LMA ${random.arrayElement(strategies)}`;

  return {
    id,
    messages,
    name
  };
}

export function createContainers(
  numberOfContainers: number = 25,
  rangeOfMessages: Range,
  rangeOfAdcodes: Range
): Container[] {
  return size(numberOfContainers).map(() =>
    createContainer(rangeOfMessages, rangeOfAdcodes)
  );
}

export function createPackage(): Package {
  return {
    id: createId(),
    name: `${random.arrayElement(
      dealers
    )} of ${address.city()} LMA - ${random.arrayElement(strategies)}`
  };
}

export function createPackages(num: number): Package[] {
  return size(num).map(() => createPackage());
}
