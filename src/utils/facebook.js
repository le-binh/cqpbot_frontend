const FB_STATUS_CONNECTED = 'connected'

const getUserCredentials = response => {
  if (response.status === FB_STATUS_CONNECTED) {
    const accessToken = response.authResponse.accessToken
    const userID = response.authResponse.userID
    return [accessToken, userID]
  }
}

export const fbCheckLoginStatus = () => {
  return new Promise(resolve => {
    FB.getLoginStatus(response => {
      resolve(getUserCredentials(response))
    })
  })
}

export const fbLogin = () => {
  return new Promise(resolve => {
    FB.login(response => {
      resolve(getUserCredentials(response))
    }, {scope: 'public_profile,email,manage_pages,pages_messaging,pages_show_list,pages_messaging_subscriptions'})
  })
}
