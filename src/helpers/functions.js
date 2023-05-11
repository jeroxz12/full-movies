export const getCurrentDate = () => {
    const dateObject = new Date()
      const date = `${dateObject.getDate()}/${dateObject.getMonth()}/${dateObject.getFullYear()}`
      return date
}
export const getTrailer = (data) => {
  return data.find(video => video.type == "Trailer")
}