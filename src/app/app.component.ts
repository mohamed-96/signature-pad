import { Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import SignaturePad from 'signature_pad';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent {
  title = 'signatureJS';
  signaturePad: SignaturePad;
  buttonText = 'Hide';
  @ViewChild('canvas') canvasEl: ElementRef;

  constructor() { }

  ngAfterViewInit() {
    this.signaturePad = new SignaturePad(this.canvasEl.nativeElement);
  }

  startDrawing(event: Event) {
    console.log(event);
    // works in device not in browser

  }

  moved(event: Event) {
    // works in device not in browser
  }

  clearPad() {
    this.signaturePad.clear();
  }

  toggleShow(){
    this.clearPad()
    this.buttonText == 'Hide' ? this.buttonText = 'Show' : this.buttonText = 'Hide';
  }

  savePad() {
    const base64Data = this.signaturePad.toDataURL();

    var a = document.createElement("a"); //Create <a>
    a.href = base64Data; //Image Base64 Goes here
    a.download = new Date().getTime()+"-Image.png"; //File name Here
    a.click(); //Downloaded file
  }





}
