import {
  Component,
  Input,
  OnInit,
  Output,
  OnChanges,
  SimpleChanges
} from "@angular/core";
import { Container, AdMap } from "../models";
import { Observable, Subject } from "rxjs";
import { MatAutocompleteSelectedEvent } from "@angular/material";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-container-autocomplete",
  templateUrl: "./container-autocomplete.component.html",
  styleUrls: ["./container-autocomplete.component.scss"]
})
export class ContainerAutocompleteComponent implements OnInit, OnChanges {
  @Input() containers: Container[] = [];
  @Input() adMap?: AdMap;
  @Output() containerSelect: Subject<Container>;
  private _selectedContainer?: Container;

  get selectedContainer(): Container | undefined {
    return this._selectedContainer;
  }

  set selectedContainer(container: Container | undefined) {
    this._selectedContainer = container;
    if (this._selectedContainer) {
      this.containerInput.setValue(this.selectedContainer);
    } else {
      this.containerInput.setValue("");
    }
  }

  containerInput = new FormControl();

  constructor() {
    this.containerSelect = new Subject();
  }

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.adMap) {
      const ad = changes.adMap.currentValue as AdMap;
      if (ad) {
        this.selectedContainer = ad.container;
      } else {
        this.selectedContainer = undefined;
      }
    }
  }

  displayFn(container?: Container): string | undefined {
    return container ? `${container.name} (${container.id})` : undefined;
  }

  handleOptionSelected(event: MatAutocompleteSelectedEvent) {
    this._selectedContainer = event.option.value;
    this.containerSelect.next(this._selectedContainer);
  }
}
