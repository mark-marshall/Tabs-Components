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
  constructor(element, currentlySelected) {
    // Assign this.element to the passed in DOM element
    this.element = element;
    // Get the custom data attribute on the Link
    this.data = element.dataset.tab;
    // Using the custom data attribute get the associated Item element
    this.itemElement = document.querySelector(`.tabs-item[data-tab="${this.data}"]`);
    // Using the Item element, create a new instance of the TabItem class
    this.itemElement = new TabItem(this.itemElement);
    // testing
    this.currentSelec = currentlySelected;
    // Add a click event listener on this instance, calling the select method on click
    this.element.addEventListener('click', () => {this.select();});
  }

  select() {
    console.log(this.currentSelec);
    // Get all of the elements with the tabs-link class
    const links = document.querySelectorAll('.tabs-link');
    // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    //Array.from(links).forEach(item => item.classList.remove('tabs-link-selected'));
    this.currentSelec.classList.remove('tabs-link-selected');
    // Add a class named "tabs-link-selected" to this link
    this.element.classList.add('tabs-link-selected');
    // Call the select method on the item associated with this link
    this.itemElement.select();
  }
}

class Tabs {
  constructor (element) {
    this.element = element
    const tabls = document.querySelectorAll('.tabs-link')
    this.currentlySelected = document.querySelector('.tabs-link-selected')
    tabls.forEach(element => new TabLink(element, this.currentlySelected));
  }
}

/* START HERE:

- Select all classes named ".tabs-link" and assign that value to the links variable

- With your selection in place, now chain a .forEach() method onto the links variable to iterate over the DOM NodeList

- In your .forEach() method's callback function, return a new instance of TabLink and pass in each link as a parameter

*/

//document.querySelectorAll('.tabs-link').forEach(element => new TabLink(element));
document.querySelectorAll('.tabs').forEach(element => new Tabs(element));
