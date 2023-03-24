// 24 hours
const period = 1000 * 60 * 60 * 24

const timer = (state) => {
  return ({
    ...state,
    period
  })
}
  
export default timer