export const mid_green = '#009688'
export const pale_red = '#db4437'
export const pink = '#ff4081'
export const white = '#fff'

export const getRandomColor = () => {
  color = Math.floor(Math.random() * 16777215).toString(16)
  return `#${color.toString(16)}`;
}