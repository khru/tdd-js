module.exports = class Library {
  #library = [];
  #LIBRARY_ERRORS = {
    null: 'INVALID_NULL_ELEMENT',
    title: 'INVALID_TITLE',
  };

  constructor(library) {
    this.#setLibrary(library);
  }

  #setLibrary(library) {
    if (!library){
      this.#library = [];
      return;
    }


    this.#library =  [...new Set(library)];
  }

  findByTitle(title) {
    return this.#library.find(element => element.title === title);
  }

  donateElement(element) {
    let validElement = this.#buildValidElement(element);

    this.increaseElementCopiesIfExists(validElement);

    this.#library.unshift(validElement);
    return this;
  }

  donateElements(elements) {
    for (const element of elements) {
      this.donateElement(element);
    }
    return this;
  }

  increaseElementCopiesIfExists(validElement) {
    const elementAlreadyExists = this.findByTitle(validElement.title);

    if (!elementAlreadyExists) {
      return;
    }
    validElement.copies += elementAlreadyExists.copies;
    this.#setLibrary(this.#library.filter(element => element.title !== validElement.title));
  }

  getLibrary() {
    return this.#library;
  }

  getLastElement() {
    return this.#library[[this.#library.length - 1]];
  }

  #buildValidElement(element) {
    if (!element) {
      throw new Error(this.#LIBRARY_ERRORS.null)
    }

    const defaultElement = {
      title: '',
      copies: 1
    };

    if (!element.hasOwnProperty('title')) {
      throw new Error(this.#LIBRARY_ERRORS.title)
    }

    defaultElement.title = element.title;

    if (element.hasOwnProperty('copies')) {
      defaultElement.copies = element.copies;
    }

    return defaultElement;
  }
}
