import { assert } from "chai";
import BigAPI from "$root/page/bigapi.api.js";
import * as data from "$root/data/token.data.js";

describe('CreateToken', function() {
    it('Should successful create token when input valid data', async() => {
        const response = await BigAPI.CreateToken(data.VALID_CREATE_TOKEN);

        assert.equal(response.status, 200);
        assert.containsAllKeys(response.data, ["token"]);
        assert.isString(response.data.token);
    });
});