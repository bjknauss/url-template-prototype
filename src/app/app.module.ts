import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatCardModule,
  MatTableModule,
  MatCheckboxModule,
  MatAutocompleteModule,
  MatInputModule,
  MatFormFieldModule,
  MatListModule,
  MatRippleModule,
  MatTabsModule,
  MatDialogModule,
  MatButtonModule,
  MatIconModule,
  MatSelectModule
} from "@angular/material";
import { CdkTableModule } from "@angular/cdk/table";

import { AppComponent } from "./app.component";
import { MainComponent } from "./main/main.component";
import { PackageListComponent } from "./package-list/package-list.component";
import { BulkUpdateComponent } from "./bulk-update/bulk-update.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DialogUpdateComponent } from "./dialog-update/dialog-update.component";
import { MessageListComponent } from "./message-list/message-list.component";
import { ContainerAutocompleteComponent } from "./container-autocomplete/container-autocomplete.component";
import { EditAdmapDialogComponent } from "./edit-admap-dialog/edit-admap-dialog.component";
import { MessageSelectComponent } from "./message-select/message-select.component";

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PackageListComponent,
    BulkUpdateComponent,
    DialogUpdateComponent,
    MessageListComponent,
    ContainerAutocompleteComponent,
    EditAdmapDialogComponent,
    MessageSelectComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatTableModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule,
    MatListModule,
    MatRippleModule,
    MatTabsModule,
    CdkTableModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [EditAdmapDialogComponent]
})
export class AppModule {}
