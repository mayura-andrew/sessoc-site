/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly CAPI_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
