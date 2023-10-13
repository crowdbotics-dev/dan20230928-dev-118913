import axios from "axios"
const pluginWithUniqueId = axios.create({
  baseURL: "https://api.com/api",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function PluginWithUniqueId_get_test_list(payload) {
  return pluginWithUniqueId.get(`/test`)
}
export const apiService = { PluginWithUniqueId_get_test_list }
