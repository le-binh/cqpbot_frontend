const FB_STATUS_CONNECTED = 'connected'

const getUserCredentials = response => {
  if (response.status === FB_STATUS_CONNECTED) {
    const accessToken = response.authResponse.accessToken
    const userID = response.authResponse.userID
    return [accessToken, userID]
  }
}

export const checkLoginStatus = async () => {
  return new Promise(resolve => {
    FB.getLoginStatus(response => {
      resolve(getUserCredentials(response))
    })
  })
}

export const fbLogin = async () => {
  return new Promise(resolve => {
    FB.login(response => {
      resolve(getUserCredentials(response))
    }, {scope: 'public_profile,email'})
  })
}
