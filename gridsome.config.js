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
      use: 'gridsome-plugin-plausible-analytics',
      options: {
        dataDomain: 'quantumgame.io',
        outboundLinkTracking: false
      }
    }
  ],
};
