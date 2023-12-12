const config = {
    development: {
        base_url: process.env.NEXT_PUBLIC_DEVELOPMENT_URL || 'http://127.0.0.1:5000/api/',
    }, test: {
        base_url: process.env.NEXT_PUBLIC_TEST_URL || 'https://api.elanzacom.ir/',
    }, production: {
        base_url: process.env.NEXT_PUBLIC_PRODUCTION_URL ?? 'https://apilanding.elanza.com/',
    }
}


Object.freeze(config)

export default config[process.env.NEXT_PUBLIC_ENV]