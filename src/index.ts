/**
 * Hello World TypeScript Application
 * 
 * This is a simple TypeScript application to help you learn
 * Neovim, LazyVim, and tmux while working with real code.
 */

interface Greeting {
  message: string;
  timestamp: Date;
}

function createGreeting(name: string = "World"): Greeting {
  return {
    message: `Hello, ${name}!`,
    timestamp: new Date(),
  };
}

function displayGreeting(greeting: Greeting): void {
  console.log("=".repeat(50));
  console.log(greeting.message);
  console.log(`Time: ${greeting.timestamp.toLocaleString()}`);
  console.log("=".repeat(50));
  console.log("\nWelcome to your Neovim + LazyVim + tmux learning environment!");
  console.log("\nTry these commands:");
  console.log("  - npm run build  : Compile TypeScript");
  console.log("  - npm run start  : Run the compiled code");
  console.log("  - npm run dev    : Build and run");
  console.log("  - npm run watch  : Watch for changes");
}

function main(): void {
  const greeting = createGreeting("Developer");
  displayGreeting(greeting);
}

main();
