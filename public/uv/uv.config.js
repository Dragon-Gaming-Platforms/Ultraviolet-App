self.__uv$config = {
  // The URL prefix used for the proxy service
  prefix: '/uv/service/',

  // URL encoding/decoding — xor is the default
  encodeUrl: Ultraviolet.codec.xor.encode,
  decodeUrl: Ultraviolet.codec.xor.decode,

  // Paths to the UV scripts (these live in /public/uv/)
  handler: '/uv/uv.handler.js',
  bundle: '/uv/uv.bundle.js',
  config: '/uv/uv.config.js',
  sw: '/uv/uv.sw.js',
};