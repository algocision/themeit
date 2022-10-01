/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

const env = {
  WERT_PARTNER_ID: '01FNXX7M7YJ10GXFVBP6ZH7CQN',
  WERT_ORIGIN: 'https://widget.wert.io',
  WERT_PRIVATE_KEY:
    '0xa5b838f73678a57b7fbf6f84c6c49c6d668ab04718925272345821f5ef514f06',
  WERT_PUBLIC_KEY:
    '0x7d3d9e5a34351ad0269102f6980de1fcc9291824751f82bcd89eac7226c134da',
  APP_NAME: 'boilerplate',
  WEB3_PROVIDER:
    'https://speedy-nodes-nyc.moralis.io/9666f6324ecb2a0d30ce75f6/eth/mainnet',
  ABI_ADDRESS: '0xbf7635990d3e381d97a484296636b1977762a26a', //'0x310535406d6613044d0743d4470bf553307349e8',
  CONTRACT_ADDRESS: '0xbf7635990d3e381d97a484296636b1977762a26a', // 0xc3f25eE6DAdcabBD6267BD86e8991aCB0476Fd63',
  API_URL: 'https://api-rinkeby.etherscan.io/api', //'https://api.polygonscan.com/api',
  API_KEY: '2MQCRE2GNCCY5MVH7TJYZ7WYND9ZS9JVD1', //'HRAH5XAZWUIYDIDHKBKKPSAS1HNFRTSJ1X',
};

module.exports = {
  nextConfig,
  env,
};
