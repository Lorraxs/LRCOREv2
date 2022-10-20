const registerClientCallback = (eventName: string, eventCallback: (...args:any[])=>any)=>{
  onNet(eventName, (...args:any[])=>{
    emitNet('CALLBACK_RESPONSE', eventName, eventCallback(...args))
  })
}