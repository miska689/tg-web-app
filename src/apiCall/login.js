import axios from "axios";

async function loginUser(data, setFunction){
    const respons = await axios.post("https://mytestserver.bot.nu/api/login",
        JSON.stringify({
            telegram_user_id: data.telegram_user_id,
            username: data.username,
        })).then(res => {
            const userData = res.data;
            setFunction(userData.token)

            return {
                status: "success",
                message: "user logged in",
            }
        }).catch(err => {
            console.log(err)

            return {
                status: "error",
                message: "service created failed",
            }
        })


}

export {loginUser}