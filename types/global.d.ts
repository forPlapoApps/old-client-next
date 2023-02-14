declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production' | 'test';
    readonly NEXT_PUBLIC_SERVER_URL: string;
    readonly NEXT_PUBLIC_apiKey: string;
    readonly NEXT_PUBLIC_authDomain: string;
    readonly NEXT_PUBLIC_projectId: string;
    readonly NEXT_PUBLIC_storageBucket: string;
    readonly NEXT_PUBLIC_messagingSenderId: string;
    readonly NEXT_PUBLIC_appId: string;
    readonly NEXT_PUBLIC_measurementId: string;
  }
}
