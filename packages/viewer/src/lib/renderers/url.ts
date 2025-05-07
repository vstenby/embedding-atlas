// Copyright (c) 2025 Apple Inc. Licensed under MIT License.

export class URLRenderer {
  element: HTMLDivElement;

  constructor(element: HTMLDivElement, props: { value: any }) {
    this.element = element;
    this.update(props);
  }

  update(props: { value: any }) {
    if (props.value != null) {
      this.element.innerHTML = `<a href="${props.value}" class="underline" target="_blank">${props.value}</a>`;
    } else {
      this.element.innerHTML = `(null)`;
    }
  }
}
