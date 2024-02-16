fx_version 'bodacious'
game 'gta5'




ui_page 'nui/index.html'

files {
	"nui/*.html",
	"nui/index.html",
	"nui/*.js",
	"nui/*.css",
	"nui/imagens/apps/*.png",
	"nui/imagens/celular/*.png",
	"nui/imagens/celular/walpapers/*png",
	"nui/imagens/celular/apps/whats/*.png",
	"nui/imagens/celular/*.png",
	"sons/*.ogg"
}

client_script {
	"@vrp/lib/utils.lua",
	"client.lua"
}

server_scripts{ 
	"@vrp/lib/utils.lua",
	"server.lua"
}