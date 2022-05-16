import { configDb } from '../config/db_connection.js';

export default class CategoryService {
    constructor() {
        this.knex = knex(configDb);
    }

    async categoryExists(categoryId) {
        return await this.knex
            .select('*')
            .from('categories')
            .where('category_id', categoryId);
    }
    async addCategory(category) {
        return await this.knex('categories').insert({
            category,
            created_at: new Date(),
        });
    }

    async removeCategory(param) {
        const result = await this.knex({
            inc: 'income',
            exp: 'expense',
            cat: 'categories',
        })
            .select(
                'cat.category_id',
                'cat.name',
                'inc.category_id',
                'exp.category_id'
            )
            .where('inc.category_id', param)
            .orWhere('exp.category_id', param);

        if (result.length > 0) {
            return result;
        }
        return await this.knex('categories').where('category_id', param).del();
    }

    /* category.category_id,
            category.name,
            income.category_id,
            expense.category_id, */
    /*         knex.select([
            'driverProfile.driverID',
            'driverProfile.dCarID',
            'driverProfile.dDeviceID',
            'carProfile.carRegiNum',
        ])
            .from('driverProfile')
            .innerJoin('carProfile', 'carProfile.carID', 'driverProfile.dCarID')
            .where('driverProfile.dManagerID', 7)
            .then(function (output) {
                //Deal with the output data here
            }); */
}
