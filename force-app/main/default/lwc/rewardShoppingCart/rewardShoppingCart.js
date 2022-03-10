import { LightningElement, wire } from 'lwc';
import { subscribe, MessageContext } from 'lightning/messageService';
import REWARD_CARD_CHANNEL from '@salesforce/messageChannel/Reward_Cart__c';

export default class RewardShoppingCart extends LightningElement {
  subscription;
  itemTitle;
  itemQuantity;
  @wire(MessageContext)
  messageContext;

  subscribeToMessageChannel() {
    this.subscription = subscribe(
      this.messageContext,
      REWARD_CARD_CHANNEL,
      (message) => this.handleMessage(message)
    );
  }

  handleMessage(message) {
    console.log(message);
  }

  connectedCallback() {
    this.subscribeToMessageChannel();
  }
}
