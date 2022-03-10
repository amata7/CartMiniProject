import { LightningElement, track } from 'lwc';

export default class QuantityCounterPreview extends LightningElement {
  @track counterVal = 0;
  handleCounterChange(e) {
    this.counterVal = e.detail;
  }
}
