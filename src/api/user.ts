import {axios} from '@/utils/axios'

interface UserHiResponse {
    message: string
    react ?: string
    vew ?: string
}

export async function userHi ():Promise<UserHiResponse> {
    return axios.get('/user/hi')
}

