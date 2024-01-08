import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const req = await request.json()
    const {name, email, description}: any = req
    console.log(request.body)
    const {data, error} = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'vcharansaiv@gmail.com',
      subject: `${name} is emailed you from portfolio`,
      html:  `<p>Hi Charan,\n ${description} and my email: ${email}`
    })
    if (error) {
      return Response.json({error}, {status: 501})
    }
    return Response.json({message: 'email send successful', data})
  } catch (error: any) {
    Response.json({message: error}, {status: 500})
  }
}