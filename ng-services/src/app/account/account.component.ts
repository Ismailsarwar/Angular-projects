import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoggingService } from '../logging.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggingService, LoginService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

  // constructor(private loggingService: LoggingService){}
  constructor(private loginService: LoginService){}


  onSetTo(status: string) {
    this.statusChanged.emit({id: this.id, newStatus: status});
    // this.loggingService.logStatusChange(status)
    this.loginService.logStatusChange(status);
    console.log('A server status changed ' + status);
  }
}
