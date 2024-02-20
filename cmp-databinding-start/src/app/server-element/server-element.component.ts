import { Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChange, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css',
  encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit {
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;

  constructor() {
    console.log('constructor is called');

  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngonchanges is called');
    console.log(changes)
  }

  ngOnInit() {
    console.log('ngOninit is called');
  }

  ngDoCheck() {
    console.log('docheck called')
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called');
  }

  ngAfterContentChecked(): void {
    console.log('afterconentn checked last')
  }

  ngAfterViewInit() {
    console.log('ng After view init checked');
  }

  ngAfterViewChecked(): void {
    console.log('ng after view checked working');
  }
}
