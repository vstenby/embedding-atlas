// Copyright (c) 2025 Apple Inc. Licensed under MIT License.

import { imageToDataUrl } from "../image_utils.js";

export class ImageRenderer {
  element: HTMLDivElement;

  constructor(element: HTMLDivElement, props: { value: any }) {
    this.element = element;
    this.update(props);
  }

  update(props: { value: any }) {
    if (props.value == null) {
      this.element.innerHTML = "(null)";
      return;
    }
    let dataUrl = imageToDataUrl(props.value);
    if (dataUrl != null) {
      this.element.innerHTML = `<img src="${dataUrl}" style="max-height: 100px" />`;
    } else {
      this.element.innerHTML = `(unknown)`;
    }
  }
}
