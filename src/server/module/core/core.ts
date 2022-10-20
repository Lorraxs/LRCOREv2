require('@citizenfx/server');
import Locale from "../../lang/lang";

const RESOURCE_NAME = GetCurrentResourceName();

on('onResourceStart', (rsName: string)=>{
  if(RESOURCE_NAME === rsName){
    console.log(Locale('RESOURCE_STARTED'))
  }
})

const PLAYERS = [];

on('playerConnecting', (playerName: string, setKickReason: (reason: string)=>void, deferrals: {defer: any; done: any; handover: any; presentCard: any; update: any}, source: string)=>{
  console.log(Locale('PLAYER_CONNECTING', playerName))
  setKickReason('Test')
})
