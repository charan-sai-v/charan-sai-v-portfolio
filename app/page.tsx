"use client";
import Navbar from '@/components/navbar'
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import { ExternalLink, Github, LinkedinIcon, TwitterIcon, YoutubeIcon } from 'lucide-react';
import Image from 'next/image';
import { Progress } from "@/components/ui/progress"


import photo from '@/public/photo.png'

import Django from '../public/skills/django.svg'
import DjangoLightIcon from '../public/skills/django_light.svg'
import NextIcon from '../public/skills/nextjs.svg'
import NextLightIcon from '../public/skills/nextjs_light.svg'
import ReactIcon from '../public/skills/react.svg'
import ExpressIcon from '../public/skills/express.svg'
import ExpressLightIcon from '../public/skills/express_logo.png'
import EMS from '../public/projects/ems.png'
import PaperPortal from '../public/projects/paper-portal.png'
import OCMS from '../public/projects/out-patient-cms.png'

import AWSDA from '../public/achievements/aws-da.png'
import AWSCP from '../public/achievements/aws_cp.png'
import AzureDevOps from '../public/achievements/azure_devops.png'
import AzureDA from '../public/achievements/azure_da.png'
import Redhat from '../public/achievements/redhat.png'
import Wipro from '../public/achievements/wirpo.png'
import Contact from '@/components/contact';


export default function Home() {
  return (
    <div>
      <Navbar />
      <section id='introduction' className='w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-900'>
        <div className='flex items-center justify-center  flex-col-reverse md:flex-row gap-4 md:gap-8 lg:gap-10'>
          <div className='flex justify-end'>
            <Card className='max-w-2xl  w-full '>
              <CardHeader>
                <CardTitle className='font-mono'>Charan Sai Reddy Vanipenta</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className='md:text-lg'>
                    I am a computer science student at KL University, currently exploring and expanding my knowledge in the field of web development and DevOps. I am passionate about learning new technologies and building products that solve real-world problems.
                </CardDescription>
              </CardContent>
              <CardFooter className=''>
                <div className='flex gap-4'>
                  <Link href={'https://github.com/charan-sai-v'} target='_blank'>
                    <Github  className='bg-black text-white rounded-full p-0.5 w-6 h-6' />
                  </Link>
                  <Link href={'https://www.linkedin.com/in/charansai-v/'} target='_blank'>
                    <LinkedinIcon className='text-blue-800 w-6 h-6' />
                  </Link>
                  <Link href={'https://www.youtube.com/channel/UCXvq_yoTsbbNj0I1bSwK4Vg'} target='_blank'>
                    <YoutubeIcon className='text-red-800 w-6 h-6' />
                  </Link>
                  <Link href={'https://twitter.com/charan_sai_v'} target='_blank'>
                    <TwitterIcon className='text-blue-400 w-6 h-6' />
                  </Link>
                </div>
              </CardFooter>
            </Card>
          </div>
          <div className='flex justify-end'>
            <Image src={photo} width={192} height={192} alt="Charan Sai Reddy Vanipenta" className='object-cover w-60 h-60' />
          </div>
        </div>
      </section>
      <section id='skills' className='w-full py-12 md:py-20 lg:py-28'>
        <h2 className="text-xl font-bold tracking-tighter text-center sm:text-2xl md:text-3xl mb-5">My Skills</h2>
        <div className='container'>
          <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mt-8'>
            <Card className=''>
              <CardHeader> 
                <CardTitle className='text-xl text-center'>Next.js</CardTitle>
              </CardHeader>
              <CardContent>
                <div className='flex items-center justify-center'>
                  <Image src={NextIcon} alt='' width={96} height={96} className='dark:hidden object-cover w-24 h-24' />
                  <Image src={NextLightIcon} alt='' width={96} height={96} className='hidden dark:flex object-cover w-24 h-24' />
                </div>
                <Progress value={60}  className='mt-5 h-3' />
                
              </CardContent>
            </Card>
            <Card>
              <CardHeader> 
                <CardTitle className='text-xl text-center'>Django</CardTitle>
              </CardHeader>
              <CardContent>
                <div className='flex items-center justify-center'>
                  <Image src={Django} alt='' width={96} height={96} className='dark:hidden object-cover' />
                  <Image src={DjangoLightIcon} alt='' width={96} height={96} className='hidden dark:flex object-cover' />
                </div>
                <Progress value={75}  className='mt-5 h-3' />
                
              </CardContent>
            </Card>
            <Card>
              <CardHeader> 
                <CardTitle className='text-xl text-center'>React</CardTitle>
              </CardHeader>
              <CardContent>
                <div className='flex items-center justify-center'>
                  <Image src={ReactIcon} alt='' width={96} height={96} className='object-cover w-24 h-24' />
                </div>
                <Progress value={80}  className='mt-5 h-3' />
                
              </CardContent>
            </Card>
            <Card>
              <CardHeader> 
                <CardTitle className='text-xl text-center'>Spring Boot</CardTitle>
              </CardHeader>
              <CardContent>
                <div className='flex items-center justify-center'>
                  <Image src='https://vcharansaiv.wpless.com/img/spring.svg' alt='' width={96} height={96} className='object-cover w-24 h-24' />
                </div>
                <Progress value={70}  className='mt-5 h-3' />
                
              </CardContent>
            </Card>
            <Card>
              <CardHeader> 
                <CardTitle className='text-xl text-center'>Express.js</CardTitle>
              </CardHeader>
              <CardContent>
                <div className='flex items-center justify-center'>
                  <Image src={ExpressIcon} alt='' width={96} height={96} className='dark:hidden object-cover w-24 h-24' />
                  <Image src={ExpressLightIcon} alt='' width={96} height={96} className='hidden dark:flex object-cover w-24 h-24' />
                </div>
                <Progress value={82}  className='mt-5 h-3' />
                
              </CardContent>
            </Card>
            
          </div>
        </div>
      </section>
      <section id='projects' className='w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-900'>
        <h2 className="text-xl font-bold tracking-tighter text-center sm:text-2xl md:text-3xl mb-5">My Projects</h2>
        <div className="container">
          <div className='grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 gap-8'>
            <Card>
              <CardHeader>
                <Image src={PaperPortal} alt='' />
              </CardHeader>
              <CardContent>
                <CardTitle className='mb-3'>Paper Portal</CardTitle>
                <CardDescription className='text-justify mb-3'>
                PaperPortal is a comprehensive web application designed to revolutionize the research paper submission and review process. With its user-friendly interface and advanced features, PaperPortal aims to provide a seamless experience for authors, reviewers, and journal editors
                </CardDescription>
                <div className='mb-3 flex gap-1'>
                  <Badge variant={'secondary'}>Django</Badge>
                  <Badge variant={'secondary'}>TailwindCSS</Badge>

                </div>
                <Link target='_blank' href={'https://github.com/charan-sai-v/PaperPortal-ResearchSubmission'}>
                  <Button>
                    Github
                    <ExternalLink className='ml-2 w-4 h-4' />
                  </Button>
                </Link>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Image src={EMS} alt='' />
              </CardHeader>
              <CardContent>
                <CardTitle className='mb-3'>Entertainment Management System</CardTitle>
                <CardDescription className='text-justify mb-3'>
                The EMS is a dynamic platform built with the MERN stack, offering users the ability to seamlessly book and register for events organized by talented event planners. Users can effortlessly make payments, ensuring a smooth registration process.
                </CardDescription>
                <div className='mb-3 flex gap-1'>
                  <Badge variant={'secondary'}>React</Badge>
                  <Badge variant={'secondary'}>Express</Badge>
                  <Badge variant={'secondary'}>Shadcn</Badge>
                  <Badge variant={'secondary'}>MongoDB</Badge>
                </div>
                <Link target='_blank' href={'https://github.com/charan-sai-v/entertainment-management-system-mern-stack-sdp-1'}>
                  <Button>
                    Github
                    <ExternalLink className='ml-2 w-4 h-4' />
                  </Button>
                </Link>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Image src={OCMS} alt='' />
              </CardHeader>
              <CardContent>
                <CardTitle className='mb-3'>Out-Patient Clinic Management System</CardTitle>
                <CardDescription className='text-justify mb-3'>
                In this project, we have developed an online clinic management system using a Spring Boot web application. The system is part of the hospitals patient management system, where patients can conveniently book appointments online.
                </CardDescription>
                <div className='mb-3 flex gap-1'>
                  <Badge variant={'secondary'}>Spring Boot</Badge>
                  <Badge variant={'secondary'}>MySQL</Badge>
                  <Badge variant={'secondary'}>Bootstrap</Badge>
                </div>
                <Link target='_blank' href={'https://github.com/charan-sai-v/out-patient-clinic-management-system-sdp-3'}>
                  <Button>
                    Github
                    <ExternalLink className='ml-2 w-4 h-4' />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section id='achievements' className='w-full py-12 md:py-20 lg:py-28'>
        <h2 className="text-xl font-bold tracking-tighter text-center sm:text-2xl md:text-3xl mb-5">My Achievements</h2>
        <div className='container'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8'>
            <Card>
              <CardHeader> 
                <CardTitle className='text-xl text-center'>AWS Developer Associate Certified</CardTitle>
              </CardHeader>
              <CardContent>
                <div className='flex items-center justify-center'>
                  <Image src={AWSDA} alt='' width={350} height={350} className='' />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader> 
                <CardTitle className='text-xl text-center'>Azure DevOps Engineer Expert</CardTitle>
              </CardHeader>
              <CardContent>
                <div className='flex items-center justify-center'>
                  <Image src={AzureDevOps} alt='' width={350} height={350} className='' />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader> 
                <CardTitle className='text-xl text-center'>Azure Developer Associate Certified</CardTitle>
              </CardHeader>
              <CardContent>
                <div className='flex items-center justify-center'>
                  <Image src={AzureDA} alt='' width={350} height={350} className='' />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader> 
                <CardTitle className='text-xl text-center'>AWS Cloud Practitioner Certified</CardTitle>
              </CardHeader>
              <CardContent>
                <div className='flex items-center justify-center'>
                  <Image src={AWSCP} alt='' width={350} height={350} className='' />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader> 
                <CardTitle className='text-xl text-center'>Red Hat Certified Enterprise Application Developer</CardTitle>
              </CardHeader>
              <CardContent>
                <div className='flex items-center justify-center'>
                  <Image src={Redhat} alt='' width={350} height={350} className='' />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader> 
                <CardTitle className='text-xl text-center'>Wipro Java Full Stack Developer Certified </CardTitle>
              </CardHeader>
              <CardContent>
                <div className='flex items-center justify-center'>
                  <Image src={Wipro} alt='' width={200} height={200} className='object-cover' />
                </div>
              </CardContent>
            </Card>          
            
          </div>
        </div>
      </section>
      <section id='publications' className='w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-900'>
        <h2 className="text-xl font-bold tracking-tighter text-center sm:text-2xl md:text-3xl mb-5">My Publications</h2>
        <div className="container">
          <Card className='w-full'>
            <CardHeader>
              <CardTitle>Analysis of Dynamic Scheduling for Edge Cloud Computing</CardTitle>
            </CardHeader>
            <CardContent>
              <p className='text-sm text-muted-foreground mb-2 font-bold'>
                Published on 24 May 2023
              </p>
              <CardDescription className='mb-3 text-justify'>
              This paper presents a comprehensive analysis of dynamic scheduling for edge cloud computing. The purpose of this paper is to explore how dynamic scheduling can be utilized to improve the performance of edge cloud computing systems. First, this paper introduces edge cloud computing, its applications, and the importance of scheduling. Next, this paper discusses the different types of scheduling algorithms and how they can be used in edge cloud computing. The paper then investigates the challenges associated with dynamic scheduling and presents a survey of existing dynamic scheduling solutions. Finally, this paper highlights the benefits of dynamic scheduling for edge cloud computing and provides some concluding remarks.
              </CardDescription>
              <Link target='_blank' href={'https://ieeexplore.ieee.org/document/10128455'}>
                <Button variant={'secondary'}>
                  Link
                  <ExternalLink className='w-4 h-4 ml-2' />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>
      <section id='contact' className='w-full py-12 md:py-20 lg:py-28'>
        <h2 className="text-xl font-bold tracking-tighter text-center sm:text-2xl md:text-3xl mb-5">Contact Me</h2>
        <div className='container flex items-center justify-center'>
          <Contact />
        </div>
      </section>
      <Separator />
      <div className='p-6'>
        <p className='text-muted-foreground text-sm text-center'>Created with Next.js, Shadcn</p>
      </div>
    </div>
  )
}
