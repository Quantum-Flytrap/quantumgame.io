// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);

  const title = "Quantum Flytrap";
  const url = "https://quantumflytrap.com";
  const description =
    "Intuitive user interfaces for quantum computing - make it an accessible & business-available technology. We aim to build the standard for interaction with quantum systems.";
  const twitter = "QuantumGameIO";
  const image = require("~/imgs/mach-zehnder2.gif");

  // general
  head.meta.push({
    name: "url",
    content: url,
  });
  head.meta.push({
    name: "description",
    content: description,
  });

  // Twitter
  head.meta.push({
    name: "twitter:card",
    content: "summary_large_image",
  });
  head.meta.push({
    name: "twitter:url",
    content: url,
  });
  head.meta.push({
    name: "twitter:title",
    content: title,
  });
  head.meta.push({
    name: "twitter:description",
    content: description,
  });
  head.meta.push({
    name: "twitter:image",
    content: image,
  });
  head.meta.push({
    name: "twitter:site",
    content: twitter,
  });

  // Facebook
  head.meta.push({
    property: "og:type",
    content: "website",
  });
  head.meta.push({
    property: "og:title",
    content: title,
  });
  head.meta.push({
    property: "og:description",
    content: description,
  });
  head.meta.push({
    property: "og:url",
    content: url,
  });
  head.meta.push({
    property: "og:image",
    content: image,
  });
}
