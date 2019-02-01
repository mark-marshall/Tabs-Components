class TabItem {
  constructor(element) {
    // Assign this.element to the passed in element
    this.element = element;
  }

  select() {
    // Select all ".tabs-item" elements from the DOM
    const items = document.querySelectorAll('.tabs-item');
    // Remove the class "tabs-item-selected" from each element
    Array.from(items).forEach(item => item.classList.remove('tabs-item-selected'));
    // Add a class named "tabs-item-selected" to this element
    this.element.classList.add('tabs-item-selected');
  }
}

class TabLink {
  constructor(element) {
    // Assign this.element to the passed in DOM element
    this.element = element;
    // Get the custom data attribute on the Link
    this.data = element.dataset.tab;
    // Using the custom data attribute get the associated Item element
    this.itemElement = document.querySelector(`.tabs-item[data-tab="${this.data}"]`);
    // Using the Item element, create a new instance of the TabItem class
    this.itemElement = new TabItem(this.itemElement);
    // Add a click event listener on this instance, calling the select method on click
    this.element.addEventListener('click', () => { this.select(); });
  }

  select() {
    this.itemElement.select();
    this.deselect();
    this.element.classList.add('tabs-link-selected');
  }

  deselect() {
    this.cSelection = document.querySelector('.tabs-link-selected');
    this.cSelection.classList.remove('tabs-link-selected');
  }
}

class Tabs {
  constructor() {
    document.querySelectorAll('.tabs-link').forEach(tab => new TabLink(tab));
  }
}

/* START HERE:

- Select all classes named ".tabs-link" and assign that value to the links variable

- With your selection in place, now chain a .forEach() method onto the links variable to iterate over the DOM NodeList

- In your .forEach() method's callback function, return a new instance of TabLink and pass in each link as a parameter

*/

document.querySelectorAll('.tabs').forEach(element => new Tabs(element));
