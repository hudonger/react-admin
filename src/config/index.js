const baseURL = process.env.NODE_ENV === 'production' ? 'https://www.xxx.com/admin/api' : '192.168.1.122/admin/api'

export default {
  baseURL,
  cookieExpires: 1
}
