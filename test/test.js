const assert = require('assert');
const axios = require('axios');

describe('GET REQUEST', () => {
    it('Get all calories: status,data (amount prop)', async () => {
        const response = await axios.get('http://localhost:5000/api/get-calories');
        //check status
        assert.strictEqual(response.status, 200);
        //check amount
        assert.strictEqual(response.data[0].amount, '300');
    });

    it('Get one calorie: status,data (amount prop)', async () => {
        const result = await axios.get('http://localhost:5000/api/get-calories');
        let id = result.data[0]._id;
        const response = await axios.get(`http://localhost:5000/api/get-calorie/${id}`);
        //check status
        assert.strictEqual(response.status, 200);
        //check amount
        assert.strictEqual(response.data.amount, '300');
    });
});

describe('POST REQUEST', () => {
    it('Add a calorie: status,data (amount prop)', async () => {
        let mock = { amount: '2000' }
        const response = await axios.post('http://localhost:5000/api/add-calorie', mock);
        //check status
        assert.strictEqual(response.status, 200);
        //check amount
        assert.strictEqual(response.data.amount, mock.amount);
    });
});

describe('PUT REQUEST', () => {
    it('Update a calorie: status,data (amount prop)', async () => {
        let mock = { amount: '300' };
        const result = await axios.get('http://localhost:5000/api/get-calories');
        let id = result.data[result.data.length-1]._id;
        let amount = result.data[result.data.length-1].amount;
        const response = await axios.put(`http://localhost:5000/api/update-calorie/${id}`, mock);
        //check status
        assert.strictEqual(response.status, 200);
        //check amount
        assert.strictEqual(response.data.amount, mock.amount);
        assert.notStrictEqual(response.data.amount, amount);
    });
});

describe('DELETE REQUEST', () => {
    it('Delete a calorie: status', async () => {
        const result = await axios.get('http://localhost:5000/api/get-calories');
        let id = result.data[result.data.length-1]._id;
        const response = await axios.delete(`http://localhost:5000/api/delete-calorie/${id}`);
        //check status
        assert.strictEqual(response.status, 200);
    });
});