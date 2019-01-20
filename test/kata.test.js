const assert = require('assert');
const kata = require('../kata');
describe('The kata function', function() {
    it(
        'It should return the array of strings separated by commas',
        function() {
            assert.deepEqual(['1 for R3', ' 2 for R7', ' 3 for R10', ' 5 for R14.50'], kata.separateStringComma("1 for R3, 2 for R7, 3 for R10, 5 for R14.50"));
        });
    it(
        'It should return the array of object separated by for',
        function() {
            assert.deepEqual([{
                    Qty: '1 ',
                    Price: '3.00'
                },
                {
                    Qty: ' 2 ',
                    Price: '7.00'
                },
                {
                    Qty: ' 3 ',
                    Price: '10.00'
                },
                {
                    Qty: ' 5 ',
                    Price: '14.50'
                }
            ], kata.separateStringFor(['1 for R3', ' 2 for R7', ' 3 for R10', ' 5 for R14.50']));
        });
    it('It should return array of Price per avo', function() {
        assert.deepEqual(['3.00', '3.50', '3.33', '2.90'], kata.calculateDealPerAvo([{
                Qty: '1 ',
                Price: '3.00'
            },
            {
                Qty: ' 2 ',
                Price: '7.00'
            },
            {
                Qty: ' 3 ',
                Price: '10.00'
            },
            {
                Qty: ' 5 ',
                Price: '14.50'
            }
        ]))
    });
    it('It should return cheapest deal of avo', function() {
        assert.deepEqual(2.90, kata.findCheapestDeal(['3.00', '3.50', '2.90', '3.33']))
    });
    it('It should return expensive deal of avo', function() {
        assert.deepEqual('3.50', kata.findExpensiveDeal(['3.00', '3.50', '2.90', '3.33']))
    });
    it('It should return average across all deals of avo', function() {
        assert.deepEqual(2.75, kata.findAveragePrice(['3.00', '3.50', '2.90', '3.33']))
    });
});
