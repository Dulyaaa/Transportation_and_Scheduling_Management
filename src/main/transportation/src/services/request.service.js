import http from "../http-common";

class RequestDataService {
    getAll() {
        return http.get("/Requests");
    }

    get(id) {
        return http.get(`/Requests/${id}`);
    }

    create(data) {
        return http.post("/Requests", data);
    }

    update(id, data) {
        return http.put(`/Requests/${id}`, data);
    }

    delete(id) {
        return http.delete(`/Requests/${id}`);
    }

    deleteAll() {
        return http.delete(`/Requests`);
    }

    findByTitle(title) {
        return http.get(`/Requests?title=${title}`);
    }
}

export default new RequestDataService();