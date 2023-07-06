const maskEmail = (value: string) => {
  const emailPattern = /^[\w-.!#$&*+%¨]+@([\w-.!#$&*+¨]+\.)+[\w]+/gi

  return ({
    parsed: value,
    matched: emailPattern.test(value)
  })
}


export default maskEmail