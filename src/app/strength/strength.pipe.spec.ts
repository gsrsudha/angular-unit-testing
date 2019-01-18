import { StrengthPipe } from "./strength.pipe";

describe('strength pipe', () => {
    let sut;

    beforeEach(() => {
        sut = {}
    })

    it('should display weak if strength is 5', () => {
        //arrange
        let pipe = new StrengthPipe();

        //assert
        expect(pipe.transform(5)).toEqual('5 (weak)');
    })

    it('should display strong if strength is 10', () => {
        //arrange
        let pipe = new StrengthPipe();

        //assert
        expect(pipe.transform(10)).toEqual('10 (strong)');
    })
})