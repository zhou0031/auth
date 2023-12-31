import 'server-only'
import { NextResponse } from "next/server"
import { prisma } from '../../../../prismaDB'
import bcrypt from 'bcrypt'

async function isUserExisted(email:string){
    const user = await prisma.user.findUnique({where:{email:email}}) 
    return user?true:false
}

export async function POST(req:Request){
    const errorExisted="用户已注册"
    const errorPassword="密码不一致"
    const {emailValue,password1,password2}= await req.json()

    try{
    if(await isUserExisted(emailValue))
        return NextResponse.json({error:errorExisted})
    if(password1!==password2)
        return NextResponse.json({error:errorPassword})
    
    const hashedPassword= await bcrypt.hash(password1,10)
    
    const user = await prisma.user.create({
        data:{
            email:emailValue,
            password:hashedPassword
        }
    })
    return NextResponse.json({user:user})
    }catch(e){
        return NextResponse.json({error:"服务器出错"})
    }   
}