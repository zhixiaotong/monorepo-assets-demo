declare global {
    interface ImportMetaEnv {
        readonly VITE_BASE_PATH: string;
      }
    
      interface ImportMeta {
        readonly env: ImportMetaEnv;
      }
}
export {};