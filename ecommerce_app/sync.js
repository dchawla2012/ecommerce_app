const { sequelize } = require('./models');

async function syncDB() {
    try {
        await sequelize.sync({ force: true });
        console.log('Database synced!');
    } catch (error) {
        console.error('Error syncing database:', error);
    } finally {
        await sequelize.close();
    }
}

syncDB();