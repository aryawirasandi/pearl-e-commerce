export default interface IUseCase<P = any, R = any> {
    execute(param?: P): R
}