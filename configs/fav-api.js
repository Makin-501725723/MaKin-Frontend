export const API_SERVER = 'https://makin-music-backend.vercel.app/api'

export const addFavorite = async (eventId) => {
  try {
    const response = await fetch(`${API_SERVER}/favorite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ eventId }),
      credentials: 'include',
    })
    const data = await response.json()
    console.log(data)
    return data
  } catch (error) {
    console.error('無法加入收藏', error)
    throw error
  }
}

export const removeFavorite = async (eventId) => {
  try {
    const response = await fetch(`${API_SERVER}/favorite`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ eventId }),
      credentials: 'include',
    })
    const data = await response.json()
    console.log(data)
    return data
  } catch (error) {
    console.error('無法取消收藏', error)
    throw error
  }
}

export const getFavorites = async () => {
  try {
    const response = await fetch(`${API_SERVER}/favorite`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })
    const data = await response.json()
    return data
  } catch (error) {
    console.error('無法獲取收藏', error)
    throw error
  }
}
