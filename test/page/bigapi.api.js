import BaseAPI from '$root/page/base.api.js';

const BigAPI = {
    CreateToken: (data) => BaseAPI.post('/auth', data),
    GetBookingIds: () => BaseAPI.get('/booking'),
    GetBookingIdsName: (firstname, lastname) => BaseAPI.get(`/booking${firstname && lastname ? `?firstname=${firstname}&lastname=${lastname}`: ``}`), 
    GetBookingIdsDate: (checkin, checkout) => BaseAPI.get(`/booking${checkin && checkout ? `?firstname=${checkin}&lastname=${checkout}`: ``}`),
    // GetBooking: (param) => BaseAPI.get(`/booking/${param}`),
    // CreateBooking: (data) => BaseAPI.post('/booking', data),
    // UpdateBooking: (param) => BaseAPI.put(`/booking/${param}`),
    // PartialUpdateBooking: (param) => BaseAPI.patch(`/booking/${param}`),
    // DeleteBooking: (param) => BaseAPI.get(`/booking/${param}`),
    HealthCheck: () => BaseAPI.get('/ping'),
}

export default BigAPI;