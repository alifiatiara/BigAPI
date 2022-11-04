import { assert } from "chai";
import BigAPI from "$root/page/bigapi.api.js";
import * as data from "$root/data/token.data.js";

describe('GetBookingIds', function() {
    it('Should successful get booking ids when use valid token', async() => {
        const response = await BigAPI.GetBookingIds();
        
        assert.equal(response.status, 200);
        assert.containsAllKeys(response.data[0], ["bookingid"]);
        assert.isNumber(response.data[0].bookingid);
    });
});

describe('GetBookingIdsName', function() {
    it('Should successful get booking ids when use valid firstname and lastname', async() => {
        const response = await BigAPI.GetBookingIdsName(data.USER_DATA);
    
        assert.equal(response.status, 200);
        assert.containsAllKeys(response.data[0], ["bookingid"]);
        assert.isNumber(response.data[0].bookingid);
    });
});

describe('GetBookingIdsDate', function() {
    it('Should successful get booking ids when use valid checkin and checkout', async() => {
        const response = await BigAPI.GetBookingIdsDate(data.USER_DATA);

        assert.equal(response.status, 200);
        assert.containsAllKeys(response.data[0], ["bookingid"]);
        assert.isNumber(response.data[0].bookingid);
    });
});