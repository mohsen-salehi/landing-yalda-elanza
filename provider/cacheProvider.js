class CacheProvider {
    static set = (key, value, time = new Date()) => {
        let data = {
            value,
            time
        }
        localStorage.setItem(key , JSON.stringify(data))
    }

    static get = (key) => {
        const data = localStorage.getItem(key)
        return JSON.parse(data)
    }

    static clear = (key) => {
        return localStorage.removeItem(key)
    }


    static clearAll = () => {
        return localStorage.clear()
    }


    static exists = (key) => {
        return !!localStorage.getItem(key)

    }

}

export default CacheProvider
