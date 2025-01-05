import NextAuth from "next-auth";
//DB
import {PrismaAdapter}from "@auth/prisma-adapter";
import {prisma}from "@/prisma";
//認証プロバイダ
import Credentials from "next-auth/providers/credentials";
import {saltAndHashPassword} from "@/utils/password";

export const {handlers,signIn,signOut,auth}=NextAuth({
    adapter:PrismaAdapter(prisma),
    //providersに認証スクリプトやモジュールを記載
    providers:[
        //資格情報
        Credentials({
            credentials:{
                //必要な資格情報
                email:{},
                password:{},
            },
            authorize:async(credentials)=>{
                const pwHash=saltAndHashPassword(credentials.password as string);
                const user = await getUserFromDb(credentials.email,pwHash);
                if (user) {
                    return user;
                } else {
                    return null;
                }
            }
        })
    ],
})