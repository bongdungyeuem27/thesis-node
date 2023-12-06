declare global {
  namespace NodeJS {
    interface ProcessEnv {
      GITHUB_AUTH_TOKEN: string;
      ENDPOINT_MONGODB: string;
      NODE_ENV: 'development' | 'production';
      REDIS_URI: string;
      PORT?: string;
      PWD: string;
      SESSION_KEY: string;
      GCS_BUCKET: string;
      GCLOUD_PROJECT: string;
      GCLOUD_CLIENT_EMAIL: string;
      GCLOUD_PRIVATE_KEY: string;
      FS_PROJECT: string;
      MAPBOX_KEY: string;
      NUM_CLUSTER: number;
      JWT_ACCESS_KEY: string;
      DATABASE: string;
      JWT_REFRESH_KEY: string;
      SOCKET_POOL: string;
      CRE: string;
      CRE_TOKEN: string;
      KBM: string;
      KBM_USERNAME: string;
      KBM_PASSWORD: string;
      JWT_VENDOR_KEY: string;
      COOKIE_KEY: string;
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
