fx_version 'cerulean'

game 'gta5'

name 'Testinen2'

files {
  'ui/dist/index.html',
  'ui/dist/*',
  'ui/dist/**/*',
  'ui/dist/**/**/*',
}

ui_page 'ui/dist/index.html'

client_script 'app/build/client/*.client.js'

server_script 'app/build/client/*.server.js'
