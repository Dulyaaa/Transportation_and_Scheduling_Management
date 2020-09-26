import http from "../http-common";

class TutorialDataService {
  getAll() {
    return http.get("/Vehicles");
  }

  get(id) {
    return http.get(`/Vehicles/${id}`);
  }

  create(data) {
    return http.post("/Vehicles", data);
  }

  update(id, data) {
    return http.put(`/Vehicles/${id}`, data);
  }

  delete(id) {
    return http.delete(`/Vehicles/${id}`);
  }

  deleteAll() {
    return http.delete(`/Vehicles`);
  }

  findByTitle(title) {
    return http.get(`/Vehicles?title=${title}`);
  }
}

export default new TutorialDataService();