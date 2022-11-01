import BaseAPI from '$root/page/base.api.js';

const BigAPI = {
    CreateToken: (data) => BaseAPI.post('/auth', data),
    // GetBookingIds: (data) => BaseAPI.get('/booking', data), 
    // GetBooking: (param) => BaseAPI.get(`/booking/${param}`),
    // CreateBooking: (data) => BaseAPI.post('/booking', data),
    // UpdateBooking: (param) => BaseAPI.put(`/booking/${param}`),
    // PartialUpdateBooking: (param) => BaseAPI.patch(`/booking/${param}`),
    // DeleteBooking: (param) => BaseAPI.get(`/booking/${param}`),
    // HealthCheck: (data) => BaseAPI.get('/ping', data),
}

export default BigAPI;