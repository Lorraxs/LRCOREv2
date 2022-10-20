import CONFIG from '../config/config.js'
import transList from './en.json'

function format(source:string, params: string[]):string {
  params.forEach((n, i)=>{
    source = source.replace(new RegExp("\\{" + i + "\\}", "g"), n);
  })
  return source;
}

const Locale = (str: string, ...args: string[]):string => {
  // eslint-disable-next-line prefer-const
  let msg = transList[str]
  if (msg){
    return format(msg, args)
  }else{
    return str
  }
}

export default Locale