import { configDb } from '../config/db_connection.js';

export default class CategoryService {
    constructor() {
        this.knex = knex(configDb);
    }
    async categoryExists(category) {}
    async addCategory(category) {}
    async removeCategory(category) {}
}
