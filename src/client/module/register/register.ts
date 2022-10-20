RegisterNuiCallbackType('REGISTER')

on('__cfx_nui:REGISTER', (data, cb)=>{
  console.log(data)
  cb({success: false, message: 'Test message'})
})

console.log('module: register loaded')