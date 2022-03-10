import { LightningElement, api } from 'lwc';

export default class QuantityCounter extends LightningElement {
  @api counterVal = 0;
  @api incrementVal = 1;

  handleDecrement(e) {
    this.counterVal = parseInt(this.counterVal) - parseInt(this.incrementVal);
    this.dispatchEvent(
      new CustomEvent('counterchange', { detail: this.counterVal })
    );
  }

  handleIncrement(e) {
    this.counterVal = parseInt(this.counterVal) + parseInt(this.incrementVal);
    this.dispatchEvent(
      new CustomEvent('counterchange', { detail: this.counterVal })
    );
  }
}
