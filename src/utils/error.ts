class CoffeeNotFound extends Error {
    status: number
    constructor(message: string, status: number) {
        super(message)
        Error.captureStackTrace(this, this.constructor);

        this.name = this.constructor.name
        this.status = status
    }

    statusCode() {
        return this.status
    }
}
export default CoffeeNotFound