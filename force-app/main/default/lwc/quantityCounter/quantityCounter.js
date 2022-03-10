import { LightningElement, api } from 'lwc';

export default class QuantityCounter extends LightningElement {
  @api counterVal = 0;
  @api incrementVal = 1;
  @api itemImgUrl;
  @api itemTitle;

  handleDecrement(e) {
    if (this.counterVal === 0) {
      this.counterVal = parseInt(this.counterVal);
    } else {
      this.counterVal = parseInt(this.counterVal) - parseInt(this.incrementVal);
    }
  }

  handleIncrement(e) {
    this.counterVal = parseInt(this.counterVal) + parseInt(this.incrementVal);
  }

  handleClick(e) {
    this.counterVal = 0;
  }
}
