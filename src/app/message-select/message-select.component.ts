import {
  Component,
  OnInit,
  Input,
  Output,
  OnChanges,
  SimpleChanges
} from "@angular/core";
import { Container, Message } from "../models";
import { Subject } from "rxjs";
import { MatSelectChange } from "@angular/material";

@Component({
  selector: "app-message-select",
  templateUrl: "./message-select.component.html",
  styleUrls: ["./message-select.component.scss"]
})
export class MessageSelectComponent implements OnInit, OnChanges {
  @Input() container: Container;
  @Input() message: Message;
  @Output() messageSelect: Subject<Message>;
  selectedMessage: Message;

  constructor() {
    this.messageSelect = new Subject<Message>();
  }

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.message) {
      const msg = changes.message.currentValue as Message;
      this.selectedMessage = msg;
    }
    if (changes.container) {
      const container = changes.container.currentValue as Container;
      if (!container.messages.includes(this.selectedMessage)) {
        this.selectedMessage = null;
      }
    }
  }

  handleSelection(event: MatSelectChange) {
    const msg = event.value as Message;
    if (msg !== this.selectedMessage) {
      this.selectedMessage = msg;
      this.messageSelect.next(msg);
    }
  }
}
