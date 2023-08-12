import { setCookie } from './cookies';
const xumm = new Xumm('a0676337-4f6e-4e2f-b685-77848a2832f1');

window.xumm = xumm;

export function xumm_main(callback_ready){

    xumm.on("ready", () => {
        callback_ready();
    })
    
    // We rely on promises in the `success` event: fired again if a user
    // logs out and logs back in again (resets all promises)
    xumm.on("success", async () => {
      xumm.user.account.then(account => {
        document.getElementById('accountaddress').innerText = account
        window.public_address = account
    
        xumm.environment.bearer.then(async (jwt) => {
          window.jwt_xumm = jwt
          await login_or_register();
        });
      })
    
      console.log("Success!!");
    
      xumm.on("success", async () => {
        const { payload_uuidv4 } = await xumm.environment.jwt
        const payloadResult = await xumm.payload?.get(payload_uuidv4)
        console.log("----")
        console.log(payloadResult)
        console.log("----")
      })
    })
    
    
    async function login_or_register(){
        let url = "/api/auth/access_by_xumm";
        let resp = await fetch(url, {
          headers: { "Authorization": "Bearer " + window.jwt_xumm}
        })
        let json = await resp.json();
      
        console.log(json);
        let token = json.result.token;
        window.jwt_xapp = token;
        let user_id = json.result.payload.user_id;
        window.jwt_xapp_user_id = user_id;
    
        setCookie("jwt_xapp",token, 15);
    }
}
