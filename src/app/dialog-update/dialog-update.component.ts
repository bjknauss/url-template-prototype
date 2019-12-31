import { Component, OnInit } from "@angular/core";
import { AdMap, Container, Message } from "../models";
import { AdService } from "../ad.service";
import { MatDialog } from "@angular/material";
import { EditAdmapDialogComponent } from "../edit-admap-dialog/edit-admap-dialog.component";
import { Subject, BehaviorSubject } from "rxjs";

@Component({
  selector: "app-dialog-update",
  templateUrl: "./dialog-update.component.html",
  styleUrls: ["./dialog-update.component.scss"]
})
export class DialogUpdateComponent implements OnInit {
  ads: AdMap[];
  containers: Container[];
  selectedAd: AdMap;
  selectedContainer: Container;
  displayedColumns = ["packageName", "containerName", "messageId", "actions"];
  tableDataSource: Subject<AdMap[]>;

  constructor(private adService: AdService, public dialog: MatDialog) {
    this.ads = [...this.adService.ads()];
    this.containers = this.adService.containers;
    this.selectedAd = this.ads[0];
    this.selectedContainer = this.selectedAd.container;
    this.tableDataSource = new BehaviorSubject(this.ads);
  }

  ngOnInit() {}

  handleEditClick(ad: AdMap) {
    let dialogRef = this.dialog.open(EditAdmapDialogComponent, {
      data: ad
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const adIdx = this.ads.indexOf(ad);
        if (adIdx >= 0) {
          console.log(`idx: ${adIdx}`);
          this.ads[adIdx] = result;
          this.tableDataSource.next(this.ads);
        }
      }
    });
  }

  handleContainerSelect(container: Container) {
    this.selectedContainer = container;
  }
}
