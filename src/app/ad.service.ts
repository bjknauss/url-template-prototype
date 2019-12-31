import { Injectable } from "@angular/core";
import { Container, Message, Package, DefaultMap, AdMap } from "./models";
import { createContainers, createPackages } from "./util/create";
import { createAdDefaults } from "./util/map";

@Injectable({
  providedIn: "root"
})
export class AdService {
  private _containers: Container[];
  private _packages: Package[];
  private _map: DefaultMap[];
  private _ads: AdMap[];

  constructor() {
    this._containers = createContainers(
      50,
      { min: 1, max: 3 },
      { min: 3, max: 10 }
    );
    this._packages = createPackages(25);
    console.log(this._packages);
    console.log(createAdDefaults);
    this._map = createAdDefaults(this._packages, this._containers);
    this._ads = this._map.map(m => {
      const pkg = this.package(m.packageId);
      const container = this.container(m.containerId);
      const message = this.message(container, m.messageId);
      return {
        container,
        message,
        package: pkg
      };
    });
  }

  ads(): AdMap[] {
    return this._ads;
  }

  package(packageId: string): Package {
    return this._packages.find(p => p.id === packageId);
  }

  get containers(): Container[] {
    return this._containers;
  }

  container(id: string): Container {
    return this._containers.find(c => c.id === id);
  }

  messages(containerId: string): Message[] {
    const container = this.container(containerId);
    if (!container) {
      return [];
    }
    return container.messages;
  }

  message(container: Container, messageId: string): Message {
    return container.messages.find(m => m.id === messageId);
  }
}
