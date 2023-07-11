const maskEmail = (value: string) => {
  const emailPattern = /^[\w-.!#$&*+%¨]+@([\w-.!#$&*+¨]+\.)+[\w]+/gi

  return ({
    parsed: value,
    match: emailPattern.test(value)
  })
}


export default maskEmail