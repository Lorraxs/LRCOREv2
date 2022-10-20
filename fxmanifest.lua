fx_version 'bodacious'
game 'gta5'

name 'LR CORE V2'
description 'Typescript version'
author 'Nguyễn Trí (lorax)'
url 'lorraxs.com'

client_script 'dist/client/*.client.js'
server_script 'dist/server/*.server.js'

files {'ui/build/*.html', 'ui/build/*.png', 'ui/build/manifest.json', 'ui/build/static/**/*'}

ui_page 'ui/build/index.html'
