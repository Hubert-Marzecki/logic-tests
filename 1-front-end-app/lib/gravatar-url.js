import md5 from 'js-md5'

export default function gravatarUrl (size) {
  const email = Math.random().toString(36).substring(7) + '@gmail.com'
  return {
    imgUrl: `http://www.gravatar.com/avatar/${md5(email)}?d=identicon&s=${size}`,
    email: email
  }
}
