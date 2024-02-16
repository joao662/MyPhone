local Tunnel = module("vrp","lib/Tunnel")
local Tunnel = module("vrp","lib/Tunnel")
local Proxy = module("vrp","lib/Proxy")
vRP = Proxy.getInterface("vRP")
vRPclient = Tunnel.getInterface("vRP")
src = {}
Tunnel.bindInterface("vrp_teste",src)
vCLIENT = Tunnel.getInterface("vrp_teste")

RegisterServerEvent('teste')
AddEventHandler('teste', function()
  print("funcinou")
end)