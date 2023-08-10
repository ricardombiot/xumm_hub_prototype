var xumm = new Xumm('a0676337-4f6e-4e2f-b685-77848a2832f1')
        
xumm.on("ready", () => console.log("Ready (e.g. hide loading state of page)"))

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
    //console.log(json);
    let token = json.result.token;
    window.jwt_xapp = token;
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