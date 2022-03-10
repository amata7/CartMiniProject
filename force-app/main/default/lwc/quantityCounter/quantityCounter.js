import { LightningElement, api, wire } from 'lwc';
import { publish, MessageContext } from 'lightning/messageService';
import REWARD_CARD_CHANNEL from '@salesforce/messageChannel/Reward_Cart__c';

export default class QuantityCounter extends LightningElement {
  @api counterVal = 0;
  @api incrementVal = 1;
  @api itemImgUrl;
  @api itemTitle;
  @wire(MessageContext)
  messageContext;

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
    const payload = {
      item: this.itemTitle,
      quantity: this.counterVal,
    };
    if (this.counterVal > 0) {
      publish(this.messageContext, REWARD_CARD_CHANNEL, payload);
      this.counterVal = 0;
    } else {
      this.counterVal = 0;
    }
  }
}
