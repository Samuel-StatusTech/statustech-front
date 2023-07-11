import a from "axios"


export const useApi = () => {

  const baseUrl = process.env.REACT_APP_BASE_URL

  const service = a.create({
    baseURL: baseUrl,
    headers: {
      Accept: "application/json",
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })


  return ({
    sendEmail: async (
      values: {
        name: string,
        email: string,
        message: string,
      }
    ) => {
      try {
        const send = await service.post('/sendemail', {
          personName: values.name,
          emailToReply: values.email,
          message: values.message,
        })

        return ({ status: send.status })
      } catch (err: any) {
        return ({ status: err.response.status })
      }
    },
  })
}