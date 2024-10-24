import { AsyncLocalStorage } from "async_hooks";

const storage = new AsyncLocalStorage<number>();

const thing = async () => {
  for (let i = 0; i < 10; i++) {
    console.log(`Thread ${storage.getStore()}: iteration ${i}`);
    await new Promise((resolve) => setTimeout(resolve, Math.random() * 1000));
  }
};

storage.run(1, thing);
storage.run(2, thing);
