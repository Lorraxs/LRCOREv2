import {v4 as uuidv4} from 'uuid';
const WaitingCallback:object = {}

export const registerServerCallback = (eventName: string, eventCallback: (source: number, ...args:any[])=>any)=>{
  const event = onNet(`SERVER_CALLBACK:${eventName}`, (...args:any[])=>{
    emitNet(`CALLBACK_RESPONSE`, source, eventName, eventCallback(source, ...args))
  })
}

export const emitClientCallback = (eventName: string, source: number, callback: (...args:any[])=>any, ...args:any[])=>{
  const strSrc = source.toString();
  const curTime = new Date().getTime();
  const ticket = uuidv4();
  WaitingCallback[ticket] = {
    startAt: curTime,
    callback: callback,
    source: source,
    eventName: eventName
  };
  emitNet(`CLIENT_CALLBACK:${eventName}`, source, ticket, ...args);
}

onNet('CALLBACK_RESPONSE', (eventName: string, ticket: string, ...args:any[])=>{
  try {
    WaitingCallback[ticket].callback(...args);
    delete WaitingCallback[ticket];
  } catch (error) {
    console.log(error)
  }
})