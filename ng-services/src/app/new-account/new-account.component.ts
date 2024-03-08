import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../logging.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService, LoginService]
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  // constructor(private loggingService: LoggingService) {
  // }
  constructor(private loginService: LoginService){}

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountAdded.emit({
      name: accountName,
      status: accountStatus
    });

    this.loginService.logStatusChange(accountStatus);
  }
}
