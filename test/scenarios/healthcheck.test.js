import { assert } from "chai";
import BigAPI from "$root/page/bigapi.api.js";

describe('Healtcheck', function() {
    it('Should successful get health check endpoint to confirm whether the API is up and running.', async() => {
        const response = await BigAPI.HealthCheck();

        assert.equal(response.status, 201);
        assert.containsAllKeys(response.data, ["Created"]);
        assert.isNumber(response.data.Created);
    });
});
