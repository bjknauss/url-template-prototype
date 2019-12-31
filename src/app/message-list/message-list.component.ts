import {
  Component,
  OnInit,
  Input,
  Output,
  OnChanges,
  SimpleChanges
} from "@angular/core";
import { Container, Message } from "../models";
import { Observable, Subject } from "rxjs";

@Component({
  selector: "app-message-list",
  templateUrl: "./message-list.component.html",
  styleUrls: ["./message-list.component.scss"]
})
export class MessageListComponent implements OnInit, OnChanges {
  selectedMessage?: Message;

  @Input() container: Container;
  @Output() messageSelect: Observable<Message>;

  constructor() {
    this.messageSelect = new Subject();
  }

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.container) {
      this.container = changes.container.currentValue as Container;
    }
  }
}
