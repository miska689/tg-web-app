import axios from "axios";

async function registerUser(data, setFunction) {
    const res = await axios.post("https://mytestserver.bot.nu/register",JSON.stringify({
        telegram_user_id: data.telegram_user_id,
        telegram_chat_id: data.telegram_chat_id,
        username: data.username,
        password: data.password
    })).then(res => {
        const userData = res.data
        setFunction(userData.token)

        return {
            status: "success",
            message: "user is registered",
        };
    }).catch(err => {
        console.log(err)
        return {
            status: "error",
            message: err
        }
    })
}

export {registerUser}