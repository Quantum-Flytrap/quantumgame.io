// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Quantum Flytrap",
  siteDescription:
    '"Quantum simulation LEGO bricks." An in-browser simulation & visualization of quantum mechanics. The go-to place for learning quantum before the quantum computing revolution takes off.',
  plugins: [
    {
      use: "gridsome-plugin-tailwindcss",
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "content/posts/**/*.md",
        typeName: "BlogPost",
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "content/landing/**/*.md",
        typeName: "LandingSection",
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "content/testimonials/**/*.md",
        typeName: "Testimonial",
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "content/pages/**/*.md",
        typeName: "PageA",
      },
    },
    {
      use: "gridsome-plugin-monetization",
      options: {
        paymentPointer: "$ilp.uphold.com/Gnn7yq7XUiwj", // your payment pointer
        global: true, // add monetization to every page; default: true
      },
    },
    {
      use: 'gridsome-plugin-plausible-analytics',
      options: {
        dataDomain: 'quantumflytrap.com',
        outboundLinkTracking: false
      }
    }
  ],
  templates: {
    BlogPost: "/blog/:slug",
    PageA: "/:slug",
  },
};
