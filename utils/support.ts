export const isAndroidOrIphone = () => {
  return /Android|iPhone/i.test(navigator.userAgent)
}