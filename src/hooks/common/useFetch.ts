import { axios, axiosMock, CmdError } from '@/apis/axios'
import { handleError } from '@/utils/handlerError'

export const useFetch = (isMock: boolean = false) => {
  const request = isMock ? axiosMock : axios
  const get = <P, D>(url: string) => {
    const data = ref<D | undefined>()
    const loading = ref<boolean>(false)
    const error = ref<CmdError>()
    const run = async (params?: P) => {
      loading.value = true
      try {
        const res = await request.get(url, { params })
        data.value = res.data
      } catch (err: any) {
        error.value = err
        handleError(err)
        console.error(err)
      } finally {
        loading.value = false
      }
    }
    return {
      data,
      run,
      loading,
      error
    }
  }
  const post = <D>(url: string) => {
    const data = ref<D | undefined>()
    const loading = ref<boolean>(false)
    const error = ref<CmdError>()
    const run = async (params?: Record<string, unknown>) => {
      loading.value = true
      try {
        const res = await request.post(url, params)
        data.value = res.data.data
      } catch (err: any) {
        error.value = err
        handleError(err)
        console.error(err)
      } finally {
        loading.value = false
      }
    }
    return {
      data,
      run,
      loading,
      error
    }
  }
  const put = <D>(url: string) => {
    const data = ref<D | undefined>()
    const loading = ref<boolean>(false)
    const error = ref<CmdError>()
    const run = async (params?: Record<string, unknown>) => {
      loading.value = true
      try {
        const res = await request.put(url, params)
        data.value = res.data.data
      } catch (err: any) {
        error.value = err
        handleError(err)
        console.error(err)
      } finally {
        loading.value = false
      }
    }
    return {
      data,
      run,
      loading,
      error
    }
  }
  const patch = <D>(url: string) => {
    const data = ref<D | undefined>()
    const loading = ref<boolean>(false)
    const error = ref<CmdError>()
    const run = async (params?: Record<string, unknown>) => {
      loading.value = true
      try {
        const res = await request.patch(url, params)
        data.value = res.data.data
      } catch (err: any) {
        error.value = err
        handleError(err)
        console.error(err)
      } finally {
        loading.value = false
      }
    }
    return {
      data,
      run,
      loading,
      error
    }
  }
  const del = <D>(url: string) => {
    const data = ref<D | undefined>()
    const loading = ref<boolean>(false)
    const error = ref<CmdError>()
    const run = async (params?: Record<string, unknown>) => {
      loading.value = true
      try {
        const res = await request.delete(url, { params })
        data.value = res.data.data
      } catch (err: any) {
        error.value = err
        handleError(err)
        console.error(err)
      } finally {
        loading.value = false
      }
    }
    return {
      data,
      run,
      loading,
      error
    }
  }
  return {
    get,
    post,
    put,
    patch,
    del
  }
}
