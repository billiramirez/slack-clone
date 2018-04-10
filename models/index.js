
import  Sequelize from 'sequelize';
const sequelize = new Sequelize('slack', 'postgres', 'root');

const models = {
    user: sequelize.import('./user.js'),
    channel: sequelize.import('./channel.js'),
    //member: sequelize.import('./member.js'),
    message: sequelize.import('./message.js'),
    team: sequelize.import('./team.js'),
    
    
};  



Object.keys(models).forEach(modelName => {
    if ('associate' in models[modelName]) {
        models[modelName].associate(models);
    }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

export default models;