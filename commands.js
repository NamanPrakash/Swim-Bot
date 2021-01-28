require('dotenv').config();
prefix = process.env.PREFIX;
module.exports = async function Command(msg)
{
    if (msg.channel.id == '786186761754640424')
    {
        console.log(msg.content);
        if(!msg.content.startsWith(prefix) || msg.author.bot) return;
        args = msg.content.slice(prefix.length).trim().split(/ +/);
        command = args.shift().toLowerCase();

        if(command == "hello"){
            msg.channel.send("Hello MAN");
        }
    }
}