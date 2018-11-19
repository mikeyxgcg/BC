client.on('message',async message => {
  if(message.author.bot || message.channel.type === 'dm') return;
  let args = message.content.split(' ');
  if(args[0] === `${prefix}bc`) {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('? | You dont have **ADMINISTRATOR** Permission!');
    if(!args[1]) return message.channel.send('**? Useage:** ${prefix}bc message');
  
    let msgCount = 0;
    let errorCount = 0;
    let successCount = 0;
    message.channel.send(`**- [ ?? :: ${msgCount} ] ?ÚÏÏ ÇáÑÓÇÆá ÇáãÑÓáÉ**\n**- [ ?? :: ${successCount} ] ?ÚÏÏ ÇáÑÓÇÆá ÇáãÓÊáãÉ**\n**- [ ?? :: ${errorCount} ]?ÚÏÏ ÇáÑÓÇÆá ÇáÛíÑ ãÓÊáãÉ**`).then(msg => {
      message.guild.members.forEach(g => {
        g.send(args.slice(1).join(' ')).then(() => {
          successCount++;
          msgCount++;
          msg.edit(`**- [ ?? :: ${msgCount} ] ?ÚÏÏ ÇáÑÓÇÆá ÇáãÑÓáÉ**\n**- [ ?? :: ${successCount} ] ?ÚÏÏ ÇáÑÓÇÆá ÇáãÓÊáãÉ**\n**- [ ?? :: ${errorCount} ]?ÚÏÏ ÇáÑÓÇÆá ÇáÛíÑ ãÓÊáãÉ**`);
        }).catch(e => {
          errorCount++;
          msgCount++;
          msg.edit(`**- [ ?? :: ${msgCount} ] ?ÚÏÏ ÇáÑÓÇÆá ÇáãÑÓáÉ**\n**- [ ?? :: ${successCount} ] ?ÚÏÏ ÇáÑÓÇÆá ÇáãÓÊáãÉ**\n**- [ ?? :: ${errorCount} ]?ÚÏÏ ÇáÑÓÇÆá ÇáÛíÑ ãÓÊáãÉ**`);
        });
      });
    });
  }
});