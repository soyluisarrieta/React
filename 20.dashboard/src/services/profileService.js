import { axiosPrivate } from '../lib/axios/axiosClient'

export const updateProfileService = async (userProfile) => {
  const response = await axiosPrivate.put('/api/profile', userProfile)
  return response.data
}

export const updateAvatarService = async (image) => {
  const formData = new FormData()
  formData.append('_method', 'PUT')
  formData.append('avatar', image)
  const response = await axiosPrivate.post('/api/profile/avatar', formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  })
  return response.data
}

export const updateGenderService = async (gender) => {
  const response = await axiosPrivate.put('/api/profile/gender', { gender })
  return response.data
}
