class TabItem {
  constructor(element) {
    this.element = element;
  }

  select() {
    this.deselect();
    this.element.classList.add('tabs-item-selected');
  }

  deselect() {
    this.tSelection = document.querySelector('.tabs-item-selected');
    this.tSelection.classList.remove('tabs-item-selected');
  }
}

class TabLink {
  constructor(element) {
    this.element = element;
    this.data = element.dataset.tab;
    this.itemElement = document.querySelector(`.tabs-item[data-tab="${this.data}"]`);
    this.itemElement = new TabItem(this.itemElement);
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
  constructor(element) {
    this.element = element;
    document.querySelectorAll('.tabs-link').forEach(tab => new TabLink(tab));
  }
}

/* START HERE:

- Select all classes named ".tabs-link" and assign that value to the links variable

- With your selection in place, now chain a .forEach() method onto the links variable to iterate over the DOM NodeList

- In your .forEach() method's callback function, return a new instance of TabLink and pass in each link as a parameter

*/

document.querySelectorAll('.tabs').forEach(element => new Tabs(element));
