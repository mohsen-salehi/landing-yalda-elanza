import ToastComponent from "../component/toastComponent";
import messages from "../component/langs/fa/messages";


class ExceptionProvider {
    static handle(exception, statusCode, message = '') {
        switch (statusCode) {
            case 422 :
                return ExceptionProvider.validation(exception)
            case 404 :
                return ExceptionProvider.notFound()
            case 405 :
                return ExceptionProvider.notAllowed(exception)
            case 403 :
                return ExceptionProvider.accessDenied(exception)
            case 500 :
                return ExceptionProvider.serverError(exception)
            default :
                return ExceptionProvider.general(message)
        }
    }

    static validation(exception) {
        let validationErrors = exception?.response?.data?.messages
        let messages = []

        if (validationErrors) {

            messages.push({
                message: validationErrors
            })

            ToastComponent(validationErrors, "error")

        }
        return messages
    }

    static notFound() {
        ToastComponent(messages.api.notFound, 'error')
    }

    static notAllowed() {
        ToastComponent(messages.api.notAllowed, 'error')
    }

    static accessDenied() {
        ToastComponent(messages.api.accessDenied, 'error')
    }

    static serverError() {
        ToastComponent(messages.api.serverError, 'error')
    }

    static general(message) {
         ToastComponent(message ?? messages.api.serverError, 'error')
    }

}

Object.freeze(ExceptionProvider)

export default ExceptionProvider