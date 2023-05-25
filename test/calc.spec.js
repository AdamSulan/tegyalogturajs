describe('Sikertelen számítás tesztelés', () => {
    it('versenyzők: 100,célbaértek: 80 inputra: sikertelen: 20', () => {
        let act=getUnsuccessCount(100,80);
        expect(act).toBe(20);
    });
    it('versenyzők: 124,célbaértek: 72 inputra: sikertelen: 52', () => {
        let act=getUnsuccessCount(124,72);
        expect(act).toBe(52);
    });
    it('versenyzők: 72,célbaértek: 48 inputra: sikertelen: 24', () => {
        let act=getUnsuccessCount(72,48);
        expect(act).toBe(24);
    });
});
describe('Sikertelen százalék számítás tesztelés', () => {
    it('versenyzők: 100,célbaértek: 80 inputra: sikertelen százalék: 20', () => {
        let act=getUnsuccessPercent(100,getUnsuccessCount(100,80));
        expect(act).toBe(20);
    });
    it('versenyzők: 124,célbaértek: 72 inputra: sikertelen százalék: 41.935', () => {
        let act=getUnsuccessPercent(124,getUnsuccessCount(124,72));
        expect(act).toBeCloseTo(41.935,0.01);
    });
    it('versenyzők: 72,célbaértek: 48 inputra: sikertelen százalék: 33.333', () => {
        let act=getUnsuccessPercent(72,getUnsuccessCount(72,48));
        expect(act).toBeCloseTo(33.333,0.01);
    });
});