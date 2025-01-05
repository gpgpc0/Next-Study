import * as argon2 from "argon2";
import { sleep } from "./sleep";
// import { loadEnvFile } from "node:process";
// loadEnvFile(process.env.PEPPER_PEPPER);
export async function saltAndHashPassword(rawpass:string) {
    sleep(1000);
    const pepper = process.env.PEPPER_PEPPER || "";
    console.log(pepper);
    return await argon2.hash(rawpass, { secret: Buffer.from(pepper) });
}