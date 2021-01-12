import Command from "./commandInterface";
import { Message, MessageEmbed } from "discord.js";

export class HelpCommand implements Command {
  commandNames = ["help", "ajuda"];

  help(commandPrefix: string): string {
    return `Use ${commandPrefix}ajuda para receber a lista de comandos existente.`;
  }
  async run(message: Message): Promise<void> {
    const embedHelpMenu = new MessageEmbed()
      .setColor("#f3f651")
      .setTitle("Lista de comandos existentes:")
      .addFields(
        {
          name: "`>niver`",
          value: "- Para ter a lista de aniversariantes",
          inline: true,
        },
        { name: "`>lembrete`", value: "- Nao sei, to pensando", inline: true }
      );
    
      message.channel.send(embedHelpMenu);
  }
}
