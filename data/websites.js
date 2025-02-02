export default {
  version: "1.0",
  logPattern: "[FREE!] {msg}",
  sites: [
    {
      url: "<any>",
      actions: [
        { remove_element: "div.fc-consent-root", exclude_sites: []},
        { type: "restore scrolling" }
      ]      
    },
    {
      url: "www.geeksforgeeks.org",
      actions: [{ remove_element: "div.fc-consent-root" }],
    },
    {
      url: "stackify.com",
      actions: [
        {
          description: 'Remove element <div id="CybotCookiebotDialog"',
          type: "remove element",
          querySelector: "div#CybotCookiebotDialog",
        },
      ],
    },
    {
      url: "www.aranzulla.it",
      actions: [
        { remove_element: "div#iubenda-cs-banner" },
        {
          description: "Reset the web page scrolling functionality",
          type: "restore scrolling",
          //on: ["html", "body"],
          repeat: "3 times, every 500 ms",
        },
      ],
    },
    {
      url: "www.letuelezioni.it",
      actions: [{ remove_element: "div#pp", repeat: "3 times, every 500 ms" }],
    },
    {
      url: "www.blablacar.it",
      actions: [{ remove_element: "div#didomi-popup", repeat: "3 times, every 500 ms" }],
    },
    {
      url: "edition.cnn.com",
      actions: [
        {
          type: "remove element",
          querySelector: "div#onetrust-consent-sdk",
          //repeat: "3 times, every 500 ms",
        },
      ],
    },
    {
      url: "www.coindesk.com",
      actions: [{ remove_element: "div#CybotCookiebotDialog" }],
    },
    {
      url: "www.tripadvisor.com",
      actions: [{ remove_element: "div#onetrust-consent-sdk", repeat: "5 times, every 500 ms" }],
    },
    {
      url: "www.tripadvisor.it",
      actions: [{ remove_element: "div#onetrust-consent-sdk", repeat: "5 times, every 500 ms"}]
    },
    {
      url: "itsmycode.com",
      actions: [{ remove_element: "div#ez-cookie-dialog-wrapper" }],
    },
    /*{
      url: "www.timeanddate.com",
      actions: [
        {
          type: "remove element",
          querySelector: "div#qc-cmp2-container",
        },
      ],
    },*/
    {
      url: "forums.androidcentral.com",
      actions: [{ remove_element: "div#qc-cmp2-container" }],
    },
    {
      url: "www.hsbc.co.uk",
      actions: [{ remove_element: "div#__tealiumGDPRecModal", repeat: "2 times, every 300 ms" }],
    },
    {
      url: "www.sitepoint.com",
      actions: [{ remove_element: "div#qc-cmp2-container" }],
    },
    {
      url: "appdividend.com",
      actions: [{ remove_element: "div#ez-cookie-dialog-wrapper" }],
    },
    {
      url: "www.spguides.com",
      actions: [{ remove_element: "div#gdpr-consent-tool-wrapper" }],
    },
    {
      url: "www.cyberciti.biz",
      actions: [{ remove_element: "div.fc-consent-root", repeat: "3 times, every 500 ms" }],
    },
    {
      url: "akashmittal.com",
      actions: [
        { remove_element: "div.fc-consent-root", repeat: "3 times, every 500 ms" },
        { type: "restore scrolling", repeat: "3 times, every 500 ms" },
      ],
    },
    {
      url: "www.pisos.com",
      actions: [{ remove_element: "div#didomi-host" }, { remove_element: "div[style*='z-index']" }],
    },
    {
      url: "linuxhint.com",
      actions: [{ remove_element: "div#gdpr-consent-tool-wrapper" }],
    },
    {
      url: "www.ryadel.com",
      actions: [{ remove_element: "div#ez-cookie-dialog-wrapper" }],
    },
    {
      url: "auth0.com",
      actions: [{ remove_element: "div#onetrust-consent-sdk" }],
    },
    {
      url: "corriere.it",
      actions: [
        /* old */
        { remove_element: "div.privacy-cor-wall" }, 
        /* new */
        { remove_element: "div.privacy-cp-wall", repeat: "10 times, every 500 ms" },
        { remove_element: "div.bck-adblock", repeat: "10 times, every 500 ms" },
        { type: "restore scrolling", repeat: "10 times, every 500 ms" },
        { remove_class_from_html: "has--adblock", repeat: "15 times, every 500 ms"},
        { remove_class_from_body: "noScroll", repeat: "15 times, every 500 ms"},
        { remove_element: "div#rcsad_TopLeft_wrapper"},
        { type: "remove iframes" },
        { type: "remove scripts" },
      ]
    },
    {
      url: "forst.tax",
      actions: [{ remove_element: "div#ez-cookie-dialog-wrapper" }],
    },
    {
      url: "krispitech.com",
      actions: [{ remove_element: "div.fc-consent-root" }, { type: "restore scrolling" }],
    },
    {
      url: "mashtips.com",
      actions: [{ remove_element: "div#gdpr-consent-tool-wrapper" }],
    },
    {
      url: "www.geeksforgeeks.org",
      actions: [{ remove_element: "div.fc-consent-root" }],
    },
    {
      url: "www.tomshardware.com",
      actions: [{ remove_element: "div#qc-cmp2-container" }, { remove_element: "div#slice-container-newsletterForm-exitIntent" }],
    },
    {
      url: "www.techradar.com",
      actions: [        
        { remove_element: "div#qc-cmp2-container" }, 
        { remove_element: "div#slice-container-newsletterForm-exitIntent" },
        { remove_element: ".sp_message_container_808540", repeat: "3 times, every 1500 ms" },
        { type: "remove iframes" },
        { type: "restore scrolling" }],
    },
    {
      url: "www.koskila.net",
      actions: [{ remove_element: "div#ez-cookie-dialog-wrapper" }],
    },
    {
      url: "csharp.hotexamples.com",
      actions: [{ remove_element: "div#ez-cookie-dialog-wrapper"}]
    },
    {
      urL: "www.baeldung.com",
      actions: [ { remove_element: "div#qc-cmp2-container", repeat: "3 times, every 500 ms",}]
    },
    {
      url: "www.thewindowsclub.com",
      actions: [{ remove_element: "div#ez-cookie-dialog-wrapper" }]
    },
    {
      url: "windowsloop.com",
      actions: [{ remove_element: "div#ez-cookie-dialog-wrapper" }],
    },
    {
      url: "www.wikihow.it",
      actions: [{ remove_element: "div.fc-consent-root"}]
    },
    {
      url: "www.zoopla.co.uk",
      actions: [{ remove_element: "div#gdpr-consent-tool-wrapper", repeat: "3 times, every 500 ms" }]
    },
    {
      url: "linuxize.com",
      actions: [{ remove_element: "div#ez-cookie-dialog-wrapper", repeat: "3 times, every 500 ms" }]
    },
    {
      url: "ukradiolive.com",
      actions: [{remove_element: "div#qc-cmp2-container", repeat: "10 times, every 1500 ms"}]
    },
    {
      url: "www.letuelezioni.it",
      actions: [{ remove_element: "div#pp"}]
    },

    {
      url: "es.wallapop.com",
      actions: [{remove_element: "div#onetrust-consent-sdk", repeat: "10 times, every 500 ms"}]
    },
    {
      url: "www.techradar.com",
      actions: [
        { remove_element: "div[id^=sp_message_container_]", repeat: "5 times, every 500 ms"},
        { remove_element: "div#qc-cmp2-container" }, { remove_element: "div#slice-container-newsletterForm-exitIntent" }],
    },
    {
      url: "www.expertreviews.co.uk",
      actions: [{ remove_element: "div[id^=sp_message_container_]", repeat: "5 times, every 500 ms"},
      { remove_class_from_html: "sp_message_open"}]
    },
    {
      url: "helpdeskgeek.com",
      actions: [
        { remove_element: "div#snigel-cmp-framework", repeat: "3 times, every 1000 ms"}
      ]
    },
    {
      url: "allevents.in",
      actions: [
        { remove_element: "div.fc-consent-root", repeat: "6 times, every 1000 ms"},
        { type: "restore scrolling" }
      ]
    },
    {
      url: "www.cherry-world.com",
      actions: [
        { remove_element: "div#usercentrics-root", repeat: "6 times, every 500 ms"},
        { remove_class_from_body: "overflowHidden", repeat: "6 times, every 1000 ms"}
      ]
    },
    {
      url: "csharp.hotexamples.com",
      actions: [{ remove_element: "div#ez-cmpv2-container"}]
    },
    {
      url: "www.oraridiapertura24.it",
      actions: [{remove_element: "div#qc-cmp2-container"}]
    },
    {
      url: "codeigo.com",
      actions: [{remove_element: "div#ez-cmpv2-container"}]
    },
    {
      url: "www.autoscout24.it",
      actions: [{remove_element: "div#as24-cmp-popup", repeat: "3 times, every 500 ms"}]
    },
    {
      url: "www.letuelezioni.it",
      actions: [{remove_element: "div#pp"}]
    },
    {
      url :"www.moto.it",
      note: "it does not work whan open the page inbackground. I don't know why.",
      actions: [
        { remove_element: "div#iubenda-cs-banner", repeat: "30 times, every 500 ms"},
        { type: "restore scrolling" },
        { remove_element: "div.app-masthead", repeat: "5 times, every 500 ms" }
      ]
    },
    {
      url: "cpu.userbenchmark.com",
      actions: [
        {remove_element: "div.fc-consent-root"}
      ]
    },
    {
      url:"www.etsy.com",
      actions: [
        { remove_element: "div#wt-portals" },
        { type: "restore scrolling" },
        { remove_class_from_body: "wt-body-no-scroll"}
      ]
    },
    {
      url: "i.maxask.com",
      actions: [{remove_element: "div.fc-consent-root"}]
    },
    {
      url: "dotnettutorials.net",
      actions: [
        {remove_element: "div#ez-cmpv2-container", repeat: "5 times, every 500 ms"}
      ]
    },
    {
      url: "www.advrider.com",
      actions: [ { remove_element: "div#qc-cmp2-container", repeat: "10 times, every 500 ms" }]
    },
    {
      url: "www.geeksforgeeks.org",
      actions: [ {remove_element: "div.fc-consent-root", repeat: "5 times, every 500 ms"}]
    },
    {
      url: "www.freecodecamp.org", 
      actions: [ {remove_element: "div.fc-consent-root", repeat: "5 times, every 500 ms"}]
    },
    {
      url: "dnschecker.org",
      actions: [{remove_element: "div#sp_message_container_1117104", repeat: "5 times, every 500 ms"}]
    },
    {
      url: "www.timeanddate.com",
      actions: [{ remove_element: "div#qc-cmp2-container", repeat: "5 times, every 500 ms"}]
    },
    {
      url: "ricette.giallozafferano.it", actions: [
        {remove_element: "div#iubenda-cs-banner", repeat: "5 times, every 500 ms"},
        {remove_class_from_body: "cp-banner-visible"}
      ]
    },
    {
      url: "www.repubblica.it",
      actions: [{remove_element: "div#iubenda-cs-banner", repeat: "5 times, every 500 ms"}]
    }
  ],
}
