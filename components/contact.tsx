'use client';

import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

const Contact = () => {
  const [loading, setLoading] = useState(true)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [description, setDescription] = useState('')

  useEffect(()=>{
    setLoading(false)
  }, [])

  if (loading) {
    return null;
  }

  const handleEmail = async (e: any) => {
    e.preventDefault()
    console.log(name, email, description)
    const res = await fetch('/api/send', {
      headers: {
        "Content-Type": "application/json"
      },
      method: 'POST',
      body: JSON.stringify({name, email, description})
    })
    if (res.status === 200) {
      alert('sent successfully')
    }
  }

  return (
    <>
      <Card className='border-none w-full lg:w-1/2'>
        <form method="POST" onSubmit={handleEmail}>
          <CardContent className="space-y-2">
            <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
              <div className="space-y-1">
                <Label htmlFor="name">Name</Label>
                <Input required onChange={(e)=>setName(e.target.value)} id="name" placeholder="John" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="username">Email</Label>
                <Input required onChange={(e)=>setEmail(e.target.value)} id="username" placeholder="john@gmail.com" />
              </div>
            </div>
            <div className="space-y-1">
                <Label htmlFor="username">Description</Label>
                <Textarea required onChange={(e)=>setDescription(e.target.value)}  />
              </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className='w-full'>Save changes</Button>
          </CardFooter>
        </form>
      </Card>
    </>
  );
}
 
export default Contact;