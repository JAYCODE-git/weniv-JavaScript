// 테스트할 함수들의 모음
describe('Jasmin Test Group', () => {

    // it 함수는 함수 테스트 유닛. 첫번째 인자는 테스트 설명, 두번째 인자는 테스트 함수.
    it('인자를 전달하면 1을 더해주는 함수', () => {
        let num = 20;

        // expect 함수는 테스트 결과를 검증하는 함수.
        // toBe 함수는 expect 함수의 반환값과 인자로 전달된 값이 일치하는지 검증하는 함수.
        expect(plusOne(num)).toBe(num + 1);
    })
})