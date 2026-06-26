import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const config = defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
});
console.log(JSON.stringify(config, null, 2));
