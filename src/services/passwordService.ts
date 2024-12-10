export default function generatePass(){
    let password: string = ''
    let characters:string = 'Aa@#$%^&*()1234567890abcdefghijklmnopqrstu!ABCDEFGHIJKLMNOPQRSTUV'
    let passwordLength = 8

    for(let i=0; i < passwordLength; i++){
        password += characters.charAt(Math.floor(Math.random()*characters.length))
    }
    return password
}