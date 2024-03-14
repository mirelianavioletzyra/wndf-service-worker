module.exports = {
  connector: '@edgio/starter',
  name: "wn-service-worker",
  organization: 'wholesale-nuts',
  purgeCacheOnDeploy: true,
  origins: [
    {
      // The name of the backend origin
      name: "origin",

      // Use the following to override the host header sent from the browser when connecting to the origin
      override_host_header: "httpbin.org",

      // The list of origin hosts to which to connect
      hosts: [
        {
          // The domain name or IP address of the origin server
          location: "httpbin.org",
        },
      ],

      tls_verify: {
        use_sni: true,
        sni_hint_and_strict_san_check: "httpbin.org",
      },

      // Uncomment the following to configure a shield
      // shields: { us_east: 'DCD' },
    },
  ],
};
