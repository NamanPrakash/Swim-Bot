require('dotenv').config();
module.exports = async function Command(msg)
{
    if (msg.channel.id == '786186761754640424')
    {
        console.log(msg.content);
        if(!msg.content.startsWith(process.env.PREFIX) || msg.author.bot) return;
        args = msg.content.slice(process.env.PREFIX.length).trim().split(/ +/);
        command = args.shift().toLowerCase();

        if(command == "hello"){
            msg.channel.send("Hello MAN");
        }
    }
}