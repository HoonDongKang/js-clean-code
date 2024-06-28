function createElement(type, height, width) {
  const element = document.createElement(type || "div");

  element.style.height = String(height || 10) + "px";
  element.style.width = String(width || 10) + "px";

  return element;
}

function nullishCreateElement(type, height, width) {
  const element = document.createElement(type ?? "div");

  element.style.height = String(height ?? 10) + "px";
  element.style.width = String(width ?? 10) + "px";

  return element;
}

function helloWorld(message) {
  if (!message) {
    return "Hello, World!";
  }
  return "Hello!" + (message || "World");
}

console.log(helloWorld());

console.log((null || undefined) ?? "foo");
