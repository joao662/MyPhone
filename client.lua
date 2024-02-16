local Tunnel = module("vrp","lib/Tunnel")
local Proxy = module("vrp","lib/Proxy")
vRP = Proxy.getInterface("vRP")
src = {}
Tunnel.bindInterface("vrp_teste",src)
vSERVER = Tunnel.getInterface("vrp_teste")

-----------------------------------------------------------------------------------------------------------------------------------------
-- celular abrir ok
-----------------------------------------------------------------------------------------------------------------------------------------

local menuactive = false
function ToggleActionMenu()
	menuactive = not menuactive
	if menuactive then
		SetNuiFocus(true,true)
		SendNUIMessage({ showmenu = true })
    end
end
-----------------------------------------------------------------------------------------------------------------------------------------
-- Celular fechar
-----------------------------------------------------------------------------------------------------------------------------------------
RegisterNUICallback("celular:close",function(data)
	SendNUIMessage({ showmenu = false })
	SetNuiFocus(false,false)
	menuactive = false
end)
-----------------------------------------------------------------------------------------------------------------------------------------
-- fim
-----------------------------------------------------------------------------------------------------------------------------------------

Citizen.CreateThread(function()
	SetNuiFocus(false,false)
	while true do
					if IsControlJustPressed(2,311) then
						ToggleActionMenu()
					end
		Citizen.Wait(2)
	end
end)