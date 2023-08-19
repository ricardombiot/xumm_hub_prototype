var xumm = new Xumm(window.API_XUMM_KEY);
   
function should_wait_login(){
  return "XummPkceJwt" in localStorage;
}

xumm.on("ready", () => {
  console.log("ready xumm");

  if(!should_wait_login()){
    window.main_inferno();
  }
})

xumm.on("signin", () => {
  
})

xumm.on("logout", () => {
  console.log("LOGOUT!!")
  window.public_address = undefined;
  window.jwt_xumm = undefined;
  window.jwt_xapp = undefined;
  window.jwt_xapp_user_id = undefined;
})
// We rely on promises in the `success` event: fired again if a user
// logs out and logs back in again (resets all promises)
xumm.on("success", async () => {

  xumm.user.account.then(account => {
    window.public_address = account

    xumm.environment.bearer.then(async (jwt) => {
      window.jwt_xumm = jwt
      await login_or_register();
      console.log("ready xumm... login_or_register");
      window.main_inferno();
    });
  })

  
  xumm.on("success", async () => {
    const { payload_uuidv4 } = await xumm.environment.jwt
    const payloadResult = await xumm.payload?.get(payload_uuidv4)
    console.log("----")
    console.log(payloadResult)
    console.log("----")
  })
})


function xumm_run_tx(tx, callback){
  xumm.payload.create(tx).then(payload => {
    callback(payload);
  })
}

async function login_or_register(){
    let url = "/api/auth/access_by_xumm";
    let resp = await fetch(url, {
      headers: { "Authorization": "Bearer " + window.jwt_xumm}
    })
    let json = await resp.json();
  
    //console.log(json);
    let token = json.result.token;
    window.jwt_xapp = token;
    let user_id = json.result.payload.user_id;
    window.jwt_xapp_user_id = user_id;

    setCookie("jwt_xapp",token, 15);
}

// https://stackoverflow.com/questions/14573223/set-cookie-and-get-cookie-with-javascript
function setCookie(name,value,days) {
  var expires = "";
  if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days*24*60*60*1000));
      expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
      var c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}

function eraseCookie(name) {   
  document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
