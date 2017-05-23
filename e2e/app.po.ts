import { browser, by, element } from 'protractor';

export class ContactMePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('contact-me-root h1')).getText();
  }
}
