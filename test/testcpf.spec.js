const { assert } = require('chai');
const cpfValidator = require('../index');

describe('Retorna true or false para validar CPF', () => {
    describe('CPF válidos:', () => {
      it('97240863131', () => {
        assert.equal(cpfValidator('97240863131'), true);
      });
      it('01696737079', () => {
        assert.equal(cpfValidator('01696737079'), true);
      });
      it('12345678909', () => {
        assert.equal(cpfValidator('12345678909'), true);
      });
      it('82367085005', () => {
        assert.equal(cpfValidator('82367085005'), true);
      });
      it('36161186039', () => {
        assert.equal(cpfValidator('36161186039'), true);
      });
      it('12345678909', () => {
        assert.equal(cpfValidator('12345678909'), true);
      });
      it('97509998000', () => {
        assert.equal(cpfValidator('97509998000'), true);
      });
    });


    describe('Cartões inválidos:', () => {
      it('Vazio', () => {
        assert.equal(cpfValidator(''), false);
      });
      it('CPF inválido - 01696737078', () => {
        assert.equal(cpfValidator('01696737078'), false);
      });
      it('CPF com 10 digitos - 0169673707', () => {
        assert.equal(cpfValidator('0169673707'), false);
      });
      it('CPF válido com espaço no início - 01696737079', () => {
        assert.equal(cpfValidator(' 01696737079'), false);
      });
      it('CPF válido com espaço no início - 01696737011', () => {
        assert.equal(cpfValidator(' 01696737011'), false);
      });
      it('CPF válido com espaço no fim 01696737079 ', () => {
        assert.equal(cpfValidator('01696737079 '), false);
      });
      it('CPF válido com espaço no meio 016967 37079', () => {
        assert.equal(cpfValidator('016967 37079'), false);
      });
      it('CPF válido com letras 01696737079a', () => {
        assert.equal(cpfValidator('01696737079a'), false);
      });
      it('CPF inválido 0169673707ba', () => {
        assert.equal(cpfValidator('016967370ba'), false);
      });
      it('Números inválidos - 0000111122223333', () => {
        assert.equal(cpfValidator('0000111122223333'), false);
      });
      it('Números inválidos - 00000000000', () => {
        assert.equal(cpfValidator('00000000000'), false);
      });
      it('Letras - divirta-se', () => {
        assert.equal(cpfValidator('divirta-se'), false);
      });
    });
  });
  