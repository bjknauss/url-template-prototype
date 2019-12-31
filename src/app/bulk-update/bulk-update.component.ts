import { Component, OnInit } from "@angular/core";
import { AdService } from "../ad.service";
import { AdMap, Container, Message } from "../models";
import { FormControl } from "@angular/forms";
import { MatAutocompleteSelectedEvent } from "@angular/material";
import { SelectionModel } from "@angular/cdk/collections";

@Component({
  selector: "app-bulk-update",
  templateUrl: "./bulk-update.component.html",
  styleUrls: ["./bulk-update.component.scss"]
})
export class BulkUpdateComponent implements OnInit {
  containerInput = new FormControl();
  ads: AdMap[];
  containers: Container[];
  selectedAd: AdMap;
  selectedContainer: Container;
  selectedMessage: Message;
  displayedColumns = ["select", "packageName", "containerName", "messageId"];
  constructor(private adService: AdService) {
    this.ads = this.adService.ads();
    this.containers = this.adService.containers;
  }

  ngOnInit() {}

  select(ad: AdMap) {
    this.selectedAd = ad;
    this.containerInput.setValue(this.selectedAd.container);
    this.selectedContainer = ad.container;
    this.selectedMessage = ad.message;
  }

  handleContainerSelect(container: Container) {
    this.selectedContainer = container;
  }

}
