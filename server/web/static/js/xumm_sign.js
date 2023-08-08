var xumm = new Xumm('a0676337-4f6e-4e2f-b685-77848a2832f1')
        
xumm.on("ready", () => console.log("Ready (e.g. hide loading state of page)"))

// We rely on promises in the `success` event: fired again if a user
// logs out and logs back in again (resets all promises)
xumm.on("success", async () => {
  xumm.user.account.then(account => {
    document.getElementById('accountaddress').innerText = account
    window.public_address = account

    xumm.environment.bearer.then((jwt) => window.xumm_jwt = jwt);
    xumm.user.networkType.then((net) => {
      console.log(net);
      //document.getElementById('account-net').innerText = net;
    })

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
      headers: { "X-Xumm-Jwt": window.xumm_jwt}
    })
    console.log(resp);
    let json = await resp.json();
    console.log(json);
}