export const black = '#000'
export const green = '#bde3df'
export const mid_green = '#009688'
export const pale_red = '#db4437'
export const red = '#FF0000'
export const grey_blue = '#bdcae3'
export const pink = '#ff4081'
export const grey = '#737373'
export const light_grey = '#9F9F9F'
export const white = '#fff'

export const getRandomColor = () => {
  color = Math.floor(Math.random() * 16777215).toString(16)
  return `#${color.toString(16)}`;
}