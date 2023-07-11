export const getFontsize = () => {
  const html = document.querySelector('html')
  const fs = window.getComputedStyle(html as HTMLHtmlElement, null)
    .getPropertyValue('font-size')
  const parsed = parseFloat(fs)

  return parsed
}