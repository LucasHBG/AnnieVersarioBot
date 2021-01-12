import Command from "./commandInterface";
import { Message } from "discord.js";

export class GreetCommand implements Command {
  commandNames = ["greet", "hello", "oi", "ola"];

  help(commandPrefix: string): string {
    return `Use ${commandPrefix}oi para receber um oi.`;
  }

  async run(message: Message): Promise<void> {
    await message.reply(`olá 😉`);
  }
}
