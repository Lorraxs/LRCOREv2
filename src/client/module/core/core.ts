RegisterNuiCallbackType('SET_NUI_FOCUS')

on('__cfx_nui:SET_NUI_FOCUS', (data, cb)=>{
  const {hasFocus, hasCursor} = data;
  SetNuiFocus(hasFocus, hasCursor)
  cb()
})


console.log('module: core loaded')