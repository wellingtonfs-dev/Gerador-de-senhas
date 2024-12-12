export default function generatePass(passwordLength: number){
    let password: string = ''
    let characters:string = 'ABCCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()'
    
    for(let i=0; i < passwordLength; i++){
        password += characters.charAt(Math.floor(Math.random()*characters.length))
    }
    return password
}