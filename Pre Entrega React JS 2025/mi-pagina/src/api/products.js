// Funciones para consumir la API (puedes cambiar la URL por la de tu backend)
const BASE = 'https://fakestoreapi.com'


export async function fetchProducts() {
const res = await fetch(`${BASE}/products`)
if (!res.ok) throw new Error('Error al traer productos')
return res.json()
}


export async function fetchProductById(id) {
const res = await fetch(`${BASE}/products/${id}`)
if (!res.ok) throw new Error('Error al traer producto')
return res.json()
}