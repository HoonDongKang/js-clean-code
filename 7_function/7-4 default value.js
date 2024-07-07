function createCarousel(options) {
  options = options || {};
  let margin = options.margin || 0;
  let center = options.center || false;
  let navElement = options.navElement || 'div';

  return {
    margin, center, navElement
  }
}

function createCarousel2({ margin= 0, center= false, navElement= 'div'} = {}) {
  return {
    margin, center, navElement
  }
}

