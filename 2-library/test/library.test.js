const Library = require('../library');
const FAKE_ELEMENT_NAME = 'fake dvd';

describe('Video library function', () => {

  it('library should be empty with a library store', () => {
    const libraryStore = [];
    const library = new Library(libraryStore);
    expect(library.getLibrary()).toStrictEqual(libraryStore);
  });

  it('library should be empty without a library store', () => {
    const EMPTY_ARRAY = [];
    const library = new Library();
    expect(library.getLibrary()).toStrictEqual(EMPTY_ARRAY);
  });

  it('should be able to donate an element to library without the copies', () => {
    const library = new Library();
    const element = {
      title: FAKE_ELEMENT_NAME
    };

    expect(library.donateElement(element).getLastElement().title).toStrictEqual(FAKE_ELEMENT_NAME);
  });

  it('should be able to donate an element to library without the copies', () => {
    const library = new Library();
    const element = {
      title: FAKE_ELEMENT_NAME
    };

    expect(library.donateElement(element).getLastElement().title).toStrictEqual(FAKE_ELEMENT_NAME);
  });

  it('should be able to donate a list elements to library without the copies', () => {
    const library = new Library();
    const elements = [
      { title: FAKE_ELEMENT_NAME },
      { title: FAKE_ELEMENT_NAME },
      { title: FAKE_ELEMENT_NAME },
      { title: FAKE_ELEMENT_NAME },
    ];

    const expectedLibrary = { title: FAKE_ELEMENT_NAME, copies: elements.length };

    expect(library.donateElements(elements).getLastElement()).toStrictEqual(expectedLibrary);
  });


  it('should be able to donate a list elements to library with copies', () => {
    const library = new Library();
    const COPIES_PER_ELEMENT = 2;
    const elements = [
      { title: FAKE_ELEMENT_NAME, copies: COPIES_PER_ELEMENT },
      { title: FAKE_ELEMENT_NAME, copies: COPIES_PER_ELEMENT  },
      { title: FAKE_ELEMENT_NAME, copies: COPIES_PER_ELEMENT  },
      { title: FAKE_ELEMENT_NAME, copies: COPIES_PER_ELEMENT  },
    ];

    const expectedLibrary = {
      title: FAKE_ELEMENT_NAME,
      copies: elements.length * COPIES_PER_ELEMENT
    };

    expect(library.donateElements(elements).getLastElement()).toStrictEqual(expectedLibrary);
  });

  it('should be able to donate an element to library with the copies', () => {
    const library = new Library();
    const element = {
      title: FAKE_ELEMENT_NAME,
      copies: 3
    };

    expect(library.donateElement(element).getLastElement()).toStrictEqual(element);
  });

  it('should be able to find an element by title', () => {
    const library = new Library();
    const element = {
      title: FAKE_ELEMENT_NAME,
      copies: 3
    };

    expect(library.donateElement(element).findByTitle(FAKE_ELEMENT_NAME)).toStrictEqual(element);
  });

  it('should not be able to donate and empty element', () => {
    const library = new Library();
    const nullElement = null;

    expect(() => library.donateElement(nullElement)).toThrowError(/^INVALID_NULL_ELEMENT.*/);
  });

  it('should not be able to donate and element without the title', () => {
    const library = new Library();
    const elementWithoutTitle = { copies: 9 };

    expect(() => library.donateElement(elementWithoutTitle)).toThrowError(/^INVALID_TITLE.*/);
  });

});
