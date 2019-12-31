import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { AdMap, Container, Message } from "../models";
import { AdService } from "../ad.service";

@Component({
  selector: "app-edit-admap-dialog",
  templateUrl: "./edit-admap-dialog.component.html",
  styleUrls: ["./edit-admap-dialog.component.scss"]
})
export class EditAdmapDialogComponent implements OnInit {
  containers: Container[] = [];
  selectedContainer: Container;
  selectedMessage: Message;
  valid = false;

  constructor(
    public dialogRef: MatDialogRef<EditAdmapDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AdMap,
    public adService: AdService
  ) {
    this.containers = this.adService.containers;
  }

  ngOnInit() {
    this.selectedContainer = this.data.container;
    this.selectedMessage = this.data.message;
  }

  handleContainerSelect(container: Container) {
    this.selectedContainer = container;
  }

  handleMessageSelect(msg: Message) {
    this.selectedContainer = this.selectedContainer || this.data.container;
    this.selectedMessage = msg;
    this.valid = this.selectedMessage !== this.data.message;
  }

  save() {
    this.dialogRef.close({
      package: this.data.package,
      container: this.selectedContainer,
      message: this.selectedMessage
    });
  }
}
