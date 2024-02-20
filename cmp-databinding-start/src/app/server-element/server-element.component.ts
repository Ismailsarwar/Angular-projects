import { Component, 
  OnInit, 
  Input, 
  ViewEncapsulation, 
  OnChanges, 
  SimpleChange, 
  SimpleChanges, 
  DoCheck, 
  AfterContentInit,
  AfterContentChecked, 
  AfterViewChecked, 
  AfterViewInit, 
  ViewChild, 
  ElementRef, 
  ContentChild} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css',
  encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit {
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef

  constructor() {
    console.log('constructor is called');

  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngonchanges is called');
  }

  ngOnInit() {
    console.log('ngOninit is called');
    console.log('Text Content of paragraph: ' + this.paragraph.nativeElement.textContent);
  }

  ngDoCheck() {
    console.log('docheck called')
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called');
    console.log('Text Content of paragraph: ' + this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked(): void {
    console.log('afterconentn checked last')
  }

  ngAfterViewInit() {
    console.log('ng After view init checked');
  }

  ngAfterViewChecked(): void {
    console.log('ng after view checked working');
    console.log('Text content' + this.header.nativeElement.textContent);
  }
}
